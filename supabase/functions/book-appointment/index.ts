Deno.serve(async (req) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE, PATCH',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Credentials': 'false'
    };

    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers: corsHeaders });
    }

    try {
        const appointmentData = await req.json();
        console.log('Processing appointment booking:', appointmentData);

        // Validate required fields
        const requiredFields = ['service_type', 'preferred_date', 'preferred_time', 'patient_name', 'patient_email', 'patient_phone'];
        for (const field of requiredFields) {
            if (!appointmentData[field]) {
                throw new Error(`${field} is required`);
            }
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(appointmentData.patient_email)) {
            throw new Error('Invalid email format');
        }

        // Validate date format (YYYY-MM-DD)
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(appointmentData.preferred_date)) {
            throw new Error('Invalid date format. Use YYYY-MM-DD');
        }

        // Validate time format (HH:MM)
        const timeRegex = /^\d{2}:\d{2}$/;
        if (!timeRegex.test(appointmentData.preferred_time)) {
            throw new Error('Invalid time format. Use HH:MM');
        }

        // Check if the preferred date is not in the past
        const preferredDate = new Date(appointmentData.preferred_date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (preferredDate < today) {
            throw new Error('Appointment date cannot be in the past');
        }

        // Get environment variables
        const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
        const supabaseUrl = Deno.env.get('SUPABASE_URL');

        if (!serviceRoleKey || !supabaseUrl) {
            throw new Error('Supabase configuration missing');
        }

        // Get user information if authenticated
        let patient_id = null;
        const authHeader = req.headers.get('authorization');
        
        if (authHeader) {
            try {
                const token = authHeader.replace('Bearer ', '');
                const userResponse = await fetch(`${supabaseUrl}/auth/v1/user`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'apikey': serviceRoleKey
                    }
                });
                
                if (userResponse.ok) {
                    const userData = await userResponse.json();
                    patient_id = userData.id;
                    console.log('Authenticated user booking:', patient_id);
                }
            } catch (error) {
                console.log('Could not authenticate user, proceeding as guest:', error.message);
            }
        }

        // Check for duplicate appointments (same email, date, time, service)
        const duplicateCheckResponse = await fetch(
            `${supabaseUrl}/rest/v1/appointments?patient_email=eq.${appointmentData.patient_email}&preferred_date=eq.${appointmentData.preferred_date}&preferred_time=eq.${appointmentData.preferred_time}&service_type=eq.${appointmentData.service_type}&status=neq.cancelled`,
            {
                headers: {
                    'Authorization': `Bearer ${serviceRoleKey}`,
                    'apikey': serviceRoleKey,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (duplicateCheckResponse.ok) {
            const duplicateAppointments = await duplicateCheckResponse.json();
            if (duplicateAppointments.length > 0) {
                throw new Error('You already have an appointment booked for this date, time, and service');
            }
        }

        // Check appointment availability (max appointments per time slot)
        const timeSlotCheckResponse = await fetch(
            `${supabaseUrl}/rest/v1/appointments?preferred_date=eq.${appointmentData.preferred_date}&preferred_time=eq.${appointmentData.preferred_time}&status=neq.cancelled`,
            {
                headers: {
                    'Authorization': `Bearer ${serviceRoleKey}`,
                    'apikey': serviceRoleKey,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (timeSlotCheckResponse.ok) {
            const existingAppointments = await timeSlotCheckResponse.json();
            if (existingAppointments.length >= 3) { // Maximum 3 appointments per time slot
                throw new Error('This time slot is fully booked. Please select another time.');
            }
        }

        // Prepare appointment data
        const finalAppointmentData = {
            patient_id: patient_id,
            service_type: appointmentData.service_type,
            service_category: appointmentData.service_category || null,
            preferred_date: appointmentData.preferred_date,
            preferred_time: appointmentData.preferred_time,
            alternative_dates: appointmentData.alternative_dates || null,
            status: 'pending',
            notes: appointmentData.notes || null,
            patient_name: appointmentData.patient_name.trim(),
            patient_email: appointmentData.patient_email.trim().toLowerCase(),
            patient_phone: appointmentData.patient_phone.trim(),
            emergency_contact: appointmentData.emergency_contact || null,
            medical_history: appointmentData.medical_history || null,
            insurance_provider: appointmentData.insurance_provider || null,
            insurance_number: appointmentData.insurance_number || null,
            confirmation_sent: false,
            reminder_sent: false,
            created_at: new Date().toISOString()
        };

        console.log('Creating appointment with data:', finalAppointmentData);

        // Create the appointment
        const createAppointmentResponse = await fetch(`${supabaseUrl}/rest/v1/appointments`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(finalAppointmentData)
        });

        if (!createAppointmentResponse.ok) {
            const errorText = await createAppointmentResponse.text();
            console.error('Failed to create appointment:', errorText);
            throw new Error(`Failed to create appointment: ${errorText}`);
        }

        const createdAppointment = await createAppointmentResponse.json();
        console.log('Appointment created successfully:', createdAppointment[0]);

        // Create notification for admins about new appointment
        const notificationData = {
            title: 'Nueva cita solicitada',
            message: `${appointmentData.patient_name} ha solicitado una cita para ${appointmentData.service_type} el ${appointmentData.preferred_date} a las ${appointmentData.preferred_time}`,
            type: 'info',
            category: 'appointment',
            priority: 'high',
            properties: {
                appointment_id: createdAppointment[0].id,
                patient_email: appointmentData.patient_email,
                patient_name: appointmentData.patient_name,
                service_type: appointmentData.service_type,
                preferred_date: appointmentData.preferred_date,
                preferred_time: appointmentData.preferred_time
            },
            action_url: `/admin/appointments/${createdAppointment[0].id}`,
            action_text: 'Ver cita',
            created_at: new Date().toISOString()
        };

        // Get all admin users to notify them
        const adminUsersResponse = await fetch(`${supabaseUrl}/rest/v1/profiles?role=eq.admin&select=id`, {
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json'
            }
        });

        if (adminUsersResponse.ok) {
            const adminUsers = await adminUsersResponse.json();
            
            // Create notifications for each admin
            for (const admin of adminUsers) {
                const adminNotificationData = {
                    ...notificationData,
                    user_id: admin.id
                };

                await fetch(`${supabaseUrl}/rest/v1/notifications`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${serviceRoleKey}`,
                        'apikey': serviceRoleKey,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(adminNotificationData)
                });
            }
        }

        // Create notification for patient if they are registered
        if (patient_id) {
            const patientNotificationData = {
                user_id: patient_id,
                title: 'Cita solicitada exitosamente',
                message: `Tu cita para ${appointmentData.service_type} el ${appointmentData.preferred_date} a las ${appointmentData.preferred_time} ha sido enviada. Te confirmaremos pronto.`,
                type: 'success',
                category: 'appointment',
                priority: 'normal',
                action_url: '/appointments',
                action_text: 'Ver mis citas',
                created_at: new Date().toISOString()
            };

            await fetch(`${supabaseUrl}/rest/v1/notifications`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${serviceRoleKey}`,
                    'apikey': serviceRoleKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(patientNotificationData)
            });
        }

        const result = {
            data: {
                appointment: createdAppointment[0],
                message: 'Appointment booked successfully! We will confirm your appointment soon.',
                status: 'success',
                confirmation_number: createdAppointment[0].id.slice(-8).toUpperCase()
            }
        };

        console.log('Appointment booking completed successfully');

        return new Response(JSON.stringify(result), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Appointment booking error:', error);

        const errorResponse = {
            error: {
                code: 'APPOINTMENT_BOOKING_FAILED',
                message: error.message,
                timestamp: new Date().toISOString()
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});
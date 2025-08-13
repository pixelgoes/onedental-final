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
        const { name, email, phone, subject, message } = await req.json();

        console.log('Processing contact form submission:', { name, email, subject });

        // Validate required fields
        if (!name || !email || !message) {
            throw new Error('Name, email, and message are required fields');
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Invalid email format');
        }

        // Get environment variables
        const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
        const supabaseUrl = Deno.env.get('SUPABASE_URL');

        if (!serviceRoleKey || !supabaseUrl) {
            throw new Error('Supabase configuration missing');
        }

        // Determine priority based on subject or content
        let priority = 'medium';
        const urgentKeywords = ['urgente', 'emergencia', 'dolor', 'emergency', 'urgent', 'pain'];
        const highPriorityKeywords = ['cita urgente', 'appointment', 'consulta', 'treatment'];
        
        const contentToCheck = `${subject || ''} ${message}`.toLowerCase();
        
        if (urgentKeywords.some(keyword => contentToCheck.includes(keyword))) {
            priority = 'urgent';
        } else if (highPriorityKeywords.some(keyword => contentToCheck.includes(keyword))) {
            priority = 'high';
        }

        // Create contact submission
        const submissionData = {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone?.trim() || null,
            subject: subject?.trim() || null,
            message: message.trim(),
            status: 'new',
            priority: priority,
            created_at: new Date().toISOString()
        };

        console.log('Creating contact submission with data:', submissionData);

        const createSubmissionResponse = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(submissionData)
        });

        if (!createSubmissionResponse.ok) {
            const errorText = await createSubmissionResponse.text();
            console.error('Failed to create contact submission:', errorText);
            throw new Error(`Failed to create contact submission: ${errorText}`);
        }

        const createdSubmission = await createSubmissionResponse.json();
        console.log('Contact submission created successfully:', createdSubmission[0]);

        // Create notification for admins about new contact submission
        const notificationData = {
            title: 'Nuevo mensaje de contacto',
            message: `${name} (${email}) ha enviado un mensaje: "${subject || 'Sin asunto'}"`,
            type: 'info',
            category: 'contact',
            priority: priority,
            properties: {
                contact_submission_id: createdSubmission[0].id,
                sender_email: email,
                sender_name: name
            },
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

        const result = {
            data: {
                submission: createdSubmission[0],
                message: 'Your message has been sent successfully. We will get back to you soon!',
                status: 'success'
            }
        };

        console.log('Contact form submission completed successfully');

        return new Response(JSON.stringify(result), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Contact form submission error:', error);

        const errorResponse = {
            error: {
                code: 'CONTACT_SUBMISSION_FAILED',
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
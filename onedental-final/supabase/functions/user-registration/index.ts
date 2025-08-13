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
        const { email, password, full_name, phone, referral_code } = await req.json();

        console.log('Processing user registration:', { email, full_name, referral_code });

        // Validate required fields
        if (!email || !password) {
            throw new Error('Email and password are required');
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Invalid email format');
        }

        // Validate password strength
        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters long');
        }

        // Get environment variables
        const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
        const supabaseUrl = Deno.env.get('SUPABASE_URL');

        if (!serviceRoleKey || !supabaseUrl) {
            throw new Error('Supabase configuration missing');
        }

        // Check if user already exists
        const existingUserResponse = await fetch(`${supabaseUrl}/rest/v1/profiles?email=eq.${email}`, {
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json'
            }
        });

        if (existingUserResponse.ok) {
            const existingUsers = await existingUserResponse.json();
            if (existingUsers.length > 0) {
                throw new Error('A user with this email already exists');
            }
        }

        // Validate referral code if provided
        let referralData = null;
        if (referral_code) {
            const referralResponse = await fetch(`${supabaseUrl}/rest/v1/referrals?referral_code=eq.${referral_code}&status=eq.pending`, {
                headers: {
                    'Authorization': `Bearer ${serviceRoleKey}`,
                    'apikey': serviceRoleKey,
                    'Content-Type': 'application/json'
                }
            });

            if (referralResponse.ok) {
                const referrals = await referralResponse.json();
                if (referrals.length > 0) {
                    referralData = referrals[0];
                    
                    // Check if referral is not expired
                    const expiresAt = new Date(referralData.expires_at);
                    if (expiresAt < new Date()) {
                        throw new Error('This referral code has expired');
                    }
                    
                    // Check if referral email matches
                    if (referralData.referee_email !== email) {
                        throw new Error('This referral code is not valid for your email address');
                    }
                } else {
                    throw new Error('Invalid or expired referral code');
                }
            }
        }

        // Create user account with Supabase Auth
        const signUpResponse = await fetch(`${supabaseUrl}/auth/v1/signup`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                email_confirm: true // Auto-confirm for admin registration
            })
        });

        if (!signUpResponse.ok) {
            const errorData = await signUpResponse.json();
            console.error('Supabase signup error:', errorData);
            throw new Error(errorData.error_description || 'Failed to create user account');
        }

        const userData = await signUpResponse.json();
        console.log('User created successfully:', userData.user.id);

        // Create user profile
        const profileData = {
            id: userData.user.id,
            email: email.toLowerCase().trim(),
            full_name: full_name?.trim() || '',
            phone: phone?.trim() || '',
            role: 'patient',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };

        const createProfileResponse = await fetch(`${supabaseUrl}/rest/v1/profiles`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(profileData)
        });

        if (!createProfileResponse.ok) {
            const errorText = await createProfileResponse.text();
            console.error('Failed to create profile:', errorText);
            throw new Error(`Failed to create user profile: ${errorText}`);
        }

        const createdProfile = await createProfileResponse.json();
        console.log('Profile created successfully:', createdProfile[0]);

        // Handle referral completion if applicable
        if (referralData) {
            // Update referral status
            const updateReferralResponse = await fetch(`${supabaseUrl}/rest/v1/referrals?id=eq.${referralData.id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${serviceRoleKey}`,
                    'apikey': serviceRoleKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: 'completed',
                    referee_id: userData.user.id,
                    completed_at: new Date().toISOString()
                })
            });

            if (updateReferralResponse.ok) {
                console.log('Referral completed successfully');

                // Create notification for referrer
                const referrerNotificationData = {
                    user_id: referralData.referrer_id,
                    title: '¡Referido completado!',
                    message: `Tu referido ${email} se ha registrado exitosamente. Tu recompensa de €${referralData.reward_amount} está disponible.`,
                    type: 'success',
                    category: 'referral',
                    priority: 'normal',
                    action_url: '/referrals',
                    action_text: 'Ver referidos',
                    created_at: new Date().toISOString()
                };

                await fetch(`${supabaseUrl}/rest/v1/notifications`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${serviceRoleKey}`,
                        'apikey': serviceRoleKey,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(referrerNotificationData)
                });

                // Create notification for referee
                const refereeNotificationData = {
                    user_id: userData.user.id,
                    title: '¡Bienvenido a One Dental!',
                    message: 'Te has registrado exitosamente a través de un referido. ¡Disfruta de nuestros servicios!',
                    type: 'success',
                    category: 'welcome',
                    priority: 'normal',
                    action_url: '/services',
                    action_text: 'Ver servicios',
                    created_at: new Date().toISOString()
                };

                await fetch(`${supabaseUrl}/rest/v1/notifications`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${serviceRoleKey}`,
                        'apikey': serviceRoleKey,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(refereeNotificationData)
                });
            }
        } else {
            // Create welcome notification for regular users
            const welcomeNotificationData = {
                user_id: userData.user.id,
                title: '¡Bienvenido a One Dental!',
                message: 'Tu cuenta ha sido creada exitosamente. Explora nuestros servicios y reserva tu primera cita.',
                type: 'success',
                category: 'welcome',
                priority: 'normal',
                action_url: '/services',
                action_text: 'Ver servicios',
                created_at: new Date().toISOString()
            };

            await fetch(`${supabaseUrl}/rest/v1/notifications`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${serviceRoleKey}`,
                    'apikey': serviceRoleKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(welcomeNotificationData)
            });
        }

        const result = {
            data: {
                user: userData.user,
                profile: createdProfile[0],
                message: 'Registration successful! Please check your email to confirm your account.',
                status: 'success',
                referral_completed: !!referralData
            }
        };

        console.log('User registration completed successfully');

        return new Response(JSON.stringify(result), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('User registration error:', error);

        const errorResponse = {
            error: {
                code: 'REGISTRATION_FAILED',
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
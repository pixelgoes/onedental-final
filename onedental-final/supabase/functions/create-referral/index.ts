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
        const { referree_email, referrer_id } = await req.json();

        console.log('Creating referral for:', { referree_email, referrer_id });

        // Validate required parameters
        if (!referree_email || !referrer_id) {
            throw new Error('Referee email and referrer ID are required');
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(referree_email)) {
            throw new Error('Invalid email format');
        }

        // Get environment variables
        const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
        const supabaseUrl = Deno.env.get('SUPABASE_URL');

        if (!serviceRoleKey || !supabaseUrl) {
            throw new Error('Supabase configuration missing');
        }

        // Generate unique referral code
        const generateReferralCode = () => {
            return 'REF' + Math.floor(Math.random() * 999999).toString().padStart(6, '0');
        };

        let referralCode = generateReferralCode();
        let codeExists = true;
        let attempts = 0;
        const maxAttempts = 10;

        // Ensure referral code is unique
        while (codeExists && attempts < maxAttempts) {
            const checkResponse = await fetch(`${supabaseUrl}/rest/v1/referrals?referral_code=eq.${referralCode}&select=id`, {
                headers: {
                    'Authorization': `Bearer ${serviceRoleKey}`,
                    'apikey': serviceRoleKey,
                    'Content-Type': 'application/json'
                }
            });

            if (checkResponse.ok) {
                const existing = await checkResponse.json();
                if (existing.length === 0) {
                    codeExists = false;
                } else {
                    referralCode = generateReferralCode();
                    attempts++;
                }
            } else {
                throw new Error('Failed to check referral code uniqueness');
            }
        }

        if (codeExists) {
            throw new Error('Unable to generate unique referral code');
        }

        // Check if referree email already has an active referral
        const existingReferralResponse = await fetch(`${supabaseUrl}/rest/v1/referrals?referee_email=eq.${referree_email}&status=eq.pending`, {
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json'
            }
        });

        if (existingReferralResponse.ok) {
            const existingReferrals = await existingReferralResponse.json();
            if (existingReferrals.length > 0) {
                throw new Error('This email already has a pending referral');
            }
        }

        // Check if referee email is already registered
        const registeredUserResponse = await fetch(`${supabaseUrl}/rest/v1/profiles?email=eq.${referree_email}`, {
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json'
            }
        });

        if (registeredUserResponse.ok) {
            const registeredUsers = await registeredUserResponse.json();
            if (registeredUsers.length > 0) {
                throw new Error('This email is already registered in the system');
            }
        }

        // Create the referral
        const referralData = {
            referrer_id: referrer_id,
            referee_email: referree_email,
            referral_code: referralCode,
            status: 'pending',
            reward_amount: 50.00,
            expires_at: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString() // 90 days from now
        };

        console.log('Creating referral with data:', referralData);

        const createReferralResponse = await fetch(`${supabaseUrl}/rest/v1/referrals`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(referralData)
        });

        if (!createReferralResponse.ok) {
            const errorText = await createReferralResponse.text();
            console.error('Failed to create referral:', errorText);
            throw new Error(`Failed to create referral: ${errorText}`);
        }

        const createdReferral = await createReferralResponse.json();
        console.log('Referral created successfully:', createdReferral[0]);

        // Get referrer information for response
        const referrerResponse = await fetch(`${supabaseUrl}/rest/v1/profiles?id=eq.${referrer_id}&select=full_name,email`, {
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json'
            }
        });

        let referrerInfo = null;
        if (referrerResponse.ok) {
            const referrerData = await referrerResponse.json();
            if (referrerData.length > 0) {
                referrerInfo = referrerData[0];
            }
        }

        const result = {
            data: {
                referral: createdReferral[0],
                referral_url: `${req.headers.get('origin') || 'https://onedental.es'}/register?ref=${referralCode}`,
                referrer: referrerInfo
            }
        };

        console.log('Referral creation completed successfully');

        return new Response(JSON.stringify(result), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Referral creation error:', error);

        const errorResponse = {
            error: {
                code: 'REFERRAL_CREATION_FAILED',
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
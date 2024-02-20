import { PUBLIC_SITE_URL } from '$env/static/public';
import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
// import type { Actions } from './$types';

export const load = async ({ locals: { getSession } }) => {
    const session = await getSession();
    console.log('session from auth is:', session)
    if (session?.user) {
        throw redirect(303, '/app-main');
    }
};

export const actions = {
    signin: async ({ request, locals: { supabase } }) => {
        const form_data = await request.formData();
        const email = form_data.get('email');
        const password = form_data.get('password');
        const to = form_data.get('to');
        console.log(to)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            if (error instanceof AuthApiError && error.status === 400) {
                return fail(400, {
                    error: error.message,
                    values: {
                        email
                    }
                });
            }
            return fail(500, {
                error: 'Server error. Try again later.',
                values: {
                    email
                }
            });
        }

        if (to) {
            throw redirect(303, to);
        } else {
            throw redirect(303, '/app-main');
        }
    },

    signup: async ({ request, locals: { supabase } }) => {
        const form_data = await request.formData();
        const email = form_data.get('email');
        const password = form_data.get('password');

        const { error } = await supabase.auth.signUp({
            email,
            password
        });

        if (error) {
            if (error instanceof AuthApiError) {
                return fail(400, {
                    error: error.message,
                    values: {
                        email
                    }
                });
            }
            return fail(500, {
                error: 'Server error. Try again later.'
            });
        } else {


            throw redirect(303, '/app-main');
        }
    },

    // invite: async ({ request, locals: { supabase, getSession } }) => {
    // 	console.log("invite");
    // 	console.log(supabaseAdminClient.auth.admin)

    // 	const form_data = await request.form_data();
    // 	const email = form_data.get('email') as string;

    // 	const { data: user, error } = await supabaseAdminClient.auth
    // 		.admin
    // 		.inviteUserByEmail(email)
    // 	console.log(error)

    // },

    forgot: async ({ request, locals: { supabase } }) => {
        const form_data = await request.formData();
        const email = form_data.get('email');

        // console.log(PUBLIC_SITE_URL + '/auth?reset')
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            // redirectTo: PUBLIC_SITE_URL + '/auth?reset'
            redirectTo: 'http://localhost:5173/auth/?reset'
        });

        if (error) {
            if (error instanceof AuthApiError) {
                return fail(400, {
                    error: error.message
                });
            }
            return fail(500, {
                error: 'Oops!, Server error. Try again later.'
            });
        } else {
            return {
                message: 'Tada😃!, Reset link sent to email'
            };
        }
    },

    reset: async ({ request, locals: { supabase } }) => {
        const form_data = await request.formData();
        const password = form_data.get('password');

        const { error } = await supabase.auth.updateUser({
            password
        });

        if (error) {
            if (error instanceof AuthApiError) {
                return fail(400, {
                    error: error.message
                });
            }
            return fail(500, {
                error: 'Oops!, Server error. Try again later.'
            });
        }

        throw redirect(303, '/auth');
    },

    signout: async ({ locals: { supabase } }) => {
        await supabase.auth.signOut();
        throw redirect(303, '/');
    }
};
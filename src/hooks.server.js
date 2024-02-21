// // src/hooks.server.js
// // import { PUBmLIC_SUPABASE_URL, PmUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
// import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'

// export const handle = async ({ event, resolve }) => {
//     event.locals.supabase = createSupabaseServerClient({
//         supabaseUrl: "https://rncxlbomipatsyzygigd.supabase.co",
//         supabaseKey: "neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuY3hsYm9taXBhdHN5enlnaWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0NTEzMzIsImV4cCI6MTk5NzAyNzMzMn0.9MOwHgtuMuP7G6D6of9b16CC3V6-kzYjYn15AL3Yv1Q",
//         event,
//     })

//     /**
//      * a little helper that is written for convenience so that instead
//      * of calling `const { data: { session } } = await supabase.auth.getSession()`
//      * you just call this `await getSession()`
//      */
//     event.locals.getSession = async () => {
//         const {
//             data: { session },
//         } = await event.locals.supabase.auth.getSession()
//         return session
//     }
//     // console.log(data)
//     return resolve(event, {
//         filterSerializedResponseHeaders(name) {
//             return name === 'content-range'
//         },
//     })
// }
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createServerClient } from '@supabase/ssr'
// import type { Handle } from '@sveltejs/kit'

export const handle = async ({ event, resolve }) => {
    event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        cookies: {
            get: (key) => event.cookies.get(key),
            /**
             * Note: You have to add the `path` variable to the
             * set and remove method due to sveltekit's cookie API
             * requiring this to be set, setting the path to an empty string
             * will replicate previous/standard behaviour (https://kit.svelte.dev/docs/types#public-types-cookies)
             */
            set: (key, value, options) => {
                event.cookies.set(key, value, { ...options, path: '/' })
            },
            remove: (key, options) => {
                event.cookies.delete(key, { ...options, path: '/' })
            },
        },
    })

    /**
     * a little helper that is written for convenience so that instead
     * of calling `const { data: { session } } = await supabase.auth.getSession()`
     * you just call this `await getSession()`
     */
    event.locals.getSession = async () => {
        const {
            data: { session },
        } = await event.locals.supabase.auth.getSession()
        return session
    }

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range'
        },
    })
}


// // for some reason supabase api is not responding


// // src/routes/+layout.js
// // import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
// import { createSupabaseLoadClient } from '@supabase/ssr'

// export const load = async ({ fetch, data, depends }) => {
//     depends('supabase:auth')

//     const supabase = createSupabaseLoadClient({
//         supabaseUrl: "https://rncxlbomipatsyzygigd.supabase.co",
//         // supabaseUrl: PUBLIC_SUPABASE_URL,
//         supabaseKey: "neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuY3hsYm9taXBhdHN5enlnaWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0NTEzMzIsImV4cCI6MTk5NzAyNzMzMn0.9MOwHgtuMuP7G6D6of9b16CC3V6-kzYjYn15AL3Yv1Q",
//         // supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
//         event: { fetch },
//         serverSession: data.session,
//     })

//     const {
//         data: { session },
//     } = await supabase.auth.getSession()

//     return { supabase, session }

// }
// @ts-nocheck


import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
// import type { LayoutLoad } from './$types'
import { createBrowserClient, isBrowser, parse } from '@supabase/ssr'

export const load = async ({ fetch, data, depends }) => {
    depends('supabase:auth')

    const supabase = createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
            fetch,
        },
        cookies: {
            get(key) {
                if (!isBrowser()) {
                    return JSON.stringify(data.session)
                }

                const cookie = parse(document.cookie)
                return cookie[key]
            },
        },
    })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    return { supabase, session }
}
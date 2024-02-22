// import { supabase } from "$lib/supabaseClient";

// // src/routes/+layout.server.js

// export const load = async ({ locals: { getSession } }) => {
//     return {
//         session: await getSession(),
//     }
// }

// import type { LayoutServerLoad } from './$types'
// @ts-ignore
// @ts-nocheck

export const load = async ({ locals: { getSession } }) => {
    return {
        session: await getSession(),
    }
}
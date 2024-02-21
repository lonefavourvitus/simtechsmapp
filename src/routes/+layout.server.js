// import { supabase } from "$lib/supabaseClient";

// // src/routes/+layout.server.js

// export const load = async ({ locals: { getSession } }) => {
//     return {
//         session: await getSession(),
//     }
// }

import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
    return {
        session: await getSession(),
    }
}
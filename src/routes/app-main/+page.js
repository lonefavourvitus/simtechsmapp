// import { supabase } from "$lib/supabaseClient";

// @ts-nocheck

import { supabase } from "@supabase/ssr";
import { drugStore, drugProperties } from "../../stores";
import { fail, redirect, json } from '@sveltejs/kit'
// @ts-ignore

/** @type {import('./$types').PageServerLoad} */
let transformedData = []
// @ts-ignore

let transformedArray = []
export async function load({ parent }) {
    // export const getTodos = async () => {
    const { supabase, session } = await parent()
    if (!session) {
        throw redirect(303, '/')
    }
    console.log(supabase)
    console.log(session)
    const { data: profile } = await supabase
        .from('profiles')
        .select(`username, full_name, website, avatar_url`)
        .eq('id', session.user.id)
        .single()
    const { data, error } = await supabase.from('drugs_main').select('*')

    console.log(data)
    console.log(profile)
    if (error) {
        // console.error(error);
        return
    } else {
        transformedData = data.map(row => [
            [row.full_brand_name],
            // [row.shortened_brand_name],
            // [row.typed_name],
            [row.unit_name],
            // [row.amount_in_stock],
            [] // initialize the fourth inner array to an empty array
        ]);
    }

    // const { data: salesData, error: salesError } = await supabase
    //     .from('drug_sales_input').select('*')
    // const { data: salesData, error: salesError } = await supabase.from('drug_sales_input').select('*')
    const { data: salesData, error: salesError } = await supabase.from('drug_sales_input').select('*')
        .eq('user_id_from_profiles', session.user.id)

    console.log(salesData, data, salesError, error)
    // await supabase
    //     .from('drug_sales_input')
    //     .delete()
    //     .eq('user_id_from_profiles', '4e6734b0-1b4b-4419-a3b3-defca7fcfaa8')
    // await supabase
    //     .from('drug_sales_input')
    //     .delete()
    //     // .eq('user_id_from_profiles', '4e6734b0-1b4b-4419-a3b3-defca7fcfaa8')
    //     // 	.eq('ref_unit_name', 'gsk antacid suspension')
    //     .eq('drug_id', 'a1d115b6-08c7-4675-b6ac-a830b2232bc1')

    //     .then((result) => console.log(result))
    //     .catch((error) => console.log(error));
    // console.log('preparing to delete from table...');



    // supabase
    //     .from('drug_sales_input')
    //     .insert({
    //         ref_unit_name: 'gsk antacid suspension',
    //         drug_id: 'a1d115b6-08c7-4675-b6ac-a830b2232bc1',
    //         ref_date: 'today',
    //         sales_input: JSON.stringify({
    //             id: 'a3d115b6-08c7-4675-b6ac-a830b2232bc1',
    //             drugName: 'gsk antacid suspension',
    //             price: 300,
    //             date: 'today',
    //             time: 'todayTime'
    //         }),
    //         last_stock_position: '1st stock',
    //         last_stock_stock_amount: 7,
    //         last_stock_price_tag: 200,
    //         user_id_from_profiles: '4e6734b0-1b4b-4419-a3b3-defca7fcfaa8'
    //     })

    //     .single()
    //     .then((result) => console.log(result))
    //     .catch((error) => console.log(error));

    if (salesError) {
        // console.error(salesError);
        return
    } else {

        try {

            // Create an empty array to store the grouped objects
            // @ts-ignore

            const groupedObjects = [];

            // Group the objects based on ref_unit_name property
            salesData.forEach(obj => {

                const { sales_input } = obj
                // console.log(sales_input)
                // Parse the sales_input as JSON
                // const parsedSalesInput = json(sales_input);
                // console.log(parsedSalesInput);
                // console.log(obj.sales_input);

                // Update the salesData object with the parsed sales_input
                obj.sales_input = JSON.parse(sales_input);
                // console.log(obj.sales_input);

                const unitName = obj.ref_unit_name;
                // @ts-ignore

                const group = groupedObjects.find(group => group.unitName === unitName);
                if (group) {
                    group.objects.push(obj);
                } else {
                    groupedObjects.push({
                        unitName: unitName,
                        objects: [obj]
                    });
                }
                // console.log(groupedObjects)
                // @ts-ignore

                transformedArray = groupedObjects.map(group => {
                    // console.log(group)
                    // @ts-ignore

                    const subgroups = group.objects.reduce((acc, obj) => {
                        const position = obj.last_stock_position;
                        const stockAmount = obj.last_stock_stock_amount;
                        const priceTag = obj.last_stock_price_tag;
                        if (!acc[position]) {
                            acc[position] = [[position], [stockAmount], [priceTag], [obj]]; // Create a new array with position as the first element
                        } else {
                            acc[position][3].push(obj);

                        }
                        return acc;
                    }, {});
                    console.log(subgroups)
                    return [...Object.values(subgroups)];
                });
                // console.log(transformedArray);


            });

            // console.log(groupedObjects)
        } catch (error) {
            // console.error(`Error parsing sales input: ${error}`);
            let my = false
        }
    }
    // @ts-ignore

    console.log(transformedArray);
    // @ts-ignore


    const standaloneArrays = transformedArray.flatMap(subarray => subarray);

    // console.log(standaloneArrays);
    standaloneArrays.forEach((tran) => {
        const [[a], [b], [c], restObj] = tran
        const [{ sales_input }] = restObj;
        const { drugName } = sales_input

        // console.log(drugName)
        // console.log(sales_input)
        // console.log(b)
        // console.log(c)
        // console.log(restObj)
        // console.log(tran)
        // @ts-ignore

        const bindex = transformedData.findIndex(drugDataRow => drugDataRow[1][0] === drugName)
        // @ts-ignore

        let modifiedArray = tran.map((item, index) => {
            if (index === 3) {
                // @ts-ignore

                return item.map((obj) => obj.sales_input);
            }
            return item;
        });

        console.log(modifiedArray);

        transformedData[bindex][2].push(modifiedArray);
        console.log(tran)
        console.log('transformedData is:', transformedData)
        // console.log(drugStore)
    })
    // dEntity.set('transformedData is:', transformedData);
    // console.log(transformedData)
    // Example code to access the auth.users table

    drugStore.set(transformedData)

    const transformedDataForProps = data.map(row =>
        // [row.typed_name, row.alt_name, row.unit_name, row.price]

        [row.unit_name]
    );
    // @ts-ignore

    drugProperties.set(transformedDataForProps);

    drugProperties.subscribe(value => {
        console.log('drugprops is:', value)
    });
    drugStore.subscribe(value => {
        console.log('drugstore re is:', value)
    });
    // isLoaded.subscribe(value => {
    //     value = false
    //     // console.log('drugProperties updated:', value);
    // });
    // isLoaded = true
    // };
    return {
        profile,
        transformedData,
        transformedDataForProps,
        session
    }
}
// console.log(profile)
console.log(transformedData)


// let today = new Date();
// let yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000)); // subtract 1 day in milliseconds
// let day = yesterday.toLocaleString('en-NG', { weekday: 'short' });
// let month = yesterday.getMonth() + 1; // add 1 since getMonth() returns 0-indexed month
// let date = yesterday.getDate();
// let formattedDate = `${day}-${month}-${date}`;
// console.log(formattedDate); // output: "Fri-5-2"
// console.log(yesterday)




//////////////////////////////////////////////////////////////////////////////////////////////////
// const today = new Date();
// const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000));
// const options = { weekday: 'short', year: '2-digit', month: '2-digit', day: '2-digit' };
// const yesterdayFormatted = yesterday.toLocaleDateString('en-NG', options).replace(/\//g, '-');
// console.log(yesterdayFormatted); // Outputs something like "Fri-05-06"

        // supabase.from('drug_sales_input').select('*').eq('ref_date', `${yesterdayFormatted}`)
        //////////////////////////////////////////////////////////////////////////////////////////////

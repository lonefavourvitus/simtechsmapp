

// @ts-nocheck

import { supabase } from "$lib/supabaseClient";
import { fail, redirect } from '@sveltejs/kit'
import { tets } from '../../stores'
/** @type {import('./$types').PageServerLoad} */
let transformedData = []
let transformedArray = []
// const today = new Date();
// const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000));
// let options = {
//     timeZone: 'Africa/Lagos',
//     hour12: true,
//     weekday: 'short',
//     year: '2-digit',
//     month: '2-digit',
//     day: '2-digit'
// };
// const yesterdayFormatted = yesterday.toLocaleDateString('en-NG', options).replace(/\//g, '-');
// console.log(yesterdayFormatted); // Outputs something like "Fri-05-06"
let emptySalesArray = true

let todayDate = new Date();
let yesterdayDate = new Date(todayDate.getTime() - (24 * 60 * 60 * 1000));
let options = {
    timeZone: 'Africa/Lagos',
    hour12: true,
    weekday: 'short',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
};
let yesterdayDateFormatted = yesterdayDate.toLocaleDateString('en-NG', options).replace(/\//g, '-');
// let todayTime = todayDate.toLocaleTimeString('en-NG', {
//     timeZone: 'Africa/Lagos',
//     hour12: true
// });
console.log(todayDate);

console.log(yesterdayDate); // Outputs something like "Fri-05-06"
console.log(yesterdayDateFormatted);

export async function load({ parent }) {
    // export const getTodos = async () => {
    const { supabase, session } = await parent()
    if (!session) {
        throw redirect(303, '/')
    }
    console.log(supabase)

    const { data, error } = await supabase.from('drugs_main').select('*')
    //    const { data: salesData, error: salesError } = await supabase.from('drug_sales_input').select('*')
    //     .eq('user_id_from_profiles', session.user.id)
    // const { data, error } = await supabase.from('drug_sales_input').select('*').eq('ref_date', `${yesterdayFormatted}`)


    console.log(data)
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
    const { data: salesData, error: salesError } = await supabase.from('drug_sales_input').select('*')
        // .eq('user_id_from_profiles', session.user.id)
        // .eq('ref_date', `${yesterdayDateFormatted}`)
        .eq('ref_date', 'Fri, 04-08-23')
    // const { data, error } = await supabase.from('drug_sales_input').select('*')

    console.log(salesData, data, salesError, error)


    if (salesError) {
        // console.error(salesError);
        return
    } else {

        try {

            // Create an empty array to store the grouped objects
            const groupedObjects = [];

            // Group the objects based on ref_unit_name property
            salesData.forEach(obj => {

                const { sales_input } = obj
                // console.log(sales_input)
                // Parse the sales_input as JSON
                const parsedSalesInput = JSON.parse(sales_input);
                // console.log(parsedSalesInput);
                // console.log(obj.sales_input);

                // Update the salesData object with the parsed sales_input
                obj.sales_input = parsedSalesInput;
                // console.log(obj.sales_input);

                const unitName = obj.ref_unit_name;
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
                transformedArray = groupedObjects.map(group => {
                    // console.log(group)
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
    console.log(transformedArray);

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

        const bindex = transformedData.findIndex(drugDataRow => drugDataRow[1][0] === drugName)

        let modifiedArray = tran.map((item, index) => {
            if (index === 3) {
                return item.map((obj) => obj.sales_input);
            }
            return item;
        });

        console.log(modifiedArray);

        if (salesData.length == 0) {
            console.log('sales data array is:', salesData)
            emptySalesArray = true
            // return
        } else {
            emptySalesArray = false
            transformedData[bindex][2].push(modifiedArray);
            console.log('sales data array when length !==0 is:', salesData)

        }

        // transformedData[bindex][5].push(modifiedArray);
        // console.log(tran)
        // console.log(transformedData)
    })
    // dEntity.set(transformedData);
    // console.log(transformedData)
    // Example code to access the auth.users table


    const transformedDataForProps = data.map(row =>
        [row.unit_name]
    );
    // drugProperties.set(transformedDataForProps);
    // drugProperties.subscribe(value => {
    //     // console.log('drugProperties updated:', value);
    // });
    // isLoaded.subscribe(value => {
    //     value = false
    //     // console.log('drugProperties updated:', value);
    // });
    // isLoaded = true
    // };
    return {
        transformedData,
        transformedDataForProps,
        emptySalesArray
    }
}


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


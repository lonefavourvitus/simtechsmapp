// @ts-nocheck
import { createClient } from '@supabase/supabase-js'

// import { supabase, getServiceSupabase } from "$lib/supabaseClient";
// @ts-ignore
// import supabase from '@supabase/ssr';
// import getServiceSupabase from '@supabase/ssr';
// const { supabase } = supabase;
// const { getServiceSupabase } = gtt;

// import { supabase } from "@supabase/ssr";
// import { supabase, getServiceSupabase } from "@supabase/ssr";
// import { json } from '@sveltejs/kit';
// @ts-ignore

let transformedData = []
// @ts-ignore

let transformedArray = []

// const { data, error } = supabase.auth.getSession()

// // const { data: { session }, } = await supabase.auth.getSession()

// console.log('session is:', data)
// console.log('session error is:', error)
// console.log('testy')

let emptySalesArray = false

// console.log('supabase is:', supabase)
let supabase = createClient('https://rncxlbomipatsyzygigd.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuY3hsYm9taXBhdHN5enlnaWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0NTEzMzIsImV4cCI6MTk5NzAyNzMzMn0.9MOwHgtuMuP7G6D6of9b16CC3V6-kzYjYn15AL3Yv1Q')

let gtt = createClient('https://rncxlbomipatsyzygigd.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuY3hsYm9taXBhdHN5enlnaWdkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTQ1MTMzMiwiZXhwIjoxOTk3MDI3MzMyfQ.N6IquPFx-Gp8Qh8k5uEUcXaPf49SeefNDcEPr3j4Nuc')
// let gtt = getServiceSupabase()

export async function POST({ request }) {
    // const { filterDate } = request.body; // Get the filter date from the request body
    console.log('endpoint hit')
    let body = await request.json()
    console.log(body)
    let recievedValueType = body.type
    console.log('recievedValueType is:', recievedValueType)
    let recievedValue = body.input
    console.log('recievedValue is:', recievedValue)
    let filterType = recievedValueType
    let sessionUserId = body.sessionUserId
    console.log('sessionUserId is:', sessionUserId)

    try {

        // // .eq('ref_date', date);


        const { data, error } = await supabase.from('drugs_main').select('*')

        console.log(data)

        if (error) {
            // console.error(error);
            // @ts-ignore

            return

        } else {
            // @ts-ignore

            transformedData = data.map(row => [
                [row.full_brand_name],
                // [row.shortened_brand_name],
                // [row.typed_name],
                [row.unit_name],
                // [row.amount_in_stock],
                [] // initialize the fourth inner array to an empty array
            ]);
        }

        const { data: salesData, error: salesError } = await gtt.from('drug_sales_input').select('*')
            .eq('user_id_from_profiles', sessionUserId)
            .eq(filterType, recievedValue)
        // const { data: salesData, error: salesError } = await supabase.from('drug_sales_input').select('*').eq('user_id_from_profiles', session.user.id)

        console.log('sales data is:', salesData)
        console.log('data is:', data)
        console.log('salesError is:', salesError)
        console.log('error is:', error)

        recievedValue = ''
        filterType = ''

        if (salesError) {
            console.error(' error console: salesError=', salesError);
            // @ts-ignore

            return

        } else {

            try {

                // Create an empty array to store the grouped objects
                // @ts-ignore

                const groupedObjects = [];

                // Group the objects based on ref_unit_name property
                // @ts-ignore

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
                        // @ts-ignore

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
                        console.log('subgroups is:', subgroups)
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

        console.log('transformedArray first occ is:', transformedArray);
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

            console.log('modifiedArray first occ is:', modifiedArray);
            if (salesData.length == 0) {
                console.log('sales data array is:', salesData)
                emptySalesArray = true
                // return
            } else {
                emptySalesArray = false
                // @ts-ignore

                transformedData[bindex][2].push(modifiedArray);
            }
            // console.log(tran)
            // @ts-ignore

            console.log('td 1 is:', transformedData)
        })
        // let vb = { ress: transformedData }
        // dEntity.set(transformedData);
        console.log('td 2 is:', transformedData)
        // Example code to access the auth.users table

        // @ts-ignore

        const transformedDataForProps = data.map(row =>
            [row.unit_name]
        );


        if (error) {
            return new Response(
                JSON.stringify({ error: 'Failed to fetch filtered data' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }
        // if (transformedData === []) {
        //     console.log(`transformedData array is ${transformedData}`)
        //     return
        // } else {
        console.log('returned vb res is:', JSON.stringify({ vb: transformedData, emptySalesArray: emptySalesArray }))
        return new Response(JSON.stringify({ vb: transformedData, emptySalesArray: emptySalesArray }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
        // }

    } catch (error) {
        console.error('catch error', error);
        return new Response(
            JSON.stringify({ error: 'An error occurred' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
// @ts-ignore

console.log('last td is:', transformedData)
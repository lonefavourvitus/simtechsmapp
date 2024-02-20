
import { supabase, getServiceSupabase } from "$lib/supabaseClient";
import { json } from '@sveltejs/kit';

let transformedData = []
let transformedArray = []

// const { data, error } = supabase.auth.getSession()

// // const { data: { session }, } = await supabase.auth.getSession()

// console.log('session is:', data)
// console.log('session error is:', error)
// console.log('testy')

let emptySalesArray = false

console.log('supabase is:', supabase)

let gtt = getServiceSupabase()

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
        console.log('transformedArray first occ is:', transformedArray);

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

            console.log('modifiedArray first occ is:', modifiedArray);
            if (salesData.length == 0) {
                console.log('sales data array is:', salesData)
                emptySalesArray = true
                // return
            } else {
                emptySalesArray = false
                transformedData[bindex][2].push(modifiedArray);
            }
            // console.log(tran)
            console.log('td 1 is:', transformedData)
        })
        // let vb = { ress: transformedData }
        // dEntity.set(transformedData);
        console.log('td 2 is:', transformedData)
        // Example code to access the auth.users table


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
console.log('last td is:', transformedData)
<script context="module">
	import { supabase } from '$lib/supabaseClient';
	import { drugStore, sess } from '../stores';
	export async function handleDrugRemoval(drugId) {
		try {
			drugStore.update((currentDrugs) => {
				return currentDrugs.map((drug) => {
					return [
						drug[0],
						drug[1],
						// drug[2],
						// drug[3],
						// drug[4],
						drug[2].map((stock) => {
							return [
								stock[0],
								stock[1],
								stock[2],
								stock[3].filter((entry) => entry.id !== drugId)
							];
						})
					];
				});
			});
			await supabase
				.from('drug_sales_input')
				.delete()
				.eq('user_id_from_profiles', '4e6734b0-1b4b-4419-a3b3-defca7fcfaa8')

				// .eq('ref_unit_name', 'Atovaquone-proguanil ')
				// .eq('drug_id', 'a1d115b6-08c7-4675-b6ac-a830b2232bc1')
				// .eq('drug_id', drugId)
				// await supabase
				// 	.from('drug_sales_input')
				// 	.delete()
				// 	.eq('ref_unit_name', 'gsk antacid suspension')
				// 	.eq('last_stock_amount', '1st stock.');

				.then((result) => console.log(result))
				.catch((error) => console.log(error));
			console.log('preparing to delete from table...');

			console.log(`Deleted drug with id ${drugId} from 'drug_sales_input'`);
		} catch (error) {
			console.error(error);
		}
	}
</script>

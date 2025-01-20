import supabase from "../backend/setupSupabase"
import { Tables } from "../backend/shopTypes";

export type TItem = Tables<'items'>;

const postGetNewItem = async (itemToAdd: Pick<TItem, 'name' | 'description' | 'price'>, setItems: React.Dispatch<React.SetStateAction<TItem[]>>) => {
    const { data, error } = await supabase
    .from('items')
    .insert(itemToAdd)
    .select()

    if(error) console.error(error);
    if(data) setItems(prev => [...prev, data[0]]);
}

export default postGetNewItem;
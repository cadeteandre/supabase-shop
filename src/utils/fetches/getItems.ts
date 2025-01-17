import supabase from "../backend/setupSupabase"
import { Tables } from "../backend/shopTypes";

export type TItem = Tables<'items'>;

const getAllItems = async (setItems: React.Dispatch<React.SetStateAction<TItem[] | null>>) => {
    const { data, error } = await supabase
    .from('items')
    .select('*')

    setItems(data);
    if(error) console.error(error);
}

export default getAllItems;
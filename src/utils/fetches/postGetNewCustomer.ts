import supabase from "../backend/setupSupabase"
import { Tables } from "../backend/shopTypes";

export type TCustomer = Tables<'customers'>;

const postGetNewCustomer = async (customer: Pick<TCustomer, 'first_name' | 'last_name' | 'email'>, setCustomer: React.Dispatch<React.SetStateAction<TCustomer[]>>) => {
    const { data, error } = await supabase
    .from('customers')
    .insert(customer)
    .select()

    if(error) console.error(error);
    if(data) setCustomer(prev => [...prev, data[0]]);
}

export default postGetNewCustomer;
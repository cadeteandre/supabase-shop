import supabase from "../backend/setupSupabase"

export interface ICustomer {
    first_name: string,
    last_name: string,
    email: string
}

const postNewCustomer = async (customer: ICustomer) => {
    const { error } = await supabase
    .from('customers')
    .insert(customer)

    if(error) console.error(error);
}

export default postNewCustomer;
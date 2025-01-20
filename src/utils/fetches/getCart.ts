import supabase from "../backend/setupSupabase";

const getCart = async (
    customer: string,
    setCart: React.Dispatch<React.SetStateAction<any[]>>
) => {
    const { data, error } = await supabase
        .from("carts")
        .select("id, customer_id, carts_items(quantity, items(name, description, price))")
        .eq("customer_id", customer);

    if (error) {
        console.error("Error fetching carts:", error);
        setCart([]);
        return;
    }

    if (data) {
        const items = data.flatMap(cart => cart.carts_items || []);
        setCart(items);
    } else {
        setCart([]);
    }
};

export default getCart;
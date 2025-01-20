import supabase from "../backend/setupSupabase";

const postNewCart = async (customer_id: string, item_id: string, quantity: string) => {
    try {
        let cart_id;

        const { data: existingCart, error: errorCart } = await supabase
            .from('carts')
            .select()
            .eq('customer_id', customer_id)
            .single();

        if (errorCart && errorCart.code !== "PGRST116") {
            console.error("Error fetching cart::", errorCart);
            return;
        }

        if (existingCart) {
            cart_id = existingCart.id;
        } else {
            const { data: newCart, error: errorNewCart } = await supabase
                .from('carts')
                .insert({ customer_id })
                .select()
                .single();

            if (errorNewCart) {
                console.error("Error creating cart:", errorNewCart);
                return;
            }

            cart_id = newCart.id;
        }

        const { error: errorCartItem } = await supabase
            .from('carts_items')
            .insert({ cart_id, item_id, quantity: parseInt(quantity, 10) });

        if (errorCartItem) {
            console.error("Error adding item to cart:", errorCartItem);
        } else {
            console.log("Item added to cart successfully!");
        }
    } catch (error) {
        console.error("Unexpected error:", error);
    }
};

export default postNewCart;
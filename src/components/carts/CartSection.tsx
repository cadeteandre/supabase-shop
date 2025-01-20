import { useEffect, useState } from "react";
import AddCart from "./AddCart";
import CartList from "./CartList";
import getCart from "../../utils/fetches/getCart";

const CartSection = () => {
    const [cart, setCart] = useState<any>([]);

    useEffect(() => {
        getCart('9d47a2e0-1efd-4061-ade3-11235c86456d', setCart);
    }, []);

    return (
        <section>
            <h1 className="text-2xl text-bold">Carts</h1>
            <AddCart />
            <CartList cart={cart} />
        </section>
    );
};

export default CartSection;
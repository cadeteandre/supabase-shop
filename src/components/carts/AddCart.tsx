import postNewCart from "../../utils/fetches/postNewCart";

const AddCart = () => {
    const handleNewCart = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const customer_id = e.currentTarget.customer_id.value;
        const item_id = e.currentTarget.item_id.value;
        const quantity = e.currentTarget.quantity.value;

        if (!customer_id || !item_id || !quantity) {
            console.error("Todos os campos são obrigatórios!");
            return;
        }

        await postNewCart(customer_id, item_id, quantity);
    };

    return (
        <section className="border rounded-xl p-2 mt-4 mx-auto flex flex-col items-center gap-2">
            <form onSubmit={handleNewCart} className="flex flex-col items-center gap-2 w-80">
                <h1 className="text-3xl font-bold">New Cart</h1>
                <label className="input input-bordered flex items-center gap-2 w-80">
                    Customer ID:
                    <input name="customer_id" type="text" className="grow" />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-80">
                    Item ID:
                    <input name="item_id" type="text" className="grow" />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-80">
                    Quantity:
                    <input name="quantity" type="number" className="grow" />
                </label>
                <button className="btn self-end">To the shopping cart</button>
            </form>
        </section>
    );
};

export default AddCart;
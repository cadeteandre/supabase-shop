interface ICartListProps {
    cart: {
        quantity: number;
        items: {
            name: string;
            description: string;
            price: number;
        };
    }[];
}

const CartList: React.FC<ICartListProps> = ({ cart }) => {
    return (
        <div>
            <h1>Cart List</h1>
            {cart.length === 0 ? (
                <p>Cart is empty.</p>
            ) : (
                cart.map((cart_item, index) => (
                    <div key={index}>
                        <p>
                            <strong>Item:</strong> {cart_item.items.name}
                        </p>
                        <p>
                            <strong>Descrição:</strong> {cart_item.items.description}
                        </p>
                        <p>
                            <strong>Preço:</strong> R$ {cart_item.items.price}
                        </p>
                        <p>
                            <strong>Quantidade:</strong> {cart_item.quantity}
                        </p>
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
};

export default CartList;
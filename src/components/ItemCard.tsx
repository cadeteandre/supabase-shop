import { TItem } from "../utils/fetches/getItems";

interface IItemCardProps {
    item: TItem
}

const ItemCard: React.FC<IItemCardProps> = ({ item }) => {
    return (  
        <div className="card border bg-base-100 w-72 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={`${item.img_url}`}
                alt={`${item.name}`}
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{item.name}</h2>
                <p className="font-thin">{item.description}</p>
                <p className="self-end">{item.price} €</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
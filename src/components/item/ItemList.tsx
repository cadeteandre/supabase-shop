import ItemCard from "./ItemCard";
import { TItem } from "../../utils/fetches/postGetNewItem";

interface IITemListProps {
    items: TItem[]
}

const ItemList: React.FC<IITemListProps> = ({ items }) => {

    return (  
        <section>
            <h1 className="text-2xl font-bold text-center text-zinc-600">Items</h1>
            <div className="flex flex-wrap w-full gap-4">
                <ItemCard items={items} />
            </div>
        </section>
    );
}

export default ItemList;
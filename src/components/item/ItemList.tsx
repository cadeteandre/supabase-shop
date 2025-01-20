import ItemCard from "./ItemCard";
import { TItem } from "../../utils/fetches/postGetNewItem";

interface IITemListProps {
    items: TItem[]
}

const ItemList: React.FC<IITemListProps> = ({ items }) => {

    return (  
        <section>
            <h1 className="text-center pb-2 text-3xl font-bold">Items</h1>
            <div className="flex flex-wrap w-full gap-4">
                <ItemCard items={items} />
            </div>
        </section>
    );
}

export default ItemList;
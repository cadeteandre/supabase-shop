import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import getAllItems, { TItem } from "../utils/fetches/getItems";

const ItemList = () => {

    const [items, setItems] = useState<TItem[] | null>([])

    useEffect(() => {
        getAllItems(setItems)
    }, [])
    return (  
        <section>
            <h1 className="text-center pb-2">Item List</h1>
            <div className="flex flex-wrap w-full gap-4">
                {
                    items ? items.map((item) => (
                        <ItemCard item={item} />
                    )) : <p>Loading...</p>
                }
            </div>
        </section>
    );
}

export default ItemList;
import { useState } from "react";
import ItemList from "./ItemList";
import { TItem } from "../../utils/fetches/postGetNewItem";
import AddItem from "./AddItem";

const ItemSection = () => {

    const [items, setItems] = useState<TItem[]>([])
    return (  
        <section className="flex gap-4">
            <AddItem setItems={setItems} />
            <ItemList items={items} />
        </section>
    );
}

export default ItemSection;
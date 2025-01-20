import postGetNewItem, { TItem } from "../../utils/fetches/postGetNewItem";

interface IAddItemProps {
    setItems: React.Dispatch<React.SetStateAction<TItem[]>>
}

const AddItem:React.FC<IAddItemProps> = ({ setItems }) => {

    const handleNewItem = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { itemName, description, price } = e.currentTarget;
        const item: Pick<TItem, 'name' | 'description' | 'price'> = {
            name: itemName.value,
            description: description.value,
            price: price.value
        }
        postGetNewItem(item, setItems);
        console.log('item function');
    }

    return (  
        <section className="border rounded-xl p-2 mt-4 mx-auto flex flex-col items-center gap-2">
            <form onSubmit={handleNewItem} className="flex flex-col items-center gap-2 w-80">
                <h1 className="text-3xl font-bold">New Item</h1>
                <label className="input input-bordered flex items-center gap-2 w-80">
                    Name:
                    <input name="itemName" type="text" className="grow" />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-80">
                    Description:
                    <input name="description" type="text" className="grow" />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-80">
                    Price:
                    <input name="price" type="text" className="grow" />
                </label>
                <button className="btn self-end">Add item</button>
            </form>
        </section>
    );
}

export default AddItem;
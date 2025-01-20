import { useState } from "react";
import { TCustomer } from "../../utils/fetches/postGetNewCustomer";
import CustomerList from "./CustomerList";
import AddCustomer from "./AddCustomer";

const CustomerSection = () => {

    const [customers, setCustomers] = useState<TCustomer[]>([])

    return (  
        <section className="felx gap-2">
            <div className="flex gap-4">
                <AddCustomer setCustomers={setCustomers} />
                <CustomerList customers={customers} />
            </div>
        </section>
    );
}

export default CustomerSection;
import { TCustomer } from "../../utils/fetches/postGetNewCustomer";

interface ICustomerListProps {
    customers: TCustomer[]
}

const CustomerList: React.FC<ICustomerListProps> = ({ customers }) => {
    return (  
        <div className="flex flex-col">
            { 
                customers.map((customer) => (
                    <div className="">
                        <h1 className="text-2xl font-bold">Customer</h1>
                        <p>Id: <span>{customer.id}</span></p>
                        <p>Name: <span>{`${customer.first_name} ${customer.last_name}`}</span></p>
                        <p>Email: <span>{customer.email}</span></p>
                    </div>
                ))
            }
        </div>
    );
}

export default CustomerList;
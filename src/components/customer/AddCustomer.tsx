import postGetNewCustomer, { TCustomer } from "../../utils/fetches/postGetNewCustomer";

interface IAddCustomerProps {
    setCustomers: React.Dispatch<React.SetStateAction<TCustomer[]>>
}

const AddCustomer: React.FC<IAddCustomerProps> = ({ setCustomers }) => {

    const handleNewCustomer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { firstName, lastName, email } = e.currentTarget;
        const customer: Pick<TCustomer, 'first_name' | 'last_name' | 'email'> = {
            first_name: firstName.value,
            last_name: lastName.value,
            email: email.value
        }
        postGetNewCustomer(customer, setCustomers);
    }

    return (  
        <section className="border rounded-xl p-2 mt-4 mx-auto flex flex-col items-center gap-2">
            <form onSubmit={handleNewCustomer} className="flex flex-col items-center gap-2 w-80">
                <h1 className="text-3xl font-bold">New Customer</h1>
                <label className="input input-bordered flex items-center gap-2 w-80">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    Firstname:
                    <input name="firstName" type="text" className="grow" />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-80">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    Lastname:
                    <input name="lastName" type="text" className="grow" />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-80">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    E-Mail:
                    <input name="email" type="text" className="grow" />
                </label>
                <button className="btn self-end">Add user</button>
            </form>
        </section>
    );
}

export default AddCustomer;
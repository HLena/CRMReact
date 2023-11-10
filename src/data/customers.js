import EditCustomer from "../pages/EditCustomer";

const getCustomers = async () => {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL);
        const result = await response.json()
        return result;
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
}

const postCustomer = async (newCustomer) => {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(newCustomer),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        await response.json()
        
    } catch (error) {
        console.error("Error adding a customer:", error);
        
    }
}

const getCustomerById = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
        const result = await response.json()
        return result;
    } catch (error) {
        console.error("Error to get a customer by Id:", error);
    }
}

const updateCustomer = async (id, newData) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newData),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        await response.json()
        
    } catch (error) {
        console.error("Error editing a customer:", error);
    }
}
 


export {
    getCustomers,
    postCustomer,
    getCustomerById,
    updateCustomer
}
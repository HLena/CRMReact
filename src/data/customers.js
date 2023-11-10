
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
    console.log(newCustomer);
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


export {
    getCustomers,
    postCustomer
}

export const getCustomers = async () => {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL);
        const result = await response.json()
        return result;
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
}

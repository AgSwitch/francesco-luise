const UseGetConfig = async (config) => {
    try {
        const res = await fetch(`http://localhost:3000/api/preferences?config=${config}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
}
export default UseGetConfig;
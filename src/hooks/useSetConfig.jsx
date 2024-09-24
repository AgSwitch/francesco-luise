const UseSetConfig = async (config, isActive) => {
    try {
        const res = await fetch(`http://localhost:3000/api/preferences?config=${config}&isActive=${isActive}`, {
            method: 'PUT',
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
export default UseSetConfig;
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const useSetConfig = (config) => {
    const [message, setMessage] = useState('');

    async function setConfig(isActive) {
        try {
            const res = await fetch(
                `/api/preferences?config=${config}&isActive=${isActive}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
            const data = await res.json();
            setMessage(data.message);
            toast.success(message);
        } catch (error) {
            setMessage(error.message);
            toast.error(message);
        }
    }
    return { message, setConfig };
};
export default useSetConfig;

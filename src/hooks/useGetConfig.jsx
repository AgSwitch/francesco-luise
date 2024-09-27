import { setConfig } from 'next/config';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const useGetConfig = (config) => {
    const [configStatus, setConfigStatus] = useState(false);
    useEffect(() => {
        async function getConfig() {
            try {
                const res = await fetch(`/api/preferences?config=${config}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await res.json();
                setConfigStatus(data);
            } catch (error) {
                toast.error('Errore');
            }
        }
        getConfig();
    }, [config]);
    console.log(configStatus);
    return configStatus;
};
export default useGetConfig;

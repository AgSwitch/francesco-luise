import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebaseConfig';
import { useRouter } from 'next/navigation';

const withAuth = (Component) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
        const [loading, setLoading] = useState(true);
        const [authenticated, setAuthenticated] = useState(false);
        const router = useRouter();

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setAuthenticated(true);
                } else {
                    router.push('/login');
                }
                setLoading(false);
            });

            return () => unsubscribe();
        }, [router]);
        if (loading) {
            return <p>Loading...</p>;
        }

        if (!authenticated) {
            return null;
        }

        return <Component {...props} />;
    };
};

export default withAuth;
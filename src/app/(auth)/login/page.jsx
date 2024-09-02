'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const PageLogin = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function handlesubmit(e) {
        e.preventDefault();
        try {
            console.log(email, password);
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            console.log(res);
            if (res.status === 200) {
                toast.success('User logged in');
                router.push('/dashboard');
            } else if (res.status === 403) {
                toast.error('Invalid credentials');
            }
        } catch (error) {
            toast.error(error);
        }
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input
                    type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default PageLogin;

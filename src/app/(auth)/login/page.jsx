'use client';

import CustomButton from '@/components/customButton/CustomButton';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const PageLogin = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
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
        <div className='bg-secondary h-screen flex justify-center items-center w-full'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-background p-8 max-w-lg rounded-3xl w-full'>
                <h1 className='text-2xl'>Login</h1>
                <Input
                    type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <CustomButton type="submit">Login</CustomButton>
            </form>
        </div>
    );
};
export default PageLogin;

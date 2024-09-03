'use client';

import CustomButton from '@/components/customButton/CustomButton';
import { Input } from '@/components/ui/input';
import { auth } from '@/lib/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
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
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('User logged in');
            router.push('/dashboard');
        } catch (error) {
            if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
                toast.error('Invalid credentials');
            } else {
                toast.error('Something went wrong');
            }
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

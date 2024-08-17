import { z } from 'zod';

export const formFields = [
    {
        name: 'name',
        label: 'form.name.label',
        error: 'form.name.error',
        description: 'This is your name.',
        type: 'text',
        singleCol: true,
        defaultValue: '',
    },
    {
        name: 'email',
        label: 'form.email.label',
        error: 'form.email.error',
        description: 'Your email address.',
        type: 'email',
        defaultValue: '',
        singleCol: true,
    },
    {
        name: 'phone',
        label: 'form.phone.label',
        error: 'form.phone.error',
        description: 'Your phone number.',
        type: 'tel',
        defaultValue: '',
        singleCol: true,
    },
    {
        name: 'message',
        label: 'form.message.label',
        error: 'form.message.error',
        description: 'Your message.',
        type: 'textArea',
        defaultValue: '',
        singleCol: true,
    },
];

export const formSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: 'form.name.error',
        })
        .max(50),
    email: z.string().email({ message: 'form.email.error' }),
    phone: z.string().min(10, { message: 'form.phone.error' }),
    message: z.string().min(10, { message: 'form.message.error' }),
});
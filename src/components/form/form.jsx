"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from '../ui/form';

import CustomFormField from './formField';
import { useForm } from 'react-hook-form';
import { formFields, formSchema } from './formData';
import CustomButton from '../customButton/CustomButton';
import { toast } from 'sonner';

export function CustomForm({ className }) {
    const defaultValues = {};
    formFields.forEach((field) => {
        defaultValues[field.name] = field.defaultValue;
    });
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues,
    });

    async function onSubmit(values) {
        try {
            const response = await fetch('api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            if (response.status === 200) {
                form.reset();
                toast.success('message sent successfully');
            }

            if (response.status === 429) {
                toast.error('Too many requests');
            }

        } catch (error) {
            console.error('Error', error);
            toast.error('Something went wrong');
        }
        
    }

    return (
        <div className={`${className} bg-background text-primary max-w-3xl mx-auto px-8`}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid grid-cols-2 gap-x-8"
                >
                    {formFields.map((field) => {
                        return (
                            <CustomFormField
                                key={field.name}
                                form={form}
                                label={field.label}
                                name={field.name}
                                className={`${
                                    field.singleCol
                                        ? 'col-span-2'
                                        : 'col-span-2 md:col-span-1'
                                }`}
                                type={field.type}
                                error={field.error}
                            />
                        );
                    })}
                    <CustomButton
                        className="text-base rounded-3xl mx-auto col-span-2"
                        type="submit"
                    >
                        Submit
                    </CustomButton>
                </form>
            </Form>
        </div>
    );
}

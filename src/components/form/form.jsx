"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from '../ui/form';

import CustomFormField from './formField';
import { useForm } from 'react-hook-form';
import { formFields, formSchema } from './formData';
import CustomButton from '../customButton/CustomButton';

export function CustomForm({ className }) {
    const defaultValues = {};
    formFields.forEach((field) => {
        defaultValues[field.name] = field.defaultValue;
    });
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues,
    });

    function onSubmit(values) {
        console.log(values);
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
                        className="text-xl rounded-3xl mx-auto col-span-2"
                        type="submit"
                    >
                        Submit
                    </CustomButton>
                </form>
            </Form>
        </div>
    );
}

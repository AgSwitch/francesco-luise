"use client";
import { Input } from "../ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";

import { useState } from "react";
import { Textarea } from "../../components/ui/textarea";
import { useTranslations } from "next-intl";

function CustomFormField({
  form,
  label,
  error,
  type,
  name,
  formDescription,
  placeHolder,
  className,
}) {
  const t = useTranslations("contacts");

  const [isFocused, setIsFocused] = useState(false);
  const [isNotEmpty, setIsNotEmpty] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    setIsNotEmpty(!!e.target.value);
  };

  return (
    <div className={`${className} relative`}>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className={`relative mb-6`}>
            <FormLabel
              className={`absolute text-gray-500 left-4 top-1/2 transform -translate-y-1/2 transition-all duration-200 ease-in-out pointer-events-none ${
                isFocused || isNotEmpty
                  ? "top-2 text-gray-500 left-1 text-[0.50rem] p-2"
                  : ""
              }`}
            >
              {t(label)}
            </FormLabel>
            <FormControl>
              {type === "textArea" ? (
                <Textarea
                  onFocus={handleFocus}
                  onBlurCapture={handleBlur}
                  className="w-full p-2 border bg-background border-gray-800 rounded-md focus:outline-none focus:ring-1 focus:white focus:border-transparent"
                  {...field}
                />
              ) : (
                <Input
                  type={type}
                  className="w-full p-2 border bg-background border-gray-800 rounded-md focus:outline-none focus:ring-1 focus:white focus:border-transparent"
                  placeholder={placeHolder}
                  {...field}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              )}
            </FormControl>
            <FormDescription className="mt-1 text-gray-800">
              {formDescription}
            </FormDescription>
            <FormMessage className="text-error absolute bottom-[-21px]">
              {t(error)}
            </FormMessage>
          </FormItem>
        )}
      />
    </div>
  );
}

export default CustomFormField;

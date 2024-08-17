"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useState } from "react";

function LanguagesDropdown({ languages, lng }) {
  const [language, setLanguage] = useState(lng);
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    const pathWithoutLang = pathname.split('/').slice(2).join('/');
    const newPath = `/${newLanguage}/${pathWithoutLang}`;
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="border-none outline-none w-full h-full">{language.toUpperCase()}</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        <DropdownMenuRadioGroup
          value={language}
          onValueChange={handleLanguageChange}
        >
          {languages.map((lang) => (
            <Tooltip key={lang}>
              <TooltipTrigger asChild>
                <DropdownMenuRadioItem value={lang}>
                  {lang.toUpperCase()}
                </DropdownMenuRadioItem>
              </TooltipTrigger>
            </Tooltip>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguagesDropdown;

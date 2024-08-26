'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import {
  CalendarIcon,
  HomeIcon,
  MailIcon,
  PencilIcon,
} from "lucide-react";

import { FaBlog, FaPencilAlt, FaRegUser, FaWhatsapp } from "react-icons/fa";
import { TbMassage } from "react-icons/tb";

//I18n
import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Dock, DockIcon } from '@/components/magicui/dock';
import NavbarDropdown from './NavbarDropdown';

const Icons = {
  calendar: (props) => <CalendarIcon {...props} />,
  contact: (props) => <MailIcon {...props} />,
  whatsapp: (props) => <FaWhatsapp {...props} />,
  services: (props) => <TbMassage {...props} />,
  aboutMe: (props) => <FaRegUser {...props} />,
  blog: (props) => <FaPencilAlt {...props} />,
};
function Navbar({ lng }) {
    const DATA = {
        navbar: [
            { href: `/${lng}#home`, icon: HomeIcon, label: 'home' },
            {
                href: `/${lng}#services`,
                icon: Icons.services,
                label: 'services',
            },
            { href: `/${lng}#aboutme`, icon: Icons.aboutMe, label: 'aboutme' },
            { href: `/${lng}#blog`, icon: PencilIcon, label: 'blog' },
            { href: `/${lng}#contact`, icon: Icons.contact, label: 'contact' },
        ],
        // pages: [{ href: `/${lng}/blog`, icon: PencilIcon, label: 'blog' }],
    };
    const t = useTranslations('navbar');
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed top-0 z-50 left-1/2 -translate-x-1/2">
            <div className="flex gap-4">
                <TooltipProvider>
                    <Dock direction="middle">
                        {DATA.navbar.map((item, index) => (
                            <DockIcon key={item.label}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                buttonVariants({
                                                    variant: 'ghost',
                                                    size: 'icon',
                                                }),
                                                'size-12 rounded-full',
                                            )}
                                        >
                                            <item.icon className="size-4" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{t(item.label)}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </DockIcon>
                        ))}
                        {/* <Separator
                            orientation="vertical"
                            className="h-full py-2"
                        />
                        {DATA.pages.map((item, index) => (
                            <DockIcon key={item.label}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                buttonVariants({
                                                    variant: 'ghost',
                                                    size: 'icon',
                                                }),
                                                'size-12 rounded-full',
                                            )}
                                        >
                                            <item.icon className="size-4" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{t(item.label)}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </DockIcon>
                        ))} */}
                    </Dock>
                </TooltipProvider>
                <TooltipProvider>
                    <Dock className={'rounded-full'} direction="middle">
                        <DockIcon className={``}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <NavbarDropdown lng={lng} />
                                </TooltipTrigger>
                            </Tooltip>
                        </DockIcon>
                    </Dock>
                </TooltipProvider>
            </div>
        </div>
    );
}
export default Navbar;

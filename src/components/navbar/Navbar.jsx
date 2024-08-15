import React from 'react';
import Link from 'next/link';
import { CalendarIcon, HomeIcon, icons, MailIcon, PencilIcon } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { TbMassage } from "react-icons/tb";


import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Dock, DockIcon } from '@/components/magicui/dock';
//import { ModeToggle } from "@/components/mode-toggle";

const Icons = {
    calendar: (props) => <CalendarIcon {...props} />,
    contact: (props) => <MailIcon {...props} />,
    whatsapp: (props) => <FaWhatsapp {...props} />,
    services: (props) => <TbMassage {...props} />,
};

const DATA = {
    navbar: [
        { href: '#', icon: HomeIcon, label: 'Home' },
        { href: '#', icon: Icons.services, label: 'Services' },
        { href: '#', icon: Icons.contact, label: 'Contact' },
        { href: '#', icon: PencilIcon, label: 'Blog' },
    ],
};

function Navbar() {
    return (
        <div className="relative">
            <TooltipProvider>
                <Dock direction="middle">
                    {DATA.navbar.map((item) => (
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
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    {/* <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild> */}

                    {/* <ModeToggle className="rounded-full" /> */}
                    {/* </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon> */}
                </Dock>
            </TooltipProvider>
        </div>
    );
}
export default Navbar;

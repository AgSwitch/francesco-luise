import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales } from '@/i18n';

const NavbarDropdown = forwardRef(({ lng }, ref) => {
    NavbarDropdown.displayName = 'NavbarDropdown';
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const currentPath = usePathname();
    const cleanPath = currentPath.replace(`/${lng}`, '');

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownRef]);

    const setRefs = (node) => {
        dropdownRef.current = node;
        if (ref) {
            if (typeof ref === 'function') {
                ref(node);
            } else if (typeof ref === 'object') {
                ref.current = node;
            }
        }
    };

    return (
        <div className="relative" ref={setRefs}>
            <div
                onClick={() => setOpen((prev) => !prev)}
                className={cn(
                    buttonVariants({
                        variant: 'ghost',
                        size: 'icon',
                    }),
                    'size-12 rounded-full',
                )}
            >
                {lng}
            </div>
            <div
                className={`absolute border-slate-200 border-[1px] transition-all duration-300 ease-in-out transform ${
                    open
                        ? 'opacity-100 visible block rounded-2xl w-full px-1 py-1 backdrop-blur-md backdrop-filter bg-white/30 translate-y-0 bottom-[-150px]'
                        : 'opacity-0 invisible -translate-y-full w-full'
                }`}
            >
                <div className="flex flex-col gap-2">
                    {locales.map((lang) => {
                        return (
                            <Link
                                href={`/${lang + cleanPath}`}
                                className={`block text-center text-sm py-2 hover:bg-slate-100 rounded-full ${
                                    lng === lang && 'bg-slate-100'
                                }`}
                                key={lang}
                            >
                                {lang}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
});

export default NavbarDropdown;

"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLinkProps {
    href: string;
    exact?: boolean;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
}

export default function NavLink({
    href,
    exact = false,
    children,
    className = '',
    activeClassName = 'active',
}: NavLinkProps) {
    const pathname = usePathname();
    const isActive = exact 
        ? pathname === href 
        : pathname?.startsWith(href);

    const finalClassName = isActive 
        ? `${className} ${activeClassName}`.trim() 
        : className;

    return (
        <Link href={href} className={finalClassName}>
            {children}
        </Link>
    );
}
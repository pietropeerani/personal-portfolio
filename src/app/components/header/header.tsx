'use client';

import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
    theme: string;
}

export default function Header({ theme }: HeaderProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const links = [
        { href: "/work", label: "work" },
        { href: "/about", label: "about" },
    ];

    theme = theme == 'dark'  ? '#fff' : (theme == 'light') ? '#000' : theme

    return (
        <header className="fixed w-full z-50">
            <div className="bg-transparent mx-auto py-12 px-24 flex justify-between">
                <Link href={'/'} style={{ color: theme }}>{process.env.name} {process.env.lastName}</Link>
                <div className="flex gap-8">
                    {
                        links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.3,
                                    transition: 'opacity 0.3s ease',
                                    color: theme
                                }}
                            >
                                {link.label}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </header>
    );
}

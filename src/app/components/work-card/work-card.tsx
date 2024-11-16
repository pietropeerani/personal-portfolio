'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface CardProps {
    title: string,
    subtitle?: string | null,
    textColor: string,
    bgColor: string,
    image?: string,
    imagePosition?: string | undefined,
    link?: string
}

export default function Card({
    title,
    subtitle,
    textColor,
    bgColor,
    image,
    imagePosition,
    link
}: CardProps) {
    const [hover, setHover] = useState(false);

    // if link is defined use Link tag else use div
    const Element: React.ElementType = link ? Link : 'div';

    return (
        <Element
            {...(link && { href: link })}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="block relative md:h-[700px] aspect-[12/16] md:aspect-video overflow-hidden py-12 md:py-20 px-12 md:px-24 transition-all duration-200"
            style={{
                backgroundColor: bgColor,
                transform: hover ? 'scale(0.95)' : 'scale(1)',
                willChange: 'transform'
            }}
        >
            <div className="h-full relative z-10 flex flex-col justify-between text-white">
                <h1 className="title-h2 transition-all duration-200" style={{ color: textColor, transform: hover ? 'translateY(20px)' : 'translateY(0)' }}>{title}</h1>
                {subtitle && <p className="text-3xl font-semibold" style={{color: textColor}}>{subtitle}</p>}
            </div>

            {image && <Image
                src={image}
                fill
                objectPosition={ (imagePosition != "cover") ? imagePosition : undefined }
                objectFit={ (imagePosition == "cover") ? imagePosition : "contain" }
                alt="Image"
            /> }
        </Element>
    )
}

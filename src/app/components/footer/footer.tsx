'use client'

import Link from "next/link"
import { useState } from "react";

export default function Footer() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const links = [
        { label: "GitHub", url: "https://github.com/pietropeerani" },
        { label: "Instagram", url: "" },
    ]

    return(
        <footer className="md:py-52 py-24 max-lg:gap-10 px-24 flex lg:flex-row flex-col border-t border-[#ddd]">
            <div className="md:w-1/2 flex flex-col gap-4">
                <div className="title-h1 mb-6">Let's connect digitally</div>
                <div className="text-md">© 2024 {process.env.name} {process.env.lastName}</div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center mx-auto">
                <div className="flex flex-col text-center lg:text-left">
                {
                    links.map((item, index) => (
                        <Link 
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="inline-block text-4xl"
                            style={{
                                opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.5,
                                transition: 'opacity 0.3s ease'
                            }}
                            href={item.url}
                            target="_blank"
                            >
                                {item.label}
                            </Link>
                    ))
                }
                </div>
            </div>
        </footer>
    )
}
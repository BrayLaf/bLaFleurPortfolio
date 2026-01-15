"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";


export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme === 'dark';
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return true;
    });

    useEffect(() => {
        document.documentElement.classList.toggle('light', !isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('light');
    };

    return(
        <header className="flex justify-center max-w-2xl mx-auto items-center px-8 py-6 gap-8 md:gap-52 border-b-2 border-secondary/10">
            <div className="flex items-center gap-8">
                <Link href="/" className="text-2xl font-bold text-primary">
                    LaFleur
                </Link>
                <nav className="flex gap-8" >
                    <Link href="/projects" alt="Projects" className="text-l text-primary hover:text-secondary transition-colors">
                        Projects
                    </Link>
                    <Link href="/contact" alt="Contact" className="text-l text-primary hover:text-secondary transition-colors">
                        Contact
                    </Link>
                </nav>
            </div>
            <button onClick={toggleTheme} className="p-2 border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors" aria-label="Toggle theme">
                {isDarkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                )}
            </button>
        </header>
    )
}
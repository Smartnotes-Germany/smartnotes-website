"use client";

import React, { useState } from "react";
import Image from "next/image";

/**
 * Navbar component with responsive mobile menu and styled CTA button.
 */
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { href: "/#problem", label: "Problem" },
        { href: "/#produkt", label: "Produkt" },
        { href: "/#vorteile", label: "Vorteile" },
        { href: "/preise", label: "Preise" },
    ];

    return (
        <nav className="border-b border-brand/10 bg-[#F5F5F0]/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto px-6 md:px-8 h-20 flex justify-between items-center">
                <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase hover:opacity-80 transition-opacity">
                    <Image 
                        src="/logo.png" 
                        alt="Smartnotes Logo" 
                        width={32} 
                        height={32} 
                        className="object-contain rounded-md"
                    />
                    Smartnotes
                </div>
                
                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 font-sans">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className="hover:opacity-100 transition-opacity">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <a 
                        href="#warteliste"
                        className="hidden bg-black sm:inline-block text-[10px] font-bold uppercase tracking-widest text-white px-6 py-3 rounded-full hover:scale-105 transition-all shadow-md active:scale-95 font-sans"
                    >
                        Smartnotes Anmeldung
                    </a>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMenu}
                        className="lg:hidden p-2 text-brand focus:outline-none"
                        aria-label="Menü umschalten"
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content */}
            <div 
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="bg-[#F5F5F0] border-t border-brand/10 p-6 flex flex-col gap-6 text-[10px] font-bold uppercase tracking-[0.2em] font-sans">
                    {links.map((link) => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            className="opacity-60 hover:opacity-100 transition-opacity"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a 
                        href="/public#warteliste"
                        className="sm:hidden text-[10px] font-bold uppercase tracking-widest bg-brand text-white bg-black px-6 py-3 rounded-full self-start shadow-md"
                        onClick={() => setIsOpen(false)}
                    >
                        Smartnotes Anmeldung
                    </a>
                </div>
            </div>
        </nav>
    );
};

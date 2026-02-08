import React from "react";

export const Navbar = () => {
    return  <nav className="border-b border-brand/10 bg-[#F5F5F0]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 h-20 flex justify-between items-center">
            <div className="text-xs md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">Smartnotes</div>
            <div className="hidden lg:flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 font-sans">
                <a href="/#analyse" className="hover:opacity-100 transition-opacity">Analyse</a>
                <a href="/#verstehen" className="hover:opacity-100 transition-opacity">Das System</a>
                <a href="/#ueben" className="hover:opacity-100 transition-opacity">Training</a>
                <a href="/preise" className="hover:opacity-100 transition-opacity">Preise</a>
            </div>
            <a href="/#warteliste" className="text-xs font-bold uppercase tracking-widest border-b-2 border-brand pb-1 hover:opacity-50 transition-opacity font-sans">
                Smartnotes Pro Anmeldung
            </a>
        </div>
    </nav>
}
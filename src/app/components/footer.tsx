import React from "react";

/**
 * Footer component with responsive grid layout and semantic navigation links.
 */
export const Footer = () => {
    return (
        <footer className="bg-brand text-black pt-16 md:pt-32 pb-12 px-6 md:px-8">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-6">
                        <h2 className="text-5xl md:text-8xl font-serif font-medium tracking-tighter mb-8">
                            Smartnotes
                        </h2>
                        <p className="text-lg md:text-xl font-sans font-light max-w-sm opacity-60 leading-relaxed">
                            Von Notizen zur Kompetenz.
                            Das adaptive Lernsystem, das deine Wissenslücken erkennt und schließt.                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-6">
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] opacity-30">Plattform</h4>
                            <ul className="space-y-4 text-xs md:text-sm font-sans font-medium uppercase tracking-widest">
                                <li><a href="/#analyse" className="hover:text-emerald-400 transition-colors">Problem</a></li>
                                <li><a href="/#verstehen" className="hover:text-emerald-400 transition-colors">Produkt</a></li>
                                <li><a href="/#ueben" className="hover:text-emerald-400 transition-colors">Vorteile</a></li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] opacity-30">Social</h4>
                            <ul className="space-y-4 text-xs md:text-sm font-sans font-medium uppercase tracking-widest">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a></li>
                                <li><a href="https://discord.gg/FTpnFa2KRP" className="hover:text-emerald-400 transition-colors">Discord</a></li>
                            </ul>
                        </div>

                        <div className="space-y-6 col-span-2 sm:col-span-1">
                            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] opacity-30">Rechtliches</h4>
                            <ul className="space-y-4 text-xs md:text-sm font-sans font-medium uppercase tracking-widest">
                                <li><a href="/impressum" className="hover:text-emerald-400 transition-colors">Impressum</a></li>
                                <li><a href="/datenschutz" className="hover:text-emerald-400 transition-colors">Datenschutz</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">AGB</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-sans font-bold uppercase tracking-[0.2em] opacity-30">
                    <div>© 2026 Smartnotes</div>
                    <div className="flex gap-8">
                        <span>Deutschland</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

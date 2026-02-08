import React from "react";

export const Footer = () => {
    return    <footer className="bg-brand text-black pt-16 md:pt-32 pb-12 px-6 md:px-8">
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24">
                <div className="md:col-span-6">
                    <h2 className="text-5xl md:text-8xl font-serif font-medium tracking-tighter mb-8">
                        Smartnotes<span className="text-emerald-500">.</span>
                    </h2>
                    <p className="text-lg md:text-xl font-sans font-light max-w-sm opacity-60 leading-relaxed">
                        Wir bauen die Brücke zwischen deinen Notizen und echtem Lernerfolg. Die nächste Generation des Begreifens.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 md:col-span-6 md:grid-cols-3">
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] opacity-30">Plattform</h4>
                        <ul className="space-y-4 text-sm font-sans font-medium uppercase tracking-widest">
                            <li><a href="/#analyse" className="hover:text-emerald-500 transition-colors">Analyse</a></li>
                            <li><a href="/#verstehen" className="hover:text-emerald-500 transition-colors">Semantik</a></li>
                            <li><a href="/#ueben" className="hover:text-emerald-500 transition-colors">Training</a></li>
                            <li><span className="opacity-20">App Beta</span></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] opacity-30">Social</h4>
                        <ul className="space-y-4 text-sm font-sans font-medium uppercase tracking-widest">
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Discord</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6 col-span-2 md:col-span-1">
                        <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] opacity-30">Rechtliches</h4>
                        <ul className="space-y-4 text-sm font-sans font-medium uppercase tracking-widest">
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Impressum</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Datenschutz</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">AGB</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-[10px] font-sans font-bold uppercase tracking-[0.2em] opacity-30 text-center md:text-left">
                <div>© 2026 Smartnotes</div>
                <div className="flex gap-8">
                    <span>Deutschland</span>
                </div>
            </div>
        </div>
    </footer>
}
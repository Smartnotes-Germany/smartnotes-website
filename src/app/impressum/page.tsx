import React from "react";

/**
 * Impressum (Legal Notice) page.
 * Provides mandatory legal information about the website operator.
 */
export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-[#F5F5F0] pt-32 pb-24 px-6 md:px-8">
            <div className="max-w-screen-md mx-auto">
                <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tighter mb-12 text-brand">
                    Impressum
                </h1>

                <section className="space-y-12 text-brand/80 font-sans leading-relaxed">
                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-50">Angaben gemäß § 5 DDG</h2>
                        <p className="text-lg">
                            Smartnotes<br />
                            Bernd Rössner<br />
                            Teupitzer Straße 14<br />
                            15755 Teupitz ST Tornow
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-50">Vertreten durch</h2>
                        <p className="text-lg">
                            Bernd Rössner
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-50">Kontakt</h2>
                        <p className="text-lg">
                            Telefon: +49 1512 540 4979<br />
                            E-Mail: info@smartnotes.tech
                        </p>
                    </div>

                    <div className="pt-8 border-t border-brand/10">
                        <p className="text-sm opacity-60">
                            Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}

import React from "react";

/**
 * Datenschutz (Privacy Policy) page.
 * Provides mandatory privacy information for users of the website and app.
 */
export default function DatenschutzPage() {
    return (
        <main className="min-h-screen bg-[#F5F5F0] pt-32 pb-24 px-6 md:px-8">
            <div className="max-w-screen-md mx-auto">
                <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tighter mb-12 text-brand">
                    Datenschutz
                </h1>

                <section className="space-y-12 text-brand/80 font-sans leading-relaxed">
                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-50">1. Verantwortlicher</h2>
                        <p className="text-lg">
                            Bernd Rössner<br />
                            Teupitzer Straße 14<br />
                            15755 Teupitz ST Tornow<br />
                            E-Mail: info@smartnotes.tech
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-50">2. Allgemeine Hinweise</h2>
                        <p className="text-lg">
                            Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten ausschließlich im Einklang mit der Datenschutz-Grundverordnung (DSGVO) sowie den einschlägigen nationalen Datenschutzvorschriften.
                            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-50">3. Hosting der Website und App</h2>
                        <p className="text-lg">
                            Unsere Website und Teile unserer App werden bei
                            Vercel
                            gehostet.
                            Beim Aufruf unserer Website werden automatisch folgende Daten verarbeitet:
                            IP-Adresse
                            Datum und Uhrzeit des Zugriffs
                            Browsertyp und -version
                            Betriebssystem
                            Referrer-URL
                            Diese Daten werden zur Gewährleistung der Stabilität und Sicherheit der Website verarbeitet.
                            Rechtsgrundlage:
                            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherer und stabiler Bereitstellung).
                            Mit dem Anbieter besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
                            Sofern eine Übermittlung in Drittländer (z. B. USA) erfolgt, geschieht dies auf Grundlage geeigneter Garantien, insbesondere EU-Standardvertragsklauseln oder – sofern anwendbar – einer Zertifizierung im Rahmen des EU-U.S. Data Privacy Framework.                        </p>
                    </div>

                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-50">4. Backend-Infrastruktur</h2>
                        <p className="text-lg">
                            Für die Bereitstellung unserer App nutzen wir
                            Convex.
                            Es erfolgt ausschließlich eine Verarbeitung im Rahmen eines Auftragsverarbeitungsvertrags (Art. 28 DSGVO).
                            Technische und pseudonymisierte Daten werden zur Bereitstellung und Stabilität der App verarbeitet.
                            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).                       </p>
                    </div>

                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-50">5. Login per Magic Link & Produktinformationen / Warteliste
                        </h2>
                        <p className="text-lg">
                            Wir verarbeiten Ihre E-Mail-Adresse aus zwei Gründen:
                            Magic Link Login:
                            Versand eines einmalig gültigen Login-Links.
                            Die E-Mail selbst ist nicht mit dem Login-Code verknüpft; die Zuordnung erfolgt pseudonymisiert.
                            Speicherung erfolgt nur solange, wie die E-Mail für den Versand von Magic Links benötigt wird.
                            Produktinformationen / Warteliste:
                            Versand von Produkt-Updates, Launch-Infos und Marketinginformationen.
                            Speicherung in Loops (E-Mail-Marketing) und in Convex (für Zuordnung zu Magic Links).
                            Double-Opt-In: Die Anmeldung erfolgt im Double-Opt-In-Verfahren.
                            Rechtsgrundlagen:
                            Art. 6 Abs. 1 lit. b DSGVO (Magic Link / Login)
                            Art. 6 Abs. 1 lit. a DSGVO (Produktinformationen / Marketing)
                            Widerruf:
                            Einwilligung für Produktinformationen jederzeit über Abmeldelink oder per E-Mail an info@smartnotes.tech widerrufbar.
                            Nach Widerruf werden die Daten in Loops gelöscht; in Convex gelöscht oder pseudonymisiert, sobald sie für Magic Link Login nicht mehr benötigt werden.
                        </p>
                        </div>

                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-50">6. Speicherdauer</h2>
                        <p className="text-lg">
                            Personenbezogene Daten werden nur solange gespeichert, wie dies für die Erfüllung der Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen:
                            - Wartelisten- und Marketingdaten: bis Widerruf der Einwilligung
                            - Magic-Link E-Mails: solange für Login benötigt
                            - PostHog / Analytics: pseudonymisiert, Dauer nach interner Richtlinie
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-50">7. Empfänger & Drittlandtransfer</h2>
                        <p className="text-lg">
                            Daten werden nur an Dritte weitergegeben, wenn dies:
                            zur Vertragserfüllung notwendig ist
                            gesetzlich vorgeschrieben ist
                            zur Bereitstellung der App erforderlich ist (Auftragsverarbeiter)
                            Sofern Daten in Länder außerhalb der EU/des EWR übertragen werden, erfolgt dies nur unter Einhaltung geeigneter Garantien (z. B. Standardvertragsklauseln).                        </p>
                    </div>

                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-50">8. Betroffenenrechte</h2>
                        <p className="text-lg">
                            Sie haben folgende Rechte:
                            Auskunft über gespeicherte personenbezogene Daten (Art. 15 DSGVO)
                            Berichtigung (Art. 16 DSGVO)
                            Löschung (Art. 17 DSGVO)
                            Einschränkung der Verarbeitung (Art. 18 DSGVO)
                            Datenübertragbarkeit (Art. 20 DSGVO)
                            Widerspruch gegen Verarbeitung (Art. 21 DSGVO)
                            Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)
                            Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}

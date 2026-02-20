'use client';

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import React, { useState } from 'react';
import Image from "next/image";

export default function Page() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ageChecked, setAgeChecked] = useState(false);
   const [productInfosChecked, setProductInfosChecked] = useState(false);

   const addUser = useMutation(api.addUser.createUser);

  const handleSubmit = (e: React.FormEvent) => {
     /** Prevents for reloading the page */
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      /** Add user to loops and database */
        addUser({ email: email });
        /** Reset the email field */
        setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-brand font-serif selection:bg-brand selection:text-white">
      <main className="max-w-screen-xl mx-auto px-6 md:px-8 pt-12 md:pt-24">
        
        {/* Editorial Hero */}
        <section className="border-b border-brand/10 pb-16 md:pb-24 mb-16 md:mb-32">
           <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-baseline">
              <div className="md:col-span-8">
                 <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-medium leading-[0.9] md:leading-[0.8] tracking-tighter mb-8 md:mb-12">
                     Lernen <br className="hidden sm:block"/> <span className="italic">neu</span> denken.
                 </h1>
              </div>
              <div className="md:col-span-4">
                 <p className="text-lg md:text-xl font-sans font-light leading-relaxed mb-8 opacity-60">
                    Nicht mehr lernen als nötig, sondern das Richtige. Smartnotes zeigt dir genau, was im Test zählt und schließt gezielt deine Wissenslücken.
                 </p>
              </div>
           </div>
        </section>

        {/* Big Quote / Statement */}
        <section id="problem"  className="mb-24 md:mb-48">
           <div className="max-w-4xl">
              <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-brand block mb-8 md:mb-12">01 — Das Problem</span>
              <h2 className="text-3xl md:text-6xl font-medium leading-tight italic text-brand">
                 „Die meisten Notizen sterben in dem Moment, in dem sie geschrieben werden. Smartnotes ist die KI, die sie zum Leben erweckt.“
              </h2>
           </div>
        </section>

        {/* Problem/Solution Focus Section */}
        <section className="mb-24 md:mb-48 grid md:grid-cols-2 gap-12 md:gap-24 items-start">
           <div>
              <h3 className="text-2xl md:text-4xl font-medium mb-8 italic text-brand">Du hast gelernt – aber fühlst dich unsicher?</h3>
              <p className="text-lg font-sans font-light leading-relaxed mb-8 opacity-70">
                 Oft ist nicht der Fleiß das Problem, sondern die Orientierung im Stoff.
              </p>
              <ul className="space-y-6">
                 {[
                    "Du weißt nicht, was davon wirklich wichtig ist",
                    "Du lernst viel, bleibst aber unsicher",
                    "Niemand erklärt den Stoff nochmal verständlich",
                    "Karteikarten helfen – aber erst, wenn man weiß was"
                 ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start font-sans text-sm md:text-base opacity-70">
                       <div className="mt-1">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                             <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                       </div>
                       {item}
                    </li>
                 ))}
              </ul>
           </div>
           <div className="bg-accent text-white p-8 md:p-12 shadow-2xl">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest opacity-50 block mb-6 md:mb-8">02 — Die Lösung</span>
              <h3 className="text-2xl md:text-3xl font-medium mb-8 italic leading-tight">Lade deine Unterlagen hoch.</h3>
              <p className="font-sans font-light leading-relaxed opacity-80 mb-8">
                 Wir analysieren deine Dokumente sofort und geben dir die Sicherheit, die du brauchst:
              </p>
              <div className="space-y-4 font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                 <div className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                       <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Prüfungsrelevanz erkennen
                 </div>
                 <div className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                       <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Wissenslücken aufdecken
                 </div>
                 <div className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                       <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Gezielt & effizient üben
                 </div>
              </div>
           </div>
        </section>

        {/* MVP Product Showcase: The 3 Steps */}
        <section id="produkt" className="mb-24 md:mb-48 border-t border-brand/10 pt-24">
           <div className="text-center mb-16 md:mb-32">
              <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.4em] text-accent block mb-4">Das Produkt</span>
              <h2 className="text-4xl md:text-7xl font-medium italic text-brand">In drei Schritten zur <br/> <span className="not-italic">Bestnote.</span></h2>
           </div>

           <div className="space-y-16 xl:space-y-64">
              {/* Step 1: Upload */}
              <div className="grid xl:grid-cols-12 gap-8 xl:gap-24 items-center">
                 <div className="xl:col-span-5">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-black block mb-4 xl:mb-6">Schritt 1 — Upload</span>
                    <h3 className="text-2xl xl:text-5xl font-medium mb-6 xl:mb-8 italic text-brand">Laptop-Notizen hochladen.</h3>
                    <p className="text-base xl:text-xl font-sans font-light leading-relaxed opacity-70 mb-6 xl:mb-8">
                       Digital-First für maximale Präzision. Lade deine digitalen Mitschriften, PDFs oder Vorlesungsfolien direkt hoch. Keine Scan-Fehler, kein Qualitätsverlust – nur reines Wissen.
                    </p>
                    <ul className="space-y-3 xl:space-y-4 font-sans text-[10px] md:text-xs uppercase tracking-widest opacity-50">
                       <li className="flex items-center gap-3">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          PDF & Vorlesungsfolien
                       </li>
                       <li className="flex items-center gap-3">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Digitale Mitschriften (Notion, Word & Co.)
                       </li>
                    </ul>
                 </div>
                 <div className="xl:col-span-7 relative group">
                    <div className="rounded-lg md:rounded-[1rem] hover:scale-[1.02] transition-transform shadow-2xl border border-brand/5 overflow-hidden">
                       <Image 
                          src={"/mockup-images/mockup-upload.png"}
                          alt={"Upload Interface"} 
                          width={1300} 
                          height={1300} 
                          className="w-full h-auto duration-700"
                       />
                    </div>
                 </div>
              </div>

              {/* Step 2: Verstehen prüfen */}
              <div className="grid xl:grid-cols-12 gap-8 xl:gap-24 items-center">
                 <div className="order-2 xl:order-1 xl:col-span-7 relative">
                    <div className="rounded-lg md:rounded-[1rem] hover:scale-[1.02] transition-transform shadow-2xl border border-brand/5 overflow-hidden">
                       <Image 
                          src={"/mockup-images/mockup-training.png"}
                          alt={"Training Interface"} 
                          width={1300} 
                          height={1300} 
                          className="w-full h-auto duration-700"
                       />
                    </div>
                 </div>
                 <div className="order-1 xl:order-2 xl:col-span-5">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand/40 block mb-4 xl:mb-6">Schritt 2 — Verstehen prüfen</span>
                    <h3 className="text-2xl lg:text-5xl font-medium mb-6 lg:mb-8 italic text-brand">Gezielte Fragen & Aufgaben.</h3>
                    <p className="text-base lg:text-xl font-sans font-light leading-relaxed opacity-70 mb-6 lg:mb-8">
                       Lerne aktiv statt nur zu lesen: Unsere Übungen decken genau die Bereiche ab, die für deine Prüfung wichtig sind.
                    </p>
                    <a href="#warteliste" className="inline-block bg-brand text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all">Test starten</a>
                 </div>
              </div>

              {/* Step 3: Klarheit (The Interface) */}
              <div className="grid xl:grid-cols-12 gap-8 xl:gap-24 items-center">
                 <div className="xl:col-span-5">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand/40 block mb-4 xl:mb-6">Schritt 3 — Klarheit</span>
                    <h3 className="text-2xl xl:text-5xl font-medium mb-6 xl:mb-8 italic text-brand">Wir filtern das Wichtige.</h3>
                    <p className="text-base xl:text-xl font-sans font-light leading-relaxed opacity-70 mb-6 xl:mb-8">
                       Smartnotes analysiert deine Notizen und trennt Rauschen von Relevanz. Du siehst sofort, welche Themen prüfungsrelevant sind.
                    </p>
                    <div className="border-l-2 border-blue-400 pl-4 xl:pl-6 italic font-serif text-sm xl:text-base text-brand/60">
                       "Nicht mehr alles lernen, sondern das, was wirklich zählt."
                    </div>
                 </div>
                 <div className="xl:col-span-7 relative">
                    <div className="rounded-lg md:rounded-[1rem] hover:scale-[1.02] transition-transform shadow-2xl border border-brand/5 overflow-hidden">
                       <Image 
                          src={"/mockup-images/mockup-ergebnis.png"}
                          alt={"Wissensnetz"} 
                          width={1400}
                          height={1400}
                          className="w-full h-auto duration-700"
                       />
                    </div>
                 </div>
              </div>
           </div>
        </section>

         {/* The Comparison: Evolution of Learning */}
         <section id="vorteile" className="mb-24 md:mb-48 overflow-hidden">
            <div className="max-w-4xl mb-16 md:mb-24">
               <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-brand block mb-8 md:mb-12">03 — Der Vergleich</span>
               <h2 className="text-4xl md:text-7xl font-medium leading-[0.9] italic text-brand">Wiederholen. Erklären. <br/> <span className="not-italic">Entscheiden.</span></h2>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-brand/10 border border-brand/10">
               {/* Column 1: Conventional */}
               <div className="bg-[#F5F5F0] p-8 md:p-12 flex flex-col justify-between">
                  <div>
                     <h4 className="font-sans font-bold text-[10px] opacity-70 uppercase tracking-[0.3em] mb-12">Typische Lern-Apps</h4>
                     <ul className="space-y-6 font-sans text-sm opacity-70">
                        {[
                           { label: "Inhalte üben", check: true },
                           { label: "Fragen klären", check: true },
                           { label: "Lernlücken erkennen", check: false },
                           { label: "Adaptives Training", check: false },
                           { label: "Prüfungsrealität simulieren", check: false },
                           { label: "Systematisches Lernsystem", check: false }
                        ].map((item, i) => (
                           <li key={i} className="flex justify-between items-center border-b border-brand/5 pb-3">
                              {item.label}
                              {item.check ? (
                                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                 </svg>
                              ) : (
                                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-30">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                 </svg>
                              )}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <p className="mt-12 text-xs italic opacity-70 font-sans">Fokus auf reines Wiederholen von Karten.</p>
               </div>

               {/* Column 2: AI Tools */}
               <div className="bg-[#F5F5F0] p-8 md:p-12 flex flex-col justify-between">
                  <div>
                     <h4 className="font-sans font-bold opacity-70 text-[10px] uppercase tracking-[0.3em] mb-12">KI-Chattools</h4>
                     <ul className="space-y-6 font-sans text-sm opacity-70">
                        {[
                           { label: "Inhalte üben", check: true },
                           { label: "Fragen klären", check: true },
                           { label: "Lernlücken erkennen", check: false },
                           { label: "Adaptives Training", check: false },
                           { label: "Prüfungsrealität simulieren", check: false },
                           { label: "Systematisches Lernsystem", check: false }
                        ].map((item, i) => (
                           <li key={i} className="flex justify-between items-center border-b border-brand/5 pb-3">
                              {item.label}
                              {item.check ? (
                                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                 </svg>
                              ) : (
                                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-30">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                 </svg>
                              )}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <p className="mt-12 text-xs italic opacity-70 font-sans">Gute Erklärungen, aber kein Lernsystem.</p>
               </div>

               {/* Column 3: Smartnotes (The Hero) */}
               <div className="bg-accent text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32 group-hover:opacity-40 transition-opacity duration-1000"></div>

                  <div className="relative z-10">
                     <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] mb-12 text-white">Smartnotes</h4>
                     <ul className="space-y-6 font-sans text-sm">
                        {[
                           { label: "Inhalte üben", check: true },
                           { label: "Fragen klären", check: true },
                           { label: "Lernlücken erkennen", check: true },
                           { label: "Adaptives Training", check: true },
                           { label: "Prüfungsrealität simulieren", check: true },
                           { label: "Systematisches Lernsystem", check: true }
                        ].map((item, i) => (
                           <li key={i} className="flex justify-between items-center border-b border-white/10 pb-3">
                              {item.label}
                              {item.check ? (
                                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                 </svg>
                              ) : (
                                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white/30">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                 </svg>
                              )}
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="relative z-10 mt-12">
                     <p className="text-xs italic text-white/60 mb-6 font-sans">Das System, das Analyse und Training vereint.</p>
                     <a href="#warteliste" className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] border-b border-blue-300 pb-1 text-white hover:text-white hover:border-white transition-colors font-sans">Jetzt Platz sichern</a>
                  </div>
               </div>
            </div>
         </section>

        {/* Waitlist Section */}
        <section id="warteliste" className="scroll-mt-20 pb-24 md:pb-48 text-center border-t border-brand/10 pt-24 md:pt-48 max-w-4xl mx-auto px-6">
           <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-brand block mb-8">Exklusiver Zugang</span>
           <h2 className="text-4xl md:text-7xl font-medium tracking-tighter italic mb-8 text-brand">Die Warteliste.</h2>
           <p className="font-sans text-base md:text-lg font-light mb-12 md:mb-16 opacity-60 max-w-2xl mx-auto text-brand">
              Erlebe die Lernwelt von morgen als einer der ersten. Nur eine begrenzte Zahl an Plätzen steht Lernenden offen, die aktiv mitgestalten möchten.
           </p>
           
           {!submitted ? (
             <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10 justify-center items-center max-w-md mx-auto group">
               <div className="w-full relative">
                 <input
                   type="email"
                   id="email"
                   placeholder="E-Mail Adresse"
                   required
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="w-full bg-transparent border-b-2 border-brand/20 py-4 font-sans text-lg md:text-xl text-center focus:outline-none focus:border-brand transition-all placeholder:text-brand/10 text-brand"
                 />
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand group-focus-within:w-full transition-all duration-500"></div>
               </div>

               <div className="flex flex-col gap-6 text-left w-full max-w-md mx-auto">
                  <label className="flex items-start gap-4 cursor-pointer group/label">
                     <div className="relative mt-1">
                        <input
                            type="checkbox"
                            checked={ageChecked}
                            onChange={(e) => setAgeChecked(e.target.checked)}
                            required
                            className="absolute opacity-0 w-5 h-5 cursor-pointer z-10 peer"
                        />
                        <div className="w-5 h-5 border-2 border-brand/20 rounded-sm peer-checked:bg-brand peer-checked:border-brand transition-all duration-200"></div>
                        <svg className="absolute top-1 left-1 w-3 h-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                           <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </div>
                     <span className="text-sm md:text-base font-sans font-light text-brand/70 leading-relaxed group-hover/label:text-brand transition-colors select-none">
                        Ich bestätige, dass ich mindestens 16 Jahre alt bin.
                     </span>
                  </label>
                 <label className={`flex items-start gap-4 cursor-pointer group/label transition-opacity ${!ageChecked ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}>
                   <div className="relative mt-1">
                     <input
                       type="checkbox"
                       checked={productInfosChecked}
                       onChange={(e) => setProductInfosChecked(e.target.checked)}
                       disabled={!ageChecked}
                       required
                       className={`absolute opacity-0 w-5 h-5 z-10 peer ${!ageChecked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                     />
                     <div className="w-5 h-5 border-2 border-brand/20 rounded-sm peer-checked:bg-brand peer-checked:border-brand transition-all duration-200"></div>
                     <svg className="absolute top-1 left-1 w-3 h-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                       <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                   </div>
                   <span className="text-sm md:text-base font-sans font-light text-brand/70 leading-relaxed group-hover/label:text-brand transition-colors select-none">
                     Ja, ich möchte Updates zum Smartnotes-Launch und Produktinformationen per E-Mail erhalten.
                   </span>
                 </label>
               </div>

               <button 
                 type="submit"
                 disabled={!ageChecked || !productInfosChecked}
                 className="bg-black rounded-full text-white font-sans px-10 md:px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand/10 disabled:opacity-30 disabled:scale-100 disabled:cursor-not-allowed"
               >
                 Pro-Platz Sichern
               </button>
             </form>
           ) : (
             <div className="animate-fade-in max-w-2xl mx-auto text-center py-8 md:py-12 px-4">
               <div className="w-16 h-16 md:w-20 md:h-20 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-brand/20">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:w-10 md:h-10">
                   <polyline points="20 6 9 17 4 12"></polyline>
                 </svg>
               </div>
               <h3 className="text-3xl md:text-5xl font-medium tracking-tighter italic mb-4 text-brand">Vielen Dank.</h3>
               <p className="font-sans text-brand/60 text-lg md:text-xl font-light leading-relaxed">
                 Du stehst nun auf der Warteliste. <br className="hidden md:block" />
                 Wir melden uns bei dir, sobald ein Platz für dich bereitsteht.
               </p>
             </div>
           )}
        </section>

      </main>
    </div>
  );
}
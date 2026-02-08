'use client';

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import React, { useState } from 'react';
import Image from "next/image";
import {Navbar} from "./navbar";
import {Footer} from "./footer";

export default function Page() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const addUser = useMutation(api.addUser.createUser);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
        addUser({ email: email });
        setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-brand font-serif selection:bg-brand selection:text-white">
      
      <Navbar />

      <main className="max-w-screen-xl mx-auto px-6 md:px-8 pt-12 md:pt-24">
        
        {/* Editorial Hero */}
        <section className="border-b border-brand/10 pb-16 md:pb-24 mb-16 md:mb-32">
           <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-baseline">
              <div className="md:col-span-8">
                 <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-medium leading-[0.9] md:leading-[0.8] tracking-tighter mb-8 md:mb-12">
                    Lernen <br className="hidden sm:block"/> <span className="italic">neu</span> denken.
                 </h1>
              </div>
              <div className="md:col-span-4">
                 <p className="text-lg md:text-xl font-sans font-light leading-relaxed mb-8">
                    Smartnotes ist die Brücke zwischen deinen Notizen und echtem Lernerfolg. Wir nutzen KI nicht nur zum Zusammenfassen, sondern zum Begreifen.
                 </p>
              </div>
           </div>
        </section>

        {/* Big Quote / Statement */}
        <section className="mb-24 md:mb-48">
           <div className="max-w-4xl">
              <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-emerald-800 block mb-8 md:mb-12">01 — Das Problem</span>
              <h2 className="text-3xl md:text-6xl font-medium leading-tight italic">
                 „Die meisten Notizen sterben in dem Moment, in dem sie geschrieben werden. Smartnotes ist die KI, die sie zum Leben erweckt.“
              </h2>
           </div>
        </section>

        {/* Feature Narrative Grid */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-24 mb-24 md:mb-48">
           <div className="relative aspect-[4/5] md:aspect-[3/4] bg-brand overflow-hidden group order-2 md:order-1">
              <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-700"></div>
              <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 text-white">
                 <div className="text-[10px] font-sans font-bold uppercase tracking-widest mb-4 opacity-50 underline">Systematik</div>
                 <h3 className="text-3xl md:text-4xl mb-6">Automatisierte Einordnung.</h3>
                 <p className="font-sans font-light text-white/60 text-sm md:text-base leading-relaxed">
                    Verliere dich nie wieder in losen Blättern. Unsere KI erkennt Themengebiete und ordnet deine Gedanken nahtlos in deinen bestehenden Wissensbaum ein.
                 </p>
              </div>
           </div>
           <div className="flex flex-col justify-center order-1 md:order-2 mb-12 md:mb-0">
              <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-emerald-800 block mb-8 md:mb-12">02 — Die Lösung</span>
              <h3 className="text-4xl md:text-5xl font-medium mb-8 md:mb-12 italic leading-tight">Vom Stapel Papier zum aktiven Verständnis.</h3>
              <p className="text-lg md:text-xl font-sans font-light leading-relaxed mb-8 md:mb-12 text-brand/70">
                 Smartnotes schließt die Lücke. Wir verwandeln deine vorhandenen Aufzeichnungen direkt in Übungseinheiten. Deine Notizen werden zu deinem individuellen KI-Trainer.
              </p>
              <ul className="space-y-4 md:space-y-6 font-sans text-[10px] md:text-sm font-medium uppercase tracking-widest list-none">
                 <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-800"></div>
                    Wissensextraktion in Sekunden
                 </li>
                 <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-800"></div>
                    Intelligente Vernetzung
                 </li>
                 <li className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-800"></div>
                    Maximaler Lernfortschritt
                 </li>
              </ul>
           </div>
        </section>

        {/* App Presentation: The Device Showcase */}
        <section className="mb-24 md:mb-48 relative">
            <div className="text-center mb-12 md:mb-16">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-brand/40 block mb-4">Das Interface</span>
                <h2 className="text-3xl md:text-5xl font-medium italic">Ästhetik trifft Intelligenz.</h2>
            </div>
            
            <div className="relative mx-auto max-w-5xl">
                {/* iPad Mockup Placeholder */}
                <div className="bg-[#f8fafc] rounded-2xl md:rounded-[3rem] p-2 md:p-4 shadow-2xl relative overflow-hidden aspect-[11/7] border-4 md:border-8 border-brand/20">
                    <Image src={"/img.png"} alt={"Wissensnetz"} width={1300} height={1300} className="w-full h-full object-cover"/>
                </div>
                {/* Subtle Description */}
                <div className="mt-8 text-center max-w-xl mx-auto px-4">
                    <p className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] opacity-30 leading-relaxed">
                        Visualisierte Intelligenz: Dein persönliches Wissensnetz verknüpft Konzepte fachübergreifend und macht verborgene Zusammenhänge deiner Notizen sichtbar.
                    </p>
                </div>
            </div>
        </section>

        {/* Feature 1: Analyse & Extraktion */}
        <section id="analyse" className="grid md:grid-cols-2 gap-12 md:gap-24 mb-24 md:mb-48 items-center">
           <div className="order-2 md:order-1 flex flex-col justify-center">
              <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-emerald-800 block mb-8 md:mb-12">03 — Analyse</span>
              <h3 className="text-4xl md:text-5xl font-medium mb-8 md:mb-12 italic leading-tight">Wissen extrahieren, statt nur speichern.</h3>
              <p className="text-lg md:text-xl font-sans font-light leading-relaxed mb-8 md:mb-12 text-brand/70">
                 Importiere deine bestehenden Notizen, Skripte oder PDFs. Smartnotes analysiert sie in Lichtgeschwindigkeit und zieht die wichtigsten Erkenntnisse heraus.
              </p>
           </div>
           <div className="order-1 md:order-2 bg-white p-8 md:p-12 shadow-2xl rounded-sm border border-brand/5 aspect-square flex items-center justify-center">
              <div className="relative w-full space-y-6 md:space-y-8">
                 <div className="h-px w-full bg-brand/10"></div>
                 <div className="h-px w-full bg-brand/10"></div>
                 <div className="h-px w-full bg-brand/10"></div>
                 <div className="h-px w-full bg-brand/10"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                    <span className="text-xl md:text-4xl italic opacity-10 uppercase tracking-widest">Extraction Layer</span>
                 </div>
              </div>
           </div>
        </section>

        {/* Feature 2: Verstehen */}
        <section id="verstehen" className="grid md:grid-cols-2 gap-12 md:gap-24 mb-24 md:mb-48 items-center">
           <div className="bg-brand p-8 md:p-12 aspect-[4/5] flex flex-col justify-end text-white relative overflow-hidden group mb-12 md:mb-0">
              <div className="absolute top-12 left-12 right-12 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                 <svg viewBox="0 0 100 100" className="w-full h-auto">
                    <circle cx="20" cy="20" r="2" fill="white" />
                    <circle cx="80" cy="30" r="2" fill="white" />
                    <circle cx="50" cy="50" r="2" fill="white" />
                    <circle cx="30" cy="80" r="2" fill="white" />
                    <line x1="20" y1="20" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
                    <line x1="80" y1="30" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
                    <line x1="30" y1="80" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
                 </svg>
              </div>
              <h4 className="text-4xl md:text-6xl font-medium italic mb-6 leading-none relative z-10">Kognitive <br/> Resonanz.</h4>
           </div>
           <div className="flex flex-col justify-center">
              <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-emerald-800 block mb-8 md:mb-12">04 — Verstehen</span>
              <h3 className="text-4xl md:text-5xl font-medium mb-8 md:mb-12 italic leading-tight">Wissen greifbar machen.</h3>
              <p className="text-lg md:text-xl font-sans font-light leading-relaxed mb-8 text-brand/70">
                 Echtes Verständnis entsteht durch Vernetzung. Unsere KI analysiert den gesamten Kontext deiner Aufzeichnungen auf semantischer Ebene.
              </p>
              <p className="text-base md:text-lg font-sans font-light leading-relaxed mb-8 md:mb-12 text-brand/70 border-l-2 border-brand/10 pl-6 md:pl-8">
                 Statt Informationen stumpf zu kopieren, setzt Smartnotes neue Inhalte aktiv in Bezug zu deinem vorhandenen Wissen.
              </p>
              <button className="text-[10px] font-sans font-bold uppercase tracking-widest border-b-2 border-brand pb-1 self-start hover:opacity-50 transition-all">
                 Engine entdecken
              </button>
           </div>
        </section>

        {/* Feature 3: Üben */}
        <section id="ueben" className="mb-24 md:mb-48 border-t border-brand/10 pt-16 md:pt-24 text-center">
           <div className="max-w-3xl mx-auto mb-16 md:mb-24">
              <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-emerald-800 block mb-8 md:mb-12">05 — Üben</span>
              <h3 className="text-4xl md:text-6xl font-medium mb-8 md:mb-12 italic leading-tight">Dein Training.</h3>
              <p className="text-lg md:text-xl font-sans font-light leading-relaxed text-brand/70 px-4">
                 Automatisierte Flashcards und Quizze, die auf deinem individuellen Wissen basieren. Smartnotes weiß genau, was du beherrscht.
              </p>
           </div>
           
           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4">
              {[1, 2, 3].map((i) => (
                 <div key={i} className={`p-8 md:p-12 border border-brand/10 bg-white hover:shadow-2xl transition-all duration-700 ${i === 2 ? 'md:-translate-y-8' : ''} ${i === 3 ? 'sm:col-span-2 md:col-span-1' : ''}`}>
                    <div className="text-[10px] font-sans font-bold uppercase tracking-widest opacity-30 mb-8">Card_{i}</div>
                    <div className="h-16 md:h-24 flex items-center justify-center mb-8">
                       <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand/10 flex items-center justify-center">
                          <span className="text-[10px] font-bold">Q{i}</span>
                       </div>
                    </div>
                    <div className="h-2 w-full bg-brand/5 rounded-full mb-2"></div>
                    <div className="h-2 w-3/4 bg-brand/5 rounded-full mx-auto"></div>
                 </div>
              ))}
           </div>
        </section>

        {/* Waitlist Section */}
        <section id="warteliste" className="pb-24 md:pb-48 text-center border-t border-brand/10 pt-24 md:pt-48 max-w-4xl mx-auto px-6">
           <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-emerald-800 block mb-8">Exklusiver Zugang</span>
           <h2 className="text-4xl md:text-7xl font-medium tracking-tighter italic mb-8">Die Warteliste.</h2>
           <p className="font-sans text-base md:text-lg font-light mb-12 md:mb-16 opacity-60 max-w-2xl mx-auto">
             Werde Teil der ersten Phase. Wir öffnen den Zugang für ausgewählte Studierende, um die Zukunft des Lernens gemeinsam zu gestalten.
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
                   className="w-full bg-transparent border-b-2 border-brand/20 py-4 font-sans text-lg md:text-xl text-center focus:outline-none focus:border-brand transition-all placeholder:text-brand/10"
                 />
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand group-focus-within:w-full transition-all duration-500"></div>
               </div>
               <button 
                 type="submit"
                 className="bg-black rounded-full text-white font-sans px-10 md:px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-brand/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand/10"
               >
                 Pro-Platz Sichern
               </button>
             </form>
           ) : (
             <div className="bg-emerald-50 border border-emerald-100 p-8 md:p-12 rounded-sm animate-fade-in max-w-2xl mx-auto text-center">
               <p className="font-sans font-bold text-emerald-900 uppercase tracking-[0.2em] text-base mb-4">Erfolgreich.</p>
               <p className="font-sans text-emerald-800/70 text-base md:text-lg">Du stehst nun auf der Warteliste.</p>
             </div>
           )}
        </section>

      </main>

      <Footer />
    </div>
  );
}
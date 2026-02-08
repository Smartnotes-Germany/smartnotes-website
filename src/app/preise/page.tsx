import React from 'react';
import { Navbar } from '../navbar';
import { Footer } from '../footer';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-brand font-serif selection:bg-brand selection:text-white">
      <Navbar />

      <main className="max-w-screen-xl mx-auto px-6 md:px-8 pt-12 pb-24 md:pb-48">
        {/* Header Section */}
        <section className="mb-16 flex lg:flex lg:justify-between justify-center md:mb-24">
          <div className="flex lg:justify-between justify-center w-10/12 lg:w-full lg:flex-row flex-col md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-8">
              <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-medium leading-[0.9] md:leading-[0.8] tracking-tighter mb-8">
                Dein <br className="hidden sm:block"/> <span className="italic">Weg.</span>
              </h1>
            </div>
            <div className="flex lg:flex xl:justify-end lg:mt-20 justify-center">
              <p className="text-lg md:text-xl font-sans lg:w-6/12 font-light leading-relaxed opacity-60">
                Wir starten gemeinsam in die Zukunft des Lernens. Wähle den Zugang, der zu dir passt.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Card Section */}
        <section className="flex flex-col w-full xl:flex-row items-center justify-center lg:justify-between lg:grid-cols-12 gap-12 lg:gap-32">
          <div className=" flex lg:flex lg:justify-end justify-center space-y-8 lg:w-9/12 w-10/12 mb-12 lg:mb-0">
            <div>
              <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-emerald-800 block mb-6 md:mb-8">Option</span>
              <h2 className="text-3xl md:text-5xl font-medium leading-tight italic mb-6 md:mb-8">
                Mitgestalten <br className="hidden md:block"/> und Fördern.
              </h2>
              <p className="text-base md:text-lg font-sans font-light leading-relaxed mb-8 md:mb-12 opacity-60">
                Egal für welchen Weg du dich entscheidest, du bist Teil der Bewegung für besseres Verständnis.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Smartnotes Pro
                  </h4>
                  <p className="font-sans w-10/12 text-xs md:text-sm opacity-60">Kostenloser Zugang im Austausch für dein Feedback. Plätze werden monatlich vergeben.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 justify-center lg:flex grid lg:ml-32 md:grid-cols-2 w-9/12 md:w-auto gap-6">
            {/* Option 1: Closed Beta (Free) */}
            <div className="bg-emerald-900 text-white p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[450px] md:min-h-[500px] border border-emerald-800 group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>

               <div>
                  <div className="flex justify-between items-start mb-8">
                     <span className="text-[10px] font-sans font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">Limitiert</span>
                  </div>

                  <h3 className="text-2xl font-serif italic mb-2">Smartnotes Pro</h3>

                  <p className="font-sans text-sm font-light leading-relaxed opacity-80 mb-8 border-l-2 border-emerald-500/50 pl-4">
                     Du erhältst den vollen Umfang kostenlos. Wir erwarten dein Feedback zur Verbesserung des Systems.
                  </p>

                  <ul className="space-y-3 font-sans text-[10px] font-bold uppercase tracking-widest opacity-80">
                     <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>Voller Zugriff auf Features</li>
                     <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>Zugang zur Community</li>
                  </ul>
               </div>

               <a href="/#warteliste" className="mt-8 block w-full bg-white text-emerald-950 text-center font-sans py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-emerald-50 transition-all shadow-lg">
                  Auf die Warteliste
               </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
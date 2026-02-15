import React from 'react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-brand font-serif selection:bg-brand selection:text-white">
      <main className="max-w-screen-xl mx-auto px-6 md:px-8 pt-12 pb-24 md:pb-48">
        {/* Header Section */}
        <section className="mb-16 flex xl:justify-between justify-center">
          <div className="flex sm:justify-center md:w-9/12 flex-col lg:justify-between w-10/12 lg:w-8/12 xl:w-full items-center lg:items-start sm:flex-row gap-8 md:gap-12">
            <div className="md:col-span-8">
              <h1 className="text-5xl lg:text-7xl lg:text-[8rem] xl:text-[10rem] font-medium leading-[0.9] md:leading-[0.8] tracking-tighter mb-8 text-brand">
                Dein <br className="hidden sm:block"/> <span className="italic">Weg.</span>
              </h1>
            </div>
            <div className="flex lg:flex lg:justify-end lg:mt-20 justify-center">
              <p className="text-lg md:text-xl font-sans md:w-10/12 lg:w-11/12 xl:w-7/12 font-light leading-relaxed opacity-60 text-brand">
                Wir starten gemeinsam in die Zukunft des Lernens. Wähle den Zugang, der zu dir passt.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Card Section */}
        <section className="flex flex-col w-full xl:flex-row items-center justify-center lg:justify-between lg:grid-cols-12 gap-12 lg:gap-32">
          <div className=" flex lg:flex lg:justify-end justify-center space-y-8 md:w-9/12 w-10/12 mb-12 lg:mb-0">
            <div>
              <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-brand block mb-6 md:mb-8">Option</span>
              <h2 className="text-3xl md:text-5xl font-medium leading-tight italic mb-6 md:mb-8 text-brand">
                Mitgestalten <br className="hidden md:block"/> und Fördern.
              </h2>
              <p className="text-base md:text-lg font-sans lg:w-11/12 font-light leading-relaxed mb-8 md:mb-12 opacity-60 text-brand">
                Egal für welchen Weg du dich entscheidest, du bist Teil der Bewegung für besseres Verständnis.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center gap-2 text-brand">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Smartnotes Pro
                  </h4>
                  <p className="font-sans w-10/12 text-xs md:text-sm opacity-60 text-brand">Kostenloser Zugang zu all unseren Funktionen. Limiterte Anzahl an Plätzen!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 justify-center md:w-2/3 lg:w-1/2 md:flex grid md:grid-cols-2 w-9/12 gap-6">
            {/* Option 1: Closed Beta (Free) */}
            <div className="bg-accent text-white p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[450px] md:min-h-[500px] border border-brand/20 group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>

               <div>
                  <div className="flex justify-between items-start mb-8">
                     <span className="text-[10px] font-sans font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">Limitiert</span>
                  </div>

                  <h3 className="text-2xl font-serif italic mb-2">Smartnotes Pro</h3>

                  <p className="font-sans text-sm font-light leading-relaxed opacity-80 mb-8 border-l-2 border-blue-400/50 pl-4">
                     Du erhältst den vollen Umfang kostenlos und hilfst uns dabei, das Lernen der Zukunft zu gestalten.
                  </p>

                  <ul className="space-y-3 font-sans text-[10px] font-bold uppercase tracking-widest opacity-80">
                      <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div>Relevanz Filterung</li>
                      <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div>Lücken finden</li>
                      <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div>Zugang zur Community</li>
                      <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div>Kostenloser Nutzung</li>
                      <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div>Keine Werbung</li>
                  </ul>
               </div>

               <a href="/#warteliste" className="mt-8 block w-full bg-white text-black text-center font-sans py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white/90 transition-all shadow-lg">
                   Auf die Warteliste
               </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
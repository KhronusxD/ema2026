import React from 'react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-ministry-dark text-white relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-sans font-bold text-sm text-ministry-accent uppercase tracking-widest mb-4">
            Diferenciais
          </h2>
          <h3 className="font-sans font-bold text-4xl md:text-5xl mb-6 text-white leading-tight">
            Fundamento bíblico, formação espiritual e prática missionária real.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 border border-ministry-accent/20">
              <img src="/features/professores.png" alt="Professores" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="font-sans font-bold text-xl mb-3 border-l-4 border-ministry-accent pl-4 text-white">Professores em Campo</h4>
            <p className="font-serif text-gray-400 leading-relaxed text-sm">
              Nossa equipe é formada por professores que vivem a missão na prática, atuando em diferentes contextos e regiões do mundo.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="relative group md:-mt-12">
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 border border-ministry-accent/20">
              <img src="/features/pratica.png" alt="Prática Missionária" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="font-sans font-bold text-xl mb-3 border-l-4 border-ministry-accent pl-4 text-white">Compromisso com Justiça Social</h4>
            <p className="font-serif text-gray-400 leading-relaxed text-sm">
              O ensino encontra seu desdobramento na prática, conectando a teoria à vivência real.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 border border-ministry-accent/20">
              <img src="/features/formacao.png" alt="Formação Integral" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h4 className="font-sans font-bold text-xl mb-3 border-l-4 border-ministry-accent pl-4 text-white">Formação Integral</h4>
            <p className="font-serif text-gray-400 leading-relaxed text-sm">
              Cuidamos com o entendimento do ser humano como um todo — a missão sustentável nasce de pessoas curadas e maduras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
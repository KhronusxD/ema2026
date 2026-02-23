import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Asterisk, Globe, Cross, BookOpen, Flag } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-ministry-base overflow-hidden pt-20">
      {/* Background Texture - Contours */}
      <div className="absolute inset-0 z-0 bg-contours opacity-30"></div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center relative z-10 w-full max-w-7xl mx-auto px-4 pb-32">



        {/* Headline - Print Style */}
        <div className="flex flex-col items-center text-center space-y-1">
          <h1 className="font-condensed text-5xl md:text-7xl lg:text-8xl leading-tight text-white tracking-normal flex flex-col items-center my-4 font-bold">
            <span>Preparando a Igreja,</span>
            <span>Expandindo o Reino.</span>
          </h1>
        </div>

        {/* CTA Button with z-index to stay above elements but not fixed nav */}
        <div className="mt-12 relative z-30 flex flex-col items-center">
          <Button variant="pill" className="group" aria-label="Fazer Pré-inscrição">
            <span className="mr-2">Fazer Pré-inscrição</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="mt-4 text-xs md:text-sm text-gray-400 max-w-md text-center font-serif leading-relaxed">
            *Você será redirecionado para o nosso grupo de WhatsApp para garantir sua vaga.
          </p>
        </div>
      </div>

      {/* Bottom Pattern Strip (Infinite Scroll) */}
      <div className="w-full bg-emerald-900/40 backdrop-blur-sm border-t border-emerald-500/30 overflow-hidden py-3 absolute bottom-0 z-20">
        <div className="flex items-center space-x-12 animate-scroll w-[200%]">
          {/* Repeating pattern block 1 */}
          <div className="flex items-center space-x-12 opacity-80">
            <Asterisk className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <Globe className="w-10 h-10 text-white" strokeWidth={1.5} />
            <BookOpen className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <Cross className="w-10 h-10 text-white" strokeWidth={1.5} />
            <Flag className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />

            <Asterisk className="w-10 h-10 text-white" strokeWidth={1.5} />
            <Globe className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <BookOpen className="w-10 h-10 text-white" strokeWidth={1.5} />
            <Cross className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <Flag className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          {/* Repeating pattern block 2 for smoothness */}
          <div className="flex items-center space-x-12 opacity-80">
            <Asterisk className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <Globe className="w-10 h-10 text-white" strokeWidth={1.5} />
            <BookOpen className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <Cross className="w-10 h-10 text-white" strokeWidth={1.5} />
            <Flag className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />

            <Asterisk className="w-10 h-10 text-white" strokeWidth={1.5} />
            <Globe className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <BookOpen className="w-10 h-10 text-white" strokeWidth={1.5} />
            <Cross className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <Flag className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
};
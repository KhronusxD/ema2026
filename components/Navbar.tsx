import React from 'react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-ministry-base/90 backdrop-blur-md border-b border-ministry-accent/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex flex-col leading-none">
          <span className="font-condensed text-3xl text-white tracking-wide">EMA</span>
          <span className="text-[0.6rem] text-ministry-accent tracking-widest uppercase font-bold">Escola de Missões</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#manifesto" className="text-sm font-bold text-white hover:text-ministry-accent transition-colors uppercase tracking-wide">Sobre</a>
          <a href="#features" className="text-sm font-bold text-white hover:text-ministry-accent transition-colors uppercase tracking-wide">Diferenciais</a>
          <a href="#timeline" className="text-sm font-bold text-white hover:text-ministry-accent transition-colors uppercase tracking-wide">Cronograma</a>
          <a href="#faq" className="text-sm font-bold text-white hover:text-ministry-accent transition-colors uppercase tracking-wide">Dúvidas</a>
        </div>

        {/* CTA */}
        <div>
          <Button variant="pill" className="!text-sm !px-6 !py-2 !shadow-none hover:!shadow-none border-0" aria-label="Inscrição">
            Inscrição
          </Button>
        </div>
      </div>
    </nav>
  );
};
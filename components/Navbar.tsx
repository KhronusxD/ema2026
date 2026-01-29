import React from 'react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-ministry-base/90 backdrop-blur-md border-b border-ministry-accent/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex flex-col leading-none">
          <img src="/logo-white.png" alt="EMA Logo" className="h-16 w-auto object-contain" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#manifesto" className="text-sm font-bold text-white hover:text-ministry-accent transition-colors uppercase tracking-wide">Sobre</a>
          <a href="#features" className="text-sm font-bold text-white hover:text-ministry-accent transition-colors uppercase tracking-wide">Diferenciais</a>
          <a href="#teachers" className="text-sm font-bold text-white hover:text-ministry-accent transition-colors uppercase tracking-wide">Professores</a>
          <a href="#investment" className="text-sm font-bold text-white hover:text-ministry-accent transition-colors uppercase tracking-wide">Investimento</a>
          <a href="#timeline" className="text-sm font-bold text-white hover:text-ministry-accent transition-colors uppercase tracking-wide">Cronograma</a>
          <a href="#faq" className="text-sm font-bold text-white hover:text-ministry-accent transition-colors uppercase tracking-wide">Dúvidas</a>
        </div>

        {/* CTA */}
        <div>
          <Button variant="pill" className="!text-xs !px-4 !py-2 !shadow-none hover:!shadow-none border-0" aria-label="Entrar no Grupo VIP">
            Grupo VIP
          </Button>
        </div>
      </div>
    </nav>
  );
};
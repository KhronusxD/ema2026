import React from 'react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ministry-dark text-white pt-20 pb-10 border-t-4 border-ministry-accent">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="font-sans font-black text-3xl md:text-5xl mb-6 leading-tight">
            FAÇA EMA. NÃO É APENAS UMA FORMAÇÃO, É UM CHAMADO.
          </h2>
          <div className="flex flex-col items-center">
            <Button variant="primary" className="text-xl px-4 md:px-12 py-5 shadow-2xl animate-pulse" aria-label="Fazer Pré-inscrição Agora">
              FAZER PRÉ-INSCRIÇÃO AGORA
            </Button>
            <p className="mt-4 text-xs md:text-sm text-gray-400 max-w-md mx-auto font-serif leading-relaxed">
              *Você será redirecionado para o nosso grupo de WhatsApp para garantir sua vaga.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-serif text-gray-400">
          <p>© 2026 Escola de Missões e Avivamento.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-ministry-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-ministry-accent transition-colors">YouTube</a>
            <a href="#" className="hover:text-ministry-accent transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
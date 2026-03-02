import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down and not at the very top
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // "Show on stop" logic
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // If stopped for 500ms, show navbar (unless at top, where it's always shown by logic above)
      scrollTimeout.current = setTimeout(() => {
        setIsVisible(true);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-full bg-ministry-accent text-ministry-dark font-bold text-center py-2 px-4 sm:text-sm uppercase tracking-wider relative shadow-md">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes text-blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-text-blink { animation: text-blink 1.5s ease-in-out infinite; }
        `}} />
        <span className="animate-text-blink inline-block drop-shadow-sm">Inscrições Abertas - 60 Vagas para a turma de 2026.1 - Garanta a sua!</span>
      </div>
      <nav className="w-full bg-ministry-base/90 backdrop-blur-md border-b border-ministry-accent/20">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex flex-col leading-none">
            <img src="/logo-white.png" alt="EMA Logo" className="h-14 w-auto object-contain" />
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
            <a href="#investment" className="block">
              <Button variant="pill" className="!text-xs !px-4 !py-2 !shadow-none hover:!shadow-none border-0" aria-label="Ingressar na Turma">
                Ingressar na Turma
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
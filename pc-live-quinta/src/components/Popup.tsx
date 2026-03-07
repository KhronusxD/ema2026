import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Popup({ isOpen, onClose }: PopupProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      // Dispara evento pro GTM
      const dataLayer = (window as any).dataLayer || [];
      dataLayer.push({
        'event': 'form_lead_gerado'
      });
      navigate('/obrigado');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md p-8 bg-brand-dark border border-white/10 rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8 mt-4">
          <h2 className="text-3xl font-display font-black text-white mb-3">
            Falta só um detalhe...
          </h2>
          <p className="text-gray-400 text-lg">
            Para qual e-mail devemos enviar o material de apoio da nossa reunião?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="sr-only">
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="w-full px-5 py-4 bg-white/5 border-2 border-white/10 rounded-2xl focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/20 outline-none transition-all text-lg text-white placeholder-gray-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="w-full px-5 py-4 bg-white/5 border-2 border-white/10 rounded-2xl focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/20 outline-none transition-all text-lg text-white placeholder-gray-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-accent via-[#00e65c] to-brand-accent bg-[length:200%_auto] text-brand-dark font-black text-lg py-4 px-6 rounded-2xl transition-all duration-300 animate-gradient-x shadow-[0_0_30px_rgba(0,255,102,0.3)] hover:shadow-[0_0_40px_rgba(0,255,102,0.5)] uppercase tracking-wide hover:scale-[1.02]"
          >
            CONTINUAR PARA O GRUPO VIP
            <ArrowRight size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}

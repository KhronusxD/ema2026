import { AlertTriangle, Gift, MessageCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-4 font-sans text-brand-light relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl w-full bg-brand-dark/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 md:p-14 text-center border border-white/10 relative z-10">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-500/20 text-red-500 mb-8 animate-bounce border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
          <AlertTriangle size={48} strokeWidth={2.5} />
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-black text-red-500 mb-8 uppercase tracking-tight drop-shadow-lg">
          Atenção: Você ainda não está na sala!
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Para não perdermos a comunicação até quinta-feira (12/03), o link seguro do Google Meet será liberado apenas para quem estiver no Grupo VIP do WhatsApp.
        </p>

        <div className="bg-brand-accent/10 border-2 border-brand-accent/30 rounded-3xl p-8 mb-12 text-left flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-[0_0_30px_rgba(0,255,102,0.1)]">
          <div className="flex-shrink-0 bg-brand-accent/20 p-4 rounded-2xl">
            <Gift className="text-brand-accent" size={40} />
          </div>
          <div>
            <h3 className="font-black text-brand-accent text-2xl mb-2 uppercase tracking-wide">
              Aviso:
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              Quem estiver no grupo e participar ao vivo vai ter acesso a uma condição surreal que inclui nossos cursos extras liberados de graça.
            </p>
          </div>
        </div>

        <a
          href="https://chat.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-4 bg-[#25D366] text-white font-black text-xl md:text-2xl py-6 px-8 rounded-2xl hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 animate-pulse-accent shadow-[0_0_40px_rgba(37,211,102,0.5)] w-full uppercase tracking-wide"
        >
          <MessageCircle size={32} />
          ENTRAR NO GRUPO VIP AGORA
        </a>
      </div>
    </div>
  );
}

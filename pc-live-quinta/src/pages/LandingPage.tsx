import { useState } from 'react';
import { CheckCircle2, Clock, Play, Calendar, XCircle } from 'lucide-react';
import FloatingElements from '../components/FloatingElements';
import Popup from '../components/Popup';

export default function LandingPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen relative bg-brand-bg font-sans text-brand-light overflow-hidden selection:bg-brand-accent selection:text-brand-dark">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

      <FloatingElements />

      {/* Dobra 1: The Hook */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-20 text-center max-w-6xl mx-auto">

        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-brand-accent font-semibold text-sm md:text-base tracking-wide uppercase shadow-lg backdrop-blur-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent"></span>
          </span>
          PARA CRISTÃOS QUE QUEIMAM POR MISSÕES, MAS ESTÃO TRAVADOS:
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-[1.15] tracking-tight mb-8 text-white drop-shadow-2xl max-w-5xl">
          Você Sente o Chamado, Mas Não Sabe Por Onde Começar? <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-300">
            Descubra o Mapa Exato Para Viver a Missão na Prática.
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-4xl leading-relaxed font-medium">
          Participe de um Encontro Online e Inédito onde vamos revelar por que apenas a "vontade de ir" não é suficiente – e como você pode forjar uma base teológica sólida sem precisar abandonar sua cidade agora.
        </p>

        {/* Video Player Placeholder */}
        <div className="w-full max-w-4xl mx-auto aspect-video bg-brand-dark rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 relative group mb-12 cursor-pointer" onClick={() => setIsPopupOpen(true)}>
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
            alt="Video Thumbnail"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-brand-accent rounded-full flex items-center justify-center pl-2 shadow-[0_0_40px_rgba(0,255,102,0.6)] group-hover:scale-110 transition-transform duration-300">
              <Play className="text-brand-dark" size={48} fill="currentColor" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white font-medium mb-10 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10 shadow-xl">
          <div className="flex items-center gap-2">
            <Calendar className="text-brand-accent" size={24} />
            <span className="text-base md:text-lg">Sessão Exclusiva no Google Meet: Quinta-feira, 12 de Março</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
          <div className="flex items-center gap-2">
            <Clock className="text-brand-accent" size={24} />
            <span className="text-base md:text-lg">19h30 (Horário de Brasília)</span>
          </div>
        </div>

        <button
          onClick={() => setIsPopupOpen(true)}
          className="group relative inline-flex items-center justify-center gap-3 bg-brand-accent text-brand-dark font-black text-lg md:text-xl py-4 px-8 rounded-2xl hover:bg-[#00e65c] hover:scale-105 transition-all duration-300 animate-pulse-accent shadow-[0_0_20px_rgba(0,255,102,0.4)] w-full md:w-auto uppercase tracking-wide"
        >
          👉 QUERO DESCOBRIR O MEU PRÓXIMO PASSO
        </button>
      </section>

      {/* Dobra 2: The Story / The Value */}
      <section className="relative z-10 bg-brand-dark py-32 px-4 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16 text-white leading-tight">
            Responda com sinceridade: <br className="hidden md:block" />
            <span className="text-brand-accent">isso acontece com você?</span>
          </h2>

          <div className="space-y-6 mb-20 max-w-4xl mx-auto">
            {[
              'Você sente uma inquietação constante no coração, mas trava quando pensa: "Tá, mas o que eu faço na prática amanhã?"',
              'Você tem medo de ir para o campo sem base bíblica suficiente e acabar se frustrando (ou pior, não sabendo como ajudar de verdade)?',
              'Você acha que para começar a se preparar precisa pausar sua vida, largar seu trabalho ou mudar de estado?'
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-5 p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
                <div className="flex-shrink-0 mt-1">
                  <XCircle className="text-red-500" size={32} />
                </div>
                <p className="text-gray-300 text-xl leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-white/10 to-transparent p-10 md:p-14 rounded-3xl border border-white/10 backdrop-blur-sm text-center">
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
              Se você disse <strong className="text-brand-accent">"SIM"</strong> para alguma dessas perguntas, ouça com atenção:
            </p>
            <p className="text-2xl md:text-3xl font-display font-bold text-white leading-tight mb-10">
              Vontade e paixão não sustentam ninguém no campo missionário. O que sustenta é raiz, maturidade e preparo. <span className="text-gray-400">Mas a boa notícia é que o seu treinamento não precisa esperar o cenário perfeito.</span>
            </p>
            <div className="w-24 h-1 bg-brand-accent mx-auto mb-10 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              É por isso que criamos um ambiente onde a teologia profunda encontra a prática real. Um formato onde você é discipulado ao vivo por quem vive a missão todos os dias, de forma online e síncrona (interação em tempo real), mas com um desdobramento físico e radical: uma imersão prática na Amazônia.
            </p>
          </div>
        </div>
      </section>

      {/* Dobra 3: The Offer & Scarcity */}
      <section className="relative z-10 py-32 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-white/5 to-transparent p-10 md:p-16 rounded-3xl border border-white/10 backdrop-blur-md">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-16 text-center text-white leading-tight">
            O que vamos revelar <br className="hidden md:block" />
            <span className="text-brand-accent">nesta Quinta-Feira:</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'O Erro Nº 1',
                desc: 'O que trava 90% das pessoas que sentem o chamado e como evitar perder anos rodando em círculos.',
              },
              {
                title: 'A Sala de Aula Sem Fronteiras',
                desc: 'Como estruturar sua base teológica e missional diretamente da sua casa, com professores que estão no front.',
              },
              {
                title: 'Da Teoria à Selva',
                desc: 'Como funciona o nosso Prático Missionário e o que é necessário para você viver essa experiência.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 bg-brand-accent/10 p-4 rounded-2xl group-hover:bg-brand-accent/20 transition-colors">
                  <CheckCircle2 className="text-brand-accent" size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-display">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              O acesso a essa sala é gratuito, mas restrito. O link será enviado apenas no nosso Grupo VIP e silencioso do WhatsApp.
            </p>

            <button
              onClick={() => setIsPopupOpen(true)}
              className="group relative inline-flex items-center justify-center gap-3 bg-brand-accent text-brand-dark font-black text-lg md:text-xl py-4 px-8 rounded-2xl hover:bg-[#00e65c] hover:scale-105 transition-all duration-300 animate-pulse-accent shadow-[0_0_20px_rgba(0,255,102,0.4)] w-full md:w-auto uppercase tracking-wide"
            >
              📲 ENTRAR NO GRUPO E GARANTIR MEU ACESSO
            </button>
          </div>
        </div>
      </section>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

import React from 'react';
import { TimelineEvent } from '../types';

const events: TimelineEvent[] = [
  {
    date: "01 de Fevereiro",
    title: "Início das Inscrições",
    description: "Abertura oficial para garantia de vagas."
  },
  {
    date: "04 de Março",
    title: "Aula 1 (Aberta)",
    description: "O início da jornada. Uma aula inaugural aberta ao público."
  },
  {
    date: "Março a Junho",
    title: "Aulas Semanais",
    description: "Quartas e Sextas com foco em processamento e conteúdo profundo."
  },
  {
    date: "03 de Julho",
    title: "Formatura",
    description: "Celebração do encerramento da fase teórica."
  },
  {
    date: "05 a 26 de Julho",
    title: "Viagens Missionárias (Prático)",
    description: "Imersão em campo."
  },
  {
    date: "31 de Julho",
    title: "Relatório da Missão",
    description: "Conclusão e testemunhos."
  }
];

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-ministry-base relative">
       {/* Background Texture - Contours */}
      <div className="absolute inset-0 z-0 bg-contours opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-sm text-ministry-accent uppercase tracking-widest mb-4">
            Cronograma Turma 2026
          </h2>
          <h3 className="font-sans font-bold text-3xl md:text-4xl text-white">
            Planeje seu ano para o Avivamento.
          </h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-ministry-accent/20"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Space for the other side on desktop */}
                <div className="hidden md:block w-1/2"></div>
                
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-ministry-accent rounded-full border-4 border-ministry-dark shadow-sm z-10"></div>
                
                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                  <div className={`bg-ministry-dark p-6 rounded-lg shadow-lg border border-ministry-accent/20 ${index % 2 === 0 ? 'md:text-left border-l-4 border-l-ministry-accent' : 'md:text-right md:border-r-4 md:border-r-ministry-accent border-l-4 border-l-ministry-accent md:border-l-ministry-accent/20'}`}>
                    <span className="font-sans font-bold text-ministry-accent text-sm tracking-wider uppercase mb-1 block">
                      {event.date}
                    </span>
                    <h4 className="font-serif font-bold text-xl text-white mb-2">
                      {event.title}
                    </h4>
                    {event.description && (
                      <p className="text-gray-400 font-serif text-sm">
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
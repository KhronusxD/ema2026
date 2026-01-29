import React from 'react';
import { Globe, Users, Video } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 bg-ministry-base relative bg-contours border-t border-ministry-accent/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="font-sans font-bold text-sm text-ministry-accent uppercase tracking-widest mb-4">
              A Nova Fase
            </h2>
            <h3 className="font-sans font-bold text-4xl md:text-5xl text-white mb-8 leading-tight">
              A EMA se expande para além das paredes.
            </h3>
            
            <div className="prose prose-lg text-ministry-text font-serif">
              <p className="mb-6 opacity-90">
                Entramos em uma nova fase. Cremos que o Reino de Deus não é estático e a 
                formação daqueles que servem ao Senhor precisa avançar e alcançar mais longe.
              </p>
              <p className="mb-6 font-medium text-white italic border-l-4 border-ministry-accent pl-6">
                "Não formamos apenas missionários, formamos discípulos enviados". 
                A missão não é um evento, é um estilo de vida.
              </p>
              <p className="opacity-90">
                Neste ano, a EMA adapta seu formato pedagógico para o modelo <strong className="text-ministry-accent">síncrono (ao vivo)</strong>. 
                Isso significa manter a interação direta entre alunos e professores, mas permitindo 
                que irmãos de qualquer cidade, estado ou país façam parte deste propósito.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
            <div className="bg-ministry-dark p-8 rounded-xl shadow-lg border border-ministry-accent/20 hover:border-ministry-accent transition-colors group">
              <Globe className="w-10 h-10 text-ministry-accent mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-sans font-bold text-xl mb-2 text-white">Alcance Global</h4>
              <p className="font-serif text-sm text-gray-400">Estude de onde estiver, sem limitações geográficas.</p>
            </div>

            <div className="bg-ministry-dark p-8 rounded-xl shadow-lg border border-ministry-accent/20 hover:border-ministry-accent transition-colors group">
              <Users className="w-10 h-10 text-ministry-accent mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-sans font-bold text-xl mb-2 text-white">Interação Real</h4>
              <p className="font-serif text-sm text-gray-400">Aulas ao vivo para troca de experiências e mentoria.</p>
            </div>

            <div className="bg-ministry-dark p-8 rounded-xl shadow-lg border border-ministry-accent/20 hover:border-ministry-accent transition-colors group">
              <Video className="w-10 h-10 text-ministry-accent mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-sans font-bold text-xl mb-2 text-white">Flexibilidade</h4>
              <p className="font-serif text-sm text-gray-400">Conteúdo gravado disponível para acesso posterior na plataforma.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
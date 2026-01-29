import React from 'react';
import { ValueItem } from '../types';
import { BookOpen, Heart, Activity, Map, Users } from 'lucide-react';

const values: ValueItem[] = [
  { id: 1, title: "Centralidade de Deus", description: "Intimidade acima de resultados." },
  { id: 2, title: "Fidelidade às Escrituras", description: "Autoridade bíblica como fundamento." },
  { id: 3, title: "Vida de Oração", description: "A oração como o sustento de todo enviado." },
  { id: 4, title: "Missão como Estilo de Vida", description: "Viver o Evangelho no cotidiano, na igreja e entre os povos." },
  { id: 5, title: "Serviço e Humildade", description: "Liderança que se expressa lavando os pés." },
];

export const Values: React.FC = () => {
  return (
    <section className="py-24 bg-ministry-dark text-white border-y border-ministry-accent/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-sm text-ministry-accent uppercase tracking-widest mb-4">
            Nossa Cultura
          </h2>
          <h3 className="font-sans font-bold text-3xl md:text-4xl mb-4 text-white">
            Não é apenas sobre estudar missões. <br />
            É sobre viver a missão.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div key={value.id} className="bg-ministry-base/50 backdrop-blur-sm p-8 rounded-lg border border-white/5 hover:border-ministry-accent/50 transition-colors group">
              <div className="mb-4 text-ministry-accent group-hover:text-white transition-colors">
                 {idx === 0 && <Heart className="w-8 h-8"/>}
                 {idx === 1 && <BookOpen className="w-8 h-8"/>}
                 {idx === 2 && <Activity className="w-8 h-8"/>}
                 {idx === 3 && <Map className="w-8 h-8"/>}
                 {idx === 4 && <Users className="w-8 h-8"/>}
              </div>
              <h4 className="font-sans font-bold text-xl mb-3 text-white">{value.title}</h4>
              <p className="font-serif text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
          
          {/* Decorative Block */}
          <div className="bg-ministry-accent p-8 rounded-lg flex flex-col justify-center items-center text-center">
            <h4 className="font-sans font-bold text-2xl text-ministry-dark mb-2">Junte-se a nós</h4>
            <p className="font-serif text-ministry-dark/90 text-sm mb-0">Faça parte desta geração que busca o avivamento.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
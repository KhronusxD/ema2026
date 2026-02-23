import React from 'react';
import { MonitorPlay, BookOpen, ClipboardCheck } from 'lucide-react';

export const Methodology: React.FC = () => {
    return (
        <section className="py-24 bg-ministry-dark text-white border-t border-ministry-accent/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-sans font-bold text-sm text-ministry-accent uppercase tracking-widest mb-4">
                        Metodologia
                    </h2>
                    <h3 className="font-sans font-bold text-3xl md:text-4xl text-white">
                        Como vai funcionar
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-ministry-base p-8 rounded-lg border border-white/5 hover:border-ministry-accent/30 transition-colors text-center group">
                        <div className="w-16 h-16 bg-ministry-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-ministry-accent/20 transition-colors">
                            <MonitorPlay className="w-8 h-8 text-ministry-accent" />
                        </div>
                        <h4 className="font-sans font-bold text-xl mb-4 text-white">Plataforma Exclusiva</h4>
                        <p className="font-serif text-gray-400 text-sm leading-relaxed">
                            Acesso a um ambiente virtual de aprendizado intuitivo, onde você poderá assistir às aulas ao vivo e gravadas.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-ministry-base p-8 rounded-lg border border-white/5 hover:border-ministry-accent/30 transition-colors text-center group">
                        <div className="w-16 h-16 bg-ministry-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-ministry-accent/20 transition-colors">
                            <BookOpen className="w-8 h-8 text-ministry-accent" />
                        </div>
                        <h4 className="font-sans font-bold text-xl mb-4 text-white">Materiais Extras</h4>
                        <p className="font-serif text-gray-400 text-sm leading-relaxed">
                            Conteúdo complementar, artigos e leituras selecionadas para aprofundamento teológico e prático.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-ministry-base p-8 rounded-lg border border-white/5 hover:border-ministry-accent/30 transition-colors text-center group">
                        <div className="w-16 h-16 bg-ministry-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-ministry-accent/20 transition-colors">
                            <ClipboardCheck className="w-8 h-8 text-ministry-accent" />
                        </div>
                        <h4 className="font-sans font-bold text-xl mb-4 text-white">Avaliações de Rendimento</h4>
                        <p className="font-serif text-gray-400 text-sm leading-relaxed">
                            Acompanhamento contínuo do seu desenvolvimento através de atividades e feedbacks dos tutores.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

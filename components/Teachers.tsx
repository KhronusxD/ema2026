import React from 'react';
import { Teacher } from '../types';

const teachers: Teacher[] = [
    { id: 1, name: "Hillary Queiroz", subject: "Missionalidade da Igreja", image: "https://picsum.photos/seed/hillary/400/500" },
    { id: 2, name: "Aldair Queiroz", subject: "Conhecimento de Deus & Missio Dei", image: "https://picsum.photos/seed/aldair/400/500" },
    { id: 3, name: "Débora Maradei", subject: "Introdução à Cosmovisão Cristã", image: "https://picsum.photos/seed/debora/400/500" },
    { id: 4, name: "Felipe Cunha", subject: "Espiritualidade Cristã e a Missão", image: "https://picsum.photos/seed/felipe/400/500" },
    { id: 5, name: "Raquel Siqueira", subject: "Deleitando-se na Oração", image: "https://picsum.photos/seed/raquel/400/500" },
    { id: 6, name: "Marcondes Soares", subject: "Avivamento e a História", image: "https://picsum.photos/seed/marcondes/400/500" },
    { id: 7, name: "Caio Soares", subject: "Avivamento Sustentável - Vida no Espírito", image: "https://picsum.photos/seed/caio/400/500" },
];

export const Teachers: React.FC = () => {
    return (
        <section id="teachers" className="py-24 bg-ministry-dark text-white relative">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ministry-accent/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-sans font-bold text-sm text-ministry-accent uppercase tracking-widest mb-4">
                        Corpo Docente
                    </h2>
                    <h3 className="font-sans font-bold text-3xl md:text-4xl text-white">
                        Mestres que vivem o que ensinam.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {teachers.map((teacher) => (
                        <div key={teacher.id} className="group relative overflow-hidden rounded-lg bg-ministry-base border border-ministry-accent/10 hover:border-ministry-accent/40 transition-all duration-300">
                            {/* Image Container */}
                            <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                <img
                                    src={teacher.image}
                                    alt={teacher.name}
                                    loading="lazy"
                                    width="400"
                                    height="500"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content Overlay/Bottom */}
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 pt-12 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h4 className="font-sans font-bold text-lg text-white mb-1 group-hover:text-ministry-accent transition-colors">
                                    {teacher.name}
                                </h4>
                                <p className="font-serif text-sm text-gray-300 leading-tight">
                                    {teacher.subject}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Join Us Card - To fill the grid nicely if needed, or just a CTA */}
                    <div className="flex flex-col justify-center items-center p-6 border-2 border-dashed border-ministry-accent/20 rounded-lg hover:bg-ministry-accent/5 transition-colors group cursor-pointer text-center h-full min-h-[300px]">
                        <span className="font-sans font-bold text-ministry-accent text-xl mb-2">Sua Jornada Começa Aqui</span>
                        <p className="font-serif text-gray-400 text-sm">Junte-se a esta turma seleta.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

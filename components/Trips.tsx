import React from 'react';
import { MapPin } from 'lucide-react';

export const Trips: React.FC = () => {
    return (
        <section id="trips" className="py-24 bg-ministry-base text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 bg-contours opacity-20"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-sans font-bold text-sm text-ministry-accent uppercase tracking-widest mb-4">
                        Prático Missionário
                    </h2>
                    <h3 className="font-sans font-bold text-3xl md:text-4xl text-white">
                        Onde a teoria encontra a vida.
                    </h3>
                    <p className="mt-4 font-serif text-gray-400 max-w-2xl mx-auto">
                        Escolha seu campo de atuação para a etapa prática em Julho.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 - Uruguai */}
                    <div className="relative group overflow-hidden rounded-lg h-96">
                        <img
                            src="/trips/uruguai.jpeg"
                            alt="Uruguai"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="flex items-center text-ministry-accent mb-2">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span className="text-sm font-bold uppercase tracking-wider">Internacional</span>
                            </div>
                            <h4 className="font-sans font-black text-3xl mb-2 text-white">Uruguai</h4>
                            <p className="font-serif text-gray-300 text-sm">
                                Praticando a missão transcultural urbana e apoiando igrejas e missionários locais em Montevidéu.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 - Sertão */}
                    <div className="relative group overflow-hidden rounded-lg h-96">
                        <img
                            src="/trips/sertao.jpeg"
                            alt="Sertão"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="flex items-center text-ministry-accent mb-2">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span className="text-sm font-bold uppercase tracking-wider">Nordeste</span>
                            </div>
                            <h4 className="font-sans font-black text-3xl mb-2 text-white">Sertão</h4>
                            <p className="font-serif text-gray-300 text-sm">
                                Servindo comunidades sertanejas com o Evangelho de forma prática e contextualizada.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 - Amazônia */}
                    <div className="relative group overflow-hidden rounded-lg h-96">
                        <img
                            src="/trips/amazonia.jpeg"
                            alt="Amazônia"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="flex items-center text-ministry-accent mb-2">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span className="text-sm font-bold uppercase tracking-wider">Norte</span>
                            </div>
                            <h4 className="font-sans font-black text-3xl mb-2 text-white">Amazônia</h4>
                            <p className="font-serif text-gray-300 text-sm">
                                Respeitando a cultura, promovendo cuidado integral e fortalecendo a Igreja na região.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

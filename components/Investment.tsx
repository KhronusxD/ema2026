import React from 'react';
import { Check, CreditCard, Banknote } from 'lucide-react';
import { Button } from './ui/Button';

export const Investment: React.FC = () => {
    return (
        <section id="investment" className="py-24 bg-ministry-dark text-white relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="font-sans font-bold text-sm text-ministry-accent uppercase tracking-widest mb-4">
                        Investimento
                    </h2>
                    <h3 className="font-sans font-bold text-3xl md:text-4xl text-white">
                        Invista na sua vocação.
                    </h3>
                </div>

                <div className="bg-ministry-base rounded-2xl border border-ministry-accent/20 overflow-hidden shadow-2xl relative">

                    {/* Ribbon */}
                    <div className="absolute top-0 right-0 bg-ministry-accent text-ministry-dark font-bold text-xs px-8 py-2 transform translate-x-12 translate-y-6 rotate-45 shadow-md z-10">
                        VAGAS LIMITADAS
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left Side: Features */}
                        <div className="p-8 md:p-12 relative">
                            <div className="absolute inset-0 bg-contours opacity-10"></div>
                            <div className="relative z-10">
                                <h4 className="font-sans font-bold text-2xl mb-6">Tudo incluso na sua formação:</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Acesso total às aulas ao vivo",
                                        "Gravações disponíveis por 12 meses",
                                        "Mentoria em grupo quinzenal",
                                        "Material didático digital",
                                        "Certificado de Conclusão (MEC)",
                                        "Acesso à comunidade exclusiva"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-gray-300">
                                            <Check className="w-5 h-5 text-ministry-accent mr-3 flex-shrink-0" />
                                            <span className="font-serif text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Side: Price */}
                        <div className="bg-ministry-dark/50 p-8 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5 relative">

                            <div className="mb-8">
                                <p className="text-gray-400 text-sm font-bold uppercase mb-2">Valor Integral do Curso</p>
                                <div className="flex items-baseline">
                                    <span className="text-2xl text-gray-500 mr-2 line-through">R$ 2.497</span>
                                    <span className="text-4xl md:text-5xl font-black text-white">R$ 1.998,00</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-ministry-accent/50 transition-colors">
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="flex items-center text-white font-bold">
                                            <CreditCard className="w-5 h-5 mr-2 text-ministry-accent" />
                                            Cartão de Crédito
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-sm">
                                        10x de <span className="text-white font-bold text-lg">R$ 199,80</span> sem juros
                                    </p>
                                </div>

                                <div className="bg-gradient-to-r from-ministry-accent/10 to-transparent rounded-lg p-4 border border-ministry-accent/30">
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="flex items-center text-white font-bold">
                                            <Banknote className="w-5 h-5 mr-2 text-ministry-accent" />
                                            PIX (10% de desconto)
                                        </div>
                                        <span className="bg-ministry-accent text-ministry-dark text-xs font-bold px-2 py-0.5 rounded">MELHOR OPÇÃO</span>
                                    </div>
                                    <p className="text-gray-300 text-sm">
                                        De R$ 1.998,00 por <span className="text-ministry-accent font-bold text-xl">R$ 1.798,20</span>
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Button variant="primary" className="w-full justify-center py-4 text-lg shadow-lg hover:shadow-ministry-accent/20" aria-label="Garantir vaga com desconto">
                                    GARANTIR MINHA VAGA AGORA
                                </Button>
                                <p className="text-center text-xs text-gray-500 mt-3 font-serif">
                                    Garantia de 7 dias incondicional.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Left Side: Base Course Card */}
                    <div className="bg-ministry-base rounded-2xl border border-white/10 overflow-hidden shadow-xl flex flex-col h-full relative transition-transform hover:-translate-y-1">
                        <div className="p-8 pb-6 flex-grow relative">
                            <div className="absolute inset-0 bg-contours opacity-5"></div>
                            <div className="relative z-10">
                                <h4 className="font-sans font-bold text-2xl mb-2 text-white">Formação EMA</h4>
                                <p className="font-serif text-gray-400 text-sm mb-6">A base sólida da sua vocação.</p>
                                <ul className="space-y-4">
                                    {[
                                        "Acesso total às aulas ao vivo",
                                        "Gravações disponíveis por 12 meses",
                                        "Mentoria em grupo quinzenal",
                                        "Material didático digital",
                                        "Certificado de Conclusão",
                                        "Acesso à comunidade exclusiva"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-300">
                                            <Check className="w-5 h-5 text-ministry-accent mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="font-serif text-sm leading-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-ministry-dark/50 p-8 border-t border-white/5 flex flex-col justify-end">
                            <div className="mb-6">
                                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Valor da Formação</p>
                                <div className="flex items-baseline">
                                    <span className="text-xl text-gray-500 mr-2 line-through">R$ 2.497</span>
                                    <span className="text-3xl font-black text-white">R$ 1.998,00</span>
                                </div>
                            </div>
                            <div className="space-y-3 mb-6">
                                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                    <div className="flex items-center text-white font-bold mb-1 text-sm">
                                        <CreditCard className="w-4 h-4 mr-2 text-ministry-accent" />
                                        Cartão de Crédito
                                    </div>
                                    <p className="text-gray-300 text-sm">
                                        10x de <span className="text-white font-bold text-lg">R$ 199,80</span>
                                    </p>
                                </div>
                                <div className="bg-gradient-to-r from-ministry-accent/5 to-transparent rounded-lg p-3 border border-ministry-accent/20">
                                    <div className="flex items-center text-white font-bold mb-1 text-sm">
                                        <Banknote className="w-4 h-4 mr-2 text-ministry-accent" />
                                        PIX (10% OFF)
                                    </div>
                                    <p className="text-ministry-accent font-bold text-lg">
                                        R$ 1.798,20
                                    </p>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full justify-center py-3" aria-label="Fazer Inscrição Formação">
                                INSCRIÇÃO FORMAÇÃO
                            </Button>
                        </div>
                    </div>

                    {/* Right Side: Combo Card */}
                    <div className="bg-ministry-base rounded-2xl border-2 border-ministry-accent overflow-hidden shadow-2xl shadow-ministry-accent/10 flex flex-col h-full relative transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-ministry-accent text-ministry-dark font-bold text-[10px] sm:text-xs px-8 py-1.5 transform translate-x-8 sm:translate-x-10 translate-y-5 rotate-45 shadow-md z-20 w-48 text-center tracking-widest uppercase">
                            MAIS RECOMENDADO
                        </div>
                        <div className="p-8 pb-6 flex-grow relative">
                            <div className="absolute inset-0 bg-ministry-accent/5 opacity-50"></div>
                            <div className="relative z-10">
                                <h4 className="font-sans font-bold text-2xl text-ministry-accent mb-2">Combo Vocações</h4>
                                <p className="font-serif text-gray-300 text-sm mb-6">Formação completa + Vivências Práticas.</p>
                                <ul className="space-y-4">
                                    {[
                                        "Tudo da Formação EMA incluso",
                                        "Inscrição no Semiraitá",
                                        "Participação nos Práticos EMA",
                                        "Outros bônus exclusivos",
                                        "Prioridade nas vagas dos práticos"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-white">
                                            <Check className="w-5 h-5 text-ministry-accent mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="font-serif text-sm font-medium leading-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-ministry-dark/80 p-8 border-t border-ministry-accent/20 flex flex-col justify-end relative z-10">
                            <div className="mb-6">
                                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Valor do Combo</p>
                                <div className="flex items-baseline">
                                    <span className="text-xl text-gray-500 mr-2 line-through">R$ 2.997</span>
                                    <span className="text-4xl font-black text-white">R$ 2.248,00</span>
                                </div>
                            </div>
                            <div className="space-y-3 mb-6">
                                <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-ministry-accent/30 transition-colors">
                                    <div className="flex items-center text-white font-bold mb-1 text-sm">
                                        <CreditCard className="w-4 h-4 mr-2 text-ministry-accent" />
                                        Cartão de Crédito
                                    </div>
                                    <p className="text-gray-200 text-sm">
                                        10x de <span className="text-white font-bold text-xl">R$ 224,80</span>
                                    </p>
                                </div>
                                <div className="bg-gradient-to-r from-ministry-accent/10 to-ministry-accent/5 rounded-lg p-3 border border-ministry-accent/40">
                                    <div className="flex items-center text-white font-bold mb-1 text-sm">
                                        <Banknote className="w-4 h-4 mr-2 text-ministry-accent" />
                                        PIX (10% OFF)
                                    </div>
                                    <p className="text-ministry-accent font-black text-xl">
                                        R$ 2.023,20
                                    </p>
                                </div>
                            </div>
                            <Button variant="primary" className="w-full justify-center py-4 text-lg shadow-lg hover:shadow-ministry-accent/20" aria-label="Garantir Vaga Combo">
                                GARANTIR MEU COMBO
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center max-w-2xl mx-auto">
                    <p className="text-xs text-gray-500 font-serif mb-1">
                        *Você será redirecionado para o nosso grupo de WhatsApp para garantir sua vaga na opção selecionada.
                    </p>
                    <p className="text-xs text-gray-500 font-serif">
                        Garantia incondicional de 7 dias para qualquer um dos planos.
                    </p>
                </div>
            </div>
        </section>
    );
};

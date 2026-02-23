import React, { useState } from 'react';
import { Check, CreditCard, X, FileText } from 'lucide-react';
import { Button } from './ui/Button';

export const Investment: React.FC = () => {
    const [popupOpen, setPopupOpen] = useState<'card1' | 'card2' | null>(null);

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
                                <h4 className="font-sans font-bold text-2xl mb-2 text-white">Formação Missional EMA</h4>
                                <p className="font-serif text-gray-400 text-sm mb-6">A base sólida da sua vocação.</p>
                                <ul className="space-y-4">
                                    {[
                                        "Acesso total às aulas ao vivo",
                                        "Gravações disponíveis até 31 de dezembro",
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
                            <div className="mb-6 flex-grow">
                                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Valor da Formação</p>
                                <div className="flex items-baseline">
                                    <span className="text-xl text-gray-500 mr-2 line-through">R$ 2.497</span>
                                    <span className="text-3xl font-black text-white">R$ 1.697,00</span>
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                className="w-full justify-center py-3 mt-auto"
                                aria-label="Fazer Inscrição Formação"
                                onClick={() => setPopupOpen('card1')}
                            >
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
                                <h4 className="font-sans font-bold text-2xl text-ministry-accent mb-2">Programa Presencial Manaus</h4>
                                <p className="font-serif text-gray-300 text-sm mb-6">Incluso práticos extras como:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Tudo da Formação Missional EMA",
                                        "Semiraitá (seminário indígena)",
                                        "Projeto Madalena (missões urbanas)",
                                        "Casa dos Filhos (projeto social)",
                                        "+ 04 aulas extras",
                                        "Economia de R$ 100 ao longo do curso"
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
                            <div className="mb-6 flex-grow">
                                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Valor do Programa</p>
                                <div className="flex items-baseline">
                                    <span className="text-xl text-gray-500 mr-2 line-through">R$ 2.997</span>
                                    <span className="text-4xl font-black text-white">R$ 1.897,00</span>
                                </div>
                            </div>
                            <Button
                                variant="primary"
                                className="w-full justify-center py-4 text-lg shadow-lg hover:shadow-ministry-accent/20 mt-auto"
                                aria-label="Garantir Vaga Programa"
                                onClick={() => setPopupOpen('card2')}
                            >
                                GARANTIR MINHA VAGA
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center max-w-2xl mx-auto">
                    <p className="text-xs text-gray-500 font-serif mb-1">
                        *Você será redirecionado para a plataforma de pagamento para garantir sua vaga na opção selecionada.
                    </p>
                    <p className="text-xs text-gray-500 font-serif">
                        Garantia incondicional de 7 dias para qualquer um dos planos.
                    </p>
                </div>

                {/* Popup de Pagamento */}
                {popupOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <div className="bg-ministry-dark border border-white/10 rounded-2xl p-6 w-full max-w-md relative shadow-2xl">
                            <button
                                onClick={() => setPopupOpen(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <h4 className="text-xl font-bold text-white mb-6 text-center">
                                Escolha a forma de pagamento
                            </h4>
                            <div className="space-y-4">
                                <a
                                    href={popupOpen === 'card1' ? 'https://www.asaas.com/c/1bssntixzoazxs54' : 'https://www.asaas.com/c/4r73c375g2jyvq7h'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                                >
                                    <CreditCard className="w-6 h-6 text-ministry-accent mr-4" />
                                    <div>
                                        <div className="text-white font-bold">Pagamento em Cartão</div>
                                        <div className="text-sm text-gray-400">Pague com cartão de crédito</div>
                                    </div>
                                </a>
                                <a
                                    href={popupOpen === 'card1' ? 'https://www.asaas.com/c/i3ooi6nklm78fg69' : 'https://www.asaas.com/c/8plmsjoiqsadv3v8'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                                >
                                    <FileText className="w-6 h-6 text-ministry-accent mr-4" />
                                    <div>
                                        <div className="text-white font-bold">Pagamento em Boleto</div>
                                        <div className="text-sm text-gray-400">Pague no boleto</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

import React, { useState } from 'react';
import { FAQItem } from '../types';
import { Plus, Minus } from 'lucide-react';

const faqs: FAQItem[] = [
  {
    question: "Preciso morar em Manaus para fazer a EMA?",
    answer: "Não! A escola agora é online para alcançar todos os lugares. Para os alunos locais, teremos encontros presenciais e aulas práticas exclusivas."
  },
  {
    question: "Como funcionam as viagens missionárias?",
    answer: "As viagens ocorrem em julho. Interessados passarão por um processo de entrevista e seletiva."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-ministry-base relative">
      <div className="absolute inset-0 z-0 bg-contours opacity-5"></div>
      
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-white text-center mb-12">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-ministry-accent/30 rounded-lg overflow-hidden bg-ministry-dark">
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-sans font-bold text-white pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-ministry-accent flex-shrink-0" />
                ) : (
                  <Plus className="text-ministry-accent flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 font-serif text-gray-400 border-t border-dashed border-ministry-accent/20 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
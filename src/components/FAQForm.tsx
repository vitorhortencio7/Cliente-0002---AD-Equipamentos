import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck, User, Landmark } from 'lucide-react';
import { getWhatsAppUrl } from '../utils';
import WhatsAppIcon from './WhatsAppIcon';
import ScrollReveal from './ScrollReveal';

export default function FAQForm() {
  // FAQ accordion state
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Form states
  const [name, setName] = useState('');
  const [storeType, setStoreType] = useState('Supermercado');

  const faqs = [
    {
      q: "A AD Equipamentos atende em quais regiões?",
      a: "Atendemos fortemente todo o estado de Ceará (sede em Fortaleza/regiões) e estados vizinhos na região Nordeste. Nossos fretes são supervisionados e dedicados para garantir que vidros e motores cheguem impecáveis."
    },
    {
      q: "Qual o custo e prazo do projeto 3D?",
      a: "O projeto em maquete realista 3D é cortesia especial no fechamento dos equipamentos com a AD Equipamentos! O prazo de desenvolvimento do rascunho de circulação inicial varia de 5 a 10 dias úteis após o envio das medidas da planta."
    },
    {
      q: "Os equipamentos de refrigeração comercial são econômicos?",
      a: "Sim. Nossos fornecedores homologados (líderes nacionais como Gelopar, Fricon e Metalfrio) utilizam gases ecológicos de última geração e motores com inversores eletrônicos inteligentes, que reduzem em até 40% a conta de luz frente aos modelos de refrigeração antigos."
    },
    {
      q: "Vocês fazem a instalação e montagem física no local?",
      a: "Com certeza! Contamos com equipes próprias de técnicos instaladores que nivelam as gôndolas, conferem a vedação pneumática dos balcões frios, configuram a regulagem de prateleiras e testam motores ao vivo para a inauguração da sua loja."
    },
    {
      q: "Como funciona a garantia e suporte pós-venda?",
      a: "Oferecemos garantia de fábrica estendida em todos os maquinários e gôndolas. Contamos com canais de suporte oficiais e assistência técnica especializada diretamente em solo local para atuar imediatamente se necessário."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      alert("Por favor, preencha seu nome.");
      return;
    }

    const formattedText = `Olá AD Equipamentos! Gostaria de agendar um atendimento para o meu comércio.
    
👤 Nome: ${name}
🏪 Segmento de Loja: ${storeType}

Tenho interesse em conhecer as soluções de gôndolas, refrigeração e fazer meu projeto 3D!`;

    window.open(getWhatsAppUrl(formattedText), "_blank");
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 w-full border-b border-slate-200 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.012),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Double-Column Container */}
        <div id="faq_lead_container" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Card with outstanding visuals */}
          <ScrollReveal variant="fade-right" duration={0.9} className="lg:col-span-5 w-full">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xl relative">
              <div className="absolute top-0 right-1/4 w-24 h-24 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-5" id="lead_sales_form">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#25D366] font-bold uppercase block">Contato Rápido</span>
                  <h3 className="font-display font-black text-2xl text-slate-900 leading-tight">Fale Conosco</h3>
                  <p className="text-xs text-slate-500 font-sans">Preencha abaixo e receba atendimento exclusivo diretamente em nosso WhatsApp.</p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Nome */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-slate-600 block font-bold">Seu Nome</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: João da Silva"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-brand-orange text-sm rounded-lg pl-10 pr-4 py-3 text-slate-800 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Tipo de Comercio */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-slate-600 block font-bold">Qual seu segmento?</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Landmark className="w-4 h-4" />
                      </div>
                      <select
                        value={storeType}
                        onChange={(e) => setStoreType(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-sm rounded-lg pl-10 pr-4 py-3 text-slate-800 outline-none focus:border-brand-orange cursor-pointer"
                      >
                        <option value="Supermercado">Supermercado</option>
                        <option value="Minimercado">Minimercado / Conveniência</option>
                        <option value="Quitanda">Fruteira / Hortifrúti</option>
                        <option value="Açougue">Açougue / Casa de Carnes</option>
                        <option value="Padaria">Padaria / Confeitaria</option>
                        <option value="Farmácia / Pet Shop">Pet Shop / Farmácia</option>
                        <option value="Outro">Outros Layouts Comerciais</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold tracking-wide uppercase py-4 rounded-lg text-xs transition-colors cursor-pointer shadow-[0_4px_12px_rgba(37,211,102,0.2)] hover:shadow-[0_4px_22px_rgba(37,211,102,0.4)]"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Chamar no WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-mono text-center mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#25D366] animate-pulse" />
                  <span>Atendimento imediato e sem compromisso</span>
                </div>
              </form>
            </div>
          </ScrollReveal>

          {/* Right Column: Dynamic FAQ accordion */}
          <ScrollReveal variant="fade-left" duration={0.9} delay={0.1} className="lg:col-span-7 space-y-6 self-start w-full">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-[0.25em] text-orange-800 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200/60 uppercase font-extrabold inline-block">
                Tire Suas Dúvidas
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 leading-tight pt-1">Perguntas Frequentes</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">Respostas curtas, diretas e sinceras da AD Equipamentos para facilitar o planejamento do seu negócio.</p>
            </div>

            <div className="space-y-3.5 pt-4 font-sans">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer group"
                    >
                      <span className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-brand-orange transition-colors">
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-brand-orange shrink-0 ml-3" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-slate-600 shrink-0 ml-3" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

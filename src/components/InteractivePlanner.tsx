import React from 'react';
import { ArrowRight, Sparkles, Layout, Refrigerator, CheckCircle, ShieldCheck, HelpCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils';
import WhatsAppIcon from './WhatsAppIcon';

export default function InteractivePlanner() {
  const handleSendCta = () => {
    const text = `Olá AD Equipamentos! Gostaria de falar com um especialista sobre o layout da minha loja e solicitar um orçamento sob medida para o meu comércio.`;
    window.open(getWhatsAppUrl(text), "_blank");
  };

  return (
    <section id="simulador" className="py-20 bg-slate-900 border-b border-slate-950 relative">
      {/* Decorative ambient flare background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(242,147,30,0.02),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-[0.25em] text-orange-400 bg-orange-950/40 px-3.5 py-1.5 rounded-full border border-orange-500/20 uppercase font-bold inline-block">
            Planejamento Rápido
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 leading-tight">
            Layout 3D & Orçamento Sob Medida
          </h2>
          <p className="text-sm text-slate-350 font-sans mt-3 leading-relaxed">
            Desenvolvemos o projeto ideal focado na circulação eficiente do seu comércio. Sem adivinhações: saiba exatamente quais gôndolas e de quantos expositores refrigerados você precisa para abrir suas portas com sucesso.
          </p>
        </div>

        {/* Simplified Premium Conversion Card */}
        <div className="bg-slate-950/40 rounded-2xl border border-slate-800/80 p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.4)] overflow-hidden relative">
          {/* Subtle background abstract shapes */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/5 blur-3xl rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left informational metrics */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-[#25D366] font-extrabold uppercase bg-[#25D366]/10 px-3 py-1 rounded-full border border-[#25D366]/10 inline-block">
                  ANÁLISE DE ESPAÇO SEM CUSTO
                </span>
                <h3 className="font-display font-black text-2xl text-white">
                  Como funciona nosso orçamento inteligente?
                </h3>
              </div>

              {/* Steps or features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-brand-orange shrink-0">
                    <Layout className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Estudo de Espaço</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Avaliamos as medidas da sua loja para otimizar os corredores e evitar áreas frias sem circulação.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                    <Refrigerator className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Combinação Ideal</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Sugerimos apenas os modelos e quantidade exata de gôndolas e expositores de refrigeração que sua loja precisa.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Prévia de Imagem 3D</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Veja em 3D como ficará o visual antes do investimento físico. Projetos rápidos elaborados pela nossa equipe.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Segurança e Normas</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Garantimos um layout em conformidade técnica com as normas da vigilância sanitária.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 text-slate-400 text-xs">
                <CheckCircle className="w-4 h-4 text-[#25D366]" />
                <span>Atendimento prioritário com retorno em minutos no WhatsApp.</span>
              </div>
            </div>

            {/* Right clean conversion focus area */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800/80 p-6 rounded-xl flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono tracking-widest text-[#25D366] font-extrabold uppercase">Dúvidas Frequentes</span>
                  <span className="text-[9px] font-mono text-slate-500">RESPOSTA IMEDIATA</span>
                </div>
                <h4 className="text-sm font-bold text-white">Quanto custa fazer o desenho 3D do meu espaço?</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Sendo cliente da <strong className="text-white">AD Equipamentos</strong>, desenvolvemos toda a modelagem tridimensional do layout do seu comércio como <strong className="text-brand-orange">cortesia de fechamento</strong> ao adquirir nossas soluções e equipamentos de refrigeração.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleSendCta}
                  id="cta_planner_simplified_whatsapp"
                  className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-heavy text-white font-extrabold text-[11px] sm:text-xs uppercase px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl transition-all shadow-[0_4px_15px_rgba(37,211,102,0.15)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.35)] cursor-pointer tracking-wider group text-center"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span>Falar com um Projetista Agora</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

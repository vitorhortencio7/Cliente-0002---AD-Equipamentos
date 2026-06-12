import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, Compass, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../utils';
import WhatsAppIcon from './WhatsAppIcon';

export default function Timeline() {
  const handleCta = () => {
    const text = `Olá AD Equipamentos! Vi o convite para receber uma consultoria de layout para minha loja no site e gostaria de agendar um briefing inicial.`;
    window.open(getWhatsAppUrl(text), "_blank");
  };

  return (
    <section id="projetos" className="py-24 bg-slate-950 border-b border-zinc-900 relative">
      {/* Immersive background ambient spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,147,30,0.03),transparent)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sleek Minimalist CTA Card Container */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-900/60 rounded-3xl border border-slate-805/80 p-8 sm:p-14 text-center space-y-8 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Accent decoration glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-10 bg-brand-orange/15 blur-2xl rounded-full" />

          {/* Icon Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.25em] text-brand-orange font-extrabold uppercase bg-brand-orange/10 px-4 py-1.5 rounded-full border border-brand-orange/20">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
              Parceria de Sucesso
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3.5 max-w-2xl mx-auto">
            <h2 className="font-display font-black text-2xl sm:text-4.5xl text-white leading-tight">
              Sua Loja Pronta Para Faturar de Ponta a Pontas
            </h2>
            <p className="text-sm sm:text-base text-slate-350 leading-relaxed font-sans">
              Desenvolvemos a maquete tridimensional definitiva do seu atacarejo, mercadinho, padaria ou hortifrúti. Oferecemos gôndolas e expositores de refrigeração industrial com fabricação sob medida para o seu sucesso comercial.
            </p>
          </div>

          {/* Mini benefits pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4 pb-2">
            <div className="bg-slate-950/45 border border-slate-800/80 rounded-xl p-4 flex flex-col items-center text-center space-y-2">
              <MessageSquare className="w-5 h-5 text-brand-orange shrink-0" />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">1. Briefing e Medições</h4>
              <p className="text-[11px] text-slate-400">Coleta rápida das dimensões e ramo da sua loja pelo WhatsApp.</p>
            </div>

            <div className="bg-slate-950/45 border border-slate-800/80 rounded-xl p-4 flex flex-col items-center text-center space-y-2">
              <Compass className="w-5 h-5 text-brand-orange shrink-0" />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">2. Maquete 3D Completa</h4>
              <p className="text-[11px] text-slate-400">Visualização fidedigna de gôndolas, ilhas e fluxos de circulação.</p>
            </div>

            <div className="bg-slate-950/45 border border-slate-800/80 rounded-xl p-4 flex flex-col items-center text-center space-y-2">
              <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0" />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">3. Montagem & Entrega</h4>
              <p className="text-[11px] text-slate-400">Suporte profissional na montagem técnica e instalação de expositores.</p>
            </div>
          </div>

          {/* Conversion Button */}
          <div className="pt-4 flex flex-col items-center gap-3">
            <button
              onClick={handleCta}
              id="cta_minimalist_timeline_whatsapp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-heavy text-white font-black uppercase text-xs sm:text-sm tracking-wider px-10 py-5 rounded-xl transition-all duration-300 shadow-[0_5px_20px_rgba(37,211,102,0.18)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.38)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Agendar Minha Análise Gratuita</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
              Projetos 3D iniciais elaborados em tempo recorde!
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

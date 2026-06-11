import { MessageSquare, Layout, Sparkles, AlertCircle, CalendarRange } from 'lucide-react';
import { getWhatsAppUrl } from '../utils';
import WhatsAppIcon from './WhatsAppIcon';

export default function Timeline() {
  const steps = [
    {
      num: "01",
      icon: <MessageSquare className="w-6 h-6 text-zinc-950" />,
      title: "Contato e Briefing Rápido",
      desc: "Você clica em qualquer botão do site e conversa conosco no WhatsApp. Colhemos as dimensões básicas da sua loja, o segmento de varejo e quais são os seus objetivos e orçamento.",
      badge: "Início Imediato"
    },
    {
      num: "02",
      icon: <Layout className="w-6 h-6 text-zinc-950" />,
      title: "Modelagem & Projeto 3D",
      desc: "Nossa equipe de engenharia cria o desenho tridimensional fidedigno da sua loja. Você visualiza exatamente o posicionamento de cada gôndola, balcão térmico e iluminação de LED.",
      badge: "Prazo: 5 a 10 dias"
    },
    {
      num: "03",
      icon: <Sparkles className="w-6 h-6 text-zinc-950" />,
      title: "Entrega e Montagem Assistida",
      desc: "Após aprovação do render 3D, separamos o catálogo e entregamos no endereço da sua loja. Nossa equipe técnica especializada realiza a montagem com precisão cirúrgica de encaixe.",
      badge: "Inauguração sem Dor de Cabeça"
    }
  ];

  const handleTimelineCta = () => {
    window.open(getWhatsAppUrl(), "_blank");
  };

  return (
    <section id="projetos" className="py-20 bg-slate-900 border-b border-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,147,30,0.015),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-brand-orange uppercase font-bold text-brand-orange">Processo Simplificado</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-3 leading-tight">
            Passo a Passo Para Sua Loja Moderna
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans mt-3">
            Evite surpresas indesejáveis ou compras de equipamentos no tamanho incorreto. Nosso processo é 100% blindado contra prejuízos.
          </p>
        </div>

        {/* 3 Steps Flow */}
        <div className="relative">
          {/* Central alignment bar for desktop */}
          <div className="absolute left-[23px] md:left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-800 -translate-x-1/2 z-0 hidden md:block" />
          <div className="absolute left-[27px] top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-800 z-0 md:hidden" />

          <div className="space-y-12 md:space-y-16 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-stretch gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Dot */}
                  <div className="md:w-1/2 flex items-start justify-start md:justify-end pr-0 md:pr-12 md:text-right">
                    {!isEven ? (
                      <div className="space-y-3 pl-12 md:pl-0">
                        <span className="inline-block text-xs font-mono bg-brand-orange/15 border border-brand-orange/20 text-brand-orange px-3 py-1 rounded font-bold uppercase">
                          {step.badge}
                        </span>
                        <h3 className="font-display font-black text-xl text-white">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mt-2">{step.desc}</p>
                      </div>
                    ) : (
                      // Display a high quality vector wireframe illustration on the opposite side
                      <div className="hidden md:flex flex-col items-end justify-center w-full h-full p-4 border border-slate-800/80 bg-slate-950/45 rounded-xl">
                        <CalendarRange className="w-12 h-12 text-slate-700 mb-2" />
                        <span className="text-[10px] font-mono text-slate-400 block font-semibold">AD DESIGN PROCESS SYSTEM</span>
                      </div>
                    )}
                  </div>

                  {/* Icon Indicator middle Column */}
                  <div className="flex justify-start md:justify-center items-start pt-1 z-20">
                    <div className="w-14 h-14 rounded-full bg-brand-gold border-4 border-slate-950 flex items-center justify-center font-display font-black text-slate-950 shadow-[0_0_15px_rgba(212,175,55,0.25)] shrink-0 select-none">
                      {step.num}
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="md:w-1/2 flex items-start justify-start pl-12 md:pl-12">
                    {isEven ? (
                      <div className="space-y-3">
                        <span className="inline-block text-xs font-mono bg-brand-gold/15 border border-brand-gold/20 text-brand-gold px-3 py-1 rounded font-bold uppercase">
                          {step.badge}
                        </span>
                        <h3 className="font-display font-black text-xl text-white">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mt-2">{step.desc}</p>
                      </div>
                    ) : (
                      // Display a high quality vector wireframe illustration on the opposite side
                      <div className="hidden md:flex flex-col items-start justify-center w-full h-full p-4 border border-slate-800/80 bg-slate-950/45 rounded-xl">
                        <CalendarRange className="w-12 h-12 text-slate-700 mb-2" />
                        <span className="text-[10px] font-mono text-slate-400 block font-bold">PROJETO E MODELAGEM DUAL PLANE</span>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Action Banner for Workflow */}
        <div id="como_funciona_footer" className="mt-16 bg-slate-950/40 p-6 sm:p-8 rounded-xl border border-slate-800/80 text-center max-w-4xl mx-auto space-y-5">
          <div className="flex items-center justify-center gap-2 text-brand-orange text-xs font-mono uppercase tracking-widest font-extrabold">
            <AlertCircle className="w-4 h-4 text-brand-orange animate-pulse" />
            <span>Atenção: Agenda de Projetos em Aberto</span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white max-w-2xl mx-auto leading-normal">
            Garantimos o primeiro rascunho de layout 3D sem custos adicionais ao fechar seu pacote!
          </h3>
          <button
            onClick={handleTimelineCta}
            id="cta_timeline_whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-heavy text-white font-extrabold uppercase text-xs tracking-wider px-6 py-4 rounded-lg transition-all cursor-pointer shadow-[0_4px_12px_rgba(37,211,102,0.2)] hover:shadow-[0_4px_22px_rgba(37,211,102,0.4)]"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Falar com Projetista & Agendar Briefing</span>
          </button>
        </div>

      </div>
    </section>
  );
}

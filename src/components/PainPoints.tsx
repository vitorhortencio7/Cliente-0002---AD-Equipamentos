import { AlertTriangle, TrendingDown, RefreshCcw, ShieldAlert, CheckCircle, Smartphone, MapPin, Eye, Zap } from 'lucide-react';
import { getWhatsAppUrl } from '../utils';
import WhatsAppIcon from './WhatsAppIcon';
import ScrollReveal from './ScrollReveal';

export default function PainPoints() {
  const pains = [
    {
      icon: <TrendingDown className="w-5 h-5 text-rose-500" />,
      title: "Baixo fluxo de clientes",
      desc: "Os clientes passam correndo ou não entram na sua loja por falta de atrativos."
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-rose-500" />,
      title: "Layout confuso e apertado",
      desc: "Corredores estreitos e distribuição sem lógica, causando estresse e abandono de carrinho."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-rose-500" />,
      title: "Equipamentos antigos e ineficientes",
      desc: "Sistemas de refrigeração que consomem energia demais e dão manutenção recorrente."
    },
    {
      icon: <RefreshCcw className="w-5 h-5 text-rose-500" />,
      title: "Produtos com pouca visibilidade",
      desc: "Mercadorias empilhadas sem iluminação, escondendo fatiados, carnes nobres e hortifrúti."
    }
  ];

  const solutions = [
    {
      icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
      title: "Projetos 3D completos antes da obra",
      desc: "Visualize cada gôndola, balcão e LED em maquete realista 3D antes de gastar com reformas.",
      highlight: true
    },
    {
      icon: <Zap className="w-5 h-5 text-emerald-500" />,
      title: "Layout estratégico de fluxo inteligente",
      desc: "Organização científica dos setores (padaria, açougue, frios) para guiar o cliente a comprar mais.",
      highlight: true
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
      title: "Equipamentos modernos e eficientes",
      desc: "Gôndolas robustas, expositores com vidros antiembaçantes e motores de baixo consumo elétrico."
    },
    {
      icon: <Eye className="w-5 h-5 text-emerald-500" />,
      title: "Assessoria em fachadas e comunicação visual",
      desc: "Atraia o público a partir da calçada com fachadas imponentes e placas internas de alto padrão."
    }
  ];

  const handleCtaClick = () => {
    window.open(getWhatsAppUrl(), "_blank");
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.02),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <ScrollReveal variant="fade-up" duration={0.8}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-[0.25em] text-orange-800 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200/60 uppercase font-extrabold flex items-center justify-center w-fit mx-auto">
              Diagnóstico Comercial
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mt-5 leading-tight">
              Sua Loja Está Atraindo Clientes ou Espantando Vendas?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans mt-4 leading-relaxed">
              A forma como os equipamentos estão dispostos e a iluminação influenciam diretamente em até <strong className="text-orange-800 font-extrabold">45% nas decisões de compra</strong> por impulso.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de Pains vs Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card Dores */}
          <ScrollReveal variant="fade-right" duration={0.9} delay={0.1} className="flex">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200/80 shadow-sm w-full">
              <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-slate-900">Sua Loja Tem Esses Problemas?</h3>
                  <p className="text-xs text-slate-500">Se você enfrenta pelo menos um destes desafios, sua lucratividade está sendo afetada.</p>
                </div>
              </div>

              <div className="space-y-6">
                {pains.map((pain, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 shrink-0 mt-0.5">
                      {pain.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-800">{pain.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{pain.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Card Soluções (Sophisticated Slate Dark Card) */}
          <ScrollReveal variant="fade-left" duration={0.9} delay={0.2} className="flex">
            <div className="bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-800 shadow-md relative overflow-hidden w-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl" />
              
              <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-900/30 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-white">A Nossa Solução para Você</h3>
                  <p className="text-xs text-slate-400">Transformamos seu espaço em um verdadeiro ímã de clientes e vendas diárias.</p>
                </div>
              </div>

              <div className="space-y-6">
                {solutions.map((sol, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 items-start p-3 rounded-lg transition-colors ${
                      sol.highlight ? 'bg-slate-800/40 border border-brand-orange/20' : 'bg-transparent'
                    }`}
                  >
                    <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 shrink-0 mt-0.5">
                      {sol.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        {sol.title}
                        {sol.highlight && (
                          <span className="text-[9px] bg-brand-orange/15 border border-brand-orange/30 text-brand-orange px-2 py-0.5 rounded uppercase font-mono font-bold">
                            Crucial
                          </span>
                        )}
                      </h4>
                      <p className="text-xs text-slate-350 mt-1 leading-relaxed">{sol.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* CTA do Diagnóstico */}
        <ScrollReveal variant="scale" duration={0.8} delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-xs text-slate-500 mb-4 font-mono uppercase tracking-wider font-semibold">
              ⚡ Não perca mais clientes para a concorrência moderna
            </p>
            <button
              onClick={handleCtaClick}
              id="cta_diagnostico_whatsapp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-heavy text-white font-extrabold px-8 py-4.5 rounded-lg text-sm transition-all shadow-[0_4px_12px_rgba(37,211,102,0.2)] hover:shadow-[0_4px_22px_rgba(37,211,102,0.4)] group cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 text-white shrink-0 group-hover:scale-110 transition-transform" />
              <span>Diagnosticar Meu Layout Gratuitamente no WhatsApp</span>
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

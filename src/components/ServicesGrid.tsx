import { useState } from 'react';
import { Box, Compass, Refrigerator, Store, ArrowUpRight, CheckCircle, Flame, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, IMAGES } from '../utils';
import WhatsAppIcon from './WhatsAppIcon';
import ScrollReveal from './ScrollReveal';

export default function ServicesGrid() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const services = [
    {
      icon: <Box className="w-5 h-5 text-zinc-950" />,
      title: "Projetos e Maquetes 3D",
      img: IMAGES.storeLayout,
      badge: "Realismo Máximo",
      text: "Visualize e planeje seu espaço antes da reforma.",
      details: "Evite retrabalho e quebra-quebra de paredes. Criamos uma maquete tridimensional idêntica à planta física real da sua loja, posicionando cada gôndola, check-out e rack de refrigerador.",
      bullets: ["Giro de câmera 360°", "Estudo de iluminação LED", "Escolha de cores e revestimentos", "Cálculo preciso de espaçamento"],
      id: "srv_maquete"
    },
    {
      icon: <Compass className="w-5 h-5 text-zinc-950" />,
      title: "Layout e Fluxos de Loja",
      img: IMAGES.supermarketMain,
      badge: "Navegação Inteligente",
      text: "Organização inteligente para maximizar vendas.",
      details: "A circulação estuda a psicologia do consumidor. Criamos trajetos onde itens secundários têm grande destaque, aumentando o ticket médio espontâneo de cada cliente.",
      bullets: ["Zonas Quentes e Zonas Frias de consumo", "Posicionamento estratégico de fatiados", "Posição ergonômica de checkouts", "Otimização de pontas de gôndola"],
      id: "srv_fluxo"
    },
    {
      icon: <Refrigerator className="w-5 h-5 text-zinc-950" />,
      title: "Gôndolas, Refrigeração e Expositores",
      img: IMAGES.refrigeration,
      badge: "Tecnologia Eficiente",
      text: "Equipamentos modernos e eficientes.",
      details: "Linha completa de altíssima eficiência termoenergética. Expositores de frios de triplo vidro antiembaçante, gôndolas ultra-utilitárias modulares e câmaras para estocagem.",
      bullets: ["Vidros especiais que reduzem suor", "Luzes LED focadas de 3000K a 6000K", "Corte térmico e compressores silenciosos", "Gôndolas reforçadas para atacarejo"],
      id: "srv_equipamentos"
    }
  ];

  const handleOpenDetail = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  const handleGlobalCta = () => {
    window.open(getWhatsAppUrl(), "_blank");
  };

  return (
    <section id="equipamentos" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.015),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" duration={0.8}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-[0.25em] text-orange-800 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200/60 uppercase font-extrabold flex items-center justify-center w-fit mx-auto">
              Soluções Completas
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mt-5 leading-tight">
              Tudo Para Sua Loja em Um Só Lugar
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans mt-3 leading-relaxed">
              Da maquete no computador à instalação de gôndolas e displays de refrigeração industrial. Cuidamos de todos os detalhes para você faturar mais.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Column Services Grid */}
        <div id="grid_servicos" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {services.map((srv, index) => {
            const isExpanded = activeItem === index;
            return (
              <ScrollReveal
                key={srv.id}
                variant="fade-up"
                duration={0.8}
                delay={index * 0.15}
                className="h-full"
              >
                <div
                  onClick={() => handleOpenDetail(index)}
                  className={`group bg-white rounded-xl border text-left overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-sm h-full ${
                    isExpanded
                      ? 'border-brand-orange shadow-[0_8px_25px_rgba(242,147,30,0.12)] ring-1 ring-brand-orange/40'
                      : 'border-slate-200 hover:border-slate-350 hover:-translate-y-1 hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Card Image */}
                    <div className="h-44 overflow-hidden relative border-b border-slate-100">
                      <img
                        src={srv.img}
                        alt={srv.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      
                      {/* Badge */}
                      <span className="absolute top-3 left-3 text-[9px] font-mono tracking-wider font-extrabold uppercase bg-slate-950/90 text-brand-orange border border-brand-orange/30 px-2.5 py-1.5 rounded backdrop-blur-xs">
                        {srv.badge}
                      </span>

                      {/* Expand Trigger Icon in Card corner */}
                      <div className="absolute bottom-3 right-3 bg-slate-950/80 p-1.5 rounded-lg border border-slate-800 text-slate-200 group-hover:text-brand-orange transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-3">
                      <h3 className="font-display font-black text-lg text-slate-900 group-hover:text-orange-850 transition-colors duration-200">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-sans leading-relaxed">
                        {srv.text}
                      </p>

                      {/* Expandable Technical Details Drawer inside card */}
                      {isExpanded && (
                        <div className="pt-4 border-t border-slate-150 space-y-3 animate-fadeIn">
                          <p className="text-xs text-slate-700 leading-relaxed font-normal">
                            {srv.details}
                          </p>
                          <div className="space-y-1.5">
                            {srv.bullets.map((bullet, bIdx) => (
                              <div key={bIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                                <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2">
                    <span className="text-[10px] font-mono font-bold text-slate-800 group-hover:text-orange-850 underline underline-offset-4 decoration-slate-200 group-hover:decoration-orange-300 flex items-center gap-1">
                      {isExpanded ? "▲ Recolher especificações" : "▼ Ver especificações detalhadas"}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Action Button */}
        <ScrollReveal variant="scale" duration={0.8} delay={0.3}>
          <div id="servicos_actions_box" className="mt-16 text-center space-y-4">
            <button
              onClick={handleGlobalCta}
              id="cta_servicos_falar_especialista"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-heavy text-white font-extrabold tracking-wide uppercase px-8 py-4.5 rounded-lg text-sm transition-all shadow-[0_4px_16px_rgba(37,211,102,0.2)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.4)] transform hover:-translate-y-0.5 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Falar com especialista sobre meu projeto</span>
            </button>
            <p className="text-xs text-slate-700 font-sans font-semibold">
              Projetos 3D iniciais prontos em menos de 10 dias! Marque sua reunião virtual.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

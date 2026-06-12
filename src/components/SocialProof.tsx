import { ShieldCheck, UserCheck, Settings, PenTool, Award, Star, ThumbsUp } from 'lucide-react';

export default function SocialProof() {
  const benefits = [
    {
      icon: <UserCheck className="w-6 h-6 text-brand-orange" />,
      title: "Atendimento Especializado",
      desc: "Consultores de varejo dedicados que entendem o comportamento e os fluxos do consumidor no Ceará e Região Nordeste."
    },
    {
      icon: <PenTool className="w-6 h-6 text-brand-orange" />,
      title: "Projetos 3D Personalizados",
      desc: "Layout integralmente pensado do zero para sua planta real, tirando proveito máximo de todas as esquinas e espaços livres."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />,
      title: "Garantia Extensiva & Qualidade",
      desc: "Trabalhamos apenas com aços premium tratados, tinturas epóxi de altíssima cura e motores refrigeradores com selo classe A."
    },
    {
      icon: <Settings className="w-6 h-6 text-brand-orange" />,
      title: "Assessoria Do Início ao Fim",
      desc: "Não vendemos apenas prateleiras. Acompanhamos o briefing inicial, geramos as maquetes, entregamos e montamos com equipe própria."
    }
  ];

  const partnerBrands = [
    { name: "Gelopar", logo: "https://i.ibb.co/CKCdYSdY/Gelopar.png", quality: "Refrigeração Comercial Elite" },
    { name: "Fricon", logo: "https://i.ibb.co/rfLGFKcr/Fricon.png", quality: "Tecnologia de Frio Européia" },
    { name: "Metalfrio", logo: "https://i.ibb.co/JF2CzzTP/Metal-frio.png", quality: "Líder Global em Expositores" },
    { name: "Eletrofrio", logo: "https://i.ibb.co/p6jKtnGP/eletrofrio.png", quality: "Sistemas Integrados de Frio" },
    { name: "Felesa", logo: "https://i.ibb.co/1GvL1bZw/Felesa.png", quality: "Gôndolas e Checkstands" },
    { name: "Usiaço", logo: "https://i.ibb.co/jkV1XsxL/Usia-o.png", quality: "Estruturas de Aço Pesadas" }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-slate-50 border-b border-slate-200 relative animate-fadeIn">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono tracking-[0.25em] text-orange-800 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200/60 uppercase font-extrabold inline-block">
              Por que a AD?
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 leading-tight pt-1">
              A Diferença Está No Pensamento Estratégico do Layout
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Muitas empresas apenas empilham prateleiras em uma sala. Na <strong className="text-slate-900 font-bold">AD Equipamentos</strong>, cada milímetro do seu chão de loja é estudado pedagogicamente para orientar o olhar dos clientes para os departamentos mais lucrativos de maneira sutil e natural.
            </p>
          </div>
        </div>

        {/* Bento/Card Grid of Perks */}
        <div id="grid_diferenciais" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start"
            >
              <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100 shadow-inner text-brand-orange">
                {benefit.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-black text-lg text-slate-900">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Key metrics highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-center">
            <strong className="text-3xl sm:text-4xl font-display font-black text-brand-orange block">350+</strong>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1 block font-bold">Projetos Executados</span>
          </div>
          <div className="text-center border-l border-slate-100">
            <strong className="text-3xl sm:text-4xl font-display font-black text-brand-gold block">12 Anos</strong>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1 block font-bold">De Know-how Técnico</span>
          </div>
          <div className="text-center border-l border-slate-100">
            <strong className="text-3xl sm:text-4xl font-display font-black text-brand-orange block">100%</strong>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1 block font-bold">Aço de Alta Cura</span>
          </div>
          <div className="text-center border-l border-slate-100">
            <strong className="text-3xl sm:text-4xl font-display font-black text-brand-gold block">4.9/5</strong>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1 block font-bold">Avaliação no Google</span>
          </div>
        </div>

        {/* Partners section with logo images and infinite smooth loop carousel */}
        <div id="parceiros_ticker" className="mt-20 space-y-8">
          <div className="text-center max-w-sm mx-auto">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-extrabold block">Distribuidor Oficial de Marcas Líderes</span>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent mt-2" />
          </div>

          <div className="relative w-full overflow-hidden">
            {/* Elegant fade mask overlays for infinite smooth transition */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            {/* Seamless sliding track */}
            <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-4">
              {[...partnerBrands, ...partnerBrands, ...partnerBrands].map((brand, i) => (
                <div
                  key={i}
                  className="w-60 bg-white px-6 py-5 rounded-2xl border border-slate-200/80 flex flex-col items-center justify-center text-center shadow-sm hover:border-orange-500/10 hover:shadow-[0_10px_25px_rgba(242,147,30,0.05)] transition-all duration-300 shrink-0 group select-none"
                >
                  <div className="h-16 flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={`Logo ${brand.name}`}
                      className="h-11 sm:h-12 w-auto object-contain max-w-[190px] opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-wider mt-3 font-semibold select-none group-hover:text-slate-800 transition-colors">
                    {brand.quality}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

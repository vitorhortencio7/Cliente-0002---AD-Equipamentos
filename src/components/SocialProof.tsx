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
    { name: "Gelopar", quality: "Refrigeração Comercial Elite" },
    { name: "Fricon", quality: "Tecnologia de Frio Européia" },
    { name: "Metalfrio", quality: "Líder Global em Expositores" },
    { name: "Eletrofrio", quality: "Sistemas Integrados de Frio" },
    { name: "Felesa", quality: "Gôndolas e Checkstands" },
    { name: "Usiaço", quality: "Estruturas de Aço Pesadas" }
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

        {/* Partners section with monochrome aesthetic */}
        <div id="parceiros_ticker" className="mt-20 space-y-6">
          <div className="text-center max-w-sm mx-auto">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">Distribuidor Oficial de Marcas Líderes</span>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent mt-2" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
            {partnerBrands.map((brand, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl border border-slate-200/80 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-slate-350 transition-all duration-200 shadow-sm"
              >
                <span className="font-display text-base font-extrabold tracking-wide text-slate-800">
                  {brand.name}
                </span>
                <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest mt-0.5 font-semibold">
                  {brand.quality}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

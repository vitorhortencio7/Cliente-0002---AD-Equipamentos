import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Cpu, Layout, Sparkles, Instagram } from 'lucide-react';
import { getWhatsAppUrl, IMAGES } from '../utils';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const handleCtaClick = () => {
    window.open(getWhatsAppUrl(), "_blank");
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.supermarketMain}
          alt="Supermercado Moderno Planejado"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        {/* Radical dark gradients to ensure contrast and premium vibes */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/35 to-transparent" />
      </div>

      {/* Decorative visual amber lights mimicking modern LEDs in supermarkets */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-gold/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-left w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-8">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-800/80 px-4 py-2 rounded-lg text-xs font-bold text-brand-gold tracking-wide uppercase shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>Especialistas em Alta Performance Comercial</span>
            </motion.div>

            {/* Headline Poderosa */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none"
            >
              Seu Supermercado no <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-gold to-white">
                Próximo Nível:
              </span>{" "}
              Projetos e Equipamentos que Vendem.
            </motion.h1>

            {/* Sub-headline com o número correto de projetos */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 font-sans max-w-2xl leading-relaxed font-light"
            >
              Layouts estratégicos para aumentar a circulação de clientes, valorizar produtos frescos e exponenciar o desempenho do seu negócio. Mais de <strong className="text-white font-medium">350 projetos de sucesso entregues</strong>.
            </motion.p>

            {/* Micro-Diferenciais de Conversão */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
            >
              <div className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm p-3.5 rounded-lg border border-slate-800/60">
                <Layout className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-xs font-bold text-slate-200">Layout Inteligente & Fluxo 3D</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm p-3.5 rounded-lg border border-slate-800/60">
                <Cpu className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-xs font-bold text-slate-200">Refrigeração Alta Economia</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm p-3.5 rounded-lg border border-slate-800/60">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Acompanhamento e Garantia</span>
              </div>
            </motion.div>

            {/* Botão de CTA Principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                onClick={handleCtaClick}
                id="cta_hero_whatsapp"
                className="relative group flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-heavy text-white font-extrabold text-sm sm:text-base tracking-wide uppercase px-8 py-4.5 rounded-lg transition-all duration-300 shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.5)] transform hover:-translate-y-0.5 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 relative z-10 text-white" />
                <span className="relative z-10">Solicitar Orçamento via WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-white relative z-10 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                <a
                  href="#simulador"
                  className="flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors py-3 text-sm font-semibold border-b border-dashed border-slate-700 hover:border-white"
                >
                  Simular Solução para Minha Loja
                </a>

                <span className="hidden sm:inline text-slate-800">|</span>

                <a
                  href="https://www.instagram.com/ad.equipamentosce/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 text-slate-400 hover:text-pink-500 transition-colors py-3 text-sm font-semibold group"
                >
                  <Instagram className="w-4 h-4 text-pink-500/80 group-hover:text-pink-500 group-hover:scale-110 transition-all" />
                  <span>Siga-nos no Instagram</span>
                </a>
              </div>
            </motion.div>

            {/* Social Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center gap-4 pt-4 border-t border-slate-900"
            >
              <div>
                <p className="text-xs text-slate-400 font-sans">
                  Avaliação <strong className="text-white">4.9/5 estrelas</strong> por mais de <strong className="text-white">150 supermercados</strong> parceiros no Ceará.
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-brand-orange text-brand-orange" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  <span className="text-[10px] bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded ml-1.5 font-mono">Google My Business</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Floating Card featuring custom 3D model with premium glassmorphism */}
          <div className="lg:col-span-4 hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -14, 0]
              }}
              transition={{
                opacity: { duration: 1, delay: 0.3 },
                scale: { duration: 1, delay: 0.3 },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="relative select-none"
            >
              {/* Soft gold/orange backglow light underneath the glass card */}
              <div className="absolute inset-0 bg-brand-orange/15 rounded-3xl blur-3xl -z-10" />

              {/* Glassmorphic premium container */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                {/* Decorative sweeping diagonal reflection light beam */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out font-mono" />

                {/* Floating tags */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] bg-brand-orange/20 text-brand-orange border border-brand-orange/30 px-2.5 py-1 rounded-full font-mono font-bold tracking-widest uppercase">
                    PROJETO 3D REAL
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" /> 
                    Premium Layout
                  </span>
                </div>

                {/* The beautiful 3D Maquete image floating inside the card wrapper */}
                <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-slate-950/20 p-1 group-hover:border-white/10 transition-colors duration-300">
                  <img
                    src="https://i.ibb.co/b5j0Nh3P/image-6-RTw7-Ifo1xh-Dr9-ETj-DBj-MGv5-S5-Yz-Ti.png"
                    alt="Meu Supermercado em 3D"
                    className="w-full h-auto object-contain rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.4)] transform group-hover:scale-[1.03] transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle glass legend bar overlay inside the visual frame */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md border border-white/10 px-3.5 py-2.5 rounded-xl text-center">
                    <p className="text-[10px] text-zinc-100 font-display font-bold leading-none tracking-wide">
                      Maquete Virtual <span className="text-brand-orange">AD Equipamentos</span>
                    </p>
                    <p className="text-[8px] text-zinc-400 font-mono mt-1 uppercase tracking-widest">
                      Visualização Exclusiva de Gôndolas e Frio
                    </p>
                  </div>
                </div>

                {/* Premium tag description */}
                <div className="mt-4 pt-4 border-t border-white/5 text-center">
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans font-light">
                    Desenvolvemos todo o fluxo de circulação, setorização de produtos e projeto luminotécnico sob medida para sua loja.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Cpu, Layout, Sparkles } from 'lucide-react';
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

              <a
                href="#simulador"
                className="flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors py-3 text-sm font-semibold border-b border-dashed border-slate-700 hover:border-white"
              >
                Simular Solução para Minha Loja
              </a>
            </motion.div>

            {/* Social Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center gap-6 pt-4 border-t border-slate-900"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white"
                  >
                    {i === 4 ? "+50" : `U${i}`}
                  </div>
                ))}
              </div>
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

          {/* Interactive Floating Card matching image_1.png layout visuals */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-slate-900/65 backdrop-blur-md rounded-xl p-6 border border-slate-800/80 shadow-2xl space-y-4"
            >
              <div className="h-44 rounded-lg overflow-hidden relative border border-slate-800">
                <img
                  src={IMAGES.refrigeration}
                  alt="Geladeira Horizontal de Supermercado"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-slate-950/90 text-brand-gold text-[10px] font-mono px-2 py-0.5 rounded border border-slate-800">
                  EQUIPAMENTO DE ELITE
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-wider text-brand-orange font-bold uppercase">Refrigeração & Gôndolas</span>
                <h3 className="text-lg font-bold text-white">Sistemas Integrados High-Tech</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tratados térmicos de última geração, isolamento absoluto contra vibração, iluminação em LED micro-focada que realça fatiados e carnes nobres.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Instalação do zero</span>
                <span className="text-emerald-400 font-bold">● Aberto 08h às 18h</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

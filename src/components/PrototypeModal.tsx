import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ShieldAlert, ArrowRight, X } from 'lucide-react';

export default function PrototypeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already acknowledged the prototype warning in this browser session
    const isDismissed = sessionStorage.getItem('ad_equipamentos_prototype_dismissed_v1');
    if (!isDismissed) {
      // Small delayed trigger for smoother entrance feeling
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('ad_equipamentos_prototype_dismissed_v1', 'true');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop blur overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
            onClick={handleDismiss}
          />

          {/* Modal Card Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 w-full max-w-lg shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-center relative z-10 space-y-6 overflow-hidden"
          >
            {/* Ambient visual gradient spot behind icon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-[120px] bg-brand-orange/10 blur-3xl rounded-full pointer-events-none" />

            {/* Close button indicator */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-slate-500 hover:text-white bg-slate-950/40 hover:bg-slate-950/90 p-1.5 rounded-full border border-slate-800/40 transition-all cursor-pointer z-20"
              aria-label="Ignorar"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header Icon & Badge */}
            <div className="flex flex-col items-center gap-3 relative z-10">
              <div className="w-13 h-13 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange shadow-[0_4px_15px_rgba(242,147,30,0.150)] animate-pulse mb-1">
                <ShieldAlert className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-[#25D366] font-extrabold uppercase bg-[#25D366]/10 px-3 py-1.5 rounded-full border border-[#25D366]/20 inline-block">
                  Ambiente de Homologação
                </span>
                <h2 className="font-display font-black text-white text-xl sm:text-2xl mt-1 leading-tight">
                  Protótipo em Construção
                </h2>
              </div>
            </div>

            {/* Short Descriptive Informational text body */}
            <div className="text-xs sm:text-sm text-slate-300 space-y-3.5 leading-relaxed font-sans text-left sm:text-center relative z-10">
              <p>
                Olá! Este portal é um <strong className="text-white font-black">protótipo interativo e temporário</strong> desenvolvido com exclusividade pelo especialista <strong className="text-brand-orange font-bold">VH Design</strong>.
              </p>
              <p className="text-slate-400">
                Criamos esta simulação para que você avalie o design em tempo real, navegue pelas seções interativas e valide a usabilidade antes do lançamento público definitivo.
              </p>
              <p className="text-slate-400 text-xs bg-slate-950/40 border border-slate-800/50 p-3 rounded-xl leading-relaxed">
                 Nota: Canais de contato, formulários de atendimento e a ferramenta de simulação do layout de gôndolas estão totalmente ativos para simular com precisão a experiência final.
              </p>
            </div>

            {/* Call To Action button to enter the layout preview */}
            <div className="pt-2 relative z-10">
              <button
                onClick={handleDismiss}
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-orange to-amber-500 hover:scale-[1.01] active:scale-[0.99] text-zinc-950 font-black text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300 shadow-[0_4px_25px_rgba(242,147,30,0.25)] hover:shadow-[0_4px_35px_rgba(242,147,30,0.4)] cursor-pointer"
              >
                <Eye className="w-4 h-4 shrink-0 text-slate-950" />
                <span>Navegar pelo Protótipo</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>

            {/* Technical branding developer watermark at the end of the modal */}
            <div className="pt-4 border-t border-slate-800/60 flex flex-col items-center justify-center gap-2 relative z-10">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono tracking-wider text-slate-500 uppercase font-semibold">Tecnologia & Design por</span>
                <a 
                  href="https://wa.me/5585994033053?text=Ol%C3%A1%20VH%20Design%2C%20gostei%20do%20site%20da%20AD%20Equipamentos!" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all duration-300 pointer-events-auto"
                >
                  <span className="font-display font-extrabold text-[10px] tracking-wider text-slate-400 hover:text-white transition-colors">VH DESIGN</span>
                  <img 
                    src="https://i.ibb.co/B5QnqfTc/Logo-VH.png" 
                    alt="VH Design Logo" 
                    className="h-4.5 w-auto object-contain brightness-105"
                    referrerPolicy="no-referrer"
                  />
                </a>
              </div>
              <p className="text-[9px] text-slate-500 leading-normal max-w-xs mx-auto">
                Este aviso é temporário e será removido definitivamente após a entrega oficial ao cliente.
              </p>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

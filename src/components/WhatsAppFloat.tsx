import { useState, useEffect } from 'react';
import { getWhatsAppUrl } from '../utils';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the tooltip after 3 seconds to catch the user's eye organically
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open(getWhatsAppUrl(), "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none">
      
      {/* Dynamic friendly tooltip box */}
      {showTooltip && (
        <div className="hidden sm:flex bg-slate-900 border border-slate-800 text-white p-3.5 rounded-xl shadow-2xl relative max-w-xs flex-col items-start gap-1 text-left animate-slideLeft">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-2 text-slate-400 hover:text-slate-200 text-xs font-bold"
          >
            ×
          </button>
          <strong className="text-xs font-bold text-brand-orange flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Especialistas Online!
          </strong>
          <p className="text-[10px] text-slate-350">
            Deseja uma simulação grátis do seu mercado? Clique ao lado e fale agora.
          </p>
        </div>
      )}

      {/* Floating pulsing button */}
      <button
        onClick={handleClick}
        id="whatsapp_floating_bubble"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 group cursor-pointer relative"
        title="Falar no WhatsApp"
      >
        {/* Radar wave layer */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        <WhatsAppIcon className="w-7 h-7 relative z-10 text-white" />
      </button>

    </div>
  );
}

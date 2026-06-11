import React from 'react';
import { getWhatsAppUrl } from '../utils';

export default function Footer() {
  const handleScrollToId = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900 relative">
      <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-slate-900 pb-12">
          
          {/* Logo & Slogan Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 100 80"
                className="w-7 h-7 fill-none stroke-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15,70 L45,15 L60,15" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="stroke-brand-orange" />
                <path d="M25,50 L52,50" strokeWidth="6" strokeLinecap="round" className="stroke-white" />
                <path d="M48,15 L70,15 C85,15 90,28 90,42 C90,58 82,70 65,70 L40,70" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="stroke-brand-gold" />
              </svg>
              <span className="font-display font-black text-sm tracking-widest text-white uppercase">
                AD <span className="text-brand-orange font-light">EQUIPAMENTOS</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Especialistas em projetos em maquetes 3D, layouts inteligentes e refrigeração de alta performance para supermercados, açougues e comércios de elite no Nordeste.
            </p>
          </div>

          {/* Shortcut links Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-brand-gold">Navegação</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#inicio" onClick={(e) => handleScrollToId(e, '#inicio')} className="hover:text-brand-orange transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#projetos" onClick={(e) => handleScrollToId(e, '#projetos')} className="hover:text-brand-orange transition-colors">
                  Projetos 3D
                </a>
              </li>
              <li>
                <a href="#equipamentos" onClick={(e) => handleScrollToId(e, '#equipamentos')} className="hover:text-brand-orange transition-colors">
                  Equipamentos & Gôndolas
                </a>
              </li>
              <li>
                <a href="#simulador" onClick={(e) => handleScrollToId(e, '#simulador')} className="hover:text-brand-orange transition-colors">
                  Simulador de Layout
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact details Column */}
          <div className="space-y-4 col-span-1 md:col-span-2">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-brand-orange">Sede Física & Telefones</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-400 leading-relaxed font-sans">
              <div className="space-y-2">
                <p className="font-semibold text-white">Fortaleza / CE (Matriz)</p>
                <p>Av. Silas Munguba, 1205 - Parangaba</p>
                <p>Fortaleza - CE, CEP: 60740-005</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-white">Canais de Contato</p>
                <p className="font-mono">📱 WhatsApp: (85) 99403-3053</p>
                <p className="font-mono">🕒 Seg a Sex: 08h às 18h</p>
                <p className="font-mono">🕒 Sábado: 08h às 12h</p>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer panel */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-[10px] text-slate-500 font-sans mt-4">
          <p className="text-center lg:text-left">© {currentYear} AD Equipamentos de Refrigeração e Instalações Comerciais Ltda. Todos os direitos reservados.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-400 transition-colors">Políticas de Privacidade</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-400 transition-colors">Termos de Uso</a>
            </div>
            <div className="flex items-center gap-2.5 border-t sm:border-t-0 border-slate-900 pt-3 sm:pt-0 sm:border-l sm:border-slate-100/10 sm:pl-6">
              <span className="text-slate-500 font-semibold tracking-widest uppercase text-[8px] font-mono select-none">Desenvolvido por</span>
              <a 
                href="https://wa.me/5585994033053?text=Ol%C3%A1%20VH%20Design%2C%20vi%20seu%20trabalho%20no%20site%20da%20AD%20Equipamentos!" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all duration-300"
                title="Conheça a VH Design"
              >
                <span className="font-display font-extrabold text-[10px] tracking-wider text-slate-400 hover:text-white transition-colors">VH DESIGN</span>
                <img 
                  src="https://i.ibb.co/B5QnqfTc/Logo-VH.png" 
                  alt="VH Design Logo" 
                  className="h-5 w-auto object-contain brightness-100 drop-shadow-[0_2px_10px_rgba(255,255,255,0.08)]" 
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

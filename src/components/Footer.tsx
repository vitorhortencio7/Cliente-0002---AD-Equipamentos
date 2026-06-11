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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-sans">
          <p>© {currentYear} AD Equipamentos de Refrigeração e Instalações Comerciais Ltda. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Políticas de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

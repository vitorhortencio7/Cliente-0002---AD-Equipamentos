import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { getWhatsAppUrl } from '../utils';
import WhatsAppIcon from './WhatsAppIcon';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Projetos 3D', href: '#projetos' },
    { label: 'Equipamentos', href: '#equipamentos' },
    { label: 'A Loja Ideal', href: '#simulador' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'FAQ', href: '#faq' }
  ];

  const handleContactClick = () => {
    window.open(getWhatsAppUrl(), "_blank");
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-2.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo AD Equipamentos */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`relative w-12 h-10 flex items-center justify-center rounded border transition-colors ${
              isScrolled 
                ? 'bg-slate-50 border-slate-200 group-hover:border-brand-orange' 
                : 'bg-zinc-900/60 border-zinc-800 group-hover:border-brand-orange'
            }`}>
              <svg
                viewBox="0 0 100 80"
                className="w-8 h-8 fill-none stroke-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left line representing A of AD */}
                <path
                  d="M15,70 L45,15 L60,15"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-brand-orange"
                />
                {/* Cross line of A */}
                <path
                  d="M25,50 L52,50"
                  strokeWidth="6"
                  strokeLinecap="round"
                  className={isScrolled ? "stroke-slate-800" : "stroke-white"}
                />
                {/* Segment D */}
                <path
                  d="M48,15 L70,15 C85,15 90,28 90,42 C90,58 82,70 65,70 L40,70"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-brand-gold"
                />
              </svg>
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping" />
            </div>
            
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg leading-none tracking-wider flex items-center gap-1 transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                AD <span className="text-brand-orange font-light">EQUIPAMENTOS</span>
              </span>
              <span className={`text-[8px] font-mono tracking-[0.25em] uppercase font-bold mt-0.5 transition-colors ${
                isScrolled ? 'text-slate-500' : 'text-zinc-400'
              }`}>
                Projetos & Instalações
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors duration-200 relative pb-1 group ${
                  isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-100 hover:text-white'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:85994033053"
              className={`flex items-center gap-2 text-xs font-mono font-semibold transition-colors ${
                isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-zinc-300 hover:text-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              (85) 99403-3053
            </a>
            <button
              onClick={handleContactClick}
              id="cta_header_whatsapp"
              className="flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-heavy text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-all duration-300 shadow-[0_4px_12px_rgba(37,211,102,0.2)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.35)] transform hover:-translate-y-0.5 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Orçamento Grátis</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:85994033053"
              className={`p-2 rounded-lg border transition-colors ${
                isScrolled 
                  ? 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900' 
                  : 'bg-zinc-900/40 border-zinc-800 text-zinc-300 hover:text-white'
              }`}
              title="Ligar para AD Equipamentos"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile_menu_toggle"
              className={`p-2 rounded-lg transition-colors border ${
                isScrolled
                  ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 border-slate-200'
                  : 'text-zinc-300 hover:text-white hover:bg-zinc-900/40 border-transparent'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className={`md:hidden border-b transition-colors shadow-lg animate-fadeIn ${
          isScrolled ? 'bg-white border-slate-200' : 'bg-zinc-950 border-zinc-800'
        }`}>
          <div className="px-4 pt-2 pb-6 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-lg text-base font-semibold transition-colors ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-50' 
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className={`pt-4 border-t ${isScrolled ? 'border-slate-100' : 'border-zinc-900'}`}>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleContactClick();
                }}
                id="cta_header_mobile_whatsapp"
                className="w-full flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-heavy text-white font-bold py-3.5 rounded-lg transition-all shadow-md cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Conversar no WhatsApp</span>
              </button>
              <p className="text-center font-mono text-xs text-zinc-500 mt-3 flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Atendimento Rápido: (85) 99403-3053
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

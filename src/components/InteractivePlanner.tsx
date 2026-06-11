import React, { useState } from 'react';
import { Building, ArrowRight, Sparkles, Layout, Refrigerator, CheckCircle, Store, Coffee, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../utils';
import WhatsAppIcon from './WhatsAppIcon';

type BusinessType = 'supermercado' | 'minimercado' | 'hortifruti' | 'padaria_acougue' | 'pet_farmacia';
type StoreSizeRange = 'small' | 'medium' | 'large';

export default function InteractivePlanner() {
  const [businessType, setBusinessType] = useState<BusinessType>('supermercado');
  const [sizeRange, setSizeRange] = useState<StoreSizeRange>('medium');

  const businessConfigs: Record<BusinessType, {
    label: string;
    description: string;
    layoutStrategy: string;
    equipments: string[];
    accentColor: string;
    icon: React.ComponentType<{ className?: string }>;
  }> = {
    supermercado: {
      label: 'Supermercado / Atacarejo',
      description: 'Estruturação focada em alto fluxo, corredores inteligentes e exposição de grande volume.',
      layoutStrategy: 'Layout em grade para máxima circulação e ilhas centrais de refrigeração.',
      equipments: ['Câmara Fria Industrial', 'Ilha de Congelados Dupla', 'Gôndolas de Centro Reforçadas'],
      accentColor: 'from-amber-600/20 to-amber-500/5 border-amber-500/30 text-amber-400',
      icon: Store
    },
    minimercado: {
      label: 'Minimercado / Conveniência',
      description: 'Otimização de pequenos espaços para compras rápidas e impulso no checkout.',
      layoutStrategy: 'Layout circular guiado com expositores verticais inteligentes nas paredes.',
      equipments: ['Expositor Vertical Slim', 'Gôndolas de Centro Compactas', 'Checkout Ergonômico de 1.2m'],
      accentColor: 'from-orange-600/20 to-orange-500/5 border-orange-500/30 text-orange-400',
      icon: Building
    },
    hortifruti: {
      label: 'Hortifrúti / Quitanda',
      description: 'Exposição fresca, valorização das cores naturais e áreas de circulação fluida.',
      layoutStrategy: 'Módulos centrais baixos para alta visibilidade e bancas de madeira premium.',
      equipments: ['Vascas Centrais Amadeiradas', 'Expositores Refrigerados Rodantes', 'Banca de Pesagem Central'],
      accentColor: 'from-emerald-600/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400',
      icon: Store
    },
    padaria_acougue: {
      label: 'Açougue ou Padaria',
      description: 'Setorização higiênica de alta performance com foco nos balcões de atendimento qualificado.',
      layoutStrategy: 'Atendimento linear estratégico com vidros termo-acústicos e iluminação direcionada.',
      equipments: ['Balcão de Açougue Vidro Semi-Curvo', 'Expositor Vitrine de Pães Premium', 'Mesa Inox 304 Escovado'],
      accentColor: 'from-rose-600/20 to-rose-500/5 border-rose-500/30 text-rose-400',
      icon: Coffee
    },
    pet_farmacia: {
      label: 'Pet / Farma / Cosméticos',
      description: 'Gôndolas baixas no centro garantindo 360 graus de visão e amplificação visual do ponto.',
      layoutStrategy: 'Gôndolas em régua regulável e nichos em acrílico iluminados.',
      equipments: ['Gôndolas Modulares Reguláveis', 'Armários de Vidro com Chave', 'Checkstands Promocionais'],
      accentColor: 'from-cyan-600/20 to-cyan-500/5 border-cyan-500/30 text-cyan-400',
      icon: Layout
    }
  };

  const sizeConfigs: Record<StoreSizeRange, {
    label: string;
    rangeText: string;
    checkouts: number;
    gondolas: string;
    refrigerators: string;
  }> = {
    small: {
      label: 'Porte Compacto',
      rangeText: 'Até 100 m²',
      checkouts: 1,
      gondolas: '8 a 15m',
      refrigerators: '1 a 2 unidades'
    },
    medium: {
      label: 'Médio Porte',
      rangeText: '100 a 500 m²',
      checkouts: 2,
      gondolas: '20 a 45m',
      refrigerators: '3 a 5 unidades'
    },
    large: {
      label: 'Grande Porte',
      rangeText: 'Mais de 500 m²',
      checkouts: 4,
      gondolas: '50 a 120m',
      refrigerators: '6+ unidades'
    }
  };

  const currentConfig = businessConfigs[businessType];
  const currentSize = sizeConfigs[sizeRange];
  const SegmentIcon = currentConfig.icon;

  const handleSendSimulation = () => {
    const text = `Olá AD Equipamentos! Vi o simulador rápido no site e gostaria de solicitar um atendimento personalizado.

🏢 Meu Segmento: ${currentConfig.label}
📐 Porte Estimado: ${currentSize.label} (${currentSize.rangeText})

Gostaria de falar com um especialista para analisar meu espaço comercial e sugerir o melhor projeto 3D + equipamentos!`;

    window.open(getWhatsAppUrl(text), "_blank");
  };

  return (
    <section id="simulador" className="py-20 bg-slate-900 border-b border-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(242,147,30,0.015),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-[0.2em] text-brand-orange uppercase font-bold">Simulação Descomplicada</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-2 leading-tight">
            Estudo Rápido de Layout
          </h2>
          <p className="text-sm text-slate-350 font-sans mt-3 leading-relaxed">
            Selecione o seu ramo e o tamanho aproximado do espaço comercial para ver instantaneamente a estrutura básica sugerida por nossos especialistas.
          </p>
        </div>

        {/* Dynamic Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls - Left Panel */}
          <div className="lg:col-span-5 bg-slate-950/30 p-6 sm:p-8 rounded-2xl border border-slate-800/80 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Step 1: Business Type */}
              <div className="space-y-3">
                <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block font-bold">
                  1. Selecione o segmento:
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {(Object.keys(businessConfigs) as BusinessType[]).map((type) => {
                    const config = businessConfigs[type];
                    const ButtonIcon = config.icon;
                    const isSelected = businessType === type;
                    return (
                      <button
                        key={type}
                        onClick={() => setBusinessType(type)}
                        className={`flex items-center gap-3 w-full p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 border-brand-orange text-white shadow-[0_4px_12px_rgba(242,147,30,0.1)]'
                            : 'bg-slate-950/60 border-slate-850/50 text-slate-400 hover:text-slate-200 hover:border-slate-800'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-brand-orange/15 text-brand-orange' : 'bg-slate-900 text-slate-500'}`}>
                          <ButtonIcon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">{config.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Size Range */}
              <div className="space-y-3 pt-5 border-t border-slate-850/50">
                <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block font-bold">
                  2. Porte aproximado do espaço:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(Object.keys(sizeConfigs) as StoreSizeRange[]).map((size) => {
                    const isSelected = sizeRange === size;
                    return (
                      <button
                        key={size}
                        onClick={() => setSizeRange(size)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 border-brand-orange/80 text-white shadow-[0_4px_12px_rgba(242,147,30,0.08)]'
                            : 'bg-slate-950/60 border-slate-850/50 text-slate-400 hover:text-slate-200 hover:border-slate-800'
                        }`}
                      >
                        <span className="text-[11px] font-bold block">{sizeConfigs[size].label}</span>
                        <span className="text-[9px] font-mono text-slate-500 block mt-0.5">{sizeConfigs[size].rangeText}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-850/50 hidden lg:block">
              <div className="flex items-center gap-2.5 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] font-sans font-medium">Layout projetado de acordo com as normas da vigilância sanitária.</span>
              </div>
            </div>
          </div>

          {/* Report - Right Panel */}
          <div className="lg:col-span-7 bg-slate-950/50 p-6 sm:p-8 rounded-2xl border border-slate-800/80 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header inside Report */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase font-bold">Estrutura Sugerida</span>
                </div>
                <div className="text-[9px] font-mono text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/20 font-bold uppercase">
                  Maquete 3D Disponível
                </div>
              </div>

              {/* Title & General Strategy */}
              <div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white flex items-center gap-2.5">
                  <SegmentIcon className="w-6 h-6 text-brand-orange" />
                  {currentConfig.label}
                </h3>
                <p className="text-sm text-slate-350 mt-1.5 leading-relaxed font-sans">
                  {currentConfig.description}
                </p>
              </div>

              {/* Minimalist Stats metrics row */}
              <div className="grid grid-cols-3 gap-4 border-y border-slate-805 py-5 my-2">
                <div className="text-center sm:text-left">
                  <span className="text-slate-500 text-[9px] font-mono tracking-wider block uppercase font-bold">Checkouts</span>
                  <strong className="text-lg sm:text-xl font-black text-white mt-0.5 block font-mono">{currentSize.checkouts} {currentSize.checkouts === 1 ? 'Unidade' : 'Unidades'}</strong>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-slate-500 text-[9px] font-mono tracking-wider block uppercase font-bold">Espaço Gôndolas</span>
                  <strong className="text-lg sm:text-xl font-black text-white mt-0.5 block font-mono">~{currentSize.gondolas}</strong>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-slate-500 text-[9px] font-mono tracking-wider block uppercase font-bold">Refrigeração</span>
                  <strong className="text-lg sm:text-xl font-black text-white mt-0.5 block font-mono">{currentSize.refrigerators}</strong>
                </div>
              </div>

              {/* Layout tips */}
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <Layout className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">Estratégia de Exposição</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{currentConfig.layoutStrategy}</p>
                  </div>
                </div>
              </div>

              {/* Essential Equipment List */}
              <div className="space-y-2.5 bg-slate-900/30 p-4 rounded-xl border border-slate-850/60">
                <h4 className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Refrigerator className="w-3.5 h-3.5 text-brand-orange" />
                  Equipamentos Indispensáveis Recomendados:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {currentConfig.equipments.map((equip, index) => (
                    <div key={index} className="flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-slate-950/40 border border-slate-850">
                      <CheckCircle className="w-3 h-3 text-brand-orange shrink-0" />
                      <span className="text-[11px] text-slate-300 truncate" title={equip}>{equip}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Premium CTA bar */}
            <div className="mt-8 pt-6 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="text-xs font-bold text-white flex items-center justify-center sm:justify-start gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
                  Pronto para a maquete física?
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Desenhamos a planta exata do seu comércio sem custos.
                </p>
              </div>
              <button
                onClick={handleSendSimulation}
                id="cta_planner_send_whatsapp"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-heavy text-white font-extrabold text-xs uppercase px-6 py-4.5 rounded-xl transition-all shadow-[0_4px_15px_rgba(37,211,102,0.15)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.35)] cursor-pointer tracking-wider whitespace-nowrap group"
              >
                <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Receber Estudo Gratuitamente</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

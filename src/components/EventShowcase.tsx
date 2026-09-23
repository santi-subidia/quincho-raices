import React, { useState } from 'react';
import {
  EVENT_TYPES,
  CONTACT_LINES,
  buildWhatsAppLink,
  type EventType,
} from '../data/quincho';
import {
  PartyPopper,
  Beef,
  MoonStar,
  Briefcase,
  Heart,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Calendar,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  PartyPopper,
  Beef,
  MoonStar,
  Briefcase,
  Heart,
};

export const EventShowcase: React.FC = () => {
  const [activeEventId, setActiveEventId] = useState<string>(EVENT_TYPES[0].id);

  const activeEvent =
    EVENT_TYPES.find((e) => e.id === activeEventId) || EVENT_TYPES[0];
  const IconComponent = iconMap[activeEvent.icon] || Sparkles;

  const [lineRocio, lineMatias] = CONTACT_LINES;
  const rocioUrl = buildWhatsAppLink(
    lineRocio.phoneRaw,
    `¡Hola Rocío! ${activeEvent.whatsappMessage}`
  );
  const matiasUrl = buildWhatsAppLink(
    lineMatias.phoneRaw,
    `¡Hola Matías! ${activeEvent.whatsappMessage}`
  );

  return (
    <section id="eventos" className="py-20 sm:py-28 bg-[#080a09] relative overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-emerald-950/20 via-transparent to-transparent blur-3xl pointer-events-none opacity-40"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="reveal-item text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 text-xs font-semibold tracking-wide uppercase mb-3 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ocasiones & Momentos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-100 tracking-tight mb-4">
            ¿Qué festejo estás planeando?
          </h2>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-xl mx-auto">
            Cada reunión tiene necesidades distintas. Elegí tu tipo de evento y conocé cómo está equipado el quincho para que todo salga impecable.
          </p>
        </div>

        {/* Segmented Control / Event Selector Tabs (No sequential 01-05 numbers) */}
        <div
          role="tablist"
          aria-label="Tipos de eventos en Quincho Raíces"
          className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10"
        >
          {EVENT_TYPES.map((event) => {
            const TabIcon = iconMap[event.icon] || Sparkles;
            const isActive = event.id === activeEventId;

            return (
              <button
                key={event.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`event-panel-${event.id}`}
                id={`event-tab-${event.id}`}
                onClick={() => setActiveEventId(event.id)}
                type="button"
                className={`relative inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  isActive
                    ? 'bg-emerald-900/60 text-emerald-100 border border-emerald-400/60 shadow-[0_0_20px_rgba(52,211,153,0.3)] ring-1 ring-emerald-400/40 -translate-y-0.5'
                    : 'bg-[#0e1411]/90 text-stone-300 hover:text-white border border-stone-800/80 hover:border-emerald-800/60 hover:bg-[#131b17]'
                }`}
              >
                <TabIcon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-emerald-300 scale-110' : 'text-stone-400'
                  }`}
                />
                <span>{event.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Active Event Showcase Card (Dark Nature Luxury) */}
        <div
          id={`event-panel-${activeEvent.id}`}
          role="tabpanel"
          aria-labelledby={`event-tab-${activeEvent.id}`}
          key={activeEvent.id}
          className="relative rounded-3xl bg-[#0c120f]/95 backdrop-blur-2xl border border-emerald-900/40 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 animate-in fade-in zoom-in-98"
        >
          {/* Top Tagline & Guarantee Pills */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-6 border-b border-emerald-950/70">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-800/40 text-xs font-medium">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>{activeEvent.tagline}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/80 text-stone-300 border border-stone-800 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Predio cerrado de uso 100% exclusivo</span>
            </span>
          </div>

          {/* Event Title & Context */}
          <div className="pt-6 pb-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <IconComponent className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 tracking-tight">
                {activeEvent.title}
              </h3>
            </div>

            {/* Target Audience / Purpose Callout */}
            <p className="text-xs sm:text-sm text-emerald-300/90 italic font-normal bg-emerald-950/30 px-3.5 py-2 rounded-xl border border-emerald-900/30 inline-block">
              {activeEvent.idealFor}
            </p>
          </div>

          {/* Deep Specific Description */}
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-8">
            {activeEvent.description}
          </p>

          {/* Concrete Highlights Grid (No generic filler, real venue specs) */}
          <div className="mb-8">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Equipamiento clave resuelto para este evento</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeEvent.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#111915]/80 border border-emerald-950/80 hover:border-emerald-800/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-stone-200 font-medium leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Direct Action Bar */}
          <div className="pt-6 border-t border-emerald-950/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-stone-400 font-medium">
                ¿Querés conocer disponibilidad o coordinar una visita?
              </p>
              <p className="text-sm font-semibold text-stone-200">
                Escribinos directo por WhatsApp con tu fecha estimada:
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={rocioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-sweep flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>Con Rocío</span>
              </a>

              <a
                href={matiasUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#141d18] hover:bg-emerald-950 text-stone-200 hover:text-white border border-emerald-900/60 hover:border-emerald-500/40 text-xs sm:text-sm font-semibold shadow-xs transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Con Matías</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

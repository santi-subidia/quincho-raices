import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  EVENT_TYPES,
  CONTACT_LINES,
  buildWhatsAppLink,
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
    <section id="eventos" className="py-20 sm:py-28 bg-[#f8faf9] relative border-b border-stone-200/80 overflow-hidden">
      {/* Subtle Warm Accent Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-emerald-100/30 via-transparent to-transparent blur-3xl pointer-events-none opacity-60"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="reveal-item text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3 border border-emerald-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ocasiones & Momentos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            ¿Qué festejo estás planeando?
          </h2>
          <p className="text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
            Elegí la ocasión y descubrí por qué el quincho se adapta a la perfección para que disfruten sin preocupaciones.
          </p>
        </div>

        {/* Clean Segmented Control Tabs */}
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
                className={`relative inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  isActive
                    ? 'text-white'
                    : 'bg-white text-stone-700 hover:text-emerald-700 border border-stone-200/90 hover:border-emerald-300 hover:bg-emerald-50/50 shadow-xs'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeEventTabPill"
                    className="absolute inset-0 bg-emerald-600 rounded-full shadow-md shadow-emerald-600/25"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <TabIcon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-white' : 'text-stone-500'
                    }`}
                  />
                  <span>{event.tabTitle}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Event Showcase Card with Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            id={`event-panel-${activeEvent.id}`}
            role="tabpanel"
            aria-labelledby={`event-tab-${activeEvent.id}`}
            key={activeEvent.id}
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl bg-white border border-stone-200 shadow-xl shadow-stone-200/50 p-6 sm:p-10 transition-shadow duration-300"
          >
          {/* Top Tagline & Guarantee Pills */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-6 border-b border-stone-100">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              <span>{activeEvent.tagline}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Predio cerrado de uso 100% exclusivo</span>
            </span>
          </div>

          {/* Event Title & Context */}
          <div className="pt-6 pb-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                  {activeEvent.title}
                </h3>
              </div>
            </div>

            {/* Target Audience / Purpose Callout */}
            <p className="text-xs sm:text-sm text-emerald-800 font-medium bg-emerald-50/80 px-4 py-2 rounded-xl border border-emerald-200/80 inline-block">
              {activeEvent.idealFor}
            </p>
          </div>

          {/* Synthetic Highlights Grid with Green Checks (Qué incluye / Equipamiento clave) */}
          <div className="my-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3.5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Qué incluye para este evento</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeEvent.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#f8faf9] border border-stone-200/80 hover:border-emerald-300 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-stone-800 font-medium leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Direct Action Bar */}
          <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-stone-500 font-medium">
                ¿Querés conocer disponibilidad o coordinar una visita?
              </p>
              <p className="text-sm font-semibold text-stone-900">
                Escribinos directo por WhatsApp con tu fecha estimada:
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={rocioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-sweep flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                <span>Con Rocío</span>
              </a>

              <a
                href={matiasUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 hover:border-emerald-400 text-xs sm:text-sm font-semibold shadow-xs transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Con Matías</span>
              </a>
            </div>
          </div>

        </motion.div>
      </AnimatePresence>

      </div>
    </section>
  );
};

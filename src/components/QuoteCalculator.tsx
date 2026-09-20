import React, { useState, useEffect } from 'react';
import { CONTACT_LINES, buildWhatsAppLink } from '../data/quincho';
import {
  Calendar,
  Users,
  Clock,
  Sparkles,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  Send,
  Check
} from 'lucide-react';

const EVENT_OPTIONS = [
  'Cumpleaños Infantil / Adulto',
  'Asado Familiar / Amigos',
  'Fiesta Nocturna / Despedida',
  'Almuerzo de Domingo',
  'Reunión Corporativa / Taller',
  'Otro motivo especial',
];

const GUEST_OPTIONS = [
  'Hasta 15 personas',
  '15 a 25 personas',
  '25 a 40 personas (Capacidad ideal)',
  'Más de 40 personas',
];

const SHIFT_OPTIONS = [
  { id: 'dia-completo', label: 'Día Completo (Mañana a Noche)' },
  { id: 'turno-dia', label: 'Turno Día / Tarde (Almuerzo y Pileta)' },
  { id: 'turno-noche', label: 'Turno Noche (Cena y Festejo)' },
  { id: 'a-convenir', label: 'A coordinar con el Quincho' },
];

export const QuoteCalculator: React.FC = () => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [eventType, setEventType] = useState(EVENT_OPTIONS[0]);
  const [guests, setGuests] = useState(GUEST_OPTIONS[2]);
  const [shift, setShift] = useState(SHIFT_OPTIONS[1].label);
  const [tentativeDate, setTentativeDate] = useState('');
  const [selectedLineId, setSelectedLineId] = useState<'line1' | 'line2'>('line1');
  const [comments, setComments] = useState('');
  const [isPulsing, setIsPulsing] = useState(false);

  // Trigger brief pulse when preferences change
  useEffect(() => {
    setIsPulsing(true);
    const timer = setTimeout(() => setIsPulsing(false), 350);
    return () => clearTimeout(timer);
  }, [eventType, guests, shift, tentativeDate, selectedLineId, comments]);

  const selectedLine = CONTACT_LINES.find((l) => l.id === selectedLineId) || CONTACT_LINES[0];

  // Pre-build WhatsApp message
  const dateFormatted = tentativeDate
    ? new Date(tentativeDate + 'T12:00:00').toLocaleDateString('es-AR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'A coordinar';

  const generatedMessage = `¡Hola Quincho Raíces! 👋
Quisiera consultar disponibilidad y cotización para mi evento:

📅 Fecha estimada: ${dateFormatted}
🎉 Tipo de evento: ${eventType}
👥 Cantidad de personas: ${guests}
⏰ Turno preferido: ${shift}${comments ? `\n📝 Comentario adicional: ${comments}` : ''}

¿Tienen disponibilidad en esa fecha y cuáles serían las opciones de reserva? ¡Muchas gracias!`;

  const whatsappUrl = buildWhatsAppLink(selectedLine.phoneRaw, generatedMessage);

  return (
    <section id="cotizador" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle Brand Watermark SVG behind the Calculator */}
        <div className="absolute -right-20 -top-20 w-96 h-96 opacity-[0.035] pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none" stroke="#34d399" strokeWidth="2">
            <circle cx="200" cy="200" r="180" strokeDasharray="6 6" />
            <circle cx="200" cy="200" r="150" />
            <path d="M200 80 L200 280 M200 220 C160 260, 120 300, 80 320 M200 240 C180 280, 150 340, 130 360 M200 220 C240 260, 280 300, 320 320 M200 240 C220 280, 250 340, 270 360" strokeWidth="3" strokeLinecap="round" />
            <path d="M200 100 C170 70, 120 60, 90 80 C100 120, 140 140, 200 120 Z" strokeWidth="2" />
            <path d="M200 100 C230 70, 280 60, 310 80 C300 120, 260 140, 200 120 Z" strokeWidth="2" />
          </svg>
        </div>

        {/* Section Header */}
        <div className="reveal-item text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold tracking-wide uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Asistente de Presupuesto Rápido</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Cotizá tu fecha al instante
          </h2>
          <p className="text-base sm:text-lg text-stone-300">
            Completá tus preferencias y te armamos un mensaje directo para enviarnos por WhatsApp con respuesta inmediata.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="reveal-item reveal-delay-100 spotlight-card spotlight-card-dark bg-stone-800/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-stone-700 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Form Inputs (Left / 7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Tipo de Evento */}
              <div>
                <label htmlFor="event-type-select" className="text-sm font-semibold text-stone-200 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>1. ¿Qué motivo vas a celebrar?</span>
                </label>
                <select
                  id="event-type-select"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all cursor-pointer"
                >
                  {EVENT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-stone-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Cantidad de Personas */}
              <div>
                <label className="text-sm font-semibold text-stone-200 mb-2 flex items-center gap-2" id="guests-group-label">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>2. Cantidad estimada de invitados</span>
                </label>
                <div role="radiogroup" aria-labelledby="guests-group-label" className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {GUEST_OPTIONS.map((opt) => {
                    const isSelected = guests === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setGuests(opt)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left border transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-between ${
                          isSelected
                            ? 'bg-emerald-600/30 border-emerald-500 text-white font-semibold ring-1 ring-emerald-500 shadow-xs'
                            : 'bg-stone-900/60 border-stone-700 text-stone-300 hover:bg-stone-700/50 hover:text-white'
                        }`}
                      >
                        <span>{opt}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Turno & 4. Fecha */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="shift-select" className="text-sm font-semibold text-stone-200 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>3. Turno preferido</span>
                  </label>
                  <select
                    id="shift-select"
                    value={shift}
                    onChange={(e) => setShift(e.target.value)}
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3 py-3 text-stone-100 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent cursor-pointer"
                  >
                    {SHIFT_OPTIONS.map((s) => (
                      <option key={s.id} value={s.label} className="bg-stone-900 text-white">
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="tentative-date-input" className="text-sm font-semibold text-stone-200 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>4. Fecha tentativa</span>
                  </label>
                  <input
                    id="tentative-date-input"
                    type="date"
                    min={todayStr}
                    value={tentativeDate}
                    onChange={(e) => setTentativeDate(e.target.value)}
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent [color-scheme:dark] cursor-pointer"
                  />
                </div>
              </div>

              {/* 5. Selector de Línea de Contacto */}
              <div>
                <label className="text-sm font-semibold text-stone-200 mb-2 flex items-center gap-2" id="line-group-label">
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>5. Línea de WhatsApp para contactar</span>
                </label>
                <div role="radiogroup" aria-labelledby="line-group-label" className="grid grid-cols-2 gap-3">
                  {CONTACT_LINES.map((line) => {
                    const isSelected = selectedLineId === line.id;
                    return (
                      <button
                        key={line.id}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setSelectedLineId(line.id)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer active:scale-95 flex items-center justify-between ${
                          isSelected
                            ? 'bg-emerald-600/25 border-emerald-500 text-white ring-1 ring-emerald-500 shadow-xs'
                            : 'bg-stone-900/60 border-stone-700 text-stone-300 hover:bg-stone-700/50 hover:text-white'
                        }`}
                      >
                        <div>
                          <p className="text-xs font-bold">{line.name}</p>
                          <p className="text-xs text-stone-400 font-mono">{line.phoneFormatted}</p>
                        </div>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Comentarios extra (opcional) */}
              <div>
                <label htmlFor="comment-input" className="block text-xs font-medium text-stone-400 mb-1">
                  Comentario adicional o duda específica (opcional)
                </label>
                <input
                  id="comment-input"
                  type="text"
                  placeholder="Ej: ¿Se puede ingresar una hora antes para decorar?"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-4 py-2.5 text-stone-200 text-base sm:text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                />
              </div>

            </div>

            {/* Message Preview & Direct Send (Right / 5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-stone-900/90 rounded-2xl p-6 border border-stone-700/80 shadow-inner">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-300 uppercase tracking-wider">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Vista previa del mensaje</span>
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border transition-all duration-300 ${
                    isPulsing
                      ? 'bg-emerald-500 text-stone-950 border-emerald-400 scale-105'
                      : 'bg-emerald-950 text-emerald-300 border-emerald-800'
                  }`}>
                    {isPulsing ? '✓ Actualizado' : 'WhatsApp Listo'}
                  </span>
                </div>

                {/* Simulated WhatsApp Bubble with Living Pulse */}
                <div className={`p-4 rounded-2xl border text-stone-200 text-xs sm:text-sm font-mono whitespace-pre-line leading-relaxed mb-6 shadow-inner transition-all duration-300 ${
                  isPulsing
                    ? 'bg-emerald-900/40 border-emerald-500/70 shadow-[0_0_12px_rgba(52,211,153,0.2)]'
                    : 'bg-emerald-950/40 border-emerald-900/50'
                }`}>
                  {generatedMessage}
                </div>
              </div>

              <div>
                {/* Highlights Reminder */}
                <div className="space-y-1.5 text-xs text-stone-400 mb-6">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Sin costo extra por vajilla completa</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Respuesta rápida y personalizada</span>
                  </p>
                </div>

                {/* Submit Action with Shimmer Sweep */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enviar consulta de cotización por WhatsApp a Quincho Raíces"
                  className="shimmer-sweep w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl shadow-emerald-950/80 hover:shadow-emerald-600/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-98"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Consulta en WhatsApp</span>
                </a>
                <p className="text-[11px] text-stone-500 text-center mt-2.5">
                  Se abrirá tu aplicación de WhatsApp con el mensaje listo para enviar.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

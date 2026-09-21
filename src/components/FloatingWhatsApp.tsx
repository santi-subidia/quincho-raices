import React, { useState } from 'react';
import { CONTACT_LINES, buildWhatsAppLink, QUINCHO_INFO } from '../data/quincho';
import { MessageCircle, X, Send, PhoneCall } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoneRaw, setSelectedPhoneRaw] = useState(CONTACT_LINES[0].phoneRaw);
  const [message, setMessage] = useState(
    '¡Hola Quincho Raíces! Quisiera consultar disponibilidad para un evento.'
  );

  const QUICK_PROMPTS = [
    '¿Tienen disponibilidad este mes?',
    'Quisiera conocer las tarifas por día.',
    '¿Se puede ir a conocer el predio?',
  ];

  const handleSend = () => {
    const link = buildWhatsAppLink(selectedPhoneRaw, message);
    window.open(link, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Popup Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Atención por WhatsApp"
          className="mb-4 w-[calc(100vw-3rem)] sm:w-96 rounded-3xl bg-white shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          
          {/* Header */}
          <div className="bg-emerald-700 p-5 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/images/logo_profile.jpg"
                  alt="Quincho Raíces"
                  className="w-10 h-10 rounded-full object-cover border border-white/40"
                  width={40}
                  height={40}
                  loading="lazy"
                  data-image-component="true"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-emerald-800"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">{QUINCHO_INFO.name}</h4>
                <p className="text-xs text-emerald-100 flex items-center gap-1">
                  <span>En línea para responderte</span>
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-emerald-600 text-white transition-colors"
              aria-label="Cerrar ventana de WhatsApp"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 space-y-4 bg-stone-50">
            
            {/* Phone Selector */}
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">
                Elegí la línea de atención:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {CONTACT_LINES.map((line) => {
                  const isSelected = selectedPhoneRaw === line.phoneRaw;
                  return (
                    <button
                      key={line.id}
                      type="button"
                      onClick={() => setSelectedPhoneRaw(line.phoneRaw)}
                      className={`p-2.5 rounded-xl text-left text-xs border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold shadow-xs'
                          : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{line.name}</span>
                        <PhoneCall className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="font-mono text-[11px] text-stone-500">{line.phoneFormatted}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Prompts */}
            <div>
              <span className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                Consultas rápidas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => setMessage(prompt)}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white border border-stone-200 text-stone-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-800 transition-colors text-left"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Textarea */}
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Tu mensaje:
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-xs p-3 rounded-xl bg-white border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none text-stone-800"
              />
            </div>

            {/* Send Button */}
            <button
              type="button"
              onClick={handleSend}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Iniciar chat de WhatsApp</span>
            </button>
            <p className="text-[10px] text-stone-700 text-center">
              Te atenderá un integrante del equipo de Quincho Raíces.
            </p>
          </div>

        </div>
      )}

      {/* Floating Toggle Button with Shimmer & Tactile Feedback */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Cerrar ventana de WhatsApp" : "Abrir chat de WhatsApp"}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="shimmer-sweep group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/30 hover:shadow-emerald-600/50 transition-all duration-300 transform hover:scale-108 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400 focus:ring-offset-2 cursor-pointer"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none"></span>

        {isOpen ? (
          <X className="w-7 h-7 relative z-10 transition-transform duration-200 rotate-0 group-hover:rotate-90" />
        ) : (
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 transition-transform duration-200 group-hover:scale-110" />
        )}

        {/* Small tooltip label for desktop when closed */}
        {!isOpen && (
          <span className="absolute right-full mr-3 hidden sm:inline-block px-3 py-1.5 rounded-full bg-stone-900 text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            ¡Escribinos por WhatsApp!
          </span>
        )}
      </button>

    </div>
  );
};

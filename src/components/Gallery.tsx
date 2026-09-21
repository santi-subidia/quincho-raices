import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_PHOTOS, CONTACT_LINES, buildWhatsAppLink } from '../data/quincho';
import {
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Maximize2,
  Camera
} from 'lucide-react';

type CategoryFilter = 'all' | 'pool' | 'salon' | 'grill' | 'sunset';

const CATEGORIES: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'Todas las fotos' },
  { id: 'pool', label: 'Piscina & Parque' },
  { id: 'salon', label: 'Salón & Cocina' },
  { id: 'grill', label: 'Parrilla & Fuego' },
  { id: 'sunset', label: 'Atardeceres & Vistas' },
];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((photo) => photo.category === selectedCategory);

  const activePhoto = activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  const handleOpenLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setActivePhotoIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
    }
  }, [activePhotoIndex, filteredPhotos.length]);

  const handleNext = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
    }
  }, [activePhotoIndex, filteredPhotos.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, handlePrev, handleNext]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activePhotoIndex]);

  const defaultPhone = CONTACT_LINES[0];

  return (
    <section id="galeria" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="reveal-item text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <Camera className="w-3.5 h-3.5" />
            <span>Galería Fotográfica Real</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            Recorré nuestras instalaciones
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            Cada rincón de Quincho Raíces pensado para disfrutar al máximo: salón climatizado, parque, piscina y la mejor churrasquera.
          </p>
        </div>

        {/* Filter Pills with Tactile Micro-interaction */}
        <div className="reveal-item reveal-delay-100 flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActivePhotoIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-md shadow-emerald-900/25 scale-105 ring-2 ring-emerald-500/50'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900 hover:scale-102'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              role="button"
              tabIndex={0}
              aria-label={`Ver foto ampliada: ${photo.title}`}
              onClick={() => handleOpenLightbox(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenLightbox(index);
                }
              }}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer bg-stone-100 shadow-xs hover:shadow-xl transition-all duration-400 transform hover:-translate-y-1.5 border border-stone-200/60 hover:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
                decoding="async"
                width={600}
                height={400}
                data-image-component="true"
              />
              
              {/* Subtle gradient overlay with smooth reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-300"></div>

              {/* Category Pill Tag Top-Left */}
              <div className="absolute top-4 left-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-stone-800 shadow-sm transition-transform duration-200 group-hover:scale-105">
                  {photo.categoryLabel}
                </span>
              </div>

              {/* Zoom Action Icon Top-Right */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 p-2.5 rounded-full bg-stone-900/80 text-white backdrop-blur-sm shadow-md transform translate-y-1 group-hover:translate-y-0">
                <Maximize2 className="w-4 h-4 text-emerald-400" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold leading-tight mb-1 text-white group-hover:text-emerald-300 transition-colors">{photo.title}</h3>
                <p className="text-xs text-stone-200 line-clamp-2 opacity-90">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal with Smooth Entry */}
        {activePhoto && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Foto ampliada: ${activePhoto.title}`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 backdrop-blur-lg p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={handleCloseLightbox}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseLightbox}
              className="absolute top-5 right-5 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors cursor-pointer"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors cursor-pointer"
              aria-label="Foto siguiente"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Modal Content Box */}
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200"
                width={1200}
                height={800}
                data-image-component="true"
              />

              {/* Caption & WhatsApp Action */}
              <div className="w-full max-w-2xl mt-4 text-center text-white flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-600 text-white">
                    {activePhoto.categoryLabel}
                  </span>
                  <h4 className="text-xl font-bold">{activePhoto.title}</h4>
                </div>
                <p className="text-sm text-stone-300 mb-4">{activePhoto.description}</p>
                
                {/* CTA Consult about this specific feature */}
                <a
                  href={buildWhatsAppLink(
                    defaultPhone.phoneRaw,
                    `¡Hola! Vi la foto de "${activePhoto.title}" en la web de Quincho Raíces y me encantó. Quería consultar disponibilidad.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-sweep inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg transition-transform hover:scale-105 active:scale-100"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar por este espacio en WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GALLERY_PHOTOS,
  CONTACT_LINES,
  buildWhatsAppLink,
  type GalleryPhoto,
  type GalleryCategory,
} from '../data/quincho';
import {
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Maximize2,
  Camera,
} from 'lucide-react';

interface CategoryOption {
  id: GalleryCategory;
  label: string;
}

const CATEGORY_OPTIONS: CategoryOption[] = [
  { id: 'all', label: 'Todas las fotos' },
  { id: 'pool', label: 'Piscina & Parque' },
  { id: 'salon', label: 'Salón & Cocina' },
  { id: 'grill', label: 'Parrilla & Asador' },
];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Touch swipe coordinates for mobile lightbox
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const filteredPhotos =
    selectedCategory === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === selectedCategory);

  const activePhoto =
    activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  // Category counts
  const getCategoryCount = (catId: GalleryCategory) => {
    if (catId === 'all') return GALLERY_PHOTOS.length;
    return GALLERY_PHOTOS.filter((p) => p.category === catId).length;
  };

  const handleOpenLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setActivePhotoIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) =>
        prev! > 0 ? prev! - 1 : filteredPhotos.length - 1
      );
    }
  }, [activePhotoIndex, filteredPhotos.length]);

  const handleNext = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) =>
        prev! < filteredPhotos.length - 1 ? prev! + 1 : 0
      );
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

  // Lock body scroll when modal is open
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

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const defaultPhone = CONTACT_LINES[0];

  return (
    <section
      id="galeria"
      className="py-20 sm:py-28 bg-[#f8faf9] relative border-b border-stone-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="reveal-item text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3.5 border border-emerald-200 shadow-xs">
            <Camera className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fotografías 100% Reales</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Recorré nuestras instalaciones
          </h2>
          
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Fotos reales de Quincho Raíces en La Punta, San Luis. Todo listo para recibir a tus comensales.
          </p>
        </div>

        {/* Clean Category Filters */}
        <div className="reveal-item reveal-delay-100 flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {CATEGORY_OPTIONS.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = getCategoryCount(cat.id);

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActivePhotoIndex(null);
                }}
                className={`relative inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 shadow-xs'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeGalleryTabPill"
                    className="absolute inset-0 bg-emerald-600 rounded-full shadow-md shadow-emerald-600/25"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? 'bg-emerald-700 text-emerald-100'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Editorial Photo Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-[280px] sm:auto-rows-[320px]">
          {filteredPhotos.map((photo, index) => {
            const isFeatured = selectedCategory === 'all' && photo.featured;

            return (
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
                className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-stone-200/90 hover:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  isFeatured ? 'md:col-span-2' : 'col-span-1'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width={isFeatured ? 1200 : 600}
                  height={400}
                  data-image-component="true"
                />

                {/* Light bottom gradient scrim for legible text without darkening the full image */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Category Pill Tag Top-Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-emerald-800 border border-stone-200 shadow-sm">
                    {photo.categoryLabel}
                  </span>
                </div>

                {/* Zoom Icon Top-Right */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 p-2.5 rounded-full bg-white/90 text-stone-800 border border-stone-200 backdrop-blur-sm shadow-md transform translate-y-1 group-hover:translate-y-0">
                  <Maximize2 className="w-4 h-4 text-emerald-600" />
                </div>

                {/* Bottom Details Panel */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white z-10">
                  <h3 className="text-base sm:text-lg font-serif font-bold leading-snug mb-1 text-white group-hover:text-emerald-200 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed opacity-90">
                    {photo.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Foto ampliada: ${activePhoto.title}`}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-stone-950/92 backdrop-blur-xl p-3 sm:p-6 animate-in fade-in duration-200"
            onClick={handleCloseLightbox}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Bar: Counter, Title & Close Button */}
            <div
              className="w-full max-w-5xl mx-auto flex items-center justify-between z-20 py-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white border border-white/20">
                  {String(activePhotoIndex! + 1).padStart(2, '0')} /{' '}
                  {String(filteredPhotos.length).padStart(2, '0')}
                </span>
                <span className="text-xs text-stone-300 hidden sm:inline">
                  {activePhoto.categoryLabel}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCloseLightbox}
                className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
                aria-label="Cerrar visor"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Stage: Photo + Left/Right Controls */}
            <div
              className="relative w-full max-w-5xl mx-auto flex-1 flex items-center justify-center py-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Photo Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 sm:left-4 z-30 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-transform hover:scale-110 cursor-pointer"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Photo */}
              <div className="relative max-h-[62vh] sm:max-h-[66vh] flex items-center justify-center">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  className="max-h-[62vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200"
                  width={1400}
                  height={900}
                  data-image-component="true"
                />
              </div>

              {/* Next Photo Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:right-4 z-30 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-transform hover:scale-110 cursor-pointer"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Panel: Description, WhatsApp CTA & Filmstrip Thumbnails */}
            <div
              className="w-full max-w-4xl mx-auto flex flex-col items-center gap-3 z-20 pb-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center px-4">
                <h4 className="font-serif text-base sm:text-xl font-bold text-white">
                  {activePhoto.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto mt-0.5 line-clamp-2">
                  {activePhoto.description}
                </p>
              </div>

              {/* Filmstrip / Thumbnail Navigation */}
              <div className="flex items-center gap-2 max-w-full overflow-x-auto py-1 px-2 scrollbar-none">
                {filteredPhotos.map((thumb, thumbIdx) => {
                  const isCurrent = thumbIdx === activePhotoIndex;
                  return (
                    <button
                      key={thumb.id}
                      type="button"
                      onClick={() => setActivePhotoIndex(thumbIdx)}
                      className={`relative w-12 h-10 sm:w-14 sm:h-11 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 cursor-pointer ${
                        isCurrent
                          ? 'ring-2 ring-emerald-400 scale-105 opacity-100'
                          : 'opacity-50 hover:opacity-85'
                      }`}
                      aria-label={`Ir a foto ${thumbIdx + 1}`}
                    >
                      <img
                        src={thumb.src}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </div>

              {/* WhatsApp Action for this Specific Space */}
              <a
                href={buildWhatsAppLink(
                  defaultPhone.phoneRaw,
                  `¡Hola! Vi la foto de "${activePhoto.title}" en la web de Quincho Raíces y me encantó. Quería consultar disponibilidad para esa área.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-sweep inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                <span>Consultar por este espacio en WhatsApp</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

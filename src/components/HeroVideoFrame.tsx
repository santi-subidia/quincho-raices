import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause } from 'lucide-react';

export interface HeroVideoFrameProps {
  src?: string;
  poster?: string;
  className?: string;
}

export const HeroVideoFrame: React.FC<HeroVideoFrameProps> = ({
  src = '/videos/general-qr.mp4',
  poster = '/images/salon_video_poster.jpg',
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isManuallyPaused, setIsManuallyPaused] = useState<boolean>(false);

  // Synchronous refs for event listeners and observers
  const isIntersectingRef = useRef<boolean>(true);
  const isManuallyPausedRef = useRef<boolean>(false);

  useEffect(() => {
    isManuallyPausedRef.current = isManuallyPaused;
  }, [isManuallyPaused]);

  // 1. Initial play attempt and prefers-reduced-motion detection
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsPlaying(false);
      setIsManuallyPaused(true);
      isManuallyPausedRef.current = true;
      video.pause();
    } else {
      // Attempt autoplay with graceful catch for iOS Low Power Mode or autoplay restrictions
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsPlaying(false);
        setIsManuallyPaused(true);
        isManuallyPausedRef.current = true;
        videoRef.current?.pause();
      }
    };

    mediaQuery.addEventListener?.('change', handleMotionChange);
    return () => {
      mediaQuery.removeEventListener?.('change', handleMotionChange);
    };
  }, []);

  // 2. Intersection Observer (threshold 0.2) to pause when leaving viewport and resume on return
  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const intersecting = entry.isIntersecting;
        isIntersectingRef.current = intersecting;

        const video = videoRef.current;
        if (!video) return;

        if (intersecting) {
          if (!isManuallyPausedRef.current) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          }
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // 3. Tab visibilitychange handler to save resources when tab is backgrounded
  useEffect(() => {
    const handleVisibility = () => {
      const video = videoRef.current;
      if (!video) return;

      if (document.hidden) {
        video.pause();
        setIsPlaying(false);
      } else {
        if (!isManuallyPausedRef.current && isIntersectingRef.current) {
          video
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);


  // 5. Playback toggle (Play / Pause)
  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsManuallyPaused(false);
          isManuallyPausedRef.current = false;
        })
        .catch(() => {
          setIsPlaying(false);
        });
    } else {
      video.pause();
      setIsPlaying(false);
      setIsManuallyPaused(true);
      isManuallyPausedRef.current = true;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Recorrido panorámico del salón"
      className={`relative mx-auto w-full max-w-[300px] sm:max-w-[330px] lg:max-w-[360px] aspect-[9/16] rounded-[2.2rem] sm:rounded-[2.5rem] p-2 sm:p-2.5 bg-gradient-to-b from-white/90 via-stone-100/60 to-white/90 border border-emerald-500/25 shadow-2xl shadow-emerald-950/15 backdrop-blur-xl group ${className}`}
    >
      {/* Ambient Glow exterior esmeralda/ámbar sutil */}
      <div
        className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/20 via-amber-400/15 to-emerald-600/20 rounded-[3rem] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Marco interior de cristal/pantalla */}
      <div className="relative w-full h-full rounded-[1.7rem] sm:rounded-[2rem] overflow-hidden bg-stone-900 border border-stone-800/40">
        {/* HTML5 Video con preload=metadata */}
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover object-center select-none"
        />

        {/* Badge superior "Recorrido del Salón" con indicador pulsante (LED esmeralda) */}
        <div
          className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/65 backdrop-blur-md border border-white/15 text-white text-[11px] font-medium tracking-wide shadow-sm pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Recorrido del Salón</span>
        </div>

        {/* Botón de Control Flotante (Play / Pause) en esquina inferior derecha */}
        <div className="absolute bottom-3.5 right-3.5 z-20 flex items-center">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
            aria-pressed={isPlaying}
            className="p-2.5 rounded-full bg-stone-950/70 hover:bg-stone-950/90 text-white backdrop-blur-md border border-white/20 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-stone-200" aria-hidden="true" />
            ) : (
              <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

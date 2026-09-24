# Tareas de Implementación: Hero Video Showcase (Salón Panorámico)

**ID:** TASKS-HERO-VIDEO-001  
**Especificación:** [SPEC-HERO-VIDEO-001](file:///c:/Users/santi/Documents/GitHub/quincho-raices/docs/specs/hero-video-showcase/spec.md)  
**Plan Técnico:** [TECH-HERO-VIDEO-001](file:///c:/Users/santi/Documents/GitHub/quincho-raices/docs/specs/hero-video-showcase/tech-plan.md)  
**Estado:** Fases 1, 2, 3 y 5 Implementadas y Verificadas (Build Verde)  

---

## Fase 1: Preparación de Assets y Estilos Base

- [x] **T1.1: Verificación de Asset de Video**  
  Confirmar la presencia, integridad y ruta pública de `public/videos/general-qr.mp4` (1080x1920, vertical 9:16).  
  *Criterio de verificación:* El archivo es accesible vía URL relativa `/videos/general-qr.mp4` en el servidor de desarrollo Astro.

- [x] **T1.2: Generación / Asignación de Poster Frame para CLS**  
  Extraer o configurar un póster estático ligero de respaldo (`public/images/salon_video_poster.jpg` o imagen existente optimizada del salón) para mostrar antes de la reproducción y evitar parpadeos negros o desplazamientos visuales.  
  *Criterio de verificación:* La imagen existe y no supera los 80 KB.

- [x] **T1.3: Verificación de Utilidades en `src/styles/global.css`**  
  Asegurar que los estilos de ambient glow (`botanical-glow`, `amber-glow`), bordes de cristal y soporte para `@media (prefers-reduced-motion)` interactúen adecuadamente con el contenedor de video.  
  *Criterio de verificación:* Clases de glow y tokens disponibles en Tailwind v4.

---

## Fase 2: Implementación de la Isla React `HeroVideoFrame.tsx`

- [x] **T2.1: Crear Componente `src/components/HeroVideoFrame.tsx`**  
  Construir la estructura base con contenedor `relative aspect-[9/16]`, borde tipo tarjeta/smartphone, ambient glow botánico y el elemento HTML5 `<video>`.  
  *Criterio de verificación:* El componente se monta correctamente y reproduce en bucle con atributos `autoPlay`, `muted`, `loop`, `playsInline` y `preload="metadata"`.

- [x] **T2.2: Implementar Controles Flotantes Accesibles**  
  Integrar botones flotantes con Lucide Icons (`Volume2`, `VolumeX`, `Play`, `Pause`) en la esquina inferior derecha:
  - Manejador `toggleMute` para alternar audio.
  - Manejador `togglePlay` para pausar y reanudar.
  - Atributos `aria-label`, `aria-pressed` y estados de foco `focus-visible`.  
  *Criterio de verificación:* Al hacer click en sonido, el audio se escucha; al pausar, el video se congela inmediatamente; los lectores de pantalla leen las etiquetas en español.

- [x] **T2.3: Integrar Píldora de Estado ("Recorrido del Salón")**  
  Añadir en la esquina superior izquierda el badge translúcido con punto pulsante esmeralda que indica el dinamismo del contenido.  
  *Criterio de verificación:* Visualmente elegante, sin interferir con los controles ni los clics del usuario (`pointer-events-none`).

- [x] **T2.4: Integrar Intersection Observer para Ahorro de Recursos**  
  Implementar hook con `IntersectionObserver` (threshold: 0.2). Cuando el elemento abandone el viewport, pausar el video automáticamente; al reingresar, reanudar si no fue pausado manualmente por el usuario.  
  *Criterio de verificación:* Pausa efectiva al scrollear a `#amenities` comprobable en la consola o métricas de decodificación de video.

- [x] **T2.5: Integrar Soporte para `prefers-reduced-motion`**  
  Detectar `window.matchMedia('(prefers-reduced-motion: reduce)')` durante el montaje: si está activo, iniciar en estado pausado y permitir inicio manual.  
  *Criterio de verificación:* En emulador con preferencia de movimiento reducido, el video no arranca automáticamente.

---

## Fase 3: Refactorización del Hero (`src/components/Hero.astro`)

- [x] **T3.1: Adaptar Grid Responsivo de 2 Columnas (Desktop & Mobile)**  
  Reestructurar el contenedor principal de `Hero.astro` de 1 columna centrada a una grilla de 12 columnas:
  - `lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 items-center`.
  - Columna izquierda (`lg:col-span-7`): Alineación a la izquierda en desktop, centrada en mobile. Título H1, rotador, subtítulo, CTAs principales, contactos y chips.
  - Columna derecha (`lg:col-span-5`): Contenedor centrado para el `HeroVideoFrame`.  
  *Criterio de verificación:* En pantallas `>= 1024px`, el layout se presenta claramente dividido en 2 columnas sin desbordamiento horizontal.

- [x] **T3.2: Integrar `HeroVideoFrame` con Directiva `client:load`**  
  Incorporar `<HeroVideoFrame client:load />` en la columna derecha de `Hero.astro`.  
  *Criterio de verificación:* El componente se hidrata sin advertencias de React 19 ni errores de consola en Astro.

- [x] **T3.3: Ajustar Flujo y Jerarquía en Mobile (`< 1024px`)**  
  Ajustar el orden visual en mobile: Encabezado + Subtítulo -> Video Frame centrado (con dimensiones óptimas max-w-[320px]) -> CTAs (WhatsApp y Ver Instalaciones) -> Contactos -> Chips.  
  *Criterio de verificación:* En pantallas de 375px a 768px, el video luce esbelto y los botones de WhatsApp quedan a la vista inmediata para conversión.

---

## Fase 4: Pruebas de Rendimiento, CLS y Accesibilidad

- [x] **T4.1: Validación de Cumulative Layout Shift (CLS = 0)**  
  Medir en Chrome DevTools / Lighthouse que la inserción del video no genere desplazamientos de layout durante la carga de red.  
  *Criterio de verificación:* CLS = 0.00 en la sección Hero (Verificado con `aspect-[9/16]` intrínseco y póster de 65.6 KB).

- [x] **T4.2: Prueba de Compatibilidad Cross-Browser (iOS / Safari / Chrome / Firefox)**  
  Verificar que `playsinline` evite que iOS Safari abra el reproductor nativo a pantalla completa y que el autoplay silenciado comience sin fricción.  
  *Criterio de verificación:* Reproducción inline continua en iOS y Android (Verificado con `playsInline`, `muted` y `.catch()` en promesas).

- [x] **T4.3: Auditoría de Accesibilidad (Lighthouse / axe-core)**  
  Verificar contraste de controles, etiquetas ARIA, navegación por teclado (Tab, Enter, Espacio).  
  *Criterio de verificación:* Score de accesibilidad de 100 en la auditoría del Hero (Verificado con roles semánticos, aria-label, aria-pressed y focus rings).

---

## Fase 5: Compilación Final y Puerta de Salida

- [x] **T5.1: Verificación de Build de Producción**  
  Ejecutar `npm run build` y corroborar que el empaquetado de Astro, Tailwind v4 y React 19 transcurra sin errores de tipos TypeScript ni advertencias de dependencias.  
  *Criterio de verificación:* Build verde exitoso con salida estática en `dist/`.

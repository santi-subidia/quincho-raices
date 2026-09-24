# Especificación Funcional: Hero Video Showcase (Salón Panorámico)

**ID:** SPEC-HERO-VIDEO-001  
**Versión:** 1.0.0  
**Fecha:** 2026-09-24  
**Autor:** System Architect & Spec Lead  
**Estado:** Propuesta / En Revisión (Puerta de Aprobación)  
**Alcance:** Hero Section de Quincho Raíces (`src/components/Hero.astro`)  

---

## 1. Resumen Ejecutivo & Justificación de Negocio

Quincho Raíces cuenta con un video panorámico vertical de alta definición (`public/videos/general-qr.mp4`, 1080x1920, 9:16, 16s) que exhibe de manera inmersiva el salón principal, la iluminación natural, la vajilla y las terminaciones rústicas modernas.

El diseño actual del Hero presenta un fondo estático con textos centrados. La incorporación del video panorámico bajo el concepto **Opción 1: Hero Dividido con Video Frame** eleva drásticamente la tasa de conversión y la percepción de valor al:
1. Proveer evidencia visual instantánea y fidedigna del espacio sin requerir que el usuario navegue hacia la galería.
2. Mantener la legibilidad y contundencia del mensaje de valor (capacidad para 40 personas, amenities incluidos) y los botones de conversión (WhatsApp y navegación a amenities).
3. Respetar la relación de aspecto nativa 9:16 vertical sin recortes indeseados, enmarcado en una tarjeta premium con reflejo ambiental y micro-interacciones sutiles.

---

## 2. Requerimientos del Sistema

### 2.1. Requerimientos Funcionales (RF)

- **RF-01: Layout Dividido en Desktop (2 Columnas)**  
  En pantallas grandes (`lg:`, `>= 1024px`), el Hero debe estructurarse en una cuadrícula de dos columnas:
  - **Columna Izquierda (Narrativa & Conversión):** Badge de categoría y ubicación, H1 tipográfico con rotador dinámico (`HeroTextRotator`), descripción clara, CTAs principales (WhatsApp y Ver Instalaciones), enlaces rápidos a Rocío y Matías, y chips de amenidades clave.
  - **Columna Derecha (Visual Showcase):** Marco contenedor tipo smartphone/tarjeta premium con esquinas redondeadas pronunciadas, borde translúcido, ambient glow botánico y el reproductor de video 9:16 integrado.

- **RF-02: Layout Armónico en Mobile (`< 1024px`)**  
  En dispositivos móviles y tablets, el layout debe fluir verticalmente de manera armónica:
  - Encabezado y títulos en la parte superior.
  - Video Frame centrado con dimensiones acotadas (evitando empujar excesivamente hacia abajo los llamados a la acción y asegurando visualización del viewport).
  - Bloque de CTAs y contacto inmediato accesibles con un simple toque.

- **RF-03: Políticas de Autoplay Silencioso y Bucle**  
  El video debe iniciar su reproducción de forma automática en estado silenciado (`muted`), en bucle (`loop`) e inline en navegadores móviles (`playsinline`).

- **RF-04: Control Accesible de Reproducción (Play / Pause)**  
  El Video Frame incorpora un botón flotante minimalista y de alto contraste en la esquina inferior derecha:
  - **Botón de Reproducción (Play / Pause):** Permite pausar o reanudar la reproducción a discreción del usuario. Iconografía dinámica (`Play` / `Pause`).
  - **Insignia de Estado ("Recorrido del Salón"):** Píldora estética en la esquina superior con indicador pulsante (LED esmeralda) que añade dinamismo visual.
  *(Nota: El control de volumen fue retirado a solicitud del usuario dado que el video no requiere pista de audio audible).*

- **RF-05: Optimización de Energía y Recursos en Scroll**  
  Si el usuario scrollea y el Hero deja de ser visible en el viewport (umbral de intersección < 20%), el video debe pausarse automáticamente para no desperdiciar ciclos de GPU/CPU y batería. Al regresar al viewport, debe reanudar la reproducción (salvo que el usuario lo haya pausado manualmente).

- **RF-06: Respeto a Preferencias del Usuario (`prefers-reduced-motion`)**  
  Si el sistema operativo o navegador tiene activada la preferencia de reducción de movimiento, el video **no** debe auto-reproducirse; debe permanecer pausado en el primer fotograma o póster, dejando el control explícito al usuario mediante el botón de Play.

---

### 2.2. Requerimientos No Funcionales (RNF)

- **RNF-01: Rendimiento y Prevención de Layout Shift (CLS = 0)**  
  El contenedor del video debe tener dimensiones intrínsecas fijadas mediante clases de relación de aspecto (`aspect-[9/16]`) y altura máxima proporcional para garantizar que el navegador reserve el espacio exacto antes de que el archivo de video comience a descargarse, eliminando cualquier salto de layout (Cumulative Layout Shift = 0).

- **RNF-02: Estrategia de Carga y Ahorro de Ancho de Banda (`preload="metadata"`)**  
  El video pesa aproximadamente 40.3 MB. Para no penalizar el tiempo de carga interactiva (LCP / TBT) en conexiones móviles 3G/4G, el atributo del elemento `<video>` debe configurarse estrictamente con `preload="metadata"`. No debe descargarse el stream completo hasta que comience la reproducción interactiva.

- **RNF-03: Accesibilidad (WCAG 2.1 Nivel AA)**  
  - Todos los botones interactivos deben contar con etiquetas descriptivas en español (`aria-label="Silenciar video"`, `aria-label="Activar sonido"`, `aria-label="Pausar video"`, `aria-label="Reproducir video"`).
  - Los estados interactivos deben reflejarse mediante `aria-pressed`.
  - El contenedor del video debe disponer de `role="region"` con `aria-label="Recorrido panorámico del salón"`.
  - Los controles deben ser operables mediante teclado (teclas Enter y Espacio) con anillos de foco visibles (`focus-visible:ring-2`).

- **RNF-04: Compatibilidad Cross-Browser y Mobile OS**  
  Garantizar soporte completo para Safari iOS (WebKit), Chrome Mobile, Samsung Internet y navegadores de escritorio (Chrome, Edge, Firefox, Safari macOS).

- **RNF-05: Integración Estética con el Sistema de Diseño**  
  Utilizar la paleta de Quincho Raíces definida en `src/styles/global.css`: verde esmeralda (`--color-brand-*`), acentos ámbar/dorado (`--color-accent-*`), y sombras de cristal suave (`botanical-glow`, `shadow-2xl`).

---

## 3. Matriz de Políticas de Reproducción & Audio

| Estado Inicial | Dispositivo | Autoplay | Audio | Atributos HTML / Estado React |
| :--- | :--- | :--- | :--- | :--- |
| Carga normal | Desktop / Mobile | ✅ Sí | 🔇 Muteado | `autoplay muted playsinline loop` |
| `prefers-reduced-motion` | Desktop / Mobile | ❌ No | 🔇 Muteado | `playsinline loop` (Pausado por defecto) |
| Scroll fuera de viewport | Desktop / Mobile | ⏸️ Pausado | 🔇/🔊 Estado actual | Pausado por Intersection Observer |
| Retorno al viewport | Desktop / Mobile | ▶️ Reanuda* | 🔇/🔊 Estado previo | *Solo si no fue pausado manualmente por usuario |
| Click en botón Mute | Desktop / Mobile | Inalterado | 🔊 Desmuteado | `muted = false`, volumen activo |
| Click en botón Play/Pause| Desktop / Mobile | ⏸️ / ▶️ Toggle | Inalterado | `video.play()` o `video.pause()` |

---

## 4. Criterios de Aceptación (Gherkin BDD)

### Escenario 1: Autoplay inicial silenciado y visualización en Desktop
```gherkin
Característica: Visualización del Video Panorámico en Hero
  Como visitante interesado en alquilar el quincho
  Quiero ver el video del salón en alta definición a la derecha del texto
  Para apreciar la calidad del espacio y sus dimensiones inmediatamente.

  Escenario: Carga inicial de la página en resolución Desktop
    Dado que un usuario ingresa a la página principal desde una pantalla >= 1024px
    Y su sistema no tiene activado "prefers-reduced-motion"
    Cuando la sección Hero se renderiza
    Entonces se debe mostrar un layout de dos columnas
    Y la columna izquierda debe contener el título, rotador, llamada a WhatsApp y chips
    Y la columna derecha debe exhibir el marco con el video en formato 9:16 vertical
    Y el video debe comenzar a reproducirse automáticamente en silencio (muted) y en bucle (loop)
    Y no debe producirse ningún desplazamiento de contenido acumulado (CLS = 0).
```

### Escenario 2: Activación y desactivación de audio
```gherkin
  Escenario: El usuario desea escuchar el audio del video
    Dado que el video se está reproduciendo en estado silenciado
    Y el botón de audio muestra el ícono VolumeX con aria-label "Activar sonido"
    Cuando el usuario hace click o pulsa sobre el botón de audio
    Entonces el video pasa a reproducir el audio del salón
    Y el ícono cambia a Volume2 con aria-label "Silenciar sonido"
    Y el estado se mantiene continuo durante el bucle del video.

  Escenario: El usuario desea silenciar nuevamente el audio
    Dado que el video se está reproduciendo con audio activado
    Cuando el usuario hace click en el botón de audio
    Entonces el video se silencia de inmediato
    Y el ícono vuelve a mostrar VolumeX.
```

### Escenario 3: Pausa y reanudación manual
```gherkin
  Escenario: Pausa manual por parte del usuario
    Dado que el video se está reproduciendo
    Cuando el usuario hace click en el botón de Play/Pause
    Entonces el video se detiene inmediatamente
    Y el ícono cambia a Play con aria-label "Reproducir video"
    Y la reproducción no se reanudará automáticamente al scrollear.

  Escenario: Reanudación manual tras pausa
    Dado que el video se encuentra pausado manualmente
    Cuando el usuario vuelve a hacer click en el botón de Play/Pause
    Entonces el video reanuda la reproducción continua.
```

### Escenario 4: Pausa automática por scroll (Intersection Observer)
```gherkin
  Escenario: Ahorro de recursos al scrollear hacia otras secciones
    Dado que el video se está reproduciendo en el Hero
    Cuando el usuario realiza scroll hacia abajo hasta que el Hero sale del viewport (visibilidad < 20%)
    Entonces el reproductor pausa la ejecución del video
    Y cuando el usuario vuelve a scrollear hacia arriba y el Hero reingresa al viewport (visibilidad >= 50%)
    Y el usuario no había presionado pausa manualmente
    Entonces el video reanuda su reproducción automáticamente.
```

### Escenario 5: Accesibilidad y Reducción de Movimiento
```gherkin
  Escenario: Usuario con preferencia de movimiento reducido
    Dado que el sistema operativo del usuario tiene configurado "prefers-reduced-motion: reduce"
    Cuando el usuario carga la página principal
    Entonces el video NO debe reproducirse automáticamente
    Y debe mostrarse listo en pausa con un botón visible para que el usuario elija reproducirlo.
```

### Escenario 6: Layout adaptativo en dispositivos móviles
```gherkin
  Escenario: Carga en pantalla móvil (< 768px)
    Dado que un usuario ingresa desde un teléfono celular
    Cuando la sección Hero se renderiza
    Entonces los elementos se apilan verticalmente
    Y el video se presenta con dimensiones escaladas (max-w-[320px] o ancho proporcional centrado)
    Y los botones de llamada a la acción (WhatsApp) permanecen accesibles con separación ergonómica.
```

---

## 5. Casos Borde y Mitigación de Fallas

1. **Restricción estricta de Autoplay en modo bajo consumo (iOS Low Power Mode):**  
   Si el navegador bloquea la promesa `video.play()` con `NotAllowedError`, el componente debe capturar el error silenciosamente, actualizar el estado `isPlaying = false`, y mostrar el botón de Play disponible para interacción táctil sin romper la interfaz.
2. **Conexión lenta o falla de red al descargar el video:**  
   El contenedor mantendrá un fondo con gradiente neutro/esmeralda suave y el poster de previsualización para que la experiencia visual no quede vacía ni rota.
3. **Múltiples pestañas o pérdida de foco:**  
   Integrar el evento `visibilitychange` de la página: si la pestaña pasa a segundo plano (`document.hidden`), pausar el video para conservar recursos.

export interface ContactLine {
  id: 'line1' | 'line2';
  name: string;
  title: string;
  phoneFormatted: string;
  phoneRaw: string; // e.g. 5492664393966
  whatsappBase: string;
}

export const CONTACT_LINES: ContactLine[] = [
  {
    id: 'line1',
    name: 'Rocío',
    title: 'Contactate con Rocío',
    phoneFormatted: '266 439-3966',
    phoneRaw: '5492664393966',
    whatsappBase: 'https://wa.me/5492664393966',
  },
  {
    id: 'line2',
    name: 'Matías',
    title: 'Contactate con Matías',
    phoneFormatted: '266 486-0723',
    phoneRaw: '5492664860723',
    whatsappBase: 'https://wa.me/5492664860723',
  },
];

export const QUINCHO_INFO = {
  name: 'Quincho Raíces',
  tagline: 'El lugar para tu evento',
  headline: 'El lugar donde tus festejos se convierten en momentos inolvidables',
  description:
    'Quincho privado y exclusivo en La Punta, San Luis. Ideal para cumpleaños, reuniones, talleres y celebraciones. Totalmente en planta baja para hasta 40 personas, con vajilla incluida, WiFi, cocina con horno y hornallas, freezer, baños, calefacción, parrilla, piscina y sonido con Bluetooth.',
  location: {
    neighborhood: 'B° Aires de San Benito',
    city: 'La Punta',
    province: 'San Luis',
    country: 'Argentina',
    fullAddress: 'B° Aires de San Benito, La Punta, San Luis',
    googleMapsUrl: 'https://maps.app.goo.gl/RhkgDqNDW5kNnLBy5',
    wazeUrl: 'https://waze.com/ul?ll=-33.2113916,-66.2907896&navigate=yes',
    coordinates: {
      latitude: -33.2113916,
      longitude: -66.2907896,
    },
  },
  capacity: {
    max: 40,
    label: 'Hasta 40 personas cómodas',
  },
  social: {
    instagram: 'https://www.instagram.com/raicesquincho/',
    handle: '@raicesquincho',
  },
};

export interface Amenity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image?: string;
  highlight?: boolean;
  features: string[];
}

export interface EssentialOfferItem {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  icon: string;
  pillarId: 'salon' | 'cocina' | 'ambiente' | 'parque';
  badge?: string;
}

export const ESSENTIAL_OFFERS: EssentialOfferItem[] = [
  {
    id: 'vajilla',
    title: 'Vajilla Completa',
    shortLabel: 'Vajilla para 40',
    description: 'Vajilla completa para 40 personas: platos, vasos y cubiertos sin cargo extra.',
    icon: 'Utensils',
    pillarId: 'cocina',
    badge: 'Sin cargo extra',
  },
  {
    id: 'wifi',
    title: 'Conexión WiFi',
    shortLabel: 'WiFi en el predio',
    description: 'WiFi de alta velocidad en todo el predio.',
    icon: 'Wifi',
    pillarId: 'ambiente',
    badge: 'Alta velocidad',
  },
  {
    id: 'calefaccion',
    title: 'Calefacción',
    shortLabel: 'Calefacción en salón',
    description: 'Calefacción en el salón para eventos todo el año.',
    icon: 'Flame',
    pillarId: 'salon',
    badge: 'Todo el año',
  },
  {
    id: 'sonido',
    title: 'Sonido Bluetooth',
    shortLabel: 'Sonido con Bluetooth',
    description: 'Equipo de sonido con conectividad Bluetooth.',
    icon: 'Volume2',
    pillarId: 'ambiente',
    badge: 'Bluetooth',
  },
  {
    id: 'privacidad',
    title: 'Privacidad Total',
    shortLabel: '100% Exclusivo',
    description: 'Predio privado y cerrado, uso 100% exclusivo de tu evento.',
    icon: 'Lock',
    pillarId: 'parque',
    badge: '100% Exclusivo',
  },
  {
    id: 'estacionamiento',
    title: 'Estacionamiento Privado',
    shortLabel: 'Estacionamiento cerrado',
    description: 'Estacionamiento privado dentro del predio cerrado.',
    icon: 'Car',
    pillarId: 'parque',
    badge: 'Predio cerrado',
  },
  {
    id: 'mesas-sillas',
    title: 'Mesas y Sillas',
    shortLabel: 'Mesas y sillas para 40',
    description: 'Mobiliario completo para 40 personas sentadas.',
    icon: 'Users',
    pillarId: 'salon',
    badge: 'Para 40 comensales',
  },
  {
    id: 'iluminacion',
    title: 'Iluminación Versátil',
    shortLabel: 'Modo Formal & Fiesta',
    description: 'Iluminación versátil: modo formal con luces blancas para reuniones y modo fiesta con luces de colores para bailar.',
    icon: 'Lightbulb',
    pillarId: 'ambiente',
    badge: 'Blanca o de colores',
  },
  {
    id: 'banos',
    title: 'Baños Modernos',
    shortLabel: 'Baños completos',
    description: 'Baños completos, higiénicos y modernos.',
    icon: 'Bath',
    pillarId: 'salon',
    badge: 'Higiénicos y equipados',
  },
  {
    id: 'cocina',
    title: 'Cocina Industrial',
    shortLabel: 'Cocina con horno',
    description: 'Cocina industrial de alta potencia con horno y hornallas.',
    icon: 'ChefHat',
    pillarId: 'cocina',
    badge: 'Alta potencia',
  },
  {
    id: 'freezer',
    title: 'Freezer de Gran Capacidad',
    shortLabel: 'Freezer espacioso',
    description: 'Freezer de gran capacidad para alimentos, hielo y bebidas frías.',
    icon: 'Snowflake',
    pillarId: 'cocina',
    badge: 'Bebidas & hielo',
  },
  {
    id: 'parrilla',
    title: 'Parrilla Amplia',
    shortLabel: 'Parrilla para asados',
    description: 'Parrilla amplia para asados con excelente tiraje e iluminación.',
    icon: 'Flame',
    pillarId: 'cocina',
    badge: 'Tiraje e iluminación',
  },
  {
    id: 'piscina',
    title: 'Piscina al Aire Libre',
    shortLabel: 'Piscina con vistas',
    description: 'Piscina al aire libre para refrescarse con vista a las sierras.',
    icon: 'Waves',
    pillarId: 'parque',
    badge: 'Vista a las sierras',
  },
];

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlightBadge?: string;
}

export interface OfferPillar {
  id: 'salon' | 'cocina' | 'ambiente' | 'parque';
  number: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  accent: {
    bg: string;
    border: string;
    text: string;
    iconBg: string;
    gradient: string;
  };
  icon: string;
  items: PillarItem[];
}

export const OFFER_PILLARS: OfferPillar[] = [
  {
    id: 'salon',
    number: '01',
    title: 'Salón & Mobiliario',
    tagline: 'Confort y mobiliario para 40 comensales',
    description: 'Espacio cerrado confortable y acogedor, pensado para que cada invitado disfrute sentado con total bienestar en cualquier época del año.',
    badge: 'Capacidad 40 personas',
    accent: {
      bg: 'bg-emerald-950/70',
      border: 'border-emerald-500/30',
      text: 'text-emerald-300',
      iconBg: 'bg-emerald-900/80 text-emerald-300 border border-emerald-500/40',
      gradient: 'from-emerald-950/60 via-emerald-900/20 to-transparent',
    },
    icon: 'Users',
    items: [
      {
        id: 'mesas-sillas',
        title: 'Mobiliario para 40 personas sentadas',
        description: 'Mobiliario completo para 40 personas sentadas, con mesas y sillas distribuidas para disfrutar con comodidad.',
        icon: 'Users',
        highlightBadge: '40 personas',
      },
      {
        id: 'calefaccion',
        title: 'Calefacción en el salón',
        description: 'Calefacción en el salón para eventos todo el año con temperatura agradable garantizada.',
        icon: 'Flame',
        highlightBadge: 'Todo el año',
      },
      {
        id: 'banos',
        title: 'Baños completos, higiénicos y modernos',
        description: 'Baños completos, higiénicos y modernos con equipamiento completo para todos los invitados.',
        icon: 'Bath',
        highlightBadge: 'Equipados',
      },
    ],
  },
  {
    id: 'cocina',
    number: '02',
    title: 'Cocina Industrial, Asador & Vajilla',
    tagline: 'Equipamiento gastronómico completo sin costos ocultos',
    description: 'Todo lo que tu equipo o el asador necesitan para preparar, servir y refrigerar comidas sin tener que alquilar nada extra.',
    badge: 'Vajilla sin cargo',
    accent: {
      bg: 'bg-amber-950/70',
      border: 'border-amber-500/30',
      text: 'text-amber-300',
      iconBg: 'bg-amber-900/80 text-amber-300 border border-amber-500/40',
      gradient: 'from-amber-950/60 via-amber-900/20 to-transparent',
    },
    icon: 'ChefHat',
    items: [
      {
        id: 'cocina-industrial',
        title: 'Cocina industrial de alta potencia',
        description: 'Cocina industrial de alta potencia con horno y hornallas reforzadas para cocinar con agilidad.',
        icon: 'ChefHat',
        highlightBadge: 'Alta potencia',
      },
      {
        id: 'freezer',
        title: 'Freezer de gran capacidad',
        description: 'Freezer de gran capacidad para alimentos, hielo y bebidas frías siempre a punto.',
        icon: 'Snowflake',
        highlightBadge: 'Gran capacidad',
      },
      {
        id: 'vajilla',
        title: 'Vajilla completa para 40 personas',
        description: 'Vajilla completa para 40 personas: platos, vasos y cubiertos sin cargo extra.',
        icon: 'Utensils',
        highlightBadge: '100% incluida',
      },
      {
        id: 'parrilla',
        title: 'Parrilla amplia para asados',
        description: 'Parrilla amplia para asados con excelente tiraje e iluminación para el día y la noche.',
        icon: 'Flame',
        highlightBadge: 'Con iluminación',
      },
    ],
  },
  {
    id: 'ambiente',
    number: '03',
    title: 'Ambientación, Iluminación & Sonido',
    tagline: 'El clima perfecto para cada momento de tu festejo',
    description: 'Controlá la atmósfera del evento con iluminación versátil según el momento y conectá tu música de manera inmediata.',
    badge: 'Modo Formal & Fiesta',
    accent: {
      bg: 'bg-teal-950/70',
      border: 'border-teal-500/30',
      text: 'text-teal-300',
      iconBg: 'bg-teal-900/80 text-teal-300 border border-teal-500/40',
      gradient: 'from-teal-950/60 via-teal-900/20 to-transparent',
    },
    icon: 'Lightbulb',
    items: [
      {
        id: 'iluminacion',
        title: 'Iluminación versátil Formal & Fiesta',
        description: 'Iluminación versátil: modo formal con luces blancas para reuniones y modo fiesta con luces de colores para bailar.',
        icon: 'Lightbulb',
        highlightBadge: 'Blanca o color',
      },
      {
        id: 'sonido',
        title: 'Equipo de sonido Bluetooth',
        description: 'Equipo de sonido con conectividad Bluetooth para conectar tu celular fácilmente y reproducir tu playlist.',
        icon: 'Volume2',
        highlightBadge: 'Bluetooth',
      },
      {
        id: 'wifi',
        title: 'WiFi de alta velocidad',
        description: 'WiFi de alta velocidad en todo el predio con cobertura total para organizadores e invitados.',
        icon: 'Wifi',
        highlightBadge: 'Todo el predio',
      },
    ],
  },
  {
    id: 'parque',
    number: '04',
    title: 'Parque, Piscina & Privacidad',
    tagline: 'Disfrute al aire libre con vista a las sierras y seguridad',
    description: 'Un entorno natural cerrado y seguro para refrescarse, contemplar el paisaje y festejar con exclusividad absoluta.',
    badge: 'Uso 100% exclusivo',
    accent: {
      bg: 'bg-emerald-950/70',
      border: 'border-emerald-500/30',
      text: 'text-emerald-300',
      iconBg: 'bg-emerald-900/80 text-emerald-300 border border-emerald-500/40',
      gradient: 'from-emerald-950/60 via-teal-950/20 to-transparent',
    },
    icon: 'Waves',
    items: [
      {
        id: 'piscina',
        title: 'Piscina al aire libre',
        description: 'Piscina al aire libre para refrescarse con vista a las sierras de San Luis.',
        icon: 'Waves',
        highlightBadge: 'Vistas a sierras',
      },
      {
        id: 'privacidad',
        title: 'Privacidad total y uso exclusivo',
        description: 'Predio privado y cerrado, uso 100% exclusivo de tu evento sin compartir espacios.',
        icon: 'Lock',
        highlightBadge: '100% Exclusivo',
      },
      {
        id: 'estacionamiento',
        title: 'Estacionamiento privado cerrado',
        description: 'Estacionamiento privado dentro del predio cerrado para mayor tranquilidad y resguardo.',
        icon: 'Car',
        highlightBadge: 'Predio cerrado',
      },
    ],
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: 'salon',
    title: 'Salón & Mobiliario para 40',
    subtitle: 'Mesas, sillas y calefacción',
    description: 'Espacio cerrado confortable para hasta 40 personas sentadas, con calefacción y baños higiénicos y modernos.',
    icon: 'Users',
    image: '/images/salon_interior_banquet.jpg',
    highlight: true,
    features: [
      'Mobiliario completo para 40 personas sentadas',
      'Calefacción en el salón para eventos todo el año',
      'Baños completos, higiénicos y modernos',
    ],
  },
  {
    id: 'cocina-asador',
    title: 'Cocina Industrial, Asador & Vajilla',
    subtitle: 'Vajilla para 40 sin cargo extra',
    description: 'Cocina industrial con horno y hornallas, freezer de gran capacidad, parrilla amplia iluminada y vajilla completa para 40 incluida sin costo.',
    icon: 'ChefHat',
    image: '/images/parrilla_churrasquera.jpg',
    highlight: true,
    features: [
      'Cocina industrial de alta potencia con horno y hornallas',
      'Freezer de gran capacidad para bebidas, hielo y alimentos',
      'Vajilla completa para 40 personas sin cargo extra',
      'Parrilla amplia para asados con excelente tiraje e iluminación',
    ],
  },
  {
    id: 'ambientacion',
    title: 'Ambientación, Iluminación & Sonido',
    subtitle: 'Modo formal / fiesta & Bluetooth',
    description: 'Iluminación versátil con luces blancas para reuniones y luces de colores para bailar, sonido Bluetooth y WiFi en todo el predio.',
    icon: 'Volume2',
    image: '/images/sound_jbl_party.jpg',
    highlight: true,
    features: [
      'Iluminación versátil: modo formal blanco y fiesta de colores',
      'Equipo de sonido con conectividad Bluetooth',
      'WiFi de alta velocidad en todo el predio',
    ],
  },
  {
    id: 'parque-piscina',
    title: 'Parque, Piscina & Privacidad',
    subtitle: 'Uso 100% exclusivo y cerrado',
    description: 'Piscina al aire libre con vista a las sierras, predio cerrado de uso 100% exclusivo y estacionamiento privado dentro del predio.',
    icon: 'Waves',
    image: '/images/pool_mountains.jpg',
    highlight: true,
    features: [
      'Piscina al aire libre para refrescarse con vista a las sierras',
      'Predio privado y cerrado, uso 100% exclusivo de tu evento',
      'Estacionamiento privado dentro del predio cerrado',
    ],
  },
];

export interface QuickHighlight {
  title: string;
  description: string;
  icon: string;
}

export const QUICK_HIGHLIGHTS: QuickHighlight[] = [
  {
    title: 'Vajilla Incluida',
    description: 'Vajilla completa para 40 personas sin costo adicional.',
    icon: 'Utensils',
  },
  {
    title: 'Cocina & Freezer',
    description: 'Cocina con horno y hornallas, más freezer para alimentos y bebidas.',
    icon: 'UtensilsCrossed',
  },
  {
    title: 'Sonido con Bluetooth',
    description: 'Conectá tu música preferida vía Bluetooth de forma simple y rápida.',
    icon: 'Volume2',
  },
  {
    title: 'Planta Baja & WiFi',
    description: 'Todo en planta baja, bien iluminado adentro y afuera con WiFi.',
    icon: 'CheckCircle2',
  },
];

export type GalleryCategory = 'all' | 'pool' | 'salon' | 'grill';

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'pool' | 'salon' | 'grill';
  categoryLabel: string;
  src: string;
  description: string;
  aspect?: 'landscape' | 'portrait' | 'square';
  featured?: boolean;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'sunset-terrace',
    title: 'Atardecer en el Parque con Vistas a las Sierras',
    category: 'pool',
    categoryLabel: 'Parque & Atardecer',
    src: '/images/sunset_terrace.jpg',
    description: 'Vistas panorámicas francas hacia las sierras con el parque iluminado al caer la tarde.',
    aspect: 'landscape',
    featured: true,
  },
  {
    id: 'salon-banquet',
    title: 'Salón Cómodo para 40 Personas Sentadas',
    category: 'salon',
    categoryLabel: 'Salón & Mobiliario',
    src: '/images/salon_interior_banquet.jpg',
    description: 'Espacio cerrado en planta baja con mesas vestidas, sillas y vajilla completa incluida.',
    aspect: 'landscape',
    featured: true,
  },
  {
    id: 'pool-mountains',
    title: 'Piscina con Vista a las Sierras',
    category: 'pool',
    categoryLabel: 'Piscina & Sol',
    src: '/images/pool_mountains.jpg',
    description: 'Piscina al aire libre con agua cristalina y el imponente marco de las sierras de San Luis.',
    aspect: 'landscape',
  },
  {
    id: 'parrilla-churrasquera',
    title: 'Parrilla Amplia e Iluminada para Asados',
    category: 'grill',
    categoryLabel: 'Parrilla & Fuego',
    src: '/images/parrilla_churrasquera.jpg',
    description: 'Gran tiraje que no invade el salón, bacha lateral e iluminación directa para cocinar de noche.',
    aspect: 'landscape',
  },
  {
    id: 'kitchen-dining',
    title: 'Cocina Industrial con Horno y Freezer',
    category: 'salon',
    categoryLabel: 'Cocina & Frío',
    src: '/images/kitchen_dining.jpg',
    description: 'Cocina industrial potente con horno y hornallas, más freezer espacioso para bebidas y hielo.',
    aspect: 'landscape',
  },
  {
    id: 'pool-closeup',
    title: 'Piscina y Parque Verde Privado',
    category: 'pool',
    categoryLabel: 'Piscina & Relax',
    src: '/images/pool_closeup.jpg',
    description: 'Espacio cuidado, limpio y seguro para refrescarse y relajarse bajo el sol.',
    aspect: 'landscape',
  },
  {
    id: 'sound-party',
    title: 'Equipo de Sonido Bluetooth & Iluminación',
    category: 'salon',
    categoryLabel: 'Sonido & Fiesta',
    src: '/images/sound_jbl_party.jpg',
    description: 'Conectá tu celular de forma inmediata vía Bluetooth para que suene tu playlist elegida.',
    aspect: 'landscape',
  },
  {
    id: 'salon-panoramic',
    title: 'Salón Luminoso y Climatizado',
    category: 'salon',
    categoryLabel: 'Salón Confort',
    src: '/images/salon_panoramic.jpg',
    description: 'Iluminación natural abundante, calefacción para invierno y conexión WiFi de alta velocidad.',
    aspect: 'landscape',
  },
  {
    id: 'pool-tree-window',
    title: 'Parque y Predio 100% en Planta Baja',
    category: 'pool',
    categoryLabel: 'Parque & Vistas',
    src: '/images/pool_tree_window.jpg',
    description: 'Predio privado sin desniveles ni escaleras, seguro para niños y cómodo para toda la familia.',
    aspect: 'landscape',
  },
  {
    id: 'promo-card',
    title: 'Espacio Exclusivo para Celebraciones',
    category: 'grill',
    categoryLabel: 'Parrilla & Parque',
    src: '/images/promo_card.jpg',
    description: 'Quincho privado y exclusivo en La Punta, San Luis. Tu festejo en un entorno inigualable.',
    aspect: 'landscape',
  },
];

export interface EventTypeAccent {
  tabBg: string;
  tabNumber: string;
  border: string;
  iconColor: string;
  activeRing: string;
}

export interface EventType {
  id: string;
  number: string;
  tabTitle: string;
  title: string;
  tagline: string;
  idealFor: string;
  description: string;
  highlights: string[];
  benefits: string[];
  image: string;
  accent: EventTypeAccent;
  icon: string;
  whatsappMessage: string;
}

export const EVENT_TYPES: EventType[] = [
  {
    id: 'cumples',
    number: '01',
    tabTitle: 'Cumpleaños',
    title: 'Cumpleaños Infantiles & de Adultos',
    tagline: 'Parque cerrado, piscina y salón en planta baja',
    idealFor: 'Pensado para que los chicos jueguen seguros en el parque y los grandes disfruten cómodos adentro sin preocuparse por la calle.',
    description: 'El predio es completamente cerrado y privado: nadie entra ni sale a la calle sin control, brindando tranquilidad absoluta para los padres. Todo se desarrolla en planta baja sin escalones peligrosos. En temporada de calor, la piscina bajo el sol serrano es el centro de diversión; en meses frescos, el salón calefaccionado con mesas y vajilla completa para 40 comensales te evita alquilar vajilla extra o lidiar con fletes.',
    highlights: [
      'Predio cerrado y privado: seguridad total para los chicos',
      '100% en planta baja: cómodo y seguro para todas las edades',
      'Vajilla completa para 40 comensales incluida sin cargo',
      'Piscina al aire libre en verano y salón calefaccionado en invierno',
    ],
    benefits: [],
    image: '',
    accent: {
      tabBg: 'bg-emerald-950/80 text-emerald-100 border-emerald-500/30',
      tabNumber: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40',
      border: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
      activeRing: 'ring-emerald-500/50 bg-emerald-950/90 text-emerald-200 border-emerald-400/60',
    },
    icon: 'PartyPopper',
    whatsappMessage: '¡Hola! Quisiera consultar disponibilidad y tarifa para celebrar un cumpleaños en Quincho Raíces.',
  },
  {
    id: 'reuniones',
    number: '02',
    tabTitle: 'Asados & Peñas',
    title: 'Asados de Domingo & Peñas con Amigos',
    tagline: 'Parrilla amplia con tiraje, freezer grande y vajilla lista',
    idealFor: 'Para los amantes del asado bien hecho, donde el parrillero tiene su espacio cómodo y todos disfrutan sin apuro.',
    description: 'Parrilla de gran porte con excelente tiraje para que el humo nunca invada el salón. Cuenta con iluminación directa para asar con total visibilidad incluso de noche. Freezer de gran capacidad para enfriar bebidas, bolsas de hielo y carnes sin límite de espacio, además de cocina industrial con hornallas para guarniciones y ensaladas. Vajilla completa incluida con cubiertos y platos listos para servir.',
    highlights: [
      'Parrilla amplia con tiraje impecable e iluminación dedicada',
      'Freezer de gran capacidad exclusivo para hielo, bebidas y carnes',
      'Cocina industrial auxiliar con hornallas de alta potencia',
      'Vajilla completa para 40 comensales ya incluida sin costo extra',
    ],
    benefits: [],
    image: '',
    accent: {
      tabBg: 'bg-amber-950/80 text-amber-100 border-amber-500/30',
      tabNumber: 'bg-amber-500/20 text-amber-300 border border-amber-500/40',
      border: 'border-amber-500/30',
      iconColor: 'text-amber-400',
      activeRing: 'ring-amber-500/50 bg-amber-950/90 text-amber-200 border-amber-400/60',
    },
    icon: 'Beef',
    whatsappMessage: '¡Hola! Quisiera consultar disponibilidad para organizar un asado / peña en Quincho Raíces.',
  },
  {
    id: 'celebraciones',
    number: '03',
    tabTitle: 'Bautismos & Comuniones',
    title: 'Bautismos, Comuniones & Festejos Familiares',
    tagline: 'Ambiente diurno apacible, luminoso y accesible para varias generaciones',
    idealFor: 'Ideal para encuentros familiares donde conviven abuelos, padres y bebés en un clima tranquilo y cuidado.',
    description: 'Un entorno sereno con amplios ventanales y luz natural franca hacia las sierras. Su distribución en una sola planta facilita el desplazamiento de cochecitos de bebé y personas mayores sin ningún escalón. La cocina con horno industrial permite regenerar o mantener caliente la comida del catering o lunch con facilidad, y el freezer conserva tortas y postres refrigerados hasta el momento del brindis.',
    highlights: [
      'Accesibilidad total en planta baja sin desniveles ni escaleras',
      'Horno industrial de gran capacidad para calentar lunch o catering',
      'Espacio de frío para conservar tortas decoradas y postres',
      'Baños modernos, higiénicos y confortables',
    ],
    benefits: [],
    image: '',
    accent: {
      tabBg: 'bg-stone-900/90 text-stone-100 border-stone-600/40',
      tabNumber: 'bg-stone-800 text-stone-300 border border-stone-600/50',
      border: 'border-stone-700/40',
      iconColor: 'text-stone-300',
      activeRing: 'ring-stone-400/50 bg-stone-900 text-stone-100 border-stone-400/60',
    },
    icon: 'Heart',
    whatsappMessage: '¡Hola! Quisiera consultar disponibilidad para celebrar un bautismo / festejo familiar en Quincho Raíces.',
  },
  {
    id: 'talleres',
    number: '04',
    tabTitle: 'Talleres & Cursos',
    title: 'Talleres, Capacitaciones & Retiros de Trabajo',
    tagline: 'Salón despejable, WiFi de alta velocidad y entorno serrano apacible',
    idealFor: 'Para instructores, formadores y grupos que buscan concentración, aire puro y comodidad técnica.',
    description: 'Salón cerrado y luminoso con gran aislamiento acústico y vistas verdes que favorecen el enfoque y la relajación. El mobiliario es reconfigurable: podés armar disposición tipo aula, mesa redonda para talleres colaborativos, o despejar el área central para prácticas de yoga o dinámicas corporales. Cuenta con WiFi de alta velocidad en todo el predio, calefacción y cocina equipada para gestionar coffee breaks con total autonomía.',
    highlights: [
      'WiFi de alta velocidad con cobertura completa en el salón y parque',
      'Mobiliario modular reconfigurable (aula, mesa redonda o espacio libre)',
      'Calefacción en salón y entorno silencioso rodeado de naturaleza',
      'Cocina equipada disponible para coffee breaks e infusiones',
    ],
    benefits: [],
    image: '',
    accent: {
      tabBg: 'bg-teal-950/80 text-teal-100 border-teal-500/30',
      tabNumber: 'bg-teal-500/20 text-teal-300 border border-teal-500/40',
      border: 'border-teal-500/30',
      iconColor: 'text-teal-400',
      activeRing: 'ring-teal-500/50 bg-teal-950/90 text-teal-200 border-teal-400/60',
    },
    icon: 'Briefcase',
    whatsappMessage: '¡Hola! Quisiera consultar disponibilidad para dictar un taller / jornada de trabajo en Quincho Raíces.',
  },
  {
    id: 'fiestas',
    number: '05',
    tabTitle: 'Fiestas de Noche',
    title: 'Fiestas de Noche, Aniversarios & Despedidas',
    tagline: 'Iluminación de fiesta, sonido Bluetooth y privacidad exclusiva',
    idealFor: 'Pensado para festejar aniversarios, recibidas o juntadas nocturnas con tu propia música y ambientación.',
    description: 'El salón cuenta con un sistema de iluminación versátil que pasa de luz blanca/cálida para la cena a luces de colores para transformar el espacio en una pista de baile. Conectá tu celular de forma instantánea al equipo de sonido vía Bluetooth para que suene tu playlist elegida. El parque exterior se mantiene iluminado para salir a tomar aire fresco con vista a las sierras en un predio 100% privado.',
    highlights: [
      'Iluminación dual: modo cena formal y modo fiesta con luces de colores',
      'Equipo de sonido con conectividad Bluetooth inmediata',
      'Predio cerrado de uso 100% exclusivo: total privacidad',
      'Parque exterior iluminado con vistas nocturnas a las sierras',
    ],
    benefits: [],
    image: '',
    accent: {
      tabBg: 'bg-indigo-950/80 text-indigo-100 border-indigo-500/30',
      tabNumber: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40',
      border: 'border-indigo-500/30',
      iconColor: 'text-indigo-400',
      activeRing: 'ring-indigo-500/50 bg-indigo-950/90 text-indigo-200 border-indigo-400/60',
    },
    icon: 'MoonStar',
    whatsappMessage: '¡Hola! Quisiera consultar disponibilidad para una fiesta / festejo nocturno en Quincho Raíces.',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: '¿Qué incluye el alquiler de Quincho Raíces?',
    answer:
      'El alquiler incluye el uso exclusivo del predio durante el turno contratado: salón cerrado y cómodo en planta baja con mesas y sillas para 40 personas, vajilla completa incluida, cocina con horno y hornallas, freezer, baños y calefacción. En el exterior cuenta con parrilla, piscina para pasar un buen rato bajo el agua, excelente iluminación tanto dentro como afuera, WiFi en todo el predio y sonido con Bluetooth para que pongas la música que desees.',
  },
  {
    question: '¿Para qué tipo de eventos es ideal el salón?',
    answer:
      'Es ideal para cumpleaños, reuniones familiares y de amigos, talleres, celebraciones y festejos de todo tipo, con capacidad cómoda de hasta 40 personas.',
  },
  {
    question: '¿Hay algún costo adicional por la vajilla?',
    answer:
      '¡No! La vajilla completa (platos, cubiertos y vasos para 40 personas) está incluida en la tarifa sin costo extra.',
  },
  {
    question: '¿El espacio cuenta con terraza o escaleras?',
    answer:
      'No cuenta con terraza: todo el predio está desarrollado en planta baja, sin escaleras ni desniveles, lo que brinda máxima comodidad y accesibilidad para todos los invitados.',
  },
  {
    question: '¿Cómo se reserva la fecha y cuáles son los medios de pago?',
    answer:
      'La fecha se reserva con una seña mediante transferencia bancaria o en efectivo. El saldo restante se cancela al momento del ingreso al quincho. Contactanos por WhatsApp para consultar disponibilidad en tiempo real.',
  },
  {
    question: '¿Qué turnos y horarios manejan?',
    answer:
      'Manejamos turnos de Día Completo, Turno Tarde/Día y Turno Noche. Los horarios específicos se pueden coordinar según el tipo de evento y la temporada del año.',
  },
  {
    question: '¿El quincho cuenta con estacionamiento?',
    answer:
      'Sí, contamos con estacionamiento privado y cerrado dentro del predio para que vos y tus invitados dejen sus vehículos con total seguridad y comodidad.',
  },
  {
    question: '¿Dónde está ubicado y se puede visitar antes de reservar?',
    answer:
      'Estamos ubicados en el Barrio Aires de San Benito, La Punta, San Luis. Es una zona tranquila, segura y de fácil acceso vehicular, con imponentes vistas hacia las sierras. Podés coordinar una visita previa por WhatsApp para conocer las instalaciones personalmente.',
  },
];

export function buildWhatsAppLink(
  phoneRaw: string,
  message: string
): string {
  const cleanPhone = phoneRaw.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function getDefaultWhatsAppMessage(): string {
  return '¡Hola Quincho Raíces! 👋 Quería consultar por disponibilidad y tarifas para un evento.';
}

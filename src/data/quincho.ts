export interface ContactLine {
  id: 'line1' | 'line2';
  name: string;
  phoneFormatted: string;
  phoneRaw: string; // e.g. 5492664393966
  whatsappBase: string;
}

export const CONTACT_LINES: ContactLine[] = [
  {
    id: 'line1',
    name: 'Línea 1',
    phoneFormatted: '266 439-3966',
    phoneRaw: '5492664393966',
    whatsappBase: 'https://wa.me/5492664393966',
  },
  {
    id: 'line2',
    name: 'Línea 2',
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
    'Quincho privado y exclusivo en La Punta, San Luis. Equipado para hasta 40 personas con piscina, churrasquera, vajilla completa incluida, salón climatizado y sonido JBL.',
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
}

export const AMENITIES: Amenity[] = [
  {
    id: 'salon',
    title: 'Salón Climatizado',
    subtitle: 'Confort en cualquier época del año',
    description:
      'Amplio salón cerrado con aire acondicionado frío/calor, mesas amplias y sillas confortables para hasta 40 comensales.',
    icon: 'Snowflake',
    image: '/images/salon_interior_banquet.jpg',
    highlight: true,
  },
  {
    id: 'pool',
    title: 'Piscina con Solárium',
    subtitle: 'Vistas a las sierras puntanas',
    description:
      'Piscina cercada y mantenida con solárium atérmico, sombrillas y entorno verde para disfrutar del sol y los días de verano.',
    icon: 'Waves',
    image: '/images/pool_mountains.jpg',
    highlight: true,
  },
  {
    id: 'grill',
    title: 'Churrasquera Tradicional',
    subtitle: 'El corazón de todo buen asado',
    description:
      'Parrilla de ladrillos de gran porte con chimenea, iluminación nocturna propia, mesada contigua y espacio para leña o carbón.',
    icon: 'Flame',
    image: '/images/parrilla_churrasquera.jpg',
    highlight: true,
  },
  {
    id: 'kitchen',
    title: 'Cocina con Anafe Industrial',
    subtitle: 'Equipada para cocinar y refrigerar',
    description:
      'Mesadas de granito, anafe industrial de alta potencia, heladera con freezer para bebidas y alimentos, y piletas de lavado.',
    icon: 'UtensilsCrossed',
    image: '/images/kitchen_dining.jpg',
  },
  {
    id: 'tableware',
    title: 'Vajilla Completa Incluida',
    subtitle: 'Sin cargos sorpresa de alquiler',
    description:
      'Platos, cubiertos de acero inoxidable, vasos y accesorios incluidos en tu reserva. Llegás y festejás sin preocuparte.',
    icon: 'CheckCircle2',
    image: '/images/salon_panoramic.jpg',
    highlight: true,
  },
  {
    id: 'sound',
    title: 'Sonido JBL PartyBox',
    subtitle: 'Música y ambientación rítmica',
    description:
      'Torre de sonido JBL PartyBox con conexión Bluetooth de alta fidelidad y juego de luces LED integradas para animar tu fiesta.',
    icon: 'Speaker',
    image: '/images/sound_jbl_party.jpg',
  },
  {
    id: 'heater',
    title: 'Calefacción Exterior Daewoo',
    subtitle: 'Noches frescas bajo las estrellas',
    description:
      'Estufa exterior piramidal de diseño para disfrutar del parque y la terraza al aire libre aún en noches de otoño y primavera.',
    icon: 'ThermometerSun',
    image: '/images/sunset_terrace.jpg',
  },
  {
    id: 'parking',
    title: 'Estacionamiento Privado',
    subtitle: 'Seguridad y tranquilidad absoluta',
    description:
      'Predio cerrado con portón de acceso para resguardar los vehículos de tus invitados dentro del lugar durante todo el evento.',
    icon: 'ShieldCheck',
    image: '/images/pool_tree_window.jpg',
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
    description: 'Vajilla completa para hasta 40 comensales sin costo adicional.',
    icon: 'Utensils',
  },
  {
    title: 'Climatizado 100%',
    description: 'Aire acondicionado frío/calor para disfrutar en cualquier estación.',
    icon: 'Wind',
  },
  {
    title: 'Sonido JBL & Luces',
    description: 'Parlante de alta gama con Bluetooth listo para tu playlist.',
    icon: 'Volume2',
  },
  {
    title: 'Estacionamiento Propio',
    description: 'Tus vehículos protegidos dentro de nuestro predio cerrado.',
    icon: 'Car',
  },
];

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'pool' | 'salon' | 'grill' | 'sunset';
  categoryLabel: string;
  src: string;
  description: string;
  aspect?: 'landscape' | 'portrait' | 'square';
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'sunset-terrace',
    title: 'Atardecer en la Terraza',
    category: 'sunset',
    categoryLabel: 'Terraza & Vistas',
    src: '/images/sunset_terrace.jpg',
    description: 'Vistas panorámicas inolvidables hacia las sierras con cálida iluminación crepuscular.',
    aspect: 'landscape',
  },
  {
    id: 'pool-mountains',
    title: 'Piscina & Sierras',
    category: 'pool',
    categoryLabel: 'Piscina',
    src: '/images/pool_mountains.jpg',
    description: 'Piscina con amplio solárium y postal directa a la cordillera puntana.',
    aspect: 'landscape',
  },
  {
    id: 'salon-banquet',
    title: 'Salón Principal para Eventos',
    category: 'salon',
    categoryLabel: 'Salón',
    src: '/images/salon_interior_banquet.jpg',
    description: 'Espacio cerrado, cómodo y climatizado con vajilla completa y ambientación cuidada.',
    aspect: 'landscape',
  },
  {
    id: 'parrilla-churrasquera',
    title: 'Gran Churrasquera Pura Leña',
    category: 'grill',
    categoryLabel: 'Parrilla',
    src: '/images/parrilla_churrasquera.jpg',
    description: 'Sector de fuego espacioso de ladrillo refractario con iluminación nocturna directa.',
    aspect: 'landscape',
  },
  {
    id: 'kitchen-dining',
    title: 'Cocina Equipada & Anafe',
    category: 'salon',
    categoryLabel: 'Salón',
    src: '/images/kitchen_dining.jpg',
    description: 'Mesadas de granito, anafe industrial y heladera con freezer para organizar tu evento.',
    aspect: 'landscape',
  },
  {
    id: 'pool-closeup',
    title: 'Agua Cristalina & Solárium',
    category: 'pool',
    categoryLabel: 'Piscina',
    src: '/images/pool_closeup.jpg',
    description: 'Mantenimiento impecable del agua para que chicos y grandes disfruten con total seguridad.',
    aspect: 'landscape',
  },
  {
    id: 'sound-party',
    title: 'Sonido JBL PartyBox',
    category: 'grill',
    categoryLabel: 'Ambiente',
    src: '/images/sound_jbl_party.jpg',
    description: 'Potencia acústica profesional y luces sincronizadas listas para conectar tu smartphone.',
    aspect: 'landscape',
  },
  {
    id: 'salon-panoramic',
    title: 'Vista Panorámica del Salón',
    category: 'salon',
    categoryLabel: 'Salón',
    src: '/images/salon_panoramic.jpg',
    description: 'Distribución versátil para mesas familiares, tandas de baile o presentaciones.',
    aspect: 'landscape',
  },
  {
    id: 'pool-tree-window',
    title: 'Parque Verde & Piscina',
    category: 'pool',
    categoryLabel: 'Piscina',
    src: '/images/pool_tree_window.jpg',
    description: 'Espacios verdes parquizados con vegetación y sombra para relajarse en familia.',
    aspect: 'landscape',
  },
  {
    id: 'promo-card',
    title: 'Tu Momento Especial',
    category: 'sunset',
    categoryLabel: 'Celebraciones',
    src: '/images/promo_card.jpg',
    description: 'El entorno diseñado para crear recuerdos únicos con amigos y seres queridos.',
    aspect: 'landscape',
  },
];

export interface EventType {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  recommendedShifts: string;
  icon: string;
}

export const EVENT_TYPES: EventType[] = [
  {
    id: 'cumples',
    title: 'Cumpleaños & Festejos',
    tagline: 'Tanto infantiles como de adultos',
    description:
      'El ambiente perfecto para soplar las velitas, divertirse en el parque y la pileta, y bailar con la mejor música.',
    benefits: ['Vajilla incluida para no lavar', 'Música JBL con luces', 'Espacio para inflables o juegos'],
    recommendedShifts: 'Día Completo o Tarde/Noche',
    icon: 'PartyPopper',
  },
  {
    id: 'asados',
    title: 'Asados Familiares & Domingos',
    tagline: 'La tradición de compartir un buen asado',
    description:
      'Churrasquera amplia con excelente tiraje, mesas grandes para toda la familia y una piscina hermosa para la sobremesa.',
    benefits: ['Gran parrilla iluminada', 'Heladera y freezer para bebidas', 'Comodidad para hasta 40 personas'],
    recommendedShifts: 'Turno Día (11:00 a 19:00)',
    icon: 'Beef',
  },
  {
    id: 'fiestas-noche',
    title: 'Fiestas Nocturnas & Despedidas',
    tagline: 'Luces, piscina iluminada y música',
    description:
      'Celebrá logros, aniversarios o despedidas de fin de año en un entorno íntimo, privado y sin interrupciones.',
    benefits: ['Iluminación ambiental exterior', 'Calefacción exterior piramidal', 'Estacionamiento interno seguro'],
    recommendedShifts: 'Turno Noche (20:00 a 04:00)',
    icon: 'MoonStar',
  },
  {
    id: 'corporativos',
    title: 'Jornadas & Talleres',
    tagline: 'Team building y reuniones de trabajo',
    description:
      'Desconectá de la oficina en un entorno natural al pie de las sierras, ideal para capacitaciones y días de integración.',
    benefits: ['Conexión WiFi en todo el predio', 'Salón climatizado y silencioso', 'Ambiente relajado y privado'],
    recommendedShifts: 'Medio Día o Día Completo',
    icon: 'Briefcase',
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
      'El alquiler incluye el uso exclusivo del predio durante el turno contratado: salón cerrado climatizado (frío/calor), mesas y sillas para hasta 40 personas, vajilla completa (platos, cubiertos y vasos), cocina equipada con anafe industrial y heladera con freezer, gran churrasquera con luz, piscina con solárium, torre de sonido JBL PartyBox con Bluetooth, estufa exterior Daewoo y estacionamiento cerrado dentro del predio.',
  },
  {
    question: '¿Hay algún costo adicional por la vajilla?',
    answer:
      '¡No! La vajilla completa está incluida en la tarifa sin costo extra. Queremos que tu experiencia sea transparente y sin sorpresas.',
  },
  {
    question: '¿Cómo se reserva la fecha y cuáles son los medios de pago?',
    answer:
      'La fecha se reserva con una seña mediante transferencia bancaria o en efectivo. El saldo restante se cancela al momento del ingreso al quincho. Contactanos por WhatsApp para consultar disponibilidad en tiempo real.',
  },
  {
    question: '¿Qué turnos y horarios manejan?',
    answer:
      'Manejamos turnos de Día Completo, Turno Tarde/Día (ideal almuerzos y pileta) y Turno Noche (para cenas y fiestas). Los horarios específicos se pueden coordinar según el tipo de evento y la temporada del año.',
  },
  {
    question: '¿El quincho cuenta con estacionamiento?',
    answer:
      'Sí, contamos con estacionamiento privado y cerrado dentro del predio para que vos y tus invitados dejen sus vehículos con total seguridad y comodidad.',
  },
  {
    question: '¿Dónde está ubicado y cómo llegar?',
    answer:
      'Estamos ubicados en el Barrio Aires de San Benito, en la ciudad de La Punta, San Luis. Es una zona tranquila, segura y de fácil acceso vehicular, con imponentes vistas hacia las sierras. Te enviamos la ubicación exacta por WhatsApp al coordinar tu visita.',
  },
  {
    question: '¿Se puede visitar el lugar antes de reservar?',
    answer:
      '¡Por supuesto! Podés coordinar una visita previa con nosotros por WhatsApp para conocer las instalaciones, ver el salón, la pileta y planificar mejor tu fiesta.',
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

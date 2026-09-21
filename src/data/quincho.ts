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

export const AMENITIES: Amenity[] = [
  {
    id: 'salon',
    title: 'Salón Cómodo y Equipado',
    subtitle: 'Mesas y sillas para 40 personas',
    description:
      'Espacio cerrado, cómodo y funcional en planta baja, con mobiliario completo y calefacción para que tus invitados disfruten con total confort.',
    icon: 'Users',
    image: '/images/salon_interior_banquet.jpg',
    highlight: true,
    features: [
      'Mesas y sillas para 40 comensales',
      'Calefacción para eventos todo el año',
      'Excelente iluminación natural y artificial',
    ],
  },
  {
    id: 'tableware',
    title: 'Vajilla Completa Incluida',
    subtitle: 'Sin cargos extra por vajilla',
    description:
      'Platos, cubiertos y vasos para 40 personas incluidos en tu alquiler. Llegás y festejás sin preocuparte por alquilar ni lavar después.',
    icon: 'Utensils',
    image: '/images/salon_panoramic.jpg',
    highlight: true,
    features: [
      'Platos playos y hondos para 40 personas',
      'Juegos de cubiertos completos',
      'Vasos de vidrio incluidos sin costo adicional',
    ],
  },
  {
    id: 'kitchen',
    title: 'Cocina con Horno & Freezer',
    subtitle: 'Equipada para tu evento',
    description:
      'Sector de cocina independiente con horno y hornallas, más freezer para mantener frías bebidas y alimentos, con mesada cómoda para organizar tu comida.',
    icon: 'UtensilsCrossed',
    image: '/images/kitchen_dining.jpg',
    features: [
      'Cocina con horno y hornallas funcionales',
      'Freezer espacioso para bebidas y hielo',
      'Mesada amplia y bacha con agua corriente',
    ],
  },
  {
    id: 'grill',
    title: 'Parrilla para Asados',
    subtitle: 'El punto de encuentro',
    description:
      'Parrilla amplia y cómoda para preparar tus mejores asados, en un espacio muy bien iluminado tanto de día como de noche.',
    icon: 'Flame',
    image: '/images/parrilla_churrasquera.jpg',
    highlight: true,
    features: [
      'Parrilla de excelente tiraje y amplitud',
      'Iluminación dedicada para asados nocturnos',
      'Espacio cómodo para el asador y comensales',
    ],
  },
  {
    id: 'pool',
    title: 'Piscina para Disfrutar',
    subtitle: 'Un buen rato bajo el agua',
    description:
      'Piscina en entorno verde para pasar un buen rato bajo el agua, refrescarse y disfrutar al aire libre en familia o con amigos.',
    icon: 'Waves',
    image: '/images/pool_mountains.jpg',
    highlight: true,
    features: [
      'Piscina cuidada para disfrutar bajo el agua',
      'Parque verde con vista a las sierras',
      'Entorno seguro y relajante al aire libre',
    ],
  },
  {
    id: 'sound',
    title: 'Sonido',
    subtitle: 'Con acceso a Bluetooth',
    description:
      'Equipo de sonido con acceso a Bluetooth para conectar tu celular fácilmente y poner la música que quieras durante todo el evento.',
    icon: 'Volume2',
    image: '/images/sound_jbl_party.jpg',
    features: [
      'Conexión Bluetooth rápida y sencilla',
      'Conectá tu celular y poné tu música preferida',
      'Ambientación sonora para toda tu reunión',
    ],
  },
  {
    id: 'heater',
    title: 'Calefacción & Baños',
    subtitle: 'Confort e higiene en cualquier época',
    description:
      'Salón con calefacción para disfrutar con temperatura agradable todo el año, además de baños completos, modernos y siempre higiénicos.',
    icon: 'ThermometerSun',
    image: '/images/sunset_terrace.jpg',
    features: [
      'Baños completos, limpios y equipados',
      'Calefacción para días frescos o de noche',
      'Acceso cómodo e integrado al salón principal',
    ],
  },
  {
    id: 'parking',
    title: '100% Planta Baja, WiFi & Luces',
    subtitle: 'Totalmente accesible y conectado',
    description:
      'Espacio bien iluminado tanto adentro como afuera, con conexión WiFi en todo el predio, estacionamiento cerrado y todo en planta baja sin desniveles ni terrazas.',
    icon: 'ShieldCheck',
    image: '/images/pool_tree_window.jpg',
    features: [
      '100% en planta baja sin escaleras ni desniveles',
      'Iluminación potente interior y exterior',
      'WiFi de alta velocidad y predio cerrado',
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
    title: 'Atardecer en el Predio',
    category: 'sunset',
    categoryLabel: 'Parque & Atardecer',
    src: '/images/sunset_terrace.jpg',
    description: 'Vistas panorámicas hacia las sierras con el espacio iluminado al caer la tarde.',
    aspect: 'landscape',
  },
  {
    id: 'pool-mountains',
    title: 'Piscina & Vistas Serranas',
    category: 'pool',
    categoryLabel: 'Piscina',
    src: '/images/pool_mountains.jpg',
    description: 'Piscina para pasar un buen rato bajo el agua con el marco de las sierras de San Luis.',
    aspect: 'landscape',
  },
  {
    id: 'salon-banquet',
    title: 'Salón Cómodo para 40 Personas',
    category: 'salon',
    categoryLabel: 'Salón',
    src: '/images/salon_interior_banquet.jpg',
    description: 'Espacio cerrado en planta baja con mesas, sillas y vajilla completa para 40 personas.',
    aspect: 'landscape',
  },
  {
    id: 'parrilla-churrasquera',
    title: 'Parrilla Amplia e Iluminada',
    category: 'grill',
    categoryLabel: 'Parrilla',
    src: '/images/parrilla_churrasquera.jpg',
    description: 'Parrilla cómoda con iluminación para disfrutar de los mejores asados.',
    aspect: 'landscape',
  },
  {
    id: 'kitchen-dining',
    title: 'Cocina con Horno y Hornallas',
    category: 'salon',
    categoryLabel: 'Salón',
    src: '/images/kitchen_dining.jpg',
    description: 'Cocina con horno, hornallas y freezer para mantener todo fresco y listo.',
    aspect: 'landscape',
  },
  {
    id: 'pool-closeup',
    title: 'Piscina y Espacio al Aire Libre',
    category: 'pool',
    categoryLabel: 'Piscina',
    src: '/images/pool_closeup.jpg',
    description: 'Agua cuidada y limpia para disfrutar bajo el sol en familia o con amigos.',
    aspect: 'landscape',
  },
  {
    id: 'sound-party',
    title: 'Sonido con Bluetooth',
    category: 'grill',
    categoryLabel: 'Música',
    src: '/images/sound_jbl_party.jpg',
    description: 'Equipo de sonido con acceso Bluetooth para ambientar tu festejo con la música que quieras.',
    aspect: 'landscape',
  },
  {
    id: 'salon-panoramic',
    title: 'Salón Iluminado y Confortable',
    category: 'salon',
    categoryLabel: 'Salón',
    src: '/images/salon_panoramic.jpg',
    description: 'Excelente iluminación natural y artificial, calefacción y vajilla incluida.',
    aspect: 'landscape',
  },
  {
    id: 'pool-tree-window',
    title: 'Parque Verde en Planta Baja',
    category: 'pool',
    categoryLabel: 'Piscina',
    src: '/images/pool_tree_window.jpg',
    description: 'Todo el predio desarrollado en planta baja, seguro y cómodo.',
    aspect: 'landscape',
  },
  {
    id: 'promo-card',
    title: 'El Lugar para tu Evento',
    category: 'sunset',
    categoryLabel: 'Celebraciones',
    src: '/images/promo_card.jpg',
    description: 'Cumpleaños, reuniones, talleres y celebraciones inolvidables en Quincho Raíces.',
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
    title: 'Cumpleaños',
    tagline: 'Infantiles y de adultos',
    description:
      'El lugar ideal para festejar con seres queridos: salón cómodo para 40 personas, vajilla incluida, piscina para divertirse y sonido con Bluetooth.',
    benefits: ['Vajilla incluida para 40 personas', 'Sonido con Bluetooth', 'Piscina para disfrutar bajo el agua'],
    recommendedShifts: 'Día Completo o Tarde/Noche',
    icon: 'PartyPopper',
  },
  {
    id: 'reuniones',
    title: 'Reuniones Familiares & Amigos',
    tagline: 'Compartir un buen asado y relax',
    description:
      'Parrilla amplia, mesas y sillas para 40 personas, cocina con horno y hornallas, freezer y piscina para pasar el día.',
    benefits: ['Parrilla bien iluminada', 'Cocina con horno y freezer', 'Mesas y sillas para 40 personas'],
    recommendedShifts: 'Turno Día (11:00 a 19:00)',
    icon: 'Beef',
  },
  {
    id: 'talleres',
    title: 'Talleres & Capacitaciones',
    tagline: 'Espacio cómodo, iluminado y con WiFi',
    description:
      'Ideal para dictar talleres, cursos o capacitaciones en un espacio confortable, cerrado, con calefacción y WiFi en planta baja.',
    benefits: ['Conexión WiFi en todo el predio', 'Salón en planta baja bien iluminado', 'Calefacción y baños cómodos'],
    recommendedShifts: 'Turno Mañana, Tarde o Día Completo',
    icon: 'Briefcase',
  },
  {
    id: 'celebraciones',
    title: 'Celebraciones & Fiestas',
    tagline: 'Todo equipado para tu evento',
    description:
      'Espacio bien iluminado tanto dentro como afuera, con calefacción, sonido con Bluetooth y la tranquilidad de tener todo en un mismo nivel.',
    benefits: ['Iluminación interior y exterior', 'Calefacción en el salón', 'Totalmente en planta baja'],
    recommendedShifts: 'Turno Noche o Día Completo',
    icon: 'MoonStar',
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

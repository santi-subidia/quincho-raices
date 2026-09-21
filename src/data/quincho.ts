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
    'Quincho privado y exclusivo en La Punta, San Luis. Ideal para cumpleaños, reuniones, talleres y celebraciones. Totalmente en planta baja para hasta 40 personas, con vajilla incluida, WiFi, cocina con horno y hornallas, freezer, baños, calefacción, parrilla, piscina y parlante JBL con Bluetooth.',
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
    title: 'Salón Cómodo y Equipado',
    subtitle: 'Mesas y sillas para 40 personas',
    description:
      'Espacio cómodo y totalmente equipado en planta baja, con mesas y sillas para 40 comensales, calefacción y excelente iluminación.',
    icon: 'Users',
    image: '/images/salon_interior_banquet.jpg',
    highlight: true,
  },
  {
    id: 'pool',
    title: 'Piscina para Disfrutar',
    subtitle: 'Un buen rato bajo el agua',
    description:
      'Piscina en entorno verde para pasar un buen rato bajo el agua, refrescarse y disfrutar en familia o con amigos.',
    icon: 'Waves',
    image: '/images/pool_mountains.jpg',
    highlight: true,
  },
  {
    id: 'grill',
    title: 'Parrilla para Asados',
    subtitle: 'El punto de encuentro',
    description:
      'Parrilla cómoda para preparar tus asados, en un espacio muy bien iluminado tanto de día como de noche.',
    icon: 'Flame',
    image: '/images/parrilla_churrasquera.jpg',
    highlight: true,
  },
  {
    id: 'kitchen',
    title: 'Cocina con Horno y Hornallas',
    subtitle: 'Equipada con freezer',
    description:
      'Cocina con horno y hornallas, además de freezer para mantener frías bebidas y alimentos, con mesada cómoda para organizar tu comida.',
    icon: 'UtensilsCrossed',
    image: '/images/kitchen_dining.jpg',
  },
  {
    id: 'tableware',
    title: 'Vajilla Completa Incluida',
    subtitle: 'Para 40 personas sin cargo extra',
    description:
      'Platos, cubiertos y vasos para 40 personas incluidos en tu alquiler. Llegás y festejás sin preocuparte por alquilar ni lavar.',
    icon: 'CheckCircle2',
    image: '/images/salon_panoramic.jpg',
    highlight: true,
  },
  {
    id: 'sound',
    title: 'Parlante JBL con Bluetooth',
    subtitle: 'Poné la música que desees',
    description:
      'Parlante JBL con acceso a Bluetooth para conectar tu celular fácilmente y poner la música que quieras durante todo el evento.',
    icon: 'Speaker',
    image: '/images/sound_jbl_party.jpg',
  },
  {
    id: 'heater',
    title: 'Calefacción & Baños',
    subtitle: 'Confort en cualquier época',
    description:
      'Salón con calefacción para disfrutar con temperatura agradable todo el año, además de baños completos y limpios.',
    icon: 'ThermometerSun',
    image: '/images/sunset_terrace.jpg',
  },
  {
    id: 'parking',
    title: 'Bien Iluminado & WiFi',
    subtitle: 'Todo en planta baja (sin terraza)',
    description:
      'Espacio bien iluminado tanto adentro como afuera, con conexión WiFi en todo el predio, estacionamiento cerrado y 100% en planta baja sin desniveles.',
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
    description: 'Vajilla completa para 40 personas sin costo adicional.',
    icon: 'Utensils',
  },
  {
    title: 'Cocina & Freezer',
    description: 'Cocina con horno y hornallas, más freezer para alimentos y bebidas.',
    icon: 'UtensilsCrossed',
  },
  {
    title: 'Parlante JBL Bluetooth',
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
    title: 'Parlante JBL con Bluetooth',
    category: 'grill',
    categoryLabel: 'Música',
    src: '/images/sound_jbl_party.jpg',
    description: 'Parlante JBL con acceso Bluetooth para ambientar tu festejo con la música que quieras.',
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
      'El lugar ideal para festejar con seres queridos: salón cómodo para 40 personas, vajilla incluida, piscina para divertirse y parlante JBL.',
    benefits: ['Vajilla incluida para 40 personas', 'Parlante JBL con Bluetooth', 'Piscina para disfrutar bajo el agua'],
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
      'Espacio bien iluminado tanto dentro como afuera, con calefacción, sonido JBL y la tranquilidad de tener todo en un mismo nivel.',
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
      'El alquiler incluye el uso exclusivo del predio durante el turno contratado: salón cerrado y cómodo en planta baja con mesas y sillas para 40 personas, vajilla completa incluida, cocina con horno y hornallas, freezer, baños y calefacción. En el exterior cuenta con parrilla, piscina para pasar un buen rato bajo el agua, excelente iluminación tanto dentro como afuera, WiFi en todo el predio y parlante JBL con Bluetooth para que pongas la música que desees.',
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

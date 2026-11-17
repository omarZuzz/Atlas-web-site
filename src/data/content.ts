/**
 * Contenido mock extraído 1:1 del Figma "Atlas – website".
 * Cuando exista backend / CMS, reemplazar estos arreglos por llamadas a la API
 * manteniendo los mismos tipos (ver ./types.ts).
 */
import type {
  Cruise,
  FooterColumn,
  MegaMenuCollection,
  MegaMenuDestination,
  MonthDestination,
  NavLink,
  Partner,
  Pillar,
  ServiceCategory,
  StarDestination,
  Trip,
} from './types';

import estrella1 from '../assets/images/estrella-1.webp';
import estrella2 from '../assets/images/estrella-2.webp';
import estrella3 from '../assets/images/estrella-3.webp';
import estrella4 from '../assets/images/estrella-4.webp';
import trip1 from '../assets/images/trip-1.webp';
import trip2 from '../assets/images/trip-2.webp';
import trip3 from '../assets/images/trip-3.webp';
import monthTorres from '../assets/images/month-torres-del-paine.webp';
import monthPuntaCana from '../assets/images/month-punta-cana.webp';
import monthTailandia from '../assets/images/month-tailandia-phuket.webp';
import monthAustral from '../assets/images/month-carretera-austral.webp';
import partnerScenic from '../assets/images/partner-scenic.webp';
import partnerExplora from '../assets/images/partner-explora.webp';
import partnerPalladium from '../assets/images/partner-palladium.webp';
import partnerRiu from '../assets/images/partner-riu.webp';
import partnerEmerald from '../assets/images/partner-emerald.webp';
import cruiseThumb from '../assets/images/cruise-thumb.webp';
import menuItalia from '../assets/images/menu-italia.webp';
import menuMarruecos from '../assets/images/menu-marruecos.webp';
import menuPeru from '../assets/images/menu-peru.webp';

import catAlojamientos from '../assets/icons/cat-alojamientos.svg';
import catVuelos from '../assets/icons/cat-vuelos.svg';
import catPaquetes from '../assets/icons/cat-paquetes.svg';
import catAutos from '../assets/icons/cat-autos.svg';
import catActividades from '../assets/icons/cat-actividades.svg';
import catTraslados from '../assets/icons/cat-traslados.svg';
import catAsistencias from '../assets/icons/cat-asistencias.svg';
import catDisney from '../assets/icons/cat-disney.svg';
import catUniversal from '../assets/icons/cat-universal.svg';
import catXcaret from '../assets/icons/cat-xcaret.svg';
import catRentas from '../assets/icons/cat-rentas.svg';

export const CONTACT = {
  phone: '+56 9 8321 8980',
  phoneHref: 'tel:+56983218980',
  bookingDomain: 'atlastravel.e-agencias.com',
  bookingUrl: 'https://atlastravel.e-agencias.com',
  advisorName: 'Kender',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Destinos', href: '#destinos', hasMegaMenu: true },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: 'alojamientos', label: 'Alojamientos', icon: catAlojamientos, href: '#' },
  { id: 'vuelos', label: 'Vuelos', icon: catVuelos, href: '#' },
  { id: 'paquetes', label: 'Paquetes', icon: catPaquetes, href: '#' },
  { id: 'autos', label: 'Autos', icon: catAutos, href: '#' },
  { id: 'actividades', label: 'Actividades', icon: catActividades, href: '#' },
  { id: 'traslados', label: 'Traslados', icon: catTraslados, href: '#' },
  { id: 'asistencias', label: 'Asistencias', icon: catAsistencias, href: '#' },
  { id: 'disney', label: 'Disney', icon: catDisney, href: '#' },
  { id: 'universal', label: 'Universal', icon: catUniversal, href: '#' },
  { id: 'xcaret', label: 'Xcaret', icon: catXcaret, href: '#' },
  { id: 'rentas', label: 'Rentas', icon: catRentas, href: '#' },
];

export const HERO = {
  eyebrow: 'POR EL CARIBE',
  titleLines: ['PUNTA', 'CANA'],
  starTitle: 'DESTINOS ESTRELLA',
  month: 'OCTUBRE',
};

export const STAR_DESTINATIONS: StarDestination[] = [
  { id: 'e1', name: 'Destino estrella 1', image: estrella1 },
  { id: 'e2', name: 'Destino estrella 2', image: estrella2 },
  { id: 'e3', name: 'Destino estrella 3', image: estrella3 },
  { id: 'e4', name: 'Destino estrella 4', image: estrella4 },
];

export const REGION_FILTERS = ['Europa', 'Sudamérica', 'TOP DEALS', 'Rio de Janeiro', 'Punta Cana'];

const baseTrip = {
  title: 'Cusco Imperial, Valle Sagrado & Salkantay Trekking a Machu',
  location: 'Lima, Cusco & Aguas Calientes',
  duration: '8 días / 7 noches',
  rating: 4.9,
  reviews: 128,
  tags: ['Vuelos SKY / LATAM', 'Tren Vistadome'],
  priceFrom: '$1.310 USD',
  price: '$1.048 USD',
  priceNote: 'Por persona',
};

export const TRIPS: Trip[] = [
  { ...baseTrip, id: 't1', image: trip1 },
  { ...baseTrip, id: 't2', image: trip2 },
  { ...baseTrip, id: 't3', image: trip3 },
  // Duplicados para que el carrusel tenga recorrido (reemplazar por datos reales)
  { ...baseTrip, id: 't4', image: trip2 },
  { ...baseTrip, id: 't5', image: trip3 },
  { ...baseTrip, id: 't6', image: trip1 },
];

export const PILLARS: Pillar[] = [
  {
    number: 1,
    title: 'Experiencias Curadas:',
    description: 'Alianzas con las marcas, hoteles y navieras más prestigiosas del mundo.',
  },
  {
    number: 2,
    title: 'Ejecución Impecable:',
    description: 'Diseño, detalle y atención personalizada en cada etapa de tu viaje.',
  },
  {
    number: 3,
    title: 'Privacidad & Confort:',
    description: 'Un filtro exigente que asegura exclusividad y excelencia garantizada.',
  },
];

export const STORY_TABS = ['POR TIPO DE VIAJERO', 'POR MES DEL AÑO', 'MÁS POPULARES', 'EN TENDENCIA'];
export const MONTHS = ['ENE.', 'FEB.', 'MAR.', 'ABR.', 'MAY.', 'JUN.', 'JUL.', 'AGO.', 'SEP.', 'OCT.', 'NOV.', 'DIC.'];

export const MONTH_DESTINATIONS: MonthDestination[] = [
  {
    id: 'torres-del-paine',
    title: 'TORRES DEL PAINE',
    badge: '9 PROGRAMAS',
    subtitle: 'Clima ideal de verano austral',
    description: 'Cabañas de cristal en Finlandia y Noruega bajo las luces del norte.',
    image: monthTorres,
  },
  {
    id: 'punta-cana',
    title: 'PUNTA CANA',
    badge: '14 PAQUETES',
    subtitle: 'Sol garantizado sin lluvias',
    image: monthPuntaCana,
  },
  {
    id: 'tailandia',
    title: 'TAILANDIA & PHUKET',
    badge: '6 PROGRAMAS',
    subtitle: 'Estación seca y mares calmos',
    image: monthTailandia,
  },
  {
    id: 'carretera-austral',
    title: 'CARRETERA AUSTRAL',
    badge: '6 CIRCUITOS',
    subtitle: 'Estación seca y mares calmos',
    image: monthAustral,
  },
];

export const PARTNERS: Partner[] = [
  { id: 'scenic', name: 'Scenic', logo: partnerScenic },
  { id: 'explora', name: 'Explora Journeys', logo: partnerExplora },
  { id: 'palladium', name: 'Palladium Hotel Group', logo: partnerPalladium },
  { id: 'riu', name: 'RIU Hotels & Resorts', logo: partnerRiu },
  { id: 'emerald', name: 'Emerald Cruises', logo: partnerEmerald },
];

export const CRUISES: Cruise[] = Array.from({ length: 4 }, (_, i) => ({
  id: `c${i + 1}`,
  title: 'Alpes Suizos & Machu Picchu',
  departures: '14 Salidas',
  priceFrom: 'Desde $ 980 usd',
  image: cruiseThumb,
}));

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Catálogo Tu Destino',
    links: [
      { label: 'Paquetes turísticos', href: '#' },
      { label: 'Escapadas de fin de semana', href: '#' },
      { label: 'Destinos nacionales', href: '#' },
      { label: 'Viajes internacionales', href: '#' },
      { label: 'Bloqueos confirmados', href: '#' },
    ],
  },
  {
    title: 'Autogestión & Soporte',
    links: [
      { label: 'Mi cuenta', href: '#' },
      { label: 'Mis reservas y ayudas', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Contactar a un asesor', href: '#' },
      { label: 'Términos y condiciones', href: '#' },
    ],
  },
  {
    title: 'Respaldo & Pagos',
    links: [
      { label: 'Métodos de pago', href: '#' },
      { label: 'Garantías de viaje y asistencia', href: '#' },
      { label: 'Políticas de cancelación', href: '#' },
    ],
  },
];

/* ---------- Mega menú "Destinos" (frame "menu" del Figma) ---------- */
export const MEGA_MENU_COLLECTIONS: MegaMenuCollection[] = [
  { id: 'colecciones', title: 'Explorar colecciones', description: 'Los 10 destinos favoritos desde Chile' },
  { id: 'por-mes', title: 'Por mes', description: 'Calendario climático y mejores temporadas' },
  { id: 'inspiracion', title: 'Inspiración', description: 'Coleccionadas curadas por especialistas' },
  { id: 'buscador', title: 'Buscador de viajes', description: 'Salidas garantizadas' },
];

export const MEGA_MENU_DESTINATIONS: MegaMenuDestination[] = [
  { id: 'italia', name: 'Italia', season: 'May - Oct', caption: 'Río de Janeiro & Armação', image: menuItalia },
  { id: 'marruecos', name: 'Marruecos', season: 'Jun - Oct', image: menuMarruecos },
  { id: 'peru', name: 'Perú', season: 'Mar - Nov', image: menuPeru },
  // Los siguientes están como placeholder gris en el Figma
  { id: 'p4', name: '', season: '' },
  { id: 'p5', name: '', season: '' },
  { id: 'p6', name: '', season: '' },
  { id: 'p7', name: '', season: '' },
  { id: 'p8', name: '', season: '' },
  { id: 'p9', name: '', season: '' },
  { id: 'p10', name: '', season: '' },
];

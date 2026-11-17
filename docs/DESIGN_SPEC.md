# Atlas Travel: análisis del Figma "Atlas"

Fuente: `Atlas.fig` (exportado el 17-11-2026). Página **"Atlas - website"**, con 2 frames:

| Frame | Tamaño | Qué es |
|---|---|---|
| `index pc` | 1920 × 7262 | Home desktop completa |
| `menu` | 1920 × 3646 | Estado con el **mega menú "Destinos"** abierto (solo usa los primeros ~870 px; el resto del frame está vacío) |

No hay frames mobile ni tablet, así que el responsive se resolvió por criterio propio (ver final).
Las capas no usan componentes ni variables de Figma: todo está "suelto", así que los tokens de abajo se extrajeron leyendo cada nodo.

Referencias visuales en `docs/reference/`:
- `figma-home-1920.jpg` / `figma-megamenu-destinos-1920.jpg`: render del Figma
- `react-home-1920.jpg` / `react-megamenu-1920.jpg`: render de esta implementación

---

## 1. Design tokens

### Colores
| Token | Hex | Uso |
|---|---|---|
| `--color-navy` | `#142654` | Primario: titulares, botones, fondo partners y footer |
| `--color-navy-deep` | `#08243B` | Fondo de la sección certificaciones |
| `--color-navy-light` | `#26468C` (90 %) | Barra legal del footer |
| `--color-gold` | `#CC9B54` | Acento: antetítulos, CTAs secundarios, banda de las tarjetas |
| `--color-gold-bright` | `#F8C654` | Bordes de chips, regla del hero, "Palace Resort" |
| `--color-gold-light` | `#FDE16D` | Subtítulos sobre foto |
| `--color-cyan` | `#12E6F5` | Checks de confirmación y línea del panel de servicios (30 %) |
| `--color-online` | `#3FDF3F` | Punto "en línea" del asesor |
| `--color-bg-soft` | `#F5F5F5` | Fondos de sección |
| `--color-gray-200` | `#D9D9D9` | Divisores y bordes |
| `--color-gray-400` | `#9D9D9D` | Texto terciario |
| `--color-gray-600` | `#6E6F70` | Texto de cuerpo |

Degradados:
- **Oro** (iconos de servicios y logo): `#FDE16D 0% → #F8C654 49% → #CC9B54 100%`, vertical
- **CTA "Cotizar viaje"**: `#F8C654 → #927531`
- **Overlay superior del hero** (338 px): navy 100 % → 50 % (48 %) → 0 % (95 %)

### Tipografías (todas de Google Fonts, self-hosted con @fontsource)
| Familia | Pesos | Rol |
|---|---|---|
| **Biryani** | 200, 300, 400, 600, 700, 800, 900 | UI y cuerpo (≈ 80 % del texto) |
| **Bona Nova** | 700 | Titulares serif (hero, h1/h2, tarjetas) |
| **Bonheur Royale** | 400 | Solo la palabra "Signature" |
| **Big Shoulders Display** | 700–900 | "OCTUBRE" y los nombres del mega menú |
| **Brawler** | 700 | Títulos de carrusel ("Punta Cana", "Lo mejores planes de lujo") y textos del mega menú |

Escala principal (desktop 1920):
- Hero: Bona Nova 153.9 / interlínea 136
- Display: Bona Nova 84.5
- H1: 79–80
- H2: 70
- "Pilar n": 50
- Cuerpo: Biryani 20/31, 18/30, 16, 14, 12, 11, 10

> Biryani tiene un ascender muy alto. Para centrar ópticamente el texto en botones y chips se usa `padding-top: ~0.2em` (clase `.optical-center`).

### Radios
6 · 8 · 12 · 15 · 16 · 18 · 20 · **23 (píldoras y tarjetas)** · 24 · 26 · 29 · 37 · 45 · 56.

### Sombras
| Uso | Valor |
|---|---|
| Tarjetas del hero | `0 2px 13px rgba(0,0,0,.2)` |
| Flechas y chat | `0 4px 4px rgba(0,0,0,.25)` |
| Barra de meses | `0 0 29px rgba(0,0,0,.14)` |
| Badges sobre foto | `0 4px 38px rgba(0,0,0,.39)` |
| Tarjeta del newsletter | `0 3px 34px rgba(0,0,0,.18)` |

### Grid
- Lienzo de 1920.
- **Contenedor** de 1440 (márgenes de 240).
- **Contenedor wide** de 1720 (márgenes de 100), usado en ofertas, cruceros, newsletter y certificaciones.

---

## 2. Secciones de la home (de arriba abajo, con su posición Y en el Figma)

| # | Sección | Y | Componente |
|---|---|---|---|
| 1 | Barra superior (píldora translúcida): redes · "Distribuidor Oficial Autorizado **Palace Resort**" · teléfono · Registrate | 15 | `layout/SiteHeader` |
| 2 | Nav: logo · Servicios / **Destinos (mega menú)** / Nosotros / Contacto · buscar · CTA "COTIZAR VIAJE" · línea blanca | 82–144 | `layout/SiteHeader` + `MegaMenu` |
| 3 | Hero 907 px: "POR EL CARIBE / PUNTA CANA", regla dorada, "DESTINOS ESTRELLA" (4 tarjetas de 190×269, la activa con borde dorado), flechas, barra de progreso y "OCTUBRE" | 0–907 | `sections/Hero` |
| 4 | Barra de servicios: pestaña "COMPRA EN LÍNEA" y panel navy con 11 categorías (Alojamientos, Vuelos, Paquetes, Autos, Actividades, Traslados, Asistencias, Disney, Universal, Xcaret, Rentas) y 2 garantías | 775–986 (se monta sobre el hero) | `sections/ServicesBar` |
| 5 | "OFERTAS ÚNICAS DEL MES": columna editorial, chips de región y carrusel de paquetes | 907–1684 | `sections/MonthlyOffers` → `OffersShowcase` + `cards/TripCard` |
| 6 | Franja dorada de 24 px y banner "**Atlas** *Signature*" de 417 px | 1682–2123 | `sections/SignatureBanner` |
| 7 | 3 pilares y segundo carrusel "La expresión más refinada de viajar / Lo mejores planes de lujo" | 2118–3090 | `sections/LuxurySection` (reutiliza `OffersShowcase`) |
| 8 | "Diseña tu próxima historia": tabs (tipo de viajero / **mes** / populares / tendencia), selector de 12 meses y 4 tarjetas verticales de 603 px (la primera destacada de 590 px con CTA "Explorar planes") | 3090–4295 | `sections/DesignYourStory` + `cards/MonthDestinationCard` |
| 9 | Partners (navy): carrusel de logos (Scenic, Explora, Palladium, RIU, Emerald), "Scenic cultura de lujo", 4 tarjetas de crucero (la 3ª en estado hover/activa, 181 px) y CTA "Ver todos" | 4295–5295 | `sections/Partners` + `cards/CruiseCard` |
| 10 | Newsletter "Club privado de viajeros Atlas": nombre, email, consentimiento y "Suscribirse" | 5366–6068 | `sections/Newsletter` |
| 11 | Certificaciones: CCS (Cámara de Comercio de Santiago) y SERNATUR | 6138–6689 | `sections/Certifications` |
| 12 | Footer: logo, descripción, 3 columnas de links y barra legal "Conectado con atlastravel.e-agencias.com" | 6689–7201 | `layout/SiteFooter` |
| — | Burbuja flotante del asesor "Hola soy Kender…" | fija | `layout/ChatWidget` |

### Mega menú "Destinos" (frame `menu`)
- Panel `#F5F5F5` de 723 px bajo la línea del header.
- Columna izquierda de 333 px:
  - Título "EXPLORAR COLECCIONES"
  - 4 colecciones; la activa es navy con radio 17
  - Tarjeta dorada "Catálogo en Tiempo Real" con link "Ir al catálogo completo"
- Columna derecha:
  - Título "Por mes - Especiales de Atlas Travel"
  - Grilla de 5×2 tiles de 196×210 (r12) con nombre (Big Shoulders 30), temporada en píldora gris y, opcionalmente, un caption
  - Solo 3 tiles tienen foto (Italia, Marruecos, Perú); el resto son placeholders grises en el Figma.

**Variante de header en el frame `menu`** (no implementada, a confirmar con diseño):
- El texto central pasa a "COTIZA TU VIAJE A UN SOLO **CLIC**"
- Aparece un campo de búsqueda inline (subrayado de 324 px)
- La nav se desplaza a la derecha
- El CTA cambia a "ASESOR" (amarillo `#F8C654`)
- Los títulos del hero usan Big Shoulders Display en lugar de Bona Nova.

Todo indica que es una exploración alternativa del header y el hero.

---

## 3. Estados e interacciones inferidas
- **Chips de región**: outline dorado, activo navy, y "Punta Cana" en dorado (¿destacado comercial?).
- **Categorías de servicio**: activo con fondo navy al 50 %, borde dorado y label en Black. En Figma "Vuelos" aparece con fondo dorado, lo que se interpretó como hover.
- **Destinos estrella**: la primera tarjeta lleva borde dorado de 3 px (activa).
- **Cruceros**: la 3ª tarjeta es más alta (181 vs 148), lo que se interpretó como hover/activa.
- **Flechas de carrusel**: gris `#9D9D9D` cuando no hay más recorrido y navy cuando sí lo hay.
- **Tabs y meses**: un solo activo, en navy.

## 4. Assets extraídos
- `src/assets/images/*.webp`: 26 fotos optimizadas (hero, destinos, paquetes, partners, certificaciones, mega menú). La foto del hero viene **espejada** en Figma (`scaleX(-1)`), así que se exportó ya invertida.
- `src/assets/icons/*.svg`: vectores reales del Figma: logo header y footer (degradado oro), redes, headset, user, badge-check, 11 iconos de categoría (degradado oro), corazón, reloj y estrella.
- Iconos de trazo simple (plus, flechas, chevron, check, lupa) en `components/ui/Icon.tsx`.

## 5. Inconsistencias del Figma para validar con el cliente
1. Las 3 tarjetas de paquete tienen el mismo texto ("Cusco Imperial…" con ruta "Lima, Cusco & Aguas Calientes") aunque el carrusel se titula "Punta Cana".
2. "Torres del Paine" tiene la descripción "Cabañas de cristal en Finlandia y Noruega…", que es un copy cruzado.
3. Las 4 tarjetas de crucero repiten "Alpes Suizos & Machu Picchu".
4. "Lo mejores planes de lujo" debería ser "Los mejores…".
5. Mezcla de marcas: "Tu Destino" (catálogo/bloqueos) vs "Atlas Travel". Hay que confirmar si Tu Destino es el operador mayorista.
6. El texto de certificaciones dice "chile" en minúscula.
7. La tarjeta Italia del mega menú tiene el caption "Río de Janeiro & Armação" (copy sobrante).
8. El tile "Vuelos" está en dorado sin estar activo (se tomó como hover).

## 6. Decisiones de responsive (no hay diseño mobile)
- **≤1280**: el hero pasa a 1 columna y los textos del header se compactan.
- **≤1100**:
  - Los showcase apilan la columna editorial arriba.
  - Las tarjetas de mes pasan a carrusel horizontal.
  - Los pilares quedan en 1 columna.
- **≤1024**:
  - Menú hamburguesa; el mega menú se oculta (pendiente diseñar la versión mobile).
  - La barra de servicios hace scroll horizontal.
- **≤640**:
  - Se ocultan el CTA del header y las redes.
  - Las tarjetas se reducen.

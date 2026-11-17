# CLAUDE.md: Atlas Travel Web

Front-end de **Atlas Travel** (agencia de viajes chilena, distribuidor Palace Resort, motor de reservas `atlastravel.e-agencias.com`).
Es una réplica del Figma "Atlas". La especificación completa está en `docs/DESIGN_SPEC.md` y las capturas de referencia en `docs/reference/`.

## Stack
- Vite 5, React 18 y TypeScript (strict)
- CSS Modules (`*.module.css`) + tokens en `src/styles/tokens.css`. **No hay Tailwind.**
- Fuentes self-hosted con `@fontsource/*`: Biryani, Bona Nova, Bonheur Royale, Big Shoulders Display y Brawler.
  Se importan **sin** la extensión `.css` (por el `exports` de los paquetes).

## Comandos
- `npm run dev`: servidor local
- `npm run build`: typecheck + build
- `npm run preview`: sirve `dist/`

## Estructura
```
src/
  styles/        tokens.css (design tokens) · global.css (reset + fuentes)
  data/          content.ts (contenido mock 1:1 del Figma) · types.ts (contratos)
  hooks/         useScrollCarousel.ts (carrusel con scroll-snap)
  components/
    ui/          Button, Chip, CarouselArrow, Container, Icon, Eyebrow
    layout/      SiteHeader (+ MegaMenu), SiteFooter, ChatWidget
    sections/    Hero, ServicesBar, MonthlyOffers, OffersShowcase, SignatureBanner,
                 LuxurySection, DesignYourStory, Partners, Newsletter, Certifications
    cards/       TripCard, MonthDestinationCard, CruiseCard
  pages/         Home.tsx
  assets/        images/*.webp · icons/*.svg (exportados del Figma)
```

## Reglas
1. **Fidelidad al Figma primero.** Lienzo de referencia: 1920 px, contenedor de 1440 (`<Container>`), wide de 1720 (`<Container size="wide">`).
   Antes de cambiar medidas, compara con `docs/reference/figma-*.jpg`.
2. Colores, radios, sombras y fuentes **solo vía variables** de `tokens.css`. No hardcodees hex nuevos.
3. El contenido vive en `src/data/content.ts`, nunca en los componentes. Cuando haya API, reemplaza la fuente de datos manteniendo los tipos de `types.ts`.
4. Accesibilidad:
   - `<button>`/`<a>` reales
   - `aria-label` en botones de solo icono
   - `alt=""` en imágenes decorativas
   - foco visible (ya global)
5. Biryani necesita `padding-top ≈ 0.2em` para centrar ópticamente en botones y chips.
6. Imágenes nuevas: `.webp`, a 2× como máximo de su tamaño de render, con `loading="lazy"` salvo las del hero.
7. Textos en español (Chile). Moneda en USD con formato `$1.048 USD`.

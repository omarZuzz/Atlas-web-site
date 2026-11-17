# Prompt para Claude Code: Atlas Travel

> Copia todo lo que está debajo de la línea y pégalo en Claude Code, abierto en la raíz de este repositorio.
> Los bloques marcados con **[COMPLETAR]** son decisiones de negocio. Llénalos antes de pegar o deja que Claude Code te pregunte.

---

Eres un desarrollador front-end senior. Vas a continuar el desarrollo de la plataforma web de **Atlas Travel**, una agencia de viajes chilena:
- Es distribuidor oficial de Palace Resort.
- Vende bloqueos confirmados del mayorista "Tu Destino".
- Su motor de reservas es `atlastravel.e-agencias.com`.

## Contexto del repo (léelo antes de tocar código)
1. `CLAUDE.md`: stack, estructura y reglas obligatorias.
2. `docs/DESIGN_SPEC.md`: análisis completo del Figma (tokens, secciones con su posición Y, estados, inconsistencias, decisiones de responsive).
3. `docs/reference/figma-home-1920.jpg` y `figma-megamenu-destinos-1920.jpg`: render del Figma original. Es **la verdad visual**.
4. `docs/reference/react-*.jpg`: estado actual de la implementación.

Ya existe una réplica funcional de la home desktop (1920) y del mega menú, con:
- Vite, React 18 y TypeScript
- CSS Modules + `src/styles/tokens.css`
- Contenido mock en `src/data/content.ts`

**No cambies el stack ni la arquitectura de carpetas.**

## Objetivo de esta fase
Llevar el front a calidad de producción, manteniendo la fidelidad pixel-perfect al Figma en 1920 y con un responsive impecable.

### Tareas (en este orden; haz commit por tarea)
1. **Auditoría visual automatizada**
   - Agrega Playwright como devDependency y un script `npm run visual` que haga screenshot full-page de `/` a 1920, 1440, 1024, 768 y 390 px de ancho.
   - Compara 1920 contra `docs/reference/figma-home-1920.jpg` y corrige toda diferencia mayor a ~4 px en posiciones, tamaños, interlineados o colores. Prioriza:
     - hero
     - barra de servicios
     - tarjetas de paquete
     - "Diseña tu próxima historia"
2. **Responsive real (no hay diseño mobile).** Diseña mobile-first, coherente con el lenguaje visual:
   - Header con menú hamburguesa a pantalla completa (navy), que incluya las colecciones del mega menú como acordeón.
   - Hero mobile: título de 72–88 px, carrusel "Destinos estrella" deslizable con snap.
   - Barra de servicios en mobile: grilla de 4 columnas o scroll horizontal con indicador.
   - Tarjetas "por mes": carrusel con snap, con la destacada a ancho completo.
   - Revisa que ningún texto se superponga a 390 px y que no haya scroll horizontal del `body`.
3. **Routing** con `react-router-dom` v6. Páginas:
   - `/`: home actual
   - `/destinos` y `/destinos/:slug`: listado y detalle de destino (usa los mismos componentes y tokens)
   - `/paquetes/:id`: detalle de paquete (galería, itinerario por día, qué incluye, tarifa "Desde/Precio/Por persona", CTA Reservar)
   - `/cotizar`: formulario de cotización (origen, destino, fechas, pasajeros adultos/niños, presupuesto, contacto)
   - `/registro`: registro y login
   - `/nosotros`, `/contacto`, `/terminos`, `/privacidad`
   - Usa layout compartido (`SiteHeader` + `SiteFooter` + `ChatWidget`). En páginas internas el header es sólido navy, no transparente.
4. **Capa de datos**
   - Crea `src/services/api.ts` con funciones tipadas (`getTrips`, `getStarDestinations`, `getMonthDestinations(month)`, `getPartners`, `getCruises`, `subscribeNewsletter`, `sendQuote`) que hoy lean de `content.ts` con un `await` simulado.
   - Los componentes consumen esas funciones (TanStack Query o hooks propios) con estados de carga (skeletons con el radio de cada tarjeta) y de error.
   - Conecta los filtros reales:
     - chips de región → filtran paquetes
     - tabs + meses → filtran "Diseña tu próxima historia"
     - categorías de servicio → navegan
5. **Integraciones** **[COMPLETAR]**
   - Reservas: los CTA "Reservar" y "Compra en línea" deben llevar a `https://atlastravel.e-agencias.com/...` **[COMPLETAR: URLs o deep-links por producto]**.
   - WhatsApp del asesor (`ChatWidget`): abrir `https://wa.me/56983218980?text=...` con mensaje prellenado según la página.
   - Newsletter y cotización: endpoint **[COMPLETAR: CRM/backend, p. ej. HubSpot, Brevo o API propia]**.
   - Analítica: **[COMPLETAR: GA4 / Meta Pixel IDs]**, con eventos `view_item`, `select_promotion`, `generate_lead` y `begin_checkout`.
6. **SEO y rendimiento**
   - Metadatos por página.
   - Open Graph.
   - JSON-LD `TravelAgency` y `Product`/`Offer` en paquetes.
   - `sitemap.xml`.
   - Imágenes responsive (`srcset`) y preload de la imagen del hero y de las fuentes críticas (Biryani 400/700/900, Bona Nova 700).
   - Meta: Lighthouse ≥ 90 en Performance, Accessibility, Best Practices y SEO.
7. **Accesibilidad**
   - Navegación por teclado completa del mega menú (flechas, Esc, foco atrapado en mobile).
   - Carruseles con `aria-roledescription="carousel"` y botones con `aria-controls`.
   - Contraste AA: el texto dorado `#CC9B54` sobre `#F5F5F5` no pasa AA en tamaños chicos. Propón un tono accesible sin romper la marca y documéntalo en `tokens.css`.
8. **Calidad**
   - ESLint (typescript-eslint + react-hooks) y Prettier (ya configurado).
   - Vitest + Testing Library para `useScrollCarousel`, `Button`, `Newsletter` (validación) y filtros.

## Reglas
- Sigue `CLAUDE.md`. Usa tokens de `tokens.css`; si falta uno, créalo ahí.
- Todo el copy va en español (Chile) y vive en `src/data/` o en la capa de servicios, nunca hardcodeado en JSX.
- No inventes datos comerciales (precios, destinos, partners). Usa los mock existentes y marca con `// TODO(contenido)` lo que el cliente debe proveer.
- Las inconsistencias de copy listadas en `DESIGN_SPEC.md §5` **no se corrigen solas**: déjalas como `TODO(contenido)` y avísame al final.
- Antes de cada tarea, muéstrame un plan corto. Al terminar cada una, corre `npm run build` y `npm run visual` y adjunta las capturas.

## Entregable final
- Repo compilando sin errores ni warnings de TypeScript ni ESLint.
- Capturas finales en 1920, 1440, 768 y 390.
- Resumen de lo hecho, decisiones de diseño tomadas sin Figma y lista de `TODO(contenido)` y `[COMPLETAR]` pendientes.

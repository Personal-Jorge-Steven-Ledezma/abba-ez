# ABBA EZ · Estética & Bienestar — Landing

Landing page responsive de ABBA EZ, construida sobre el **Manual de identidad visual y aplicaciones 1.0**
(carpeta [`Marca/`](Marca/), noviembre de 2026).
Publicada en **https://www.abbaez.com/** desde el 24 de noviembre de 2026.

- Sitio: https://www.abbaez.com/
- Modo revisión (muestra datos pendientes): https://www.abbaez.com/?revision
- Datos pendientes: [PENDIENTES.md](PENDIENTES.md)

## Cómo editar

| Qué cambiar | Dónde |
|---|---|
| WhatsApp, ciudad, horarios, redes, profesional, precios, respuestas de preguntas | `assets/js/config.js` (único archivo de datos) |
| Textos de secciones | `index.html` (cada sección está marcada con un comentario A–H) |
| Colores, tipografías, espaciados, radios, movimiento | Tokens al inicio de `assets/css/landing.css` (paleta del manual → tokens semánticos) |
| Imágenes | `assets/img/` (formato `.webp` con respaldo `.jpg`) |

Un campo vacío en `config.js` no se muestra: la página nunca enseña marcadores ni datos sin confirmar.

## Estructura

```
index.html               A. Encabezado · B. Portada · C. Servicios · D. Nuestra atención
                         E. Cómo consultar · F. Preguntas frecuentes · G. Contacto · H. Pie
assets/css/landing.css   Estilos mobile first
assets/js/config.js      Datos del negocio
assets/js/main.js        WhatsApp, menú móvil, acordeones, animaciones
assets/img/              Logotipo, firma, símbolo, favicon y fotografías de ambientación
Marca/                   Manual de identidad (PDF) y logotipos originales con transparencia
```

Sitio estático sin build ni dependencias. Fuentes: Cormorant Garamond y Manrope (Google Fonts, SIL OFL 1.1).

## Ver en local

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Decisiones de diseño

- **Identidad del manual:** vino profundo `#6B353C` (primario y CTA), marfil cálido `#F3EBE3` (fondo), blanco cálido
  `#FFFCF9` (superficies), ciruela `#40262B` (texto), rosa arcilla `#C79D9B` (acento) y arena `#DFCDC0` (divisiones).
  Los componentes usan tokens semánticos (`--color-*`), nunca los valores de marca directamente.
- **Ajuste de accesibilidad:** el gris secundario del manual (`#746D69`) da 4,3:1 sobre marfil, por debajo de AA;
  el sitio usa `#6B6460` (4,9:1 sobre marfil, 5,7:1 sobre blanco). El rosa arcilla da 2,0:1 sobre marfil: solo
  decorativo (contorno del arco, punto de las etiquetas), nunca en texto.
- **Logotipo:** firma sin descriptor en el encabezado (a ese tamaño «Estética & Bienestar» no se lee, regla
  principal del manual); logotipo completo en el pie a 200 px (mínimo digital: 180 px); símbolo aislado en el
  identificador de portada y, en marfil sobre vino, en Contacto (pieza para redes del manual). Derivados de los PNG
  de `Marca/`; el arte vectorial final sigue pendiente.
- **Tipografía:** Cormorant Garamond (títulos, 500–600) y Manrope (interfaz). Escala con `clamp()`; nunca más de dos familias.
- **Arco del manual:** contorno rosa arcilla concéntrico al remate en arco de la foto de portada y arco de cierre en Contacto.
- **Sistema:** espaciado de base 8 px, radios moderados (6 px botones, 12 px tarjetas, 20 px imágenes),
  transiciones de 150–300 ms y sombras mínimas.
- **Servicios en tres grupos:** «Relajación», «Cuidado facial» y «Con valoración previa», para que drenaje
  linfático y masaje posquirúrgico no se lean como servicios de relajación ni prometan resultados.
- **WhatsApp como consulta:** los mensajes llevan el nombre del servicio y la página aclara que escribir no
  confirma la cita.
- **Accesibilidad:** contraste AA, foco visible, acordeones con patrón WAI-ARIA, menú con Escape,
  objetivos táctiles de 44 px o más y animaciones desactivadas con `prefers-reduced-motion`.

## Dominio

`abbaez.com` está registrado en Namecheap (vence el 24 nov 2027). DNS en Namecheap (Advanced DNS):

| Tipo | Host | Valor |
|---|---|---|
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| CNAME | `www` | `personal-jorge-steven-ledezma.github.io.` |
| TXT | `_github-pages-challenge-personal-jorge-steven-ledezma` | Código de verificación de la organización en GitHub |

En GitHub: **Settings → Pages → Custom domain** = `www.abbaez.com` (crea el archivo `CNAME`) y **Enforce HTTPS**.
La versión sin `www` redirige sola a `www`.

## Publicación

GitHub Pages desde `main`, carpeta raíz. `.nojekyll` evita el procesamiento con Jekyll.
La página es indexable (`index, follow`). SEO: título y descripción, canonical, Open Graph y tarjeta de Twitter,
datos estructurados (`HealthAndBeautyBusiness`, `WebSite` y `FAQPage`, solo con datos confirmados), `robots.txt`,
`sitemap.xml` y `llms.txt` para buscadores con IA. Al publicar datos nuevos (ciudad, horarios, precios), actualizar
también el JSON-LD de `index.html` y `llms.txt`, y la fecha de `sitemap.xml`.

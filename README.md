# ABBA EZ · Estética & Bienestar — Landing

Landing page responsive de ABBA EZ, construida sobre la identidad «Ritual en equilibrio».
**Versión de revisión.**

- Sitio: https://jorgestevenledezma.github.io/abba-ez/
- Modo revisión (muestra datos pendientes): https://jorgestevenledezma.github.io/abba-ez/?revision
- Datos pendientes: [PENDIENTES.md](PENDIENTES.md)

## Cómo editar

| Qué cambiar | Dónde |
|---|---|
| WhatsApp, ciudad, horarios, redes, profesional, precios, respuestas de preguntas | `assets/js/config.js` (único archivo de datos) |
| Textos de secciones | `index.html` (cada sección está marcada con un comentario A–H) |
| Colores, tipografías, espaciados | Variables al inicio de `assets/css/landing.css` |
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
```

Sitio estático sin build ni dependencias. Fuentes: DM Serif Display y Manrope (Google Fonts, SIL OFL 1.1).

## Ver en local

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Decisiones de diseño

- **Marfil y vino** construyen el reconocimiento; salvia solo en «Cómo consultar» y etiquetas;
  terracota en numerales, iconos y ondas (nunca en texto pequeño).
- **Ondas del símbolo** como recurso discreto: identificador de portada, remate de la imagen y cierre de contacto.
  El arco de las imágenes retoma la curva del símbolo y el espacio de la propuesta.
- **Servicios en tres grupos:** «Relajación», «Cuidado facial» y «Con valoración previa», para que drenaje
  linfático y masaje posquirúrgico no se lean como servicios de relajación ni prometan resultados.
- **WhatsApp como consulta:** los mensajes llevan el nombre del servicio y la página aclara que escribir no
  confirma la cita.
- **Accesibilidad:** contraste AA, foco visible, acordeones con patrón WAI-ARIA, menú con Escape,
  objetivos táctiles de 44 px o más y animaciones desactivadas con `prefers-reduced-motion`.

## Publicación

GitHub Pages desde `main`, carpeta raíz. `.nojekyll` evita el procesamiento con Jekyll.
La página lleva `noindex` mientras esté en revisión.

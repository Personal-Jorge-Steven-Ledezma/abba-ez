# Información pendiente para completar el sitio

Versión de revisión del 20 de noviembre de 2026. Todo lo que aparece aquí **no se muestra en la página
pública** hasta que se escriba en [`assets/js/config.js`](assets/js/config.js). Para ver dónde irá cada
dato, abre la página con `?revision` al final de la URL.

## Contacto (bloquea los botones de WhatsApp)

| Dato | Campo en `config.js` | Efecto al completarlo |
|---|---|---|
| WhatsApp comercial (con indicativo, solo dígitos) | `contacto.whatsapp` | Todos los botones «Consultar disponibilidad» abren WhatsApp con un mensaje según el servicio; aparece el botón flotante. |
| Ciudad | `contacto.ciudad` | Se muestra en Contacto. |
| Modalidad: local, domicilio o ambas | `contacto.modalidad` + `preguntas.modalidad` | Habilita la pregunta frecuente de modalidad. |
| Dirección del local (si debe publicarse) | `contacto.direccion` | Se muestra en Contacto. |
| Zona de cobertura a domicilio | `contacto.zonaCobertura` | Se muestra en Contacto. |
| Horarios | `contacto.horarios` | Lista en Contacto. |
| Enlace de mapa (solo con dirección confirmada) | `contacto.mapaUrl` | Enlace «Ver en el mapa». |
| Redes sociales confirmadas | `redes` | Contacto y pie de página. |
| Política de tratamiento de datos | `privacidadUrl` | Enlace en el pie. Recomendable antes de recibir datos personales por WhatsApp (Ley 1581 de 2012). |

## Persona responsable de la atención

| Dato | Campo |
|---|---|
| Nombre | `profesional.nombre` (sin él, la ficha no se muestra) |
| Cargo o rol | `profesional.cargo` |
| Fotografía real (vertical 4:5, mínimo 960 × 1200 px) | `profesional.foto` |
| Formación y acreditaciones verificables | `profesional.formacion` |
| Experiencia verificable | `profesional.experiencia` |
| Enfoque de atención, en sus palabras | `profesional.enfoque` |

## Servicios

| Servicio | Pendiente |
|---|---|
| Masaje relajante | Duración y precio. |
| Masaje relajante con piedras volcánicas | Duración, precio, cómo se desarrolla la sesión y contraindicaciones o valoración previa que aplique. |
| Drenaje linfático | Duración, precio, alcance del servicio, formación de quien lo presta y condiciones de atención. |
| Masaje posquirúrgico | Duración, precio, competencias acreditadas, requisitos (por ejemplo, autorización médica) y verificación de requisitos sanitarios aplicables a la actividad y modalidad. **No ampliar su descripción hasta confirmar esto.** |

Duración y precio se escriben en `servicios.<id>.duracion` y `servicios.<id>.precio`.

## Preguntas frecuentes sin publicar

Se publican al escribir la respuesta en `preguntas.<clave>`:

| Pregunta | Clave |
|---|---|
| ¿Atienden en un local o a domicilio? | `modalidad` |
| ¿Dónde están ubicados o qué zona cubren? | `ubicacion` |
| ¿Cómo me preparo para la sesión? | `preparacion` |
| ¿Cuánto dura cada servicio? | `duracion` |
| ¿Puedo cambiar o cancelar mi cita? | `cancelaciones` |

Ya publicadas (no dependen de datos del negocio): cómo consultar disponibilidad, si el mensaje confirma la
cita, qué servicio elegir y por qué algunos requieren valoración previa.

## Marca e imágenes

- **Logotipo vectorial (SVG o AI).** El sitio usa una extracción raster limpia de la versión con transparencia
  del PDF (1339 × 575 px), suficiente para web. Para impresión, bordado y favicon nítido hace falta el archivo
  vectorial de producción.
- **Fotografías propias.** Las de la portada y la sección «Nuestra atención» son visualizaciones generadas para
  la propuesta, usadas como ambientación (el pie lo indica). Reemplazar por fotos reales: manos, lino, detalles
  del espacio, luz natural. Formatos sugeridos: portada 4:5 (mín. 1200 × 1500 px) y atención 4:5.
- **Disponibilidad del nombre y dominio.** Validar registro de marca y dominio antes del lanzamiento.

## Antes de publicar oficialmente

1. Completar como mínimo WhatsApp, ciudad, modalidad y horarios.
2. Retirar `<meta name="robots" content="noindex, nofollow">` de `index.html`.
3. Actualizar `og:url` y `og:image` si se usa dominio propio.

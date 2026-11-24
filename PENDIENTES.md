# Información pendiente para completar el sitio

Actualizado el 24 de noviembre de 2026 (sitio publicado en www.abbaez.com). Todo lo que aparece aquí **no se muestra en la página
pública** hasta que se escriba en [`assets/js/config.js`](assets/js/config.js). Para ver dónde irá cada
dato, abre la página con `?revision` al final de la URL.

## Contacto (bloquea los botones de WhatsApp)

| Dato | Campo en `config.js` | Efecto al completarlo |
|---|---|---|
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
| Limpieza facial | Duración, precio, en qué consiste la sesión (pasos y productos), quién la realiza y su formación, y si requiere valoración previa de la piel. Si incluye procedimientos más allá de la limpieza (extracción, peelings, aparatología), confirmar competencias y requisitos antes de publicarlos. |
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

- **Logotipo vectorial (SVG, PDF y EPS).** El sitio usa los PNG con transparencia del manual de identidad
  (`Marca/`, 1211 × 599 px), suficientes para web. El manual indica como siguiente paso aprobar el logotipo y
  producir el arte final vectorial; con él se reemplazan logotipo, firma, símbolo y favicon. El símbolo tiene trazos
  finos: validar su lectura a 32 y 48 px (favicon) con el vectorial.
- **Fotografías en mayor resolución.** Las imágenes actuales miden 722 × 626 px (portada) y 482 × 584 px
  (atención); en pantallas de alta densidad se ven suaves. Reemplazarlas por fotos reales de al menos
  1200 × 1500 px.
- **Fotografías propias.** Las de la portada y la sección «Nuestra atención» son visualizaciones generadas para
  la propuesta, usadas como ambientación (el pie lo indica). Reemplazar por fotos reales: manos, lino, detalles
  del espacio, luz natural. Formatos sugeridos: portada 4:5 (mín. 1200 × 1500 px) y atención 4:5.
- **Disponibilidad del nombre y dominio.** Validar registro de marca y dominio antes del lanzamiento.

## Hecho al publicar (24 nov 2026)

- WhatsApp +57 310 427 9164 (a nombre de Teresa Amparo Enriquez Zuñiga) en `config.js`: botones, botón flotante y Contacto.
- Página indexable; dominio `www.abbaez.com`; `robots.txt`, `sitemap.xml`, `llms.txt` y datos estructurados.

## Lo más urgente ahora

1. **Política de tratamiento de datos** (`privacidadUrl`): el sitio ya recibe consultas por WhatsApp con datos
   personales (Ley 1581 de 2012).
2. **Ciudad, modalidad y horarios**: sin ellos Google no puede mostrar el negocio en búsquedas locales. Al tenerlos,
   agregarlos también al JSON-LD (`address`, `openingHoursSpecification`) y a `llms.txt`.
3. **Google Search Console**: verificar `abbaez.com` y enviar `https://www.abbaez.com/sitemap.xml`.
4. **Ficha de la profesional**: con cargo, foto y formación verificable se activa la ficha en «Nuestra atención».

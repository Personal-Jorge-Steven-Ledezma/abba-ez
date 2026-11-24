/*
 * ABBA EZ · Datos del negocio
 * ---------------------------------------------------------------
 * Este es el ÚNICO archivo que hay que editar para completar el sitio.
 *
 * Regla: un campo vacío ("" o []) NO se muestra en la página pública.
 * Así nunca aparecen marcadores como "[teléfono]" ni datos sin confirmar.
 * Escribe aquí solo información confirmada por ABBA EZ.
 *
 * Para revisar dónde irá cada dato pendiente, abre la página con
 * ?revision al final de la URL (por ejemplo: index.html?revision).
 */
window.ABBA_CONFIG = {
  contacto: {
    // Número comercial de WhatsApp con indicativo de país, solo dígitos.
    // Ejemplo de formato (no es un número real): "57" + 10 dígitos.
    whatsapp: "573104279164",
    // Titular del WhatsApp: se muestra junto al número en Contacto.
    whatsappNombre: "Teresa Amparo Enriquez Zuñiga",
    ciudad: "",
    // "local", "domicilio" o "ambas". Define el texto de modalidad.
    modalidad: "",
    // Dirección del local (si se debe publicar) o zona de cobertura a domicilio.
    direccion: "",
    zonaCobertura: "",
    // Una línea por franja. Ejemplo: "Lunes a viernes · 9:00 a. m. – 6:00 p. m."
    horarios: [],
    // Enlace de Google Maps solo si la dirección está confirmada y debe mostrarse.
    mapaUrl: ""
  },

  // Perfiles confirmados. Ejemplo: { red: "Instagram", usuario: "@abbaez", url: "https://instagram.com/abbaez" }
  redes: [],

  // Enlace a la política de tratamiento de datos, cuando exista.
  privacidadUrl: "",

  // Persona responsable de la atención. Si "nombre" está vacío, la ficha no se muestra.
  profesional: {
    nombre: "",
    cargo: "",
    // Ruta a una fotografía real, por ejemplo "assets/img/profesional.webp".
    foto: "",
    formacion: [],      // Ej.: ["Título o curso · Institución · Año"]
    experiencia: "",    // Solo experiencia verificable.
    enfoque: ""         // Cómo describe su forma de atender, en sus palabras.
  },

  // Duración y precio por servicio. Vacío = no se muestra.
  servicios: {
    "masaje-relajante":            { duracion: "", precio: "" },
    "masaje-piedras-volcanicas":   { duracion: "", precio: "" },
    "limpieza-facial":             { duracion: "", precio: "" },
    "drenaje-linfatico":           { duracion: "", precio: "" },
    "masaje-posquirurgico":        { duracion: "", precio: "" }
  },

  // Respuestas que dependen de datos del negocio. Vacío = la pregunta no se publica.
  preguntas: {
    modalidad: "",
    ubicacion: "",
    preparacion: "",
    duracion: "",
    cancelaciones: ""
  }
};

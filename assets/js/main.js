/* ABBA EZ · Interacciones de la landing
 * - Aplica los datos de config.js (lo vacío no se muestra).
 * - Enlaces a WhatsApp con mensaje según el servicio.
 * - Menú móvil, acordeones, sección activa, animaciones de entrada.
 */
(function () {
  "use strict";

  var cfg = window.ABBA_CONFIG || {};
  var contacto = cfg.contacto || {};
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var lleno = function (v) { return Array.isArray(v) ? v.length > 0 : typeof v === "string" ? v.trim() !== "" : !!v; };
  var revision = /[?&]revision\b/.test(location.search);
  var reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resolver(el, condicion) { if (el && condicion) el.classList.add("is-resuelto"); }

  /* ---------- Modo revisión ---------- */
  if (revision) {
    document.documentElement.classList.add("modo-revision");
    var banda = document.createElement("div");
    banda.className = "banda-revision";
    banda.innerHTML = "Modo revisión: los recuadros punteados señalan datos pendientes. <a href=\"./\">Ver versión pública</a>";
    document.body.insertBefore(banda, document.body.firstChild);
  }

  /* ---------- WhatsApp ---------- */
  var numero = (contacto.whatsapp || "").replace(/\D/g, "");
  var hayWhatsapp = numero.length >= 10;

  function urlWhatsapp(servicio) {
    var texto = servicio
      ? "Hola, ABBA EZ. Quisiera consultar información y disponibilidad para el servicio: " + servicio + "."
      : "Hola, ABBA EZ. Quisiera consultar información y disponibilidad.";
    return "https://wa.me/" + numero + "?text=" + encodeURIComponent(texto);
  }

  $$("[data-wa]").forEach(function (a) {
    if (hayWhatsapp) {
      a.href = urlWhatsapp(a.getAttribute("data-servicio"));
      a.target = "_blank";
      a.rel = "noopener";
    } else {
      a.href = "#contacto";
    }
  });

  // Sin número configurado, el botón de la sección de contacto lo explica en lugar de simular un envío.
  var botonContacto = $("[data-wa-contacto]");
  var aviso = $("#aviso-whatsapp");
  if (botonContacto && !hayWhatsapp) {
    botonContacto.addEventListener("click", function (e) {
      e.preventDefault();
      aviso.textContent = "Versión de revisión: este botón abrirá una conversación de WhatsApp cuando se configure el número comercial.";
      aviso.hidden = false;
    });
  }

  if (hayWhatsapp) {
    var flotante = $("#wa-flotante");
    flotante.hidden = false;
    document.body.classList.add("tiene-flotante");
    // Se oculta en la portada y en contacto, donde ya hay un botón visible.
    var zonas = [$("#inicio"), $("#contacto")];
    var visibles = new Set();
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) { en.isIntersecting ? visibles.add(en.target) : visibles.delete(en.target); });
      flotante.classList.toggle("is-oculto", visibles.size > 0);
    }, { threshold: 0.15 });
    zonas.forEach(function (z) { if (z) io.observe(z); });
  }

  /* ---------- Servicios: duración y precio ---------- */
  var servicios = cfg.servicios || {};
  $$("[data-servicio-id]").forEach(function (card) {
    var datos = servicios[card.getAttribute("data-servicio-id")] || {};
    var lista = $(".servicio__datos", card);
    var alguno = false;
    ["duracion", "precio"].forEach(function (campo) {
      var li = $("[data-dato=\"" + campo + "\"]", card);
      if (li && lleno(datos[campo])) {
        li.lastElementChild.textContent = datos[campo];
        li.hidden = false;
        alguno = true;
      }
    });
    if (lista) lista.hidden = !alguno;
    resolver($(".pendiente-revision", card), lleno(datos.duracion) && lleno(datos.precio));
  });

  /* ---------- Persona responsable ---------- */
  var pro = cfg.profesional || {};
  var perfil = $("#perfil");
  if (perfil && lleno(pro.nombre)) {
    $(".perfil__nombre", perfil).textContent = pro.nombre;
    if (lleno(pro.cargo)) { var cargo = $(".perfil__cargo", perfil); cargo.textContent = pro.cargo; cargo.hidden = false; }
    if (lleno(pro.foto)) {
      var foto = $(".perfil__foto", perfil);
      foto.src = pro.foto;
      foto.alt = "Fotografía de " + pro.nombre;
      foto.hidden = false;
    }
    if (lleno(pro.formacion)) {
      var bloqueF = $("[data-perfil=\"formacion\"]", perfil);
      var ul = $("ul", bloqueF);
      pro.formacion.forEach(function (t) { var li = document.createElement("li"); li.textContent = t; ul.appendChild(li); });
      bloqueF.hidden = false;
    }
    ["experiencia", "enfoque"].forEach(function (campo) {
      if (lleno(pro[campo])) {
        var b = $("[data-perfil=\"" + campo + "\"]", perfil);
        $("p", b).textContent = pro[campo];
        b.hidden = false;
      }
    });
    perfil.hidden = false;
  }
  resolver($(".perfil-pendiente"), lleno(pro.nombre) && lleno(pro.foto) && lleno(pro.formacion));

  /* ---------- Preguntas con respuesta confirmada ---------- */
  var preguntas = cfg.preguntas || {};
  var todas = true;
  $$("[data-pregunta]").forEach(function (item) {
    var resp = preguntas[item.getAttribute("data-pregunta")];
    if (lleno(resp)) {
      $(".acordeon__panel p", item).textContent = resp;
      item.hidden = false;
    } else {
      todas = false;
    }
  });
  resolver($(".acordeon .pendiente-revision"), todas);

  /* ---------- Datos de contacto ---------- */
  var datos = $("#contacto-datos");
  var hayDatos = false;
  function mostrar(clave) { var el = $("[data-contacto=\"" + clave + "\"]", datos); el.hidden = false; hayDatos = true; return el; }

  if (hayWhatsapp) {
    var wa = $("a", mostrar("whatsapp"));
    wa.href = urlWhatsapp();
    wa.textContent = "+" + numero.replace(/^(\d{2})(\d{3})(\d{3})(\d+)$/, "$1 $2 $3 $4");
    if (lleno(contacto.whatsappNombre)) {
      var titular = document.createElement("span");
      titular.className = "contacto__titular";
      titular.textContent = contacto.whatsappNombre;
      wa.parentNode.appendChild(titular);
    }
  }

  var ubicacion = [contacto.direccion, contacto.zonaCobertura, contacto.ciudad].filter(lleno);
  if (ubicacion.length) {
    var dd = $("dd", mostrar("ubicacion"));
    dd.textContent = ubicacion.join(" · ");
    if (lleno(contacto.mapaUrl) && lleno(contacto.direccion)) {
      var mapa = document.createElement("a");
      mapa.href = contacto.mapaUrl; mapa.target = "_blank"; mapa.rel = "noopener";
      mapa.textContent = "Ver en el mapa";
      dd.appendChild(document.createElement("br"));
      dd.appendChild(mapa);
    }
  }

  if (lleno(contacto.horarios)) {
    var ulH = $("ul", mostrar("horarios"));
    contacto.horarios.forEach(function (h) { var li = document.createElement("li"); li.textContent = h; ulH.appendChild(li); });
  }

  var redes = (cfg.redes || []).filter(function (r) { return r && lleno(r.url); });
  if (redes.length) {
    var ulR = $("ul", mostrar("redes"));
    var pieRedes = $("#pie-redes");
    redes.forEach(function (r) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = r.url; a.target = "_blank"; a.rel = "noopener";
      a.textContent = (r.red || "Red social") + (r.usuario ? " · " + r.usuario : "");
      li.appendChild(a); ulR.appendChild(li);
      var a2 = a.cloneNode(true); a2.textContent = r.red || "Red social";
      pieRedes.appendChild(a2);
    });
    pieRedes.hidden = false;
  }
  if (datos) datos.hidden = !hayDatos;
  resolver($(".contacto .pendiente-revision"), hayWhatsapp && lleno(contacto.ciudad) && lleno(contacto.horarios));

  if (lleno(cfg.privacidadUrl)) {
    var priv = $("#pie-privacidad");
    priv.href = cfg.privacidadUrl;
    priv.hidden = false;
  }

  var anio = $("#anio");
  if (anio) anio.textContent = new Date().getFullYear();

  /* ---------- Menú móvil ---------- */
  var boton = $(".menu-boton");
  var menu = $("#menu-principal");
  var escritorio = window.matchMedia("(min-width: 62rem)");

  function abrirMenu(abrir) {
    boton.setAttribute("aria-expanded", String(abrir));
    menu.classList.toggle("is-open", abrir);
    $(".menu-boton__texto", boton).textContent = abrir ? "Cerrar" : "Menú";
    if (abrir) { var primero = $("a", menu); if (primero) primero.focus(); }
  }

  if (boton && menu) {
    boton.addEventListener("click", function () { abrirMenu(boton.getAttribute("aria-expanded") !== "true"); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a") && !escritorio.matches) abrirMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && boton.getAttribute("aria-expanded") === "true") { abrirMenu(false); boton.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (boton.getAttribute("aria-expanded") === "true" && !e.target.closest(".encabezado")) abrirMenu(false);
    });
    escritorio.addEventListener("change", function () { abrirMenu(false); });
  }

  /* ---------- Encabezado con sombra al desplazarse ---------- */
  var encabezado = $("#encabezado");
  function alDesplazar() { encabezado.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", alDesplazar, { passive: true });
  alDesplazar();

  /* ---------- Sección activa en la navegación ---------- */
  var enlaces = $$(".menu__lista a");
  var mapaEnlaces = {};
  enlaces.forEach(function (a) { mapaEnlaces[a.getAttribute("href").slice(1)] = a; });
  var seccionesNav = Object.keys(mapaEnlaces).map(function (id) { return document.getElementById(id); }).filter(Boolean);
  var observadorNav = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (en) {
      if (en.isIntersecting) {
        enlaces.forEach(function (a) { a.removeAttribute("aria-current"); });
        mapaEnlaces[en.target.id].setAttribute("aria-current", "true");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  seccionesNav.forEach(function (s) { observadorNav.observe(s); });

  /* ---------- Acordeones (patrón WAI-ARIA) ---------- */
  $$(".acordeon button[aria-controls]").forEach(function (btn) {
    var panel = document.getElementById(btn.getAttribute("aria-controls"));
    btn.addEventListener("click", function () {
      var abrir = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(abrir));
      if (abrir) {
        panel.hidden = false;
        requestAnimationFrame(function () { requestAnimationFrame(function () { panel.classList.add("is-open"); }); });
      } else {
        panel.classList.remove("is-open");
        if (reducirMovimiento) { panel.hidden = true; return; }
        var cerrar = function (e) {
          if (e.propertyName !== "grid-template-rows") return;
          if (btn.getAttribute("aria-expanded") === "false") panel.hidden = true;
          panel.removeEventListener("transitionend", cerrar);
        };
        panel.addEventListener("transitionend", cerrar);
      }
    });
  });

  /* ---------- Animaciones de entrada ---------- */
  var revelar = $$(".revelar");
  if (reducirMovimiento || !("IntersectionObserver" in window)) {
    revelar.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); observador.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revelar.forEach(function (el) { observador.observe(el); });
  }
})();

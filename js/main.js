// js/main.js - Configuración general y comportamiento de la web

// CONFIGURACIÓN RÁPIDA (Podés cambiar estos datos cuando quieras)
const CONFIG = {
  // Tu número de WhatsApp con código de país y área (ejemplo para Argentina: 54911xxxxxxxx)
  whatsappNumber: "5491122456950",
  
  // Tu nombre o el nombre que quieras mostrar
  developerName: "Seba",
  
  // Tu barrio o zona de cobertura
  neighborhood: "Tu Barrio",
  
  // Nombre del emprendimiento
  brandName: "LocalSimple"
};

document.addEventListener("DOMContentLoaded", () => {
  setupConfigOverrides();
  setupFAQAccordion();
  setupSmoothScrolling();
});

// Aplica la configuración en los enlaces de WhatsApp si se desea centralizar
function setupConfigOverrides() {
  const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
  whatsappLinks.forEach(link => {
    const currentHref = link.getAttribute('href');
    // Si se modifica el número en CONFIG, actualiza los enlaces manteniendo el texto
    if (CONFIG.whatsappNumber) {
      const url = new URL(currentHref);
      const textParam = url.searchParams.get("text") || "";
      link.setAttribute('href', `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(textParam)}`);
    }
  });
}

// Acordeón interactivo para la sección de Preguntas Frecuentes
function setupFAQAccordion() {
  const toggles = document.querySelectorAll('.faq-toggle');

  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      const answer = parent.querySelector('.faq-answer');
      const icon = btn.querySelector('.faq-icon');

      const isExpanded = !answer.classList.contains('hidden');

      // Cerrar las demás preguntas abiertas para mantener el diseño limpio
      document.querySelectorAll('.faq-answer').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(ic => ic.classList.remove('rotate-180'));

      // Abrir o cerrar la seleccionada
      if (!isExpanded) {
        answer.classList.remove('hidden');
        answer.classList.add('animate-fade-in');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}

// Desplazamiento suave para todos los enlaces ancla
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}


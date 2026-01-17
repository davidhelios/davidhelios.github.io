// Cambiar tema claro/oscuro
function toggleTheme() {
  const body = document.body;
  body.dataset.theme = (body.dataset.theme === "dark") ? "light" : "dark";
}

// Mostrar idioma deseado
function changeLanguage(lang) {
  localStorage.setItem("selectedLang", lang);
  applyLanguage();
}

function applyLanguage() {
  const lang = localStorage.getItem("selectedLang") || "es";
  document.querySelectorAll("[data-lang]").forEach(el => {
    el.style.display = (el.datasetLang === lang ? "block" : "none");
  });
}

// Al cargar la página intenta aplicar el idioma guardado
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();
});

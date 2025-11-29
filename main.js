// main.js — Toggle menu simple
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if(!btn || !nav) return;
  btn.addEventListener('click', () => {
    if(nav.style.display === 'flex'){
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.background = 'linear-gradient(180deg, rgba(11,99,214,0.06), rgba(11,99,214,0.02))';
      nav.style.position = 'absolute';
      nav.style.right = '18px';
      nav.style.top = '70px';
      nav.style.padding = '14px';
      nav.style.borderRadius = '10px';
      nav.style.boxShadow = '0 8px 20px rgba(11,99,214,0.08)';
    }
  });

  // Close menu when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if(!e.target.closest('.menu-toggle') && !e.target.closest('.nav') && window.innerWidth <= 980){
      if(nav) nav.style.display = 'none';
    }
  });
});
// ————————————————
// VENTANA DE BIENVENIDA
// ————————————————
window.onload = () => {
  document.getElementById("modalBienvenida").classList.add("active");
};

function cerrarModal(){
  document.getElementById("modalBienvenida").classList.remove("active");
}

// ————————————————
// MENÚ LATERAL
// ————————————————
function toggleMenu(){
  document.getElementById("sideMenu").classList.toggle("active");
}

// ————————————————
// BOTÓN SUBIR
// ————————————————
window.onscroll = () => {
  let btn = document.getElementById("btnUp");
  btn.style.display = window.scrollY > 300 ? "block" : "none";
};

// ————————————————
// MODO OSCURO
// ————————————————
function modoOscuro(){
  document.body.classList.toggle("dark-mode");
}

function filtrarComponentes() {
  const texto = document.getElementById("buscador").value.toLowerCase();
  const items = document.querySelectorAll(".item");

  items.forEach(item => {
    const titulo = item.querySelector("h3").innerText.toLowerCase();
    item.style.display = titulo.includes(texto) ? "flex" : "none";
  });
}

// Buscador para herramientas
const buscadorHerramientas = document.getElementById("buscador");
const listaHerramientas = document.querySelectorAll(".item-herramienta");

if (buscadorHerramientas) {
    buscadorHerramientas.addEventListener("input", () => {
        const texto = buscadorHerramientas.value.toLowerCase();

        listaHerramientas.forEach(item => {
            const nombre = item.dataset.name.toLowerCase();

            if (nombre.includes(texto)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
}

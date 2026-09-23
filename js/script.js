document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");

  const mainNav = document.getElementById("main-nav");

  const backTop = document.getElementById("back-top");

  const currentYear = document.getElementById("current-year");

  /* =====================================================
       AÑO
    ====================================================== */

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  /* =====================================================
       MENÚ MÓVIL
    ====================================================== */

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const opened = mainNav.classList.toggle("active");

      navToggle.setAttribute("aria-expanded", String(opened));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");

        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =====================================================
       BOTÓN VOLVER ARRIBA
    ====================================================== */

  window.addEventListener("scroll", () => {
    if (!backTop) return;

    backTop.classList.toggle("show", window.scrollY > 450);
  });

  if (backTop) {
    backTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,

        behavior: "smooth",
      });
    });
  }

  /* =====================================================
       FILTROS
    ====================================================== */

  const filters = document.querySelectorAll(".filter");

  const products = document.querySelectorAll(".product");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const category = filter.dataset.filter;

      filters.forEach((button) => {
        button.classList.remove("active");
      });

      filter.classList.add("active");

      products.forEach((product) => {
        const productCategory = product.dataset.category;

        const visible = category === "todos" || category === productCategory;

        product.hidden = !visible;
      });
    });
  });

  /* =====================================================
       ESC
    ====================================================== */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      cerrarModal();

      cerrarGaleria();
    }
  });

  /* =====================================================
       CLICK FUERA DEL LIGHTBOX
    ====================================================== */

  const lightbox = document.getElementById("lightbox");

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        cerrarGaleria();
      }
    });
  }
});

/* =========================================================
   MODAL
========================================================= */

function mostrarProducto(titulo, imagen, descripcion, precio) {
  const modal = document.getElementById("product-modal");

  if (!modal) return;

  document.getElementById("modal-title").textContent = titulo;

  document.getElementById("modal-image").src = imagen;

  document.getElementById("modal-image").alt = titulo;

  document.getElementById("modal-description").textContent = descripcion;

  document.getElementById("modal-price").textContent = precio;

  modal.classList.add("active");

  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}

/* =========================================================
   CERRAR MODAL
========================================================= */

function cerrarModal() {
  const modal = document.getElementById("product-modal");

  if (!modal) return;

  modal.classList.remove("active");

  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}

/* =========================================================
   GALERÍA
========================================================= */

function abrirGaleria(imagen, titulo) {
  const lightbox = document.getElementById("lightbox");

  document.getElementById("lightbox-image").src = imagen;

  document.getElementById("lightbox-image").alt = titulo;

  document.getElementById("lightbox-title").textContent = titulo;

  lightbox.classList.add("active");

  lightbox.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}

/* =========================================================
   CERRAR GALERÍA
========================================================= */

function cerrarGaleria() {
  const lightbox = document.getElementById("lightbox");

  if (!lightbox) return;

  lightbox.classList.remove("active");

  lightbox.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}

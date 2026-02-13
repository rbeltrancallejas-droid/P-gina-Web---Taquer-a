document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("modal");
  const modalTitulo = document.getElementById("modalTitulo");
  const modalImg = document.getElementById("modalImg");
  const modalDesc = document.getElementById("modalDesc");
  const modalPrecio = document.getElementById("modalPrecio");
  const btnArriba = document.querySelector(".boton-arriba");
  const cards = document.querySelectorAll(".card");

  // ================= MODAL =================
  window.mostrarProducto = function (titulo, img, descripcion, precio) {
    modalTitulo.innerText = titulo;
    modalImg.src = img;
    modalImg.alt = titulo;
    modalDesc.innerText = descripcion;
    modalPrecio.innerText = "Precio: " + precio;

    modal.classList.add("mostrar");
    document.body.style.overflow = "hidden";
  };

  window.cerrarModal = function () {
    modal.classList.remove("mostrar");
    document.body.style.overflow = "auto";
  };

  // Cerrar modal haciendo click fuera del contenido
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      cerrarModal();
    }
  });

  // Cerrar modal con tecla ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      cerrarModal();
    }
  });

  // ================= ANIMACIÓN CARDS =================
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));

  // ================= BOTÓN ARRIBA =================
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnArriba.classList.add("mostrar");
    } else {
      btnArriba.classList.remove("mostrar");
    }
  });

  window.irArriba = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

});

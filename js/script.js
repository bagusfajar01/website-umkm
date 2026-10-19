const promoButton = document.querySelector("#promoButton");

if (promoButton) {
  promoButton.addEventListener("click", () => {
    promoButton.textContent = "Promo: Beli 2 gratis tester!";
    console.log("Promo Kopi Nusa berhasil ditampilkan.");
  });
}

// Hamburger menu
const navToggle = document.querySelector("#navToggle");
const navMenu = document.querySelector("#navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");

    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
    );
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Buka menu navigasi");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Buka menu navigasi");
      navToggle.focus();
    }
  });
}
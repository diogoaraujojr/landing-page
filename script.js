const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Abre e fecha o menu mobile
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fecha o menu ao clicar em algum link
const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

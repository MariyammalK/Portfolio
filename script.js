document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.addEventListener("click", function() {
    navLinks.classList.toggle("active");
  });
});


// Scroll Animations
ScrollReveal().reveal(".hero-text", { delay: 200, origin: "bottom", distance: "50px", duration: 1000 });
ScrollReveal().reveal(".about-text", { delay: 300, origin: "left", distance: "60px", duration: 1000 });
ScrollReveal().reveal(".about-img", { delay: 300, origin: "right", distance: "60px", duration: 1000 });
ScrollReveal().reveal(".project-card", { delay: 200, origin: "bottom", distance: "50px", interval: 200 });
ScrollReveal().reveal("form", { delay: 300, origin: "bottom", distance: "50px", duration: 1000 });



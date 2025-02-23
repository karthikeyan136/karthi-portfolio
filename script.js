function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: 'smooth'
  });
}

document.querySelectorAll('nav a, .menu-links a, footer a, .logo').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    smoothScroll(this.getAttribute('href'));
  });
});

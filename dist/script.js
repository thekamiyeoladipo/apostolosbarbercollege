const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('-translate-x-full');
  mobileMenu.classList.add('translate-x-0', 'open');
});

closeMenuBtn.addEventListener('click', () => {
  closeMenu();
});

document.addEventListener('click', (event) => {
  const isClickInside = mobileMenu.contains(event.target) || menuBtn.contains(event.target);
  if (!isClickInside) {
    closeMenu();
  }
});

function closeMenu() {
  mobileMenu.classList.remove('translate-x-0', 'open');
  mobileMenu.classList.add('-translate-x-full');
}

// Preloader
document.addEventListener("DOMContentLoaded", function() {
  const preloader = document.getElementById('preloader');
  const ball = document.getElementById('ball');
  let bounceCount = 0;

  ball.addEventListener('animationiteration', () => {
    bounceCount++;
    if (bounceCount === 4) {
      ball.classList.add('fade-out');
      setTimeout(() => {
        preloader.style.display = 'none';
        const content = document.getElementById('content');
        content.classList.add('visible');
      }, 600);
    }
  });
});




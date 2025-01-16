const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');

// Select all nav links inside the mobile menu
const navLinks = mobileMenu.querySelectorAll('a');

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

// Add event listeners to each nav link to close the menu on click
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
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


const backToTopBtn = document.getElementById('back-to-top');

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// Scroll to the top when the button is clicked
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



//cookies
const cookieBanner = document.getElementById('cookie-banner');
const acceptCookiesBtn = document.getElementById('accept-cookies');

// Check if the cookie consent has already been given
if (document.cookie.split('; ').find(row => row.startsWith('cookieConsent='))) {
  cookieBanner.style.display = 'none'; // Hide banner if consent is already given
}

// Handle the Accept button click
acceptCookiesBtn.addEventListener('click', () => {
  // Set a cookie with an expiry date
  document.cookie = "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 365; // 1 year
  cookieBanner.style.display = 'none'; // Hide banner
});

setTimeout(() => {
  if (!document.cookie.split('; ').find(row => row.startsWith('cookieConsent='))) {
    cookieBanner.style.display = 'block'; // Show banner after a delay
  }
}, 2000); // Delay in milliseconds (e.g., 2000ms = 2 seconds)



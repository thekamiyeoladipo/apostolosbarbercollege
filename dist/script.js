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

// Custom event tracking
document.addEventListener('DOMContentLoaded', function() {
    // Track program card clicks
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.addEventListener('click', function() {
            const programName = this.querySelector('h2').textContent;
            gtag('event', 'program_click', {
                'program_name': programName
            });
        });
    });

    // Track WhatsApp button clicks
    const whatsappButtons = document.querySelectorAll('a[href*="wa.link"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            gtag('event', 'whatsapp_click', {
                'button_location': this.closest('section')?.id || 'unknown'
            });
        });
    });

    // Track form submissions
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            gtag('event', 'form_submission', {
                'form_name': 'contact_form'
            });
        });
    }

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll >= 25 && maxScroll < 50) {
                gtag('event', 'scroll_depth', {
                    'depth': '25%'
                });
            } else if (maxScroll >= 50 && maxScroll < 75) {
                gtag('event', 'scroll_depth', {
                    'depth': '50%'
                });
            } else if (maxScroll >= 75) {
                gtag('event', 'scroll_depth', {
                    'depth': '75%'
                });
            }
        }
    });
});




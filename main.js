// 1. Smooth Scrolling Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 2. Active Navbar Link Highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');
window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector('.navbar a[href="#' + section.id + '"]');
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// 3. Animated Typing Effect
function typeEffect(element, text, speed = 80) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  element.textContent = '';
  typing();
}
const typingTarget = document.querySelector('.home-content h3');
if (typingTarget) {
  typeEffect(typingTarget, 'Full Stack Developer');
}

// 4. Contact Form Validation (merged and improved)
const contactForm = document.querySelector('.contact-form-container form') || document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const name = this.querySelector('input[name="name"]');
    const email = this.querySelector('input[name="email"]');
    const message = this.querySelector('textarea[name="message"]');
    let valid = true;

    // Reset border colors
    if (name) name.style.borderColor = '';
    if (email) email.style.borderColor = '';
    if (message) message.style.borderColor = '';

    if (!name || !name.value.trim()) { valid = false; if (name) name.style.borderColor = 'red'; }
    if (!email || !email.value.match(/^[^@]+@[^@]+\.[^@]+$/)) { valid = false; if (email) email.style.borderColor = 'red'; }
    if (message && !message.value.trim()) { valid = false; message.style.borderColor = 'red'; }

    if (!valid) {
      e.preventDefault();
      alert('Please fill in all fields correctly.');
    } else {
      alert("Thank you for reaching out! Your message has been sent.");
    }
  });
}

// Add light theme styles
const lightTheme = document.createElement('style');
lightTheme.textContent = `
  body.light-theme {
    background: #f5f5f5 !important;
    color: #222 !important;
  }
  body.light-theme .header,
  body.light-theme .about,
  body.light-theme .education-section,
  body.light-theme #skills,
  body.light-theme #projects,
  body.light-theme #contact {
    background: #fff !important;
    color: #222 !important;
  }
  body.light-theme .btn-box a,
  body.light-theme .download-btn,
  body.light-theme .see-more-btn,
  body.light-theme .project-buttons a {
    background: #222 !important;
    color: #fff !important;
    border-color: #222 !important;
  }
  body.light-theme .btn-box a:hover,
  body.light-theme .download-btn:hover,
  body.light-theme .see-more-btn:hover,
  body.light-theme .project-buttons a:hover {
    background: #3498db !important;
    color: #fff !important;
  }
`;
document.head.appendChild(lightTheme);

// 7. Scroll-to-Top Button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '80px';
scrollBtn.style.right = '30px';
scrollBtn.style.zIndex = '9999';
scrollBtn.style.fontSize = '2em';
scrollBtn.style.background = '#00abf0';
scrollBtn.style.color = '#fff';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 8. Reveal Animations on Scroll

const revealElements = document.querySelectorAll('.experience-item, .project-item, .skill-item-with-img, .certificate-section, .general-list');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition = 'opacity 0.6s, transform 0.6s';
    } else {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
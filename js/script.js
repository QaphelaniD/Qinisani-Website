// HEADER SCROLL EFFECT
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// SMOOTH SCROLL FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// MOBILE MENU TOGGLE - RESTORED
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

if (mobileToggle && navMenu) {
  console.log('Mobile toggle found'); // Debug - remove after testing
  
  mobileToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  
  // Close menu when clicking a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !mobileToggle.contains(e.target)) {
      mobileToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

// FORM SUBMISSION
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const original = btn.innerHTML;
    btn.innerHTML = 'Sending...';
    btn.disabled = true;
    
    // Simulate form submission (replace with actual Formspree)
    setTimeout(() => {
      btn.innerHTML = '✓ Message sent';
      btn.style.background = '#0b6e6e';
      
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
        btn.disabled = false;
        this.reset();
      }, 2000);
    }, 1500);
    
    // Uncomment this for actual Formspree
    // this.submit();
  });
}

// Optional: Close mobile menu on window resize (if resizing to desktop)
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    if (mobileToggle && navMenu) {
      mobileToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  }
});

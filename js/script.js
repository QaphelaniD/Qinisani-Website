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
      btn.innerHTML = '✓ Message sent!';
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

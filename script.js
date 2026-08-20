
  // Nav scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Hamburger menu
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // WhatsApp form submit
  function sendToWhatsApp() {
    const name = document.querySelectorAll('.contact-form-side input')[0].value.trim();
    const contact = document.querySelectorAll('.contact-form-side input')[1].value.trim();
    const message = document.querySelector('.contact-form-side textarea').value.trim();
    if (!name && !message) { alert('Please fill in at least your name and what you need.'); return; }
    const text = `Hello Conscience Media! 👋\n\nMy name is ${name || 'a potential client'}.\nContact: ${contact || 'not provided'}\n\nEnquiry:\n${message || '(no message)'}`;
    window.open(`https://wa.me/2348037111711?text=${encodeURIComponent(text)}`, '_blank');
  }

// Sticky Navbar on Scroll
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('sticky', window.scrollY > 50);
});

// Smooth Scroll (for nav links)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

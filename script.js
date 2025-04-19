// Sticky Navbar on Scroll
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  // Add or remove 'sticky' class based on scroll position
  navbar.classList.toggle('sticky', window.scrollY > 50);
});

// Smooth Scroll (for nav links)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      // Scroll to the target element smoothly
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hamburger Menu Toggle
document.getElementById('hamburger-icon')?.addEventListener('click', function() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});

// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    });
  
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));
  });
  
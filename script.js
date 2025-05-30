// to be added: theme toggling 


document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); 
    const targetId = this.getAttribute('href').substring(1); 
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  });
});

// Scroll to top button logic
document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})

// Image modal logic
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('img-modal');
  const modalImg = document.getElementById('img-modal-img');
  const captionText = document.getElementById('img-modal-caption');
  const closeBtn = document.getElementById('img-modal-close');

  document.querySelectorAll('.project img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
      captionText.textContent = this.alt;
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };

  // Close modal when clicking outside the image
  modal.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };
});

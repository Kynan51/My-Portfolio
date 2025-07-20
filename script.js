// Hamburger menu logic
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger-btn');
  const nav = document.getElementById('main-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    // Optional: Close nav when a link is clicked (on mobile)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }
});
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

// // Scroll to top button logic
// document.addEventListener('DOMContentLoaded', function () {
//   const scrollToTopBtn = document.getElementById('scroll-to-top');
  
//   window.addEventListener('scroll', function () {
//     if (window.scrollY > 300) {
//       scrollToTopBtn.style.display = 'block';
//     } else {
//       scrollToTopBtn.style.display = 'none';
//     }
//   });

//   scrollToTopBtn.addEventListener('click', function () {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   });
// })

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


// Function to download CV as PDF
  function downloadPDF() {
    const printable = document.createElement('iframe');
    printable.style.display = 'none';
    document.body.appendChild(printable);

    const doc = printable.contentWindow.document;
    const content = `
      <html>
      <head>
        <title>Kenan Kiplimo - CV</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 2rem; color: #000; }
          h1, h2, h3 { color: #111; }
          ul { padding-left: 20px; }
          li { margin-bottom: 8px; }
        </style>
      </head>
      <body>
        <h1>Kenan Kiplimo</h1>
        <p><strong>Phone:</strong> +254759840063<br>
        <strong>Email:</strong> kenankiplimo@gmail.com<br>
        <strong>LinkedIn:</strong> https://www.linkedin.com/in/kenan-kiplimo-7173622b6<br>
        <strong>GitHub:</strong> https://github.com/Kynan51</p>

        <h2>Professional Summary</h2>
        <p>Self-motivated and versatile Computer Science student with a strong foundation in web development, and data annotation. Known for clear communication and attention to detail. Experienced in collaborative and remote-first environments with a passion for continuous learning and problem-solving. Open to opportunities in tech, data, research, digital governance, and other innovation-driven roles.</p>

        <h2>Education</h2>
        <ul>
          <li>BSc. Computer Science — Mount Kenya University (2025 – Present)</li>
          <li>BSc. Computer Science — Moi University (Transferred, 2023 – 2024)</li>
          <li>Certificate in Full-Stack Software Development (Node.js) — Eldohub Academy (2024)</li>
          <li>Kapsabet Boys High School (2019 – 2022)</li>
        </ul>

        <h2>Professional Experience</h2>
        <ul>
          <li>Data Annotator — Fuzu Remote (Remote, 2025 – Present)</li>
          <li>Data Annotator — CVAT.ai (Remote, 2024 – Present)</li>
        </ul>

        <h2>Projects</h2>
        <ul>
          <li>Family Tree Maker – A visualization tool for family structures.</li>
          <li>BejeweledByJoy – Jewelry e-commerce platform.</li>
          <li>Land Marketplace – Online platform for land sales.</li>
        </ul>

        <h2>Skills</h2>
        <ul>
          <li>Languages & Tools: HTML, CSS, JavaScript, Node.js, PHP, Express.js, CVAT, SQL, Git</li>
          <li>Soft Skills: Critical Thinking, Communication, Collaboration, Adaptability, Accuracy</li>
        </ul>

        <h2>Activities</h2>
        <ul>
          <li>Web Developer Lead — GDG Moi University (2024)</li>
          <li>Member — GDG, ICT Club, Avalanche Crypto Connect (MKU)</li>
          <li>Interests — AI/ML and Data Science</li>
        </ul>
      </body>
      </html>
    `;

    doc.open();
    doc.write(content);
    doc.close();

    printable.contentWindow.focus();
    printable.contentWindow.print();

    setTimeout(() => {
      document.body.removeChild(printable);
    }, 1000);
  }

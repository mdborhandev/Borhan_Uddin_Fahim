// ====== Mobile Menu ======
function toggleMenu() {
  document.getElementById('header').classList.toggle('active');
  document.querySelector('.header-toggle').classList.toggle('active');
}
function closeMenu() {
  document.getElementById('header').classList.remove('active');
  document.querySelector('.header-toggle').classList.remove('active');
}

// ====== AOS Init ======
AOS.init({
  duration: 600,
  easing: 'ease-out',
  once: true
});

// ====== Typewriter Effect ======
function typeText(selector, items) {
  const el = document.querySelector(selector);
  if (!el) return;
  let i = 0;
  let currentText = '';
  let isDeleting = false;
  function type() {
    const fullText = items[i];
    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }
    el.textContent = currentText;
    let speed = isDeleting ? 30 : 60;
    if (!isDeleting && currentText === fullText) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && currentText === '') {
      isDeleting = false;
      i = (i + 1) % items.length;
      speed = 300;
    }
    setTimeout(type, speed);
  }
  type();
}
typeText('.typed-tagline', ['Software Engineer', 'ASP.NET Core Developer', 'Backend Developer']);
typeText('.typed-sub', ['Building enterprise solutions with clean architecture', 'Backend Developer | ASP.NET Core Specialist', 'Software Engineer | SaaS Architect']);

// ====== Active Nav on Scroll ======
const navSections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.floating-nav a');
window.addEventListener('scroll', () => {
  let current = '';
  navSections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ====== EmailJS Contact Form ======
(function() { emailjs.init("UfmpMSg2KlcJjyIX0"); })();
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.btn-primary');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  emailjs.sendForm('service_vxkwckv', 'template_txkht7q', this)
    .then(function() {
      alert('Message sent successfully!');
      document.querySelector('.contact-form').reset();
      btn.textContent = 'Send Message';
      btn.disabled = false;
    }, function() {
      alert('Failed to send message. Please try again.');
      btn.textContent = 'Send Message';
      btn.disabled = false;
    });
});

// ====== 3D Card Tilt ======
const tiltItems = document.querySelectorAll('.project-card, .resume-card, .stat-item');
tiltItems.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ====== Theme Toggle ======
const themeToggle = document.getElementById('themeToggle');
const preferredTheme = localStorage.getItem('site-theme');
if (preferredTheme === 'light') {
  document.body.classList.add('light-theme');
  themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
  }
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      if (document.body.classList.contains('light-theme')) {
        themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
        localStorage.setItem('site-theme', 'light');
      } else {
        themeToggle.innerHTML = '<i class="bi bi-moon-stars"></i>';
        localStorage.setItem('site-theme', 'dark');
      }
    document.body.classList.add('theme-transitioning');
    setTimeout(() => document.body.classList.remove('theme-transitioning'), 500);
  });
}

// ====== Project Filter ======
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');
function filterProjects() {
  const search = (document.getElementById('projectSearch')?.value || '').toLowerCase();
  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
  projectItems.forEach(item => {
    const matchCategory = activeFilter === 'all' || item.dataset.category === activeFilter;
    const matchSearch = !search || item.textContent.toLowerCase().includes(search);
    item.style.display = matchCategory && matchSearch ? '' : 'none';
  });
}
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    filterProjects();
  });
});

// ====== Back to Top ======
const backToTop = document.getElementById('backToTop');
const progressCircle = document.querySelector('.back-to-top-progress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 144.5;
  if (progressCircle) progressCircle.style.strokeDashoffset = 144.5 - progress;
  if (scrollTop > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ====== Scroll Progress ======
const scrollProgress = document.querySelector('.scroll-progress');
if (scrollProgress) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = `${Math.min(progress, 100)}%`;
  });
}

// ====== Cursor Glow ======
const cursorGlow = document.querySelector('.cursor-glow');
if (cursorGlow) {
  window.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });

  // Scale up cursor glow when hovering interactive elements
  document.addEventListener('mouseenter', (e) => {
    const target = e.target;
    if (target && target.closest && target.closest('a, button, .btn, .service-card, .project-card, .resume-card, .cert-card, .social-icon, .nav-icon, .skill-tag')) {
      cursorGlow.classList.add('cursor-hovering');
    }
  }, true);

  document.addEventListener('mouseleave', (e) => {
    const target = e.target;
    if (target && target.closest && target.closest('a, button, .btn, .service-card, .project-card, .resume-card, .cert-card, .social-icon, .nav-icon, .skill-tag')) {
      cursorGlow.classList.remove('cursor-hovering');
    }
  }, true);
}

// ====== Particles Canvas ======
const particlesCanvas = document.getElementById('particles-canvas');
if (particlesCanvas) {
  const ctx = particlesCanvas.getContext('2d');
  let particles = [];
  const count = 180;
  let mouse = { x: -9999, y: -9999 };
  document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  document.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });
  function resizeCanvas() {
    particlesCanvas.width = window.innerWidth;
    particlesCanvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * particlesCanvas.width;
      this.y = Math.random() * particlesCanvas.height;
      this.size = Math.random() * 1.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
    }
    update() {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120;
        this.x += dx / dist * force * 6;
        this.y += dy / dist * force * 6;
      }
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < -50 || this.x > particlesCanvas.width + 50 || this.y < -50 || this.y > particlesCanvas.height + 50) { this.reset(); }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
      ctx.fill();
    }
  }
  for (let i = 0; i < count; i++) particles.push(new Particle());
  function animateParticles() {
    ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

// ====== GitHub Activity ======
async function loadGitHubActivity() {
  const feed = document.getElementById('github-feed');
  if (!feed) return;
  try {
    const res = await fetch('https://api.github.com/users/mdborhandev/events?per_page=5');
    if (!res.ok) throw new Error('API Error');
    const events = await res.json();
    if (!events || events.length === 0) {
      feed.innerHTML = '<div class="github-item"><i class="bi bi-github"></i><span>Check my GitHub for recent activity</span><small><a href="https://github.com/mdborhandev" target="_blank" style="color:var(--accent)">github.com/mdborhandev</a></small></div>';
      return;
    }
    feed.innerHTML = events.map(e => {
      const icon = e.type === 'PushEvent' ? 'bi-arrow-up-circle' : e.type === 'CreateEvent' ? 'bi-plus-circle' : e.type === 'IssuesEvent' ? 'bi-exclamation-circle' : 'bi-star';
      const desc = e.type === 'PushEvent' ? `Pushed to ${e.repo.name}` : e.type === 'CreateEvent' ? `Created ${e.repo.name}` : e.type === 'IssuesEvent' ? `Opened issue in ${e.repo.name}` : `Activity in ${e.repo.name}`;
      return `<div class="github-item"><i class="bi ${icon}"></i><span>${desc}</span><small>${new Date(e.created_at).toLocaleDateString()}</small></div>`;
    }).join('');
  } catch {
    feed.innerHTML = '<div class="github-item"><i class="bi bi-github"></i><span>View my projects on GitHub</span><small><a href="https://github.com/mdborhandev" target="_blank" style="color:var(--accent)">github.com/mdborhandev</a></small></div>';
  }
}
loadGitHubActivity();

// ====== Testimonials Carousel ======
let testimonialIndex = 0;
function showTestimonial(i) {
  const items = document.querySelectorAll('.testimonial-item');
  const dots = document.querySelectorAll('.testimonial-dot');
  if (!items.length) return;
  testimonialIndex = (i + items.length) % items.length;
  items.forEach((item, idx) => item.classList.toggle('active', idx === testimonialIndex));
  dots.forEach((dot, idx) => dot.classList.toggle('active', idx === testimonialIndex));
}
function nextTestimonial() { showTestimonial(testimonialIndex + 1); }
function prevTestimonial() { showTestimonial(testimonialIndex - 1); }
document.addEventListener('DOMContentLoaded', () => showTestimonial(0));

// ====== Skeleton Loading ======
window.addEventListener('load', () => {
  document.querySelectorAll('.skeleton').forEach(el => el.classList.remove('skeleton'));
});

// ====== Chat Widget ======
function toggleChat() {
  document.getElementById('chatWidget').classList.toggle('open');
  document.getElementById('chatInput').focus();
}
function askSuggestion(q) {
  document.getElementById('chatInput').value = q;
  sendChat();
}
function getReply(msg) {
  const lower = msg.toLowerCase();
  if (lower.includes('skill') || lower.includes('tech') || lower.includes('know') || lower.includes('stack')) {
    return 'Borhan specializes in ASP.NET Core, C#, Web API, EF Core, PostgreSQL, SQL Server, Bootstrap, JavaScript, and Git. He also works with Docker, REST APIs, and cloud deployment.';
  }
  if (lower.includes('experience') || lower.includes('work') || lower.includes('job') || lower.includes('career') || lower.includes('professional')) {
    return 'He has 2+ years of professional experience. He works as a Junior Programmer at Genuine Technology & Research Ltd. and also serves as a Guest Trainer (Web Development) at A K Khan UCEP TVET Institute.';
  }
  if (lower.includes('project')) {
    return 'He has built 6+ projects: ERP System, Atrai (Accounting Software), Halda (HRM), OKR (Goal Management), SmartSLead (Lead Management), and Gym Management System. Check the Projects section for details!';
  }
  if (lower.includes('number') || lower.includes('phone') || lower.includes('call') || lower.includes('mobile') || lower.includes('whatsapp') || lower.includes('cell')) {
    return 'For professional inquiries, please reach out via email at mdborhan.dev@gmail.com or connect on LinkedIn. His phone number is available upon request through those channels.';
  }
  if (lower.includes('contact') || lower.includes('email') || lower.includes('reach') || lower.includes('hire') || lower.includes('message')) {
    return 'You can email him at mdborhan.dev@gmail.com, connect on LinkedIn (linkedin.com/in/borhan-uddin-fahim), or follow on GitHub (github.com/mdborhandev).';
  }
  if (lower.includes('education') || lower.includes('study') || lower.includes('diploma') || lower.includes('degree') || lower.includes('academic') || lower.includes('certification')) {
    return 'He holds a Diploma in Computer Science from A K Khan UCEP Polytechnic Institute with a GPA of 3.82/4.0. He is also a Microsoft Certified: Azure AI Fundamentals (AI-900).';
  }
  if (lower.includes('service') || lower.includes('offer') || lower.includes('build') || lower.includes('develop')) {
    return 'He offers Website Building, SaaS Development, and Custom Software Development. From landing pages to enterprise SaaS platforms — built with ASP.NET Core, modern frontends, and PostgreSQL.';
  }
  if (lower.includes('certificate') || lower.includes('cert') || lower.includes('achieve') || lower.includes('award')) {
    return 'Borhan holds several certifications: Microsoft Certified Azure AI Fundamentals (AI-900) and multiple programming certificates. Check the Certificates section!';
  }
  if (lower.includes('blog') || lower.includes('write') || lower.includes('article') || lower.includes('post')) {
    return 'He writes about programming, AI, and tech trends on his blog. Check the Blog section for his latest articles!';
  }
  if (lower.includes('asp') || lower.includes('c#') || lower.includes('csharp') || lower.includes('.net') || lower.includes('backend')) {
    return 'Borhan is a backend-focused engineer with deep expertise in ASP.NET Core, C#, Web API, Entity Framework Core, and RESTful service design.';
  }
  if (lower.includes('database') || lower.includes('sql') || lower.includes('postgres') || lower.includes('data')) {
    return 'He works with PostgreSQL, SQL Server, and EF Core for database design and management. He builds efficient, normalized database schemas for enterprise applications.';
  }
  if (lower.includes('name') || lower.includes('who is') || lower.includes('tell me about borhan') || lower.includes('introduce')) {
    return 'His full name is Mohammed Borhan Uddin Fahim. He is a backend-focused Software Engineer with expertise in ASP.NET Core, C#, and PostgreSQL. He works at Genuine Technology & Research Ltd. and also serves as a Guest Trainer at A K Khan UCEP TVET Institute.';
  }
  if (lower === 'hello' || lower === 'hi' || lower === 'hey' || lower === 'assalamu alaikum' || lower.startsWith('hello ') || lower.startsWith('hi ') || lower.startsWith('hey ') || lower === 'assalamualaikum' || lower.startsWith('assalamu')) {
    return 'Hello! 👋 Thanks for reaching out. Feel free to ask about Borhan\'s skills, experience, projects, or anything else!';
  }
  return 'Great question! Borhan is a backend-focused Software Engineer skilled in ASP.NET Core, C#, PostgreSQL, and building enterprise SaaS applications. For more specific info, try asking about his skills, experience, projects, or services!';
}
function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  const body = document.getElementById('chatBody');
  document.getElementById('chatSuggestions')?.remove();
  body.innerHTML += `<div class="chat-msg user">${msg}</div>`;
  input.value = '';
  setTimeout(() => {
    const reply = getReply(msg);
    body.innerHTML += `<div class="chat-msg bot">${reply}</div>`;
    body.scrollTop = body.scrollHeight;
  }, 300);
  body.scrollTop = body.scrollHeight;
}

// ====== Page Transition ======
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.4s ease';
document.addEventListener('DOMContentLoaded', () => { requestAnimationFrame(() => { document.body.style.opacity = '1'; }); });
document.querySelectorAll('a:not([target="_blank"]):not([href^="#"]):not([href^="http"])').forEach(a => {
  a.addEventListener('click', e => {
    const h = a.getAttribute('href');
    if (h && !h.startsWith('#') && !h.startsWith('http') && !h.startsWith('javascript') && !h.startsWith('mailto')) {
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => { window.location.href = h; }, 300);
    }
  });
});

// ====== GLightbox Init ======
if (typeof GLightbox !== 'undefined') {
  GLightbox({ selector: '.glightbox' });
}

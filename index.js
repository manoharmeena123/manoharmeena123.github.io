// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });

  // Typing animation
  let i = 0;
  let txt = "Full Stack Web Developer";
  let speed = 100;
  let isDeleting = false;

  function typeWriter() {
    if (isDeleting) {
      if (i > 0) {
        document.getElementById("demo1").innerHTML = txt.substring(0, i - 1);
        i--;
        setTimeout(typeWriter, speed / 2);
      } else {
        isDeleting = false;
        setTimeout(typeWriter, 1000);
      }
    } else {
      if (i < txt.length) {
        document.getElementById("demo1").innerHTML = txt.substring(0, i + 1);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(() => {
          isDeleting = true;
          setTimeout(typeWriter, 1000);
        }, 2000);
      }
    }
  }

  typeWriter();

  // Navigation scroll effect
  const navbar = document.getElementById("nav-menu");
  window.addEventListener("scroll", function () {
    const currentTheme = body.getAttribute('data-theme');
    if (window.scrollY > 100) {
      if (currentTheme === 'light') {
        navbar.style.background = "rgba(248, 250, 252, 0.98)";
        navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
      } else {
        navbar.style.background = "rgba(15, 23, 42, 0.98)";
        navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
      }
    } else {
      if (currentTheme === 'light') {
        navbar.style.background = "rgba(248, 250, 252, 0.95)";
        navbar.style.boxShadow = "none";
      } else {
        navbar.style.background = "rgba(15, 23, 42, 0.95)";
        navbar.style.boxShadow = "none";
      }
    }
  });

  // GitHub Calendar
  GitHubCalendar(".calendar", "manoharmeena123", {
    responsive: true,
    global_stats: false,
    tooltips: true,
    theme: "dark"
  });

  // Resume button functionality
  const resumeButtons = document.querySelectorAll('[id^="resume-button"]');
  resumeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const link = document.createElement('a');
      link.href = "./resume/Manohar_Meena_Resume.pdf";
      link.download = "Manohar_Meena_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });

  // Mobile menu functionality
  const hamburger = document.querySelector('.hamburger');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const closeSidebar = document.querySelector('.close-sidebar');

  function toggleMenu() {
    mobileSidebar.classList.toggle('open');
    document.body.style.overflow = mobileSidebar.classList.contains('open') ? 'hidden' : 'auto';
  }

  function closeSidebarMenu() {
    mobileSidebar.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  if (closeSidebar) {
    closeSidebar.addEventListener('click', closeSidebarMenu);
  }

  // Close sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileSidebar.contains(e.target) && !hamburger.contains(e.target)) {
      closeSidebarMenu();
    }
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Back to top button
  const backToTopButton = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Theme toggle functionality
  const themeToggle = document.getElementById('mode');
  const body = document.body;
  
  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  body.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Update navbar background for smooth transition
    const navbar = document.getElementById('nav-menu');
    if (navbar) {
      if (newTheme === 'light') {
        navbar.style.background = 'rgba(248, 250, 252, 0.95)';
        navbar.style.borderBottom = '1px solid rgba(203, 213, 225, 0.3)';
      } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.borderBottom = '1px solid rgba(71, 85, 105, 0.3)';
      }
    }
  }

  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
      if (theme === 'light') {
        icon.className = 'fas fa-sun';
        icon.style.color = '#f59e0b'; // Orange color for sun
      } else {
        icon.className = 'fas fa-moon';
        icon.style.color = '#6366f1'; // Blue color for moon
      }
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  animatedElements.forEach(el => observer.observe(el));

  // Skills animation on scroll
  const skillCards = document.querySelectorAll('.skill-card');
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1)';
        }, index * 100);
      }
    });
  }, { threshold: 0.5 });

  skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.8)';
    card.style.transition = 'all 0.3s ease';
    skillsObserver.observe(card);
  });

  // Project cards hover effect
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Timeline animation
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, index * 200);
      }
    });
  }, { threshold: 0.3 });

  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
  });

  // Stats counter animation
  const statNumbers = document.querySelectorAll('.stat-number');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.textContent);
        animateCounter(entry.target, 0, target, 2000);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => statsObserver.observe(stat));

  function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const current = Math.floor(start + (end - start) * progress);
      element.textContent = current + '+';
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }
    
    requestAnimationFrame(updateCounter);
  }

  // Parallax effect for hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-section::before');
    if (parallax) {
      const speed = scrolled * 0.5;
      parallax.style.transform = `translateY(${speed}px)`;
    }
  });

  // Contact form validation (if you add a contact form later)
  const contactMethods = document.querySelectorAll('.contact-method');
  contactMethods.forEach(method => {
    method.addEventListener('click', function(e) {
      // Add click effect
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });

  // Loading animation for images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
  });

  // Keyboard navigation support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidebarMenu();
    }
    
    if (e.key === 'Home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    if (e.key === 'End') {
      e.preventDefault();
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  });

  // Performance optimization: Lazy loading for images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // Add some fun interactive elements
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', function() {
      this.style.transform = 'scale(1.1) rotate(5deg)';
      setTimeout(() => {
        this.style.transform = 'scale(1) rotate(0deg)';
      }, 200);
    });
  }

  // Console welcome message
  console.log('%c👋 Welcome to Manohar Meena\'s Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
  console.log('%c🚀 Built with modern web technologies', 'color: #10b981; font-size: 14px;');
  console.log('%c💻 Check out the source code on GitHub!', 'color: #f59e0b; font-size: 14px;');
});

// Global functions for HTML onclick attributes
function toggleMenu() {
  const mobileSidebar = document.getElementById('mobileSidebar');
  mobileSidebar.classList.toggle('open');
  document.body.style.overflow = mobileSidebar.classList.contains('open') ? 'hidden' : 'auto';
}

function closeSidebar() {
  const mobileSidebar = document.getElementById('mobileSidebar');
  mobileSidebar.classList.remove('open');
  document.body.style.overflow = 'auto';
}

// Image Debugging
document.addEventListener('DOMContentLoaded', function() {
  // Debug logo image
  const logoImg = document.querySelector('.logo-img');
  if (logoImg) {
    console.log('Logo image src:', logoImg.src);
    console.log('Logo image complete:', logoImg.complete);
    console.log('Logo image naturalWidth:', logoImg.naturalWidth);
    
    logoImg.addEventListener('load', function() {
      console.log('Logo image loaded successfully');
    });
    
    logoImg.addEventListener('error', function() {
      console.error('Logo image failed to load:', logoImg.src);
    });
  }
  
  // Debug hero image
  const heroImg = document.querySelector('.image-container img');
  if (heroImg) {
    console.log('Hero image src:', heroImg.src);
    console.log('Hero image complete:', heroImg.complete);
    console.log('Hero image naturalWidth:', heroImg.naturalWidth);
    
    heroImg.addEventListener('load', function() {
      console.log('Hero image loaded successfully');
    });
    
    heroImg.addEventListener('error', function() {
      console.error('Hero image failed to load:', heroImg.src);
    });
  }
  
  // Debug footer image
  const footerImg = document.querySelector('.footer-logo img');
  if (footerImg) {
    console.log('Footer image src:', footerImg.src);
    console.log('Footer image complete:', footerImg.complete);
    console.log('Footer image naturalWidth:', footerImg.naturalWidth);
    
    footerImg.addEventListener('load', function() {
      console.log('Footer image loaded successfully');
    });
    
    footerImg.addEventListener('error', function() {
      console.error('Footer image failed to load:', footerImg.src);
    });
  }
});

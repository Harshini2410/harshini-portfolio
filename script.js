// ========================================
// Navigation and Scroll Behavior
// ========================================

const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const scrollTopBtn = document.getElementById('scrollTop');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Show/hide scroll to top button
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Intersection Observer for Fade-in Animations
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: Stop observing after animation triggers
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));

// ========================================
// Active Navigation Link Highlighting
// ========================================

const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Add active class styling via CSS
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--accent-teal);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ========================================
// Typing Effect for Hero Section (Optional Enhancement)
// ========================================

// Uncomment to enable typing effect on hero title
/*
const heroTitle = document.querySelector('.hero-title');
const titles = ['Full-Stack Developer.', 'Software Engineer.', 'Problem Solver.'];
let currentTitleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentTitle = titles[currentTitleIndex];
    
    if (isDeleting) {
        heroTitle.textContent = `I'm a ${currentTitle.substring(0, currentCharIndex - 1)}.`;
        currentCharIndex--;
    } else {
        heroTitle.textContent = `I'm a ${currentTitle.substring(0, currentCharIndex + 1)}.`;
        currentCharIndex++;
    }

    if (!isDeleting && currentCharIndex === currentTitle.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
    }

    setTimeout(typeWriter, isDeleting ? 50 : 100);
}

// Start typing effect after a delay
setTimeout(() => {
    typeWriter();
}, 2000);
*/

// ========================================
// Smooth Page Load Animation
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// Project Card Interactive Effects
// ========================================

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ========================================
// Parallax Effect for Hero Section (Optional)
// ========================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection && scrolled < window.innerHeight) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========================================
// Certificate Card Animation on Hover
// ========================================

const certCards = document.querySelectorAll('.cert-card');
certCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) rotate(1deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// ========================================
// Skill Tag Hover Effect Enhancement
// ========================================

const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-2px)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// ========================================
// Contact Button Click Tracking (Optional - for analytics)
// ========================================

const contactButtons = document.querySelectorAll('.contact-btn, .footer-link');
contactButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Add analytics tracking here if needed
        console.log('Contact clicked:', this.href || this.textContent);
    });
});

// ========================================
// Console Message
// ========================================

console.log('%c👋 Welcome to my portfolio!', 'color: #64ffda; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with passion using HTML, CSS, and JavaScript', 'color: #8892b0; font-size: 12px;');





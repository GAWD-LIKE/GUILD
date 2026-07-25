document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.company-card, .project-card, .capability');

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
        console.log('Form submitted:', data);
    });
}

document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        createParticle(e.clientX, e.clientY);
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    const dx = (Math.random() * 100 - 50).toFixed(1);
    const dy = (Math.random() * 100 - 50).toFixed(1);
    const id = 'p' + Date.now() + Math.random().toString(36).slice(2, 6);

    particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: rgba(0, 255, 136, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: ${id} 1s ease-out forwards;
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes ${id} {
            0% { opacity: 1; transform: translate(0, 0) scale(1); }
            100% { opacity: 0; transform: translate(${dx}px, ${dy}px) scale(0); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
        style.remove();
    }, 1000);
}

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const activeLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    activeLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

console.log('%c GAWDLIKE Corp. ', 'background: linear-gradient(135deg, #00ff88, #0099ff); color: #0a0e27; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Jellyfish Labs Research Group ', 'background: #00d4ff; color: #0a0e27; font-size: 16px; font-weight: bold; padding: 8px;');

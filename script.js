// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Modal para contacto rápido
const addProjectBtn = document.getElementById('addProjectBtn');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');
const quickContactForm = document.getElementById('quickContactForm');

addProjectBtn.addEventListener('click', () => {
    contactModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

// Manejo de formularios
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    e.target.reset();
});

quickContactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu interés! Me pondré en contacto contigo para discutir tu proyecto.');
    quickContactForm.reset();
    contactModal.style.display = 'none';
});

// Menú móvil
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});
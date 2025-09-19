// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    // Simple validation
    if(name && email && message) {
        formMessage.textContent = Thank you, ${name}! Your message has been sent.;
        contactForm.reset();
    } else {
        formMessage.textContent = 'Please fill in all fields.';
    }
});
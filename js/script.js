import { publicKey, serviceId, templateId } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // Flip cards
    const cards = document.querySelectorAll('.feature-card');
    console.log('found', cards.length, 'feature cards');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // Initialize EmailJS
    try {
        emailjs.init(publicKey);
        console.log('emailjs initialized');
    } catch (e) {
        console.error('Error initializing emailjs:', e);
    }

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            emailjs.sendForm(serviceId, templateId, this)
                .then(function() {
                    alert('Message sent successfully!');
                    contactForm.reset();
                }, function(error) {
                    alert('Error sending message: ' + JSON.stringify(error));
                });
        });
    }
});


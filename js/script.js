import { publicKey, serviceId, templateId } from './config.js';

// Flip cards (with debug)
const cards = document.querySelectorAll('.feature-card');
console.log('found', cards.length, 'feature cards');
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});

// Initialize EmailJS
(function() {
    try {
        emailjs.init(publicKey);
        console.log('emailjs initialized');
    } catch (e) {
        console.error('Error initializing emailjs:', e);
    }
})();

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm(serviceId, templateId, this)
        .then(function() {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Error sending message: ' + JSON.stringify(error));
        });
});


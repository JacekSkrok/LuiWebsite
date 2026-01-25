import { publicKey, serviceId, templateId } from './config.js';

// Initialize EmailJS
(function() {
    emailjs.init(publicKey);
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Send email
    emailjs.sendForm(serviceId, templateId, this)
        .then(function() {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Error sending message: ' + JSON.stringify(error));
        });
});
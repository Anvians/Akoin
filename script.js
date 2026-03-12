// 1. Sticky Navigation Scroll Effect
const nav = document.querySelector('.sticky-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.padding = '0.5rem 5%';
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.padding = '1rem 5%';
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// 2. Smooth Scrolling for Navigation Links
// (Note: CSS 'scroll-behavior: smooth' handles the animation, 
// but this JS ensures it works even in older browsers.)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Simple Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic feedback to the user
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Thank you for registering your interest! We will be in touch soon.');
            btn.innerText = originalText;
            btn.disabled = false;
            contactForm.reset();
        }, 1500);
    });
}
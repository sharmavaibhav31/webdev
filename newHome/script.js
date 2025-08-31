// Set the event date (10 seconds from now)
const eventDate = new Date();
eventDate.setSeconds(eventDate.getSeconds() + 10);

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate.getTime() - now;

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Ensure seconds doesn't go below 0
    const displaySeconds = Math.max(0, seconds);
    document.getElementById('seconds').textContent = displaySeconds.toString().padStart(2, '0');

    // Add pulse effect when seconds change
    const secondsElement = document.getElementById('seconds');
    secondsElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        secondsElement.style.transform = 'scale(1)';
    }, 200);

    // If countdown reaches 0, you can add additional logic here
    if (displaySeconds <= 0) {
        console.log('Countdown finished!');
    }
}

// Start Button Functionality
const startButton = document.getElementById('startButton');
const startButtonContainer = document.getElementById('start-button-container');
const introOverlay = document.getElementById('intro-overlay');

startButton.addEventListener('click', () => {
    // Hide start button
    startButtonContainer.classList.add('hidden');
    
    // Show and start intro animation
    introOverlay.classList.remove('hidden');
    introOverlay.classList.add('animate');
    
    // Show main content after animation
    setTimeout(() => {
        const mainContent = document.querySelector('.main-content');
        mainContent.classList.remove('hidden');
    }, 4000);

    // Start countdown after animation starts
    setTimeout(() => {
        updateCountdown(); // Initial call
        setInterval(updateCountdown, 1000);
    }, 1000);
});

// Matrix Code Rain
function generateMatrixCode() {
    const matrixColumns = document.querySelectorAll('.matrix-column');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    
    matrixColumns.forEach(column => {
        let code = '';
        const columnHeight = Math.floor(Math.random() * 20) + 10; // Random height
        
        for (let i = 0; i < columnHeight; i++) {
            const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
            code += randomChar + '<br>';
        }
        
        column.innerHTML = code;
    });
}

// Generate matrix code on load and periodically
generateMatrixCode();
setInterval(generateMatrixCode, 3000);

// Modal Functionality
const modal = document.getElementById('registrationModal');
const registerBtn = document.getElementById('registerBtn');
const closeBtn = document.querySelector('.close-btn');

// Open modal
registerBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Form submission
const registrationForm = document.querySelector('.registration-form');
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(registrationForm);
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;
    
    // Simulate form submission
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert(`Thank you for registering, ${name}! We'll send you a confirmation email at ${email}.`);
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        registrationForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Glitch Text Effect Enhancement
function addGlitchEffect() {
    const glitchTexts = document.querySelectorAll('.glitch-text');
    
    glitchTexts.forEach(text => {
        text.setAttribute('data-text', text.textContent);
    });
}

// Particle Animation Enhancement
function createParticle() {
    const particlesContainer = document.querySelector('.particles-container');
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    
    particlesContainer.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Create particles periodically
setInterval(createParticle, 2000);

// Smooth scrolling for anchor links
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
    });
});

// Parallax effect for background elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.particles-container, .matrix-rain');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Escape key to close modal
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Enter key to submit form when modal is open
    if (e.key === 'Enter' && modal.style.display === 'block') {
        const submitBtn = document.querySelector('.submit-btn');
        if (submitBtn && !submitBtn.disabled) {
            submitBtn.click();
        }
    }
});

// Add loading animation for images and fonts
window.addEventListener('load', () => {
    // Remove loading state
    document.body.classList.add('loaded');
    
    // Initialize glitch effects
    addGlitchEffect();
    
    // Add hover effects to detail cards
    const detailCards = document.querySelectorAll('.detail-card');
    detailCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.particles-container, .matrix-rain');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 16)); // ~60fps

// Add intersection observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.detail-card, .section-title');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add sound effects (optional - commented out for accessibility)
/*
function playHoverSound() {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
    audio.volume = 0.1;
    audio.play().catch(() => {}); // Ignore errors if audio fails
}

// Add hover sound to interactive elements
document.querySelectorAll('.register-btn, .detail-card').forEach(el => {
    el.addEventListener('mouseenter', playHoverSound);
});
*/

// Add accessibility features
document.addEventListener('DOMContentLoaded', () => {
    // Add ARIA labels
    registerBtn.setAttribute('aria-label', 'Register for Hack n Seek event');
    closeBtn.setAttribute('aria-label', 'Close registration modal');
    
    // Add focus management
    registerBtn.addEventListener('click', () => {
        setTimeout(() => {
            document.getElementById('name').focus();
        }, 100);
    });
    
    // Add keyboard navigation for modal
    const modalInputs = modal.querySelectorAll('input, select, button');
    modalInputs.forEach((input, index) => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey && index === 0) {
                    e.preventDefault();
                    modalInputs[modalInputs.length - 1].focus();
                } else if (!e.shiftKey && index === modalInputs.length - 1) {
                    e.preventDefault();
                    modalInputs[0].focus();
                }
            }
        });
    });
});

// Add error handling for countdown
function safeUpdateCountdown() {
    try {
        updateCountdown();
    } catch (error) {
        console.warn('Countdown update failed:', error);
        // Fallback: show static values
        document.getElementById('seconds').textContent = '30';
    }
}

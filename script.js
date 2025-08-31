// Global variables
let animationActive = false;
let stars = [];
let animationTimeline;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    createStars();
    startCountdown();
    setupEventListeners();
});

// Initialize page elements
function initializePage() {
    // Hide loading screen after a short delay
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 2000);
}

// Create animated stars background
function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random animation delay
        const delay = Math.random() * 3;
        
        star.style.left = x + '%';
        star.style.top = y + '%';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = delay + 's';
        
        starsContainer.appendChild(star);
        stars.push(star);
    }
}

// Countdown timer
function startCountdown() {
    // Set event date (30 days from now)
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 30);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate.getTime() - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Setup event listeners
function setupEventListeners() {
    const clickMeButton = document.getElementById('click-me');
    const enterVoidButton = document.getElementById('enter-void');
    
    clickMeButton.addEventListener('click', startImmersiveAnimation);
    enterVoidButton.addEventListener('click', () => {
        alert('Welcome to Hack \'n Seek! The void awaits...');
    });
    
    // Add cursor effect
    document.addEventListener('mousemove', (e) => {
        if (!animationActive) {
            createCursorTrail(e.clientX, e.clientY);
        }
    });
}

// Create cursor trail effect
function createCursorTrail(x, y) {
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    trail.style.width = '4px';
    trail.style.height = '4px';
    trail.style.background = '#00ffff';
    trail.style.borderRadius = '50%';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '1000';
    trail.style.boxShadow = '0 0 10px #00ffff';
    
    document.body.appendChild(trail);
    
    // Animate trail
    gsap.to(trail, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
            document.body.removeChild(trail);
        }
    });
}

// Start the immersive 10-second glitch animation
function startImmersiveAnimation() {
    if (animationActive) return;
    
    animationActive = true;
    const mainContainer = document.getElementById('main-container');
    mainContainer.classList.add('animation-active');
    
    // Create GSAP timeline for the entire animation
    animationTimeline = gsap.timeline({
        onComplete: () => {
            setTimeout(() => {
                resetAnimation();
            }, 2000);
        }
    });
    
    // Phase 1: Digital corruption initiation (0-1.5 seconds)
    animationTimeline
        .to('#animation-container', {
            opacity: 1,
            duration: 0.3,
            ease: 'power3.inOut'
        })
        .to('.click-me-button', {
            opacity: 0,
            scale: 0,
            duration: 0.2,
            ease: 'power3.in'
        }, 0)
        .to('#hero-section', {
            opacity: 0,
            scale: 0.5,
            duration: 0.5,
            ease: 'power3.inOut'
        }, 0.2);
    
    // Phase 2: Glitch matrix expansion (1.5-4 seconds)
    animationTimeline
        .to('#wormhole', {
            width: '100vw',
            height: '100vh',
            duration: 2.5,
            ease: 'power3.inOut'
        }, 0.5)
        .to(stars, {
            x: (i) => (Math.random() - 0.5) * 3000,
            y: (i) => (Math.random() - 0.5) * 3000,
            opacity: 0,
            duration: 2,
            ease: 'power3.in',
            stagger: 0.005
        }, 0.5);
    
    // Phase 3: Digital glitch tunnel (4-6.5 seconds)
    animationTimeline
        .to('#light-tunnel', {
            opacity: 1,
            duration: 0.5,
            ease: 'power3.inOut'
        }, 3)
        .to('#light-tunnel', {
            backgroundPosition: '0 -3000px',
            duration: 2.5,
            ease: 'none'
        }, 3.5);
    
    // Phase 4: Maximum glitch corruption (6.5-8.5 seconds)
    animationTimeline
        .to('#main-container', {
            background: 'radial-gradient(ellipse at center, #ff0080 0%, #8000ff 50%, #000 100%)',
            duration: 1,
            ease: 'power3.inOut'
        }, 6.5)
        .to('#wormhole', {
            background: 'conic-gradient(from 0deg, #ff0080, #00ffff, #ff0080, #8000ff, #ff0080)',
            duration: 1,
            ease: 'power3.inOut'
        }, 6.5)
        .to('#main-container', {
            background: 'radial-gradient(ellipse at center, #00ffff 0%, #ff0080 50%, #000 100%)',
            duration: 1,
            ease: 'power3.inOut'
        }, 7.5);
    
    // Phase 5: Glitch logo reveal (8.5-10 seconds)
    animationTimeline
        .to('#light-tunnel', {
            opacity: 0,
            duration: 0.5,
            ease: 'power3.inOut'
        }, 8.5)
        .to('#wormhole', {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: 'power3.inOut'
        }, 8.5)
        .to('#logo-reveal', {
            opacity: 1,
            duration: 0.5,
            ease: 'power3.out'
        }, 9)
        .to('.final-logo', {
            scale: 1.3,
            duration: 0.5,
            ease: 'elastic.out(1, 0.2)'
        }, 9.2)
        .to('.final-subtitle', {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out'
        }, 9.5);
    
    // Add glitch matrix scrolling effect
    let scrollY = 0;
    const parallaxInterval = setInterval(() => {
        if (!animationActive) {
            clearInterval(parallaxInterval);
            return;
        }
        
        scrollY += 8; // Faster scrolling
        gsap.set('#light-tunnel', {
            backgroundPosition: `0 ${scrollY}px`
        });
    }, 20); // More frequent updates
    
    // Add intense glitch screen shake effects
    setTimeout(() => {
        if (animationActive) {
            gsap.to('body', {
                x: 15,
                duration: 0.05,
                repeat: 30,
                yoyo: true,
                ease: 'power2.inOut'
            });
        }
    }, 6500);
    
    // Add second wave of glitch screen shake
    setTimeout(() => {
        if (animationActive) {
            gsap.to('body', {
                y: 10,
                duration: 0.03,
                repeat: 40,
                yoyo: true,
                ease: 'power2.inOut'
            });
        }
    }, 7500);
    
    // Add rapid glitch color flashing effects
    const colorFlashInterval = setInterval(() => {
        if (!animationActive) {
            clearInterval(colorFlashInterval);
            return;
        }
        
        const colors = ['#ff0080', '#00ffff', '#8000ff', '#ffff00'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        gsap.to('#main-container', {
            background: `radial-gradient(ellipse at center, ${randomColor}20 0%, #000 100%)`,
            duration: 0.1,
            ease: 'none'
        });
    }, 100);
    
    // Clear color flash after 8 seconds
    setTimeout(() => {
        clearInterval(colorFlashInterval);
    }, 8000);
    
    // Add glitch text effects
    const glitchTextInterval = setInterval(() => {
        if (!animationActive) {
            clearInterval(glitchTextInterval);
            return;
        }
        
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        const originalText = document.querySelector('.final-logo').textContent;
        const glitchedText = originalText.split('').map(char => 
            Math.random() > 0.8 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
        ).join('');
        
        document.querySelector('.final-logo').textContent = glitchedText;
        
        setTimeout(() => {
            if (animationActive) {
                document.querySelector('.final-logo').textContent = originalText;
            }
        }, 50);
    }, 200);
    
    // Clear glitch text after 9 seconds
    setTimeout(() => {
        clearInterval(glitchTextInterval);
    }, 9000);
}

// Reset animation state
function resetAnimation() {
    animationActive = false;
    const mainContainer = document.getElementById('main-container');
    mainContainer.classList.remove('animation-active');
    
    // Reset all animation elements
    gsap.set('#animation-container', { opacity: 0 });
    gsap.set('#wormhole', { width: 0, height: 0, scale: 1, opacity: 1 });
    gsap.set('#light-tunnel', { opacity: 0 });
    gsap.set('#logo-reveal', { opacity: 0 });
    gsap.set('#hero-section', { opacity: 1, scale: 1 });
    gsap.set('.click-me-button', { opacity: 1, scale: 1 });
    gsap.set('body', { x: 0 });
    
    // Reset stars
    stars.forEach((star, index) => {
        gsap.set(star, {
            x: 0,
            y: 0,
            opacity: 1
        });
    });
    
    // Reset background
    gsap.set('#main-container', {
        background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)'
    });
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (!animationActive) {
            startImmersiveAnimation();
        }
    }
    
    if (e.key === 'Escape' && animationActive) {
        resetAnimation();
    }
});

// Add touch support for mobile
document.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
        const touch = e.touches[0];
        createCursorTrail(touch.clientX, touch.clientY);
    }
});

// Performance optimization
let rafId;
function optimizePerformance() {
    if (animationActive) {
        // Reduce frame rate during animation for better performance
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(optimizePerformance);
    }
}

// Add window resize handling
window.addEventListener('resize', () => {
    if (animationActive) {
        // Pause animation during resize
        animationTimeline.pause();
        setTimeout(() => {
            if (animationActive) {
                animationTimeline.resume();
            }
        }, 100);
    }
});

// Add preload for better performance
function preloadAssets() {
    // Preload any additional assets here
    const preloadImages = [
        // Add any image URLs here if needed
    ];
    
    preloadImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadAssets();

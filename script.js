// script.js
console.log('Particles.js script loaded');

// Initialize Particles.js with retry and minimal config
function initParticles() {
    if (typeof particlesJS === 'function') {
        console.log('Particles.js library detected');
        window.addEventListener('load', () => {
            console.log('DOM and scripts loaded, initializing Particles.js');
            const canvas = document.getElementById('particle-canvas');
            if (canvas) {
                console.log('Canvas found, initializing Particles.js');
                try {
                    particlesJS('particle-canvas', {
                        particles: {
                            number: { value: 50, density: { enable: true, value_area: 800 } },
                            color: { value: '#ff0000' }, // Red for visibility
                            shape: { type: 'circle' },
                            opacity: { value: 1.0, random: false },
                            size: { value: 10, random: true },
                            line_linked: { enable: false }, // Disable lines for simplicity
                            move: { enable: true, speed: 4, out_mode: 'out' }
                        },
                        interactivity: {
                            events: { onhover: { enable: false }, onclick: { enable: false }, resize: true }
                        },
                        retina_detect: true
                    }, () => {
                        console.log('Particles.js initialized successfully');
                    }, (err) => {
                        console.error('Particles.js failed to initialize with callback:', err);
                    });
                } catch (e) {
                    console.error('Exception during Particles.js initialization:', e);
                }
            } else {
                console.error('Error: Canvas with id "particle-canvas" not found');
            }
        });
    } else {
        console.error('Error: Particles.js library not found or not a function');
        setTimeout(initParticles, 500); // Retry after 500ms
    }
}

initParticles();

// GSAP animations
gsap.from('.logo', {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power2.out'
});

gsap.from('.container > *', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out',
    delay: 0.5
});

document.querySelectorAll('.info, .people').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
});

// Custom cursor
const cursor = document.querySelector('.custom-cursor');
if (cursor) {
    console.log('Custom cursor element found');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
} else {
    console.error('Error: Custom cursor element not found');
}

// Mobile optimization (simplified)
if (/Mobi|Android/i.test(navigator.userAgent)) {
    console.log('Mobile detected, reducing particles');
    particlesJS('particle-canvas', {
        particles: { number: { value: 20 }, color: { value: '#ff0000' }, opacity: { value: 1.0 }, size: { value: 10 } },
        interactivity: { events: { onhover: { enable: false } } }
    }, () => {
        console.log('Mobile Particles.js initialized successfully');
    }, (err) => {
        console.error('Mobile Particles.js failed to initialize:', err);
    });
}

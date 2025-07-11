// script.js
console.log('Particles.js script loaded');

// Wait for DOM and Particles.js to load
window.addEventListener('load', () => {
    console.log('DOM and scripts loaded, initializing Particles.js');
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        console.log('Canvas found, initializing Particles.js');
        particlesJS('particle-canvas', {
            particles: {
                number: { value: 120, density: { enable: true, value_area: 800 } },
                color: { value: '#007bff' }, // Blue particles
                shape: { type: 'circle' },
                opacity: { value: 0.8, random: true },
                size: { value: 5, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#007bff',
                    opacity: 0.5,
                    width: 2
                },
                move: {
                    enable: true,
                    speed: 4,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    repulse: { distance: 150, duration: 0.4 },
                    push: { particles_nb: 5 }
                }
            },
            retina_detect: true
        }, () => {
            console.log('Particles.js initialized successfully');
        }, (err) => {
            console.error('Particles.js failed to initialize:', err);
        });
    } else {
        console.error('Error: Canvas with id "particle-canvas" not found');
    }
});

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

// Mobile optimization
if (/Mobi|Android/i.test(navigator.userAgent)) {
    console.log('Mobile detected, reducing particles');
    particlesJS('particle-canvas', {
        particles: {
            number: { value: 30 },
            color: { value: '#007bff' },
            opacity: { value: 0.8 },
            size: { value: 5 }
        },
        interactivity: { events: { onhover: { enable: false } } }
    }, () => {
        console.log('Mobile Particles.js initialized successfully');
    });
}

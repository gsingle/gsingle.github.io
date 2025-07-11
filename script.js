// script.js
console.log('Particles.js script loaded');
console.log('Attempting to initialize Particles.js on canvas: particle-canvas');

// Verify canvas exists
const canvas = document.getElementById('particle-canvas');
if (canvas) {
    console.log('Canvas found, initializing Particles.js');
    particlesJS('particle-canvas', {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: '#007bff' }, // Blue particles
            shape: { type: 'circle' },
            opacity: { value: 0.8, random: true }, // High opacity
            size: { value: 4, random: true }, // Larger particles
            line_linked: {
                enable: true,
                distance: 150,
                color: '#007bff',
                opacity: 0.5,
                width: 1.5
            },
            move: {
                enable: true,
                speed: 3,
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
                onhover: { enable: true, mode: 'repulse' }, // Particles move away
                onclick: { enable: true, mode: 'push' }, // Add particles on click
                resize: true
            },
            modes: {
                repulse: { distance: 120, duration: 0.4 },
                push: { particles_nb: 5 }
            }
        },
        retina_detect: true
    }, () => {
        console.log('Particles.js initialized successfully');
    });
} else {
    console.log('Error: Canvas with id "particle-canvas" not found');
}

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

// Fallback custom cursor
const cursor = document.querySelector('.custom-cursor');
if (cursor) {
    console.log('Custom cursor element found');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
} else {
    console.log('Error: Custom cursor element not found');
}

// Mobile optimization
if (/Mobi|Android/i.test(navigator.userAgent)) {
    console.log('Mobile detected, reducing particles');
    particlesJS('particle-canvas', {
        particles: {
            number: { value: 30 },
            color: { value: '#007bff' },
            opacity: { value: 0.8 },
            size: { value: 4 }
        },
        interactivity: { events: { onhover: { enable: false } } }
    });
}

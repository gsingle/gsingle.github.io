// script.js
console.log('Particles.js script loaded'); // Debug log

// Particles.js configuration
particlesJS('particle-canvas', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } }, // Increased for visibility
        color: { value: '#ffffff' }, // White particles
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true }, // Higher opacity
        size: { value: 3, random: true }, // Larger particles
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2, // Slightly faster
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
            onhover: { enable: true, mode: 'repulse' }, // Particles move away from cursor
            onclick: { enable: true, mode: 'push' }, // Add particles on click
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
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

// Hover animations
document.querySelectorAll('.info, .people').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
});

// Optimize for mobile
if (/Mobi|Android/i.test(navigator.userAgent)) {
    console.log('Mobile detected, reducing particles');
    particlesJS('particle-canvas', {
        particles: { number: { value: 30 } }, // Fewer particles
        interactivity: { events: { onhover: { enable: false } } }
    });
}

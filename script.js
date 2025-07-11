// script.js
particlesJS('particle-canvas', {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } }, // Fewer particles for subtlety
        color: { value: '#ffffff' }, // White particles to match IOHK
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true },
        size: { value: 2, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1, // Slower for a calm effect
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
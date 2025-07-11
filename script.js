// script.js
console.log('Particles.js script loaded');

// Initialize Particles.js with retry and error handling
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
                            number: { value: 150, density: { enable: true, value_area: 800 } },
                            //color: { value: '#007bff' },
                            color: { value: ['#007bff', '#55565B', '#ff0000'] }
                            shape: { type: 'circle' },
                            opacity: { value: 1.0, random: false }, // Fully opaque
                            size: { value: 8, random: true },
                            line_linked: {
                                enable: true,
                                distance: 150,
                                color: '#007bff',
                                opacity: 0.8,
                                width: 2
                            },
                            move: {
                                enable: true,
                                speed: 6,
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
                                //onhover: { enable: true, mode: 'repulse' },
                                onhover: { enable: true, mode: 'grab' },
                                onclick: { enable: true, mode: 'push' },
                                resize: true
                            },
                            modes: { grab: { distance: 200, line_linked: { opacity: 0.7 } } }
                            //modes: {
                            //    repulse: { distance: 150, duration: 0.4 },
                            //    push: { particles_nb: 5 }
                            //}
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

// Mobile optimization
if (/Mobi|Android/i.test(navigator.userAgent)) {
    console.log('Mobile detected, reducing particles');
    particlesJS('particle-canvas', {
        particles: {
            number: { value: 30 },
            color: { value: '#007bff' },
            opacity: { value: 1.0 },
            size: { value: 8 }
        },
        interactivity: { events: { onhover: { enable: false } } }
    }, () => {
        console.log('Mobile Particles.js initialized successfully');
    }, (err) => {
        console.error('Mobile Particles.js failed to initialize:', err);
    });
}

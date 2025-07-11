// Debug: Script loaded
console.log('script.js loaded');

// Wait for DOM and particles.js to be ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, checking for particles.js');

    function checkParticlesJS() {
        if (typeof particlesJS === 'function') {
            console.log('particlesJS library detected');
            const canvas = document.getElementById('particle-canvas');
            if (canvas) {
                console.log('Canvas found, initializing particles');
                try {
                    particlesJS('particle-canvas', {
                        particles: {
                            number: { value: 80, density: { enable: true, value_area: 800 } },
                            color: { value: '#ff0000' },
                            shape: { type: 'circle' },
                            opacity: { value: 0.5, random: true, anim: { enable: false } },
                            size: { value: 3, random: true, anim: { enable: false } },
                            line_linked: { enable: true, distance: 150, color: '#ff0000', opacity: 0.4, width: 1 },
                            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
                        },
                        interactivity: {
                            detect_on: 'canvas',
                            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
                            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
                        },
                        retina_detect: true
                    }, () => {
                        console.log('Particles.js initialized successfully');
                        const pjs = particlesJS('particle-canvas');
                        if (pjs && pjs.particles) {
                            console.log('Forced redraw of particles');
                            pjs.particles.draw();
                            console.log('Number of particles:', pjs.particles.array.length);
                        } else {
                            console.error('Particles object not available for redraw');
                        }
                    }, (err) => {
                        console.error('Particles.js failed to initialize with callback:', err);
                    });
                } catch (e) {
                    console.error('Exception during particles.js initialization:', e);
                }
            } else {
                console.error('Error: Canvas with id "particle-canvas" not found');
            }
        } else {
            console.error('particlesJS not found, CDN load failed');
        }
    }

    // Start checking
    checkParticlesJS();
});

// GSAP animations
gsap.from('.logo', { opacity: 0, y: -50, duration: 1, ease: 'power2.out' });
gsap.from('.container > *', { opacity: 0, y: 20, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.5 });

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
    if (typeof particlesJS === 'function') {
        particlesJS('particle-canvas', {
            particles: { number: { value: 40 }, color: { value: '#ff0000' }, opacity: { value: 0.5 }, size: { value: 3 } },
            interactivity: { events: { onhover: { enable: false } } }
        }, () => {
            console.log('Mobile Particles.js initialized successfully');
        }, (err) => {
            console.error('Mobile Particles.js failed to initialize:', err);
        });
    } else {
        console.error('Mobile: particlesJS not available');
    }
}

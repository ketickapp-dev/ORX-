/**
 * ORX 🧠 Particle FX
 * Mencipta kesan visual "Burst" apabila butang ditekan.
 * Sangat ringan & Mobile-friendly.
 */

const ORXParticle = {
    create: (e) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        
        // Cipta canvas sementara untuk efek
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '9999';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const color = "#00d2ff"; // Warna tema Neon ORX

        for (let i = 0; i < 12; i++) {
            particles.push({
                x: e.clientX,
                y: e.clientY,
                radius: Math.random() * 3 + 1,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10,
                life: 1.0
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let alive = false;

            particles.forEach(p => {
                if (p.life > 0) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 210, 255, ${p.life})`;
                    ctx.fill();

                    p.x += p.vx;
                    p.y += p.vy;
                    p.life -= 0.05;
                    alive = true;
                }
            });

            if (alive) {
                requestAnimationFrame(animate);
            } else {
                document.body.removeChild(canvas);
            }
        }
        animate();
    }
};

// Auto-bind pada butang ORX
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-orx').forEach(btn => {
        btn.addEventListener('click', (e) => ORXParticle.create(e));
    });
});

/**
 * ORX 🧠 Haptic Engine
 * Memberikan rasa "Premium Tactile" pada peranti mobile
 * tanpa membebankan prestasi.
 */

const ORXHaptic = {
    // Getaran halus untuk klik butang biasa
    light: () => {
        if (navigator.vibrate) {
            navigator.vibrate(10); 
        }
    },

    // Getaran "Success" (Dua kali getar pantas)
    success: () => {
        if (navigator.vibrate) {
            navigator.vibrate([15, 30, 15]);
        }
    },

    // Getaran amaran/error (Panjang sedikit)
    warning: () => {
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }
};

// Auto-bind pada semua butang yang ada class .btn-orx
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-orx');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            ORXHaptic.light();
            console.log('ORX 🧠 Haptic Triggered');
        });
    });
});

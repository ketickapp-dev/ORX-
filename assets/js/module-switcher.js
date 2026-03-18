/**
 * ORX 🧠 Module Switcher
 * Menukar tema dan kandungan secara dinamik mengikut jenis perniagaan.
 */

const ORXModules = {
    IT_STORE: {
        name: "ORX TECH",
        color: "#00d2ff", // Biru Neon
        label1: "Repair Status",
        value1: "12 Device",
        label2: "Inventory IT",
        value2: "RM 8,400",
        icon: "💻"
    },
    CLINIC: {
        name: "ORX HEALTH",
        color: "#00ff88", // Hijau Neon
        label1: "Giliran Pesakit",
        value1: "A-102",
        label2: "Temu Janji Hari Ini",
        value2: "45 Orang",
        icon: "🏥"
    },
    RETAIL: {
        name: "ORX RETAIL",
        color: "#ff0077", // Pink/Emas Neon
        label1: "Stok Rendah",
        value1: "5 Item",
        label2: "Jualan Mall",
        value2: "RM 3,200",
        icon: "🛍️"
    }
};

function switchORXModule(type) {
    const mod = ORXModules[type];
    if (!mod) return;

    // 1. Tukar Nama & Warna Neon Header
    const header = document.querySelector('.neon-text');
    header.innerText = mod.name;
    header.style.textShadow = `0 0 5px #fff, 0 0 10px ${mod.color}, 0 0 20px ${mod.color}`;

    // 2. Tukar Warna Butang Utama
    const mainBtn = document.querySelector('.neon-blue');
    mainBtn.style.boxShadow = `0 0 10px ${mod.color}, 0 0 20px ${mod.color}`;
    mainBtn.style.border = `2px solid ${mod.color}`;
    mainBtn.style.background = `linear-gradient(45deg, ${mod.color}, #000)`;

    // 3. Tukar Data pada Kad (Contoh Kad 1)
    const cards = document.querySelectorAll('.orx-card');
    
    // Kad 1
    cards[0].querySelector('.card-label').innerText = mod.label1;
    cards[0].querySelector('.card-label').style.color = mod.color;
    cards[0].querySelector('.card-value').innerText = mod.value1;

    // Kad 2
    cards[1].querySelector('.card-label').innerText = mod.label2;
    cards[1].querySelector('.card-label').style.color = mod.color;
    cards[1].querySelector('.card-value').innerText = mod.value2;
    cards[1].style.borderLeft = `4px solid ${mod.color}`;

    // Trigger Haptic & Particle
    if(window.ORXHaptic) ORXHaptic.success();
}

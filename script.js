// Initialize Lucide Icons
lucide.createIcons();

// --- Binary Rain Animation ---
const canvas = document.getElementById('binary-rain');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const fontSize = 14;
const columns = Math.ceil(width / fontSize);
const drops = new Array(columns).fill(0);
const chars = "10"; // Binary

function resizeHandler() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    // Re-initialize drops on resize to avoid gaps
    const newColumns = Math.ceil(width / fontSize);
    if (newColumns > drops.length) {
        while (drops.length < newColumns) drops.push(0);
    }
}

window.addEventListener('resize', resizeHandler);

function drawRain() {
    // Semi-transparent black to create fade effect
    // Matches slate-950 (#020617)
    ctx.fillStyle = 'rgba(2, 6, 23, 0.05)'; 
    ctx.fillRect(0, 0, width, height);

    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        // Random opacity for depth effect
        const opacity = Math.random() * 0.5 + 0.25; 
        ctx.fillStyle = `rgba(34, 211, 238, ${opacity})`; // Cyan-400

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Reset drop to top randomly or if it's off screen
        if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
    }

    requestAnimationFrame(drawRain);
}

drawRain();


// --- Navbar Logic ---
const header = document.getElementById('main-header');
const nav = document.getElementById('main-nav');
const navLogoIcon = document.getElementById('nav-logo-icon');
const navLogoText = document.getElementById('nav-logo-text');
const navLinksDesktop = document.getElementById('nav-links-desktop');
const navCta = document.getElementById('nav-cta');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');

function handleScroll() {
    const scrolled = window.scrollY > 50;

    if (scrolled) {
        // Scrolled styling
        header.classList.remove('pt-6');
        header.classList.add('pt-0');

        nav.classList.remove('w-[95%]', 'md:w-[90%]', 'max-w-7xl', 'bg-transparent', 'border-transparent', 'py-4', 'px-2');
        nav.classList.add('w-full', 'bg-slate-950/90', 'backdrop-blur-xl', 'border-b', 'border-slate-800/60', 'shadow-xl', 'py-4', 'px-6', 'md:px-12');
        
        // Logo
        navLogoIcon.classList.remove('bg-slate-800/80', 'text-slate-200');
        navLogoIcon.classList.add('bg-cyan-950/30', 'text-cyan-400');
        
        navLogoText.classList.remove('text-white');
        navLogoText.classList.add('text-slate-200');

        // Links
        navLinksDesktop.classList.remove('bg-slate-950/20', 'border', 'border-white/5', 'backdrop-blur-sm', 'p-1', 'rounded-xl');
        navLinksDesktop.classList.add('bg-transparent', 'border-transparent');

        // CTA
        navCta.classList.remove('bg-slate-800/80', 'border-slate-700', 'text-slate-200', 'hover:bg-slate-700', 'hover:text-white');
        navCta.classList.add('bg-cyan-500/10', 'border-cyan-500/20', 'text-cyan-400', 'hover:bg-cyan-500', 'hover:text-slate-950');
        
        // Mobile Toggle
        mobileMenuBtn.classList.remove('bg-slate-800/50', 'text-slate-200');
        mobileMenuBtn.classList.add('text-slate-300', 'hover:text-white', 'hover:bg-white/10');

    } else {
        // Top styling
        header.classList.add('pt-6');
        header.classList.remove('pt-0');

        nav.classList.add('w-[95%]', 'md:w-[90%]', 'max-w-7xl', 'bg-transparent', 'border-transparent', 'py-4', 'px-2');
        nav.classList.remove('w-full', 'bg-slate-950/90', 'backdrop-blur-xl', 'border-b', 'border-slate-800/60', 'shadow-xl', 'py-4', 'px-6', 'md:px-12');
        
        // Logo
        navLogoIcon.classList.add('bg-slate-800/80', 'text-slate-200');
        navLogoIcon.classList.remove('bg-cyan-950/30', 'text-cyan-400');

        navLogoText.classList.add('text-white');
        navLogoText.classList.remove('text-slate-200');

        // Links
        navLinksDesktop.classList.add('bg-slate-950/20', 'border', 'border-white/5', 'backdrop-blur-sm', 'p-1', 'rounded-xl');
        navLinksDesktop.classList.remove('bg-transparent', 'border-transparent');

        // CTA
        navCta.classList.add('bg-slate-800/80', 'border-slate-700', 'text-slate-200', 'hover:bg-slate-700', 'hover:text-white');
        navCta.classList.remove('bg-cyan-500/10', 'border-cyan-500/20', 'text-cyan-400', 'hover:bg-cyan-500', 'hover:text-slate-950');

        // Mobile Toggle
        mobileMenuBtn.classList.add('bg-slate-800/50', 'text-slate-200');
        mobileMenuBtn.classList.remove('text-slate-300', 'hover:text-white', 'hover:bg-white/10');
    }
}

window.addEventListener('scroll', handleScroll, { passive: true });


// --- Mobile Menu Logic ---
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMobileMenu() {
    mobileMenuOverlay.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
    mobileMenuOverlay.classList.add('opacity-100', 'visible');
    document.body.style.overflow = 'hidden';

    // Stagger animation for links
    mobileLinks.forEach(link => {
        link.classList.remove('translate-y-10', 'opacity-0');
        link.classList.add('translate-y-0', 'opacity-100');
    });
}

function closeMobileMenu() {
    mobileMenuOverlay.classList.add('opacity-0', 'invisible', 'pointer-events-none');
    mobileMenuOverlay.classList.remove('opacity-100', 'visible');
    document.body.style.overflow = 'unset';

    // Reset links for next opening
    mobileLinks.forEach(link => {
        link.classList.add('translate-y-10', 'opacity-0');
        link.classList.remove('translate-y-0', 'opacity-100');
    });
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});
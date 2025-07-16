 // =====================
//      index.js
// =====================
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply theme
    function applyTheme(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Light Mode';
        } else {
            document.body.classList.remove('dark-mode');
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Dark Mode';
        }
    }
    
    // Initialize theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        applyTheme(true);
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const isDark = !document.body.classList.contains('dark-mode');
        applyTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    
    // Update theme if system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches);
        }
    });
    
    // Enhanced mobile touch experience
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        let touchTimer;
        
        card.addEventListener('touchstart', function() {
            touchTimer = setTimeout(() => {
                this.classList.add('hover');
            }, 100);
        });
        
        card.addEventListener('touchend', function() {
            clearTimeout(touchTimer);
            this.classList.remove('hover');
        });
        
        card.addEventListener('touchmove', function() {
            clearTimeout(touchTimer);
            this.classList.remove('hover');
        });
    });
});

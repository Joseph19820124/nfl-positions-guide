// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const btnEn = document.getElementById('btn-en');
    const btnZh = document.getElementById('btn-zh');
    const btnBoth = document.getElementById('btn-both');
    const body = document.body;

    // Get saved language preference or default to 'both'
    const savedLang = localStorage.getItem('nfl-guide-lang') || 'both';
    setLanguage(savedLang);

    // Button click handlers
    btnEn.addEventListener('click', () => setLanguage('en'));
    btnZh.addEventListener('click', () => setLanguage('zh'));
    btnBoth.addEventListener('click', () => setLanguage('both'));

    function setLanguage(lang) {
        // Remove all language classes
        body.classList.remove('lang-en', 'lang-zh', 'lang-both');

        // Add the selected language class
        body.classList.add('lang-' + lang);

        // Update button states
        btnEn.classList.remove('active');
        btnZh.classList.remove('active');
        btnBoth.classList.remove('active');

        if (lang === 'en') {
            btnEn.classList.add('active');
        } else if (lang === 'zh') {
            btnZh.classList.add('active');
        } else {
            btnBoth.classList.add('active');
        }

        // Save preference
        localStorage.setItem('nfl-guide-lang', lang);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('.toc a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for sticky nav
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll animation for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply initial styles and observe cards
    document.querySelectorAll('.position-card, .score-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

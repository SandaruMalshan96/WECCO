document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    sections.forEach(section => observer.observe(section));

    // Button click event
    const buttons = document.querySelectorAll('.info-btn');
    console.log(`Found ${buttons.length} buttons`);
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('More information coming soon!');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');

    // Observer for fade-in effect
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    // Button click event
    const buttons = document.querySelectorAll('.info-btn');
    console.log(`Found ${buttons.length} buttons`);
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('More information coming soon!');
        });
    });

    // Scroll-based zoom effect (one by one)
    let lastScrollTop = window.scrollY;

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        let scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';

        document.querySelectorAll('.product-banner').forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) { // If the section is visible
                let scaleValue = scrollDirection === 'down' ? 1.1 : 1.0;
                section.style.transition = 'transform 0.5s ease-out';
                section.style.transform = `scale(${scaleValue})`;
            }
        });

        lastScrollTop = scrollTop;
    });
});


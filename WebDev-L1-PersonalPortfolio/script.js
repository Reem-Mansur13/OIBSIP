document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
        if (document.documentElement.classList.contains('light')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('#navLinks a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    const runStats = () => {
        statNumbers.forEach(num => {
            const target = +num.getAttribute('data-target');
            let current = 0;
            const step = Math.ceil(target / 40);
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    num.innerText = target + '+';
                    clearInterval(timer);
                } else {
                    num.innerText = current;
                }
            }, 30);
        });
    };

    const barFills = document.querySelectorAll('.bar-fill');
    const fillSkillBars = () => {
        barFills.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'about' && !statsAnimated) {
                    runStats();
                    statsAnimated = true;
                }
                if (entry.target.id === 'skills') {
                    fillSkillBars();
                }
            }
        });
    }, { threshold: 0.3 });

    observer.observe(document.getElementById('about'));
    observer.observe(document.getElementById('skills'));

    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    const testimonials = [
        {
            quote: "Reem is a dedicated developer with strong analytical skills. Her projects reflect exceptional code quality and visual detail.",
            author: "Prof. Neha Deshmukh",
            role: "Assistant Professor, MCA Dept"
        },
        {
            quote: "Great team player with excellent problem-solving instincts. She builds web apps quickly with high attention to user experience.",
            author: "Rohit Sharma",
            role: "Tech Lead, TechThrive Solutions"
        }
    ];
    let currentTestimonialIndex = 0;

    const quoteText = document.getElementById('quoteText');
    const authorName = document.getElementById('authorName');
    const authorRole = document.getElementById('authorRole');

    const showTestimonial = (index) => {
        const item = testimonials[index];
        quoteText.innerText = `"${item.quote}"`;
        authorName.innerText = item.author;
        authorRole.innerText = item.role;
    };

    document.getElementById('nextQuote').addEventListener('click', () => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        showTestimonial(currentTestimonialIndex);
    });

    document.getElementById('prevQuote').addEventListener('click', () => {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonialIndex);
    });

    const contactForm = document.getElementById('portfolioContactForm');
    const feedbackBox = document.getElementById('formFeedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        feedbackBox.style.display = 'block';
        contactForm.reset();

        setTimeout(() => {
            feedbackBox.style.display = 'none';
        }, 4000);
    });
});

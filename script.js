        // Smooth scrolling navigation
        document.querySelectorAll('.nav-dot').forEach(dot => {
            dot.addEventListener('click', function() {
                const section = this.getAttribute('data-section');
                const element = document.getElementById(section);
                element.scrollIntoView({ behavior: 'smooth' });
                
                // Update active dot
                document.querySelectorAll('.nav-dot').forEach(d => d.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Update active dot on scroll
        window.addEventListener('scroll', function() {
            const sections = ['header', 'steps', 'stories'];
            let current = '';
            
            sections.forEach(section => {
                const element = document.getElementById(section);
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100) {
                    current = section;
                }
            });
            
            document.querySelectorAll('.nav-dot').forEach(dot => {
                dot.classList.remove('active');
                if (dot.getAttribute('data-section') === current) {
                    dot.classList.add('active');
                }
            });
        });

        // Step interactions
        document.querySelectorAll('.step-circle, .step-detail-card').forEach(element => {
            element.addEventListener('click', function() {
                const stepNumber = this.getAttribute('data-step');
                // Scroll to matching detailed card
                const targetCard = document.querySelector(`.step-detail-card[data-step="${stepNumber}"]`);
                if (targetCard) {
                    targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    // Add emphasis effect
                    targetCard.style.transform = 'scale(1.02)';
                    setTimeout(() => {
                        targetCard.style.transform = '';
                    }, 300);
                }
            });
        });

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        document.querySelectorAll('.step-detail-card, .story-column, .train-track-container').forEach(el => {
            observer.observe(el);
        });

        // Simulate progress for demonstration
        setTimeout(() => {
            // This could be used to update step status dynamically
            console.log('Presentation dashboard loaded successfully');
        }, 1000);

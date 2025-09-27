/**
 * Voimation Theme JavaScript
 * 
 * @package Voimation
 */

(function($) {
    'use strict';
    
    // Mobile menu functionality
    function initMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
                
                // Update button icon
                const icon = mobileMenuButton.querySelector('svg path');
                if (mobileMenu.classList.contains('hidden')) {
                    icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                } else {
                    icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
                }
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                    mobileMenu.classList.add('hidden');
                    const icon = mobileMenuButton.querySelector('svg path');
                    icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                }
            });
        }
    }
    
    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Intersection Observer for animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, observerOptions);
        
        // Observe cards and sections
        document.querySelectorAll('.card-float, .hero-glow').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Add CSS for fade-in animation
    function addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .animate-fade-in-up {
                animation: fadeInUp 0.6s ease-out forwards;
            }
            
            .card-float {
                opacity: 0;
            }
            
            .card-float.animate-fade-in-up {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Enhanced button effects
    function initButtonEffects() {
        document.querySelectorAll('.btn-glow').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
    
    // Contact form enhancement (if not handled by PHP AJAX)
    function initContactForm() {
        const contactForm = document.getElementById('voimation-contact-form');
        if (contactForm && !window.voimation_ajax) {
            // Fallback for non-WordPress environments
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(this);
                const data = Object.fromEntries(formData);
                
                // Create mailto link
                const subject = encodeURIComponent('New Contact Form Submission');
                const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Practice: ${data.practice_name || 'Not specified'}
Practice Size: ${data.practice_size || 'Not specified'}
Message: ${data.message}
                `);
                
                window.location.href = `mailto:hello@voimation.com?subject=${subject}&body=${body}`;
            });
        }
    }
    
    // Calendly integration
    function initCalendlyIntegration() {
        // Add Calendly widget script if needed
        const calendlyLinks = document.querySelectorAll('a[href*="calendly.com"]');
        
        calendlyLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Track calendar click for analytics if needed
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'calendly_click', {
                        'event_category': 'engagement',
                        'event_label': 'Schedule Demo'
                    });
                }
            });
        });
    }
    
    // Initialize everything when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        initMobileMenu();
        initSmoothScrolling();
        initScrollAnimations();
        addAnimationStyles();
        initButtonEffects();
        initContactForm();
        initCalendlyIntegration();
    });
    
    // Initialize when jQuery is ready (if available)
    if (typeof $ !== 'undefined') {
        $(document).ready(function() {
            // Additional jQuery-dependent functionality can go here
            
            // Enhance WordPress editor blocks
            $('.wp-block-button__link').addClass('btn-glow');
        });
    }
    
})(typeof jQuery !== 'undefined' ? jQuery : null);
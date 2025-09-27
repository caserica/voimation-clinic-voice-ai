<?php
/**
 * Template for Contact Page
 * 
 * @package Voimation
 */

get_header(); ?>

<main class="min-h-screen bg-gradient-hero">
    
    <!-- Contact Hero Section -->
    <section class="py-20 px-4">
        <div class="container mx-auto max-w-6xl text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gradient">
                Get In Touch
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
                Ready to revolutionize your healthcare practice? We're here to help you get started with AI-powered automation.
            </p>
        </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="py-20 px-4">
        <div class="container mx-auto max-w-6xl">
            <div class="grid md:grid-cols-2 gap-12">
                
                <!-- Contact Form -->
                <div class="bg-card rounded-lg p-8 border border-border">
                    <h2 class="text-2xl font-bold mb-6 text-card-foreground">Send us a message</h2>
                    
                    <form id="voimation-contact-form" class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium mb-2 text-card-foreground">Full Name</label>
                            <input type="text" id="name" name="name" required 
                                   class="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground">
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium mb-2 text-card-foreground">Email Address</label>
                            <input type="email" id="email" name="email" required 
                                   class="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground">
                        </div>
                        
                        <div>
                            <label for="practice-name" class="block text-sm font-medium mb-2 text-card-foreground">Practice Name</label>
                            <input type="text" id="practice-name" name="practice_name" 
                                   class="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground">
                        </div>
                        
                        <div>
                            <label for="practice-size" class="block text-sm font-medium mb-2 text-card-foreground">Practice Size</label>
                            <select id="practice-size" name="practice_size" 
                                    class="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground">
                                <option value="">Select practice size</option>
                                <option value="1-5">1-5 providers</option>
                                <option value="6-15">6-15 providers</option>
                                <option value="16-50">16-50 providers</option>
                                <option value="50+">50+ providers</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="message" class="block text-sm font-medium mb-2 text-card-foreground">Message</label>
                            <textarea id="message" name="message" rows="4" required 
                                      class="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground" 
                                      placeholder="Tell us about your current challenges and how we can help..."></textarea>
                        </div>
                        
                        <button type="submit" 
                                class="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium btn-glow hover:scale-105 transition-all duration-300">
                            Send Message
                        </button>
                    </form>

                    <div id="form-message" class="mt-4 hidden"></div>
                </div>

                <!-- Contact Information -->
                <div class="space-y-8">
                    
                    <!-- Direct Contact -->
                    <div class="bg-card rounded-lg p-8 border border-border">
                        <h3 class="text-xl font-semibold mb-4 text-card-foreground">Direct Contact</h3>
                        <div class="space-y-4">
                            <div class="flex items-center">
                                <span class="text-2xl mr-4">📧</span>
                                <div>
                                    <p class="font-medium text-card-foreground">Email</p>
                                    <a href="mailto:<?php echo esc_attr(get_theme_mod('voimation_email', 'hello@voimation.com')); ?>" 
                                       class="text-primary hover:underline">
                                        <?php echo esc_html(get_theme_mod('voimation_email', 'hello@voimation.com')); ?>
                                    </a>
                                </div>
                            </div>
                            
                            <div class="flex items-center">
                                <span class="text-2xl mr-4">📞</span>
                                <div>
                                    <p class="font-medium text-card-foreground">Phone</p>
                                    <a href="tel:<?php echo esc_attr(str_replace(' ', '', get_theme_mod('voimation_phone', '+1 (555) 123-4567'))); ?>" 
                                       class="text-primary hover:underline">
                                        <?php echo esc_html(get_theme_mod('voimation_phone', '+1 (555) 123-4567')); ?>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Response Time -->
                    <div class="bg-card rounded-lg p-8 border border-border">
                        <h3 class="text-xl font-semibold mb-4 text-card-foreground">Response Time</h3>
                        <div class="flex items-center mb-4">
                            <span class="text-2xl mr-4">⚡</span>
                            <div>
                                <p class="font-medium text-card-foreground">Within 2 hours</p>
                                <p class="text-muted-foreground">during business hours</p>
                            </div>
                        </div>
                        <p class="text-muted-foreground">
                            We typically respond to all inquiries within 2 hours during business hours (9 AM - 6 PM EST, Monday-Friday).
                        </p>
                    </div>

                    <!-- Next Steps -->
                    <div class="bg-card rounded-lg p-8 border border-border">
                        <h3 class="text-xl font-semibold mb-4 text-card-foreground">What Happens Next?</h3>
                        <div class="space-y-3">
                            <div class="flex items-start">
                                <span class="text-primary mr-3 mt-1">1.</span>
                                <p class="text-muted-foreground">We'll review your message and practice details</p>
                            </div>
                            <div class="flex items-start">
                                <span class="text-primary mr-3 mt-1">2.</span>
                                <p class="text-muted-foreground">Schedule a 30-minute discovery call to understand your needs</p>
                            </div>
                            <div class="flex items-start">
                                <span class="text-primary mr-3 mt-1">3.</span>
                                <p class="text-muted-foreground">Provide a customized demo and implementation plan</p>
                            </div>
                        </div>
                    </div>

                    <!-- Schedule Direct -->
                    <div class="bg-gradient-cosmic rounded-lg p-8 text-center">
                        <h3 class="text-xl font-semibold mb-4 text-white">Prefer to Schedule Directly?</h3>
                        <p class="text-white/90 mb-6">
                            Skip the form and book a time that works for you
                        </p>
                        <a href="<?php echo esc_url(get_theme_mod('voimation_calendly_url', 'https://calendly.com/voimation/30min')); ?>" 
                           class="inline-block bg-white text-cosmic-purple px-6 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300">
                            Schedule Now
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- Additional CTA -->
    <section class="py-20 px-4">
        <div class="container mx-auto max-w-6xl">
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-card rounded-lg p-8 border border-border text-center">
                    <h3 class="text-xl font-semibold mb-4 text-card-foreground">View Our Pricing</h3>
                    <p class="text-muted-foreground mb-6">
                        See our transparent pricing plans and find the perfect fit for your practice size and needs.
                    </p>
                    <a href="<?php echo home_url('/pricing'); ?>" 
                       class="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium btn-glow">
                        View Pricing
                    </a>
                </div>
                
                <div class="bg-card rounded-lg p-8 border border-border text-center">
                    <h3 class="text-xl font-semibold mb-4 text-card-foreground">Explore Our Services</h3>
                    <p class="text-muted-foreground mb-6">
                        Learn more about our comprehensive AI-powered automation solutions for healthcare practices.
                    </p>
                    <a href="<?php echo home_url('/services'); ?>" 
                       class="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium btn-glow">
                        Our Services
                    </a>
                </div>
            </div>
        </div>
    </section>

</main>

<!-- Contact Form JavaScript -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('voimation-contact-form');
    const messageDiv = document.getElementById('form-message');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            formData.append('action', 'voimation_contact');
            formData.append('nonce', '<?php echo wp_create_nonce("voimation_nonce"); ?>');
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            fetch('<?php echo admin_url("admin-ajax.php"); ?>', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                messageDiv.classList.remove('hidden');
                if (data.success) {
                    messageDiv.className = 'mt-4 p-4 bg-green-100 text-green-800 rounded-lg';
                    messageDiv.textContent = data.data;
                    form.reset();
                } else {
                    messageDiv.className = 'mt-4 p-4 bg-red-100 text-red-800 rounded-lg';
                    messageDiv.textContent = data.data || 'An error occurred. Please try again.';
                }
            })
            .catch(error => {
                messageDiv.classList.remove('hidden');
                messageDiv.className = 'mt-4 p-4 bg-red-100 text-red-800 rounded-lg';
                messageDiv.textContent = 'An error occurred. Please try again.';
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
});
</script>

<?php get_footer(); ?>
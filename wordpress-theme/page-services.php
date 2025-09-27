<?php
/**
 * Template for Services Page
 * 
 * @package Voimation
 */

get_header(); ?>

<main class="min-h-screen bg-gradient-hero">
    
    <!-- Services Hero Section -->
    <section class="py-20 px-4">
        <div class="container mx-auto max-w-6xl text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gradient">
                Our AI-Powered Services
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
                Comprehensive automation solutions designed specifically for healthcare practices to streamline operations and enhance patient care.
            </p>
        </div>
    </section>

    <!-- Detailed Services Grid -->
    <section class="py-20 px-4">
        <div class="container mx-auto max-w-6xl">
            <div class="grid md:grid-cols-2 gap-12">
                
                <!-- Service 1: Appointment Reminders -->
                <div class="card-float bg-card rounded-lg p-8 border border-border">
                    <div class="flex items-center mb-6">
                        <div class="text-4xl mr-4">📅</div>
                        <h2 class="text-2xl font-bold text-card-foreground">Appointment Reminders</h2>
                    </div>
                    <p class="text-muted-foreground mb-6">
                        Reduce no-shows by up to 40% with our intelligent appointment reminder system. 
                        Automated calls and texts sent at optimal times based on patient preferences and behavior patterns.
                    </p>
                    <ul class="space-y-3 text-muted-foreground mb-6">
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Multi-channel reminders (voice, SMS, email)</li>
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Personalized timing optimization</li>
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Automatic rescheduling assistance</li>
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Integration with major EMR systems</li>
                    </ul>
                    <a href="<?php echo esc_url(get_theme_mod('voimation_calendly_url', 'https://calendly.com/voimation/30min')); ?>" 
                       class="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium btn-glow">
                        Learn More
                    </a>
                </div>

                <!-- Service 2: Insurance Verification -->
                <div class="card-float bg-card rounded-lg p-8 border border-border">
                    <div class="flex items-center mb-6">
                        <div class="text-4xl mr-4">🛡️</div>
                        <h2 class="text-2xl font-bold text-card-foreground">Insurance Verification</h2>
                    </div>
                    <p class="text-muted-foreground mb-6">
                        Streamline your insurance verification process with AI-powered automation. 
                        Verify coverage, benefits, and eligibility in real-time, reducing administrative burden.
                    </p>
                    <ul class="space-y-3 text-muted-foreground mb-6">
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Real-time eligibility checking</li>
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Automated prior authorization</li>
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Coverage verification alerts</li>
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Seamless EMR integration</li>
                    </ul>
                    <a href="<?php echo esc_url(get_theme_mod('voimation_calendly_url', 'https://calendly.com/voimation/30min')); ?>" 
                       class="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium btn-glow">
                        Learn More
                    </a>
                </div>

                <!-- Service 3: Patient Follow-up -->
                <div class="card-float bg-card rounded-lg p-8 border border-border">
                    <div class="flex items-center mb-6">
                        <div class="text-4xl mr-4">📞</div>
                        <h2 class="text-2xl font-bold text-card-foreground">Patient Follow-up</h2>
                    </div>
                    <p class="text-muted-foreground mb-6">
                        Enhance patient satisfaction with personalized follow-up communications. 
                        AI-driven post-visit care that shows patients you value their health and experience.
                    </p>
                    <ul class="space-y-3 text-muted-foreground mb-6">
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Post-visit satisfaction surveys</li>
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Care plan adherence monitoring</li>
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Medication compliance tracking</li>
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Symptom monitoring alerts</li>
                    </ul>
                    <a href="<?php echo esc_url(get_theme_mod('voimation_calendly_url', 'https://calendly.com/voimation/30min')); ?>" 
                       class="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium btn-glow">
                        Learn More
                    </a>
                </div>

                <!-- Service 4: Prescription Refills -->
                <div class="card-float bg-card rounded-lg p-8 border border-border">
                    <div class="flex items-center mb-6">
                        <div class="text-4xl mr-4">💊</div>
                        <h2 class="text-2xl font-bold text-card-foreground">Prescription Refills</h2>
                    </div>
                    <p class="text-muted-foreground mb-6">
                        Automate prescription refill processes to improve medication adherence and reduce staff workload. 
                        Smart notifications ensure patients never run out of critical medications.
                    </p>
                    <ul class="space-y-3 text-muted-foreground mb-6">
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Automatic refill reminders</li>
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Pharmacy coordination</li>
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Medication adherence tracking</li>
                        <li class="flex items-center"><span class="text-primary mr-2">✓</span> Provider approval workflows</li>
                    </ul>
                    <a href="<?php echo esc_url(get_theme_mod('voimation_calendly_url', 'https://calendly.com/voimation/30min')); ?>" 
                       class="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium btn-glow">
                        Learn More
                    </a>
                </div>

            </div>
        </div>
    </section>

    <!-- Implementation Process -->
    <section class="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div class="container mx-auto max-w-6xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    How We <span class="text-gradient">Implement</span>
                </h2>
                <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Our proven implementation process ensures seamless integration with your existing workflows
                </p>
            </div>

            <div class="grid md:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">1</div>
                    <h3 class="text-lg font-semibold mb-3">Discovery Call</h3>
                    <p class="text-muted-foreground">Understand your current workflows and pain points</p>
                </div>
                <div class="text-center">
                    <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">2</div>
                    <h3 class="text-lg font-semibold mb-3">Custom Setup</h3>
                    <p class="text-muted-foreground">Configure AI automation for your specific needs</p>
                </div>
                <div class="text-center">
                    <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">3</div>
                    <h3 class="text-lg font-semibold mb-3">Team Training</h3>
                    <p class="text-muted-foreground">Comprehensive training for your staff</p>
                </div>
                <div class="text-center">
                    <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">4</div>
                    <h3 class="text-lg font-semibold mb-3">Go Live</h3>
                    <p class="text-muted-foreground">Launch with ongoing support and optimization</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4">
        <div class="container mx-auto max-w-4xl text-center">
            <div class="bg-gradient-cosmic rounded-3xl p-12 animate-pulse-glow">
                <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Ready to Get Started?
                </h2>
                <p class="text-xl mb-8 text-white/90">
                    Book a free consultation to see how Voimation can transform your practice
                </p>
                <a href="<?php echo esc_url(get_theme_mod('voimation_calendly_url', 'https://calendly.com/voimation/30min')); ?>" 
                   class="inline-block bg-white text-cosmic-purple px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300">
                    Schedule Your Demo Today
                </a>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
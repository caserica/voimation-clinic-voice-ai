<?php
/**
 * The main template file
 * 
 * @package Voimation
 */

get_header(); ?>

<main class="min-h-screen bg-gradient-hero">
    
    <!-- Hero Section -->
    <section class="hero-section py-20 px-4">
        <div class="container mx-auto max-w-6xl text-center">
            <div class="hero-glow rounded-3xl p-12">
                <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gradient">
                    <?php echo esc_html(get_theme_mod('voimation_hero_title', 'Revolutionize Your Healthcare Practice with AI-Powered Call Automation')); ?>
                </h1>
                <p class="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
                    <?php echo esc_html(get_theme_mod('voimation_hero_subtitle', 'Streamline patient communications, reduce no-shows, and enhance patient satisfaction with our cutting-edge AI technology designed specifically for healthcare providers.')); ?>
                </p>
                <a href="<?php echo esc_url(get_theme_mod('voimation_calendly_url', 'https://calendly.com/voimation/30min')); ?>" 
                   class="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg btn-glow hover:scale-105 transition-all duration-300">
                    Book Your Free Consultation Call
                </a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 px-4">
        <div class="container mx-auto max-w-6xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-6">
                    Our <span class="text-gradient">AI-Powered</span> Services
                </h2>
                <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Comprehensive automation solutions designed specifically for healthcare practices
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $services = get_posts(array(
                    'post_type' => 'voimation_service',
                    'posts_per_page' => 6,
                    'post_status' => 'publish'
                ));
                
                if (empty($services)) {
                    // Default services if none are created
                    $default_services = array(
                        array(
                            'title' => 'Appointment Reminders',
                            'description' => 'Automated calls and texts to reduce no-shows and keep your schedule full.',
                            'icon' => '📅'
                        ),
                        array(
                            'title' => 'Insurance Verification',
                            'description' => 'Streamline insurance verification process with intelligent automation.',
                            'icon' => '🛡️'
                        ),
                        array(
                            'title' => 'Patient Follow-up',
                            'description' => 'Personalized post-visit follow-ups to ensure patient satisfaction.',
                            'icon' => '📞'
                        ),
                        array(
                            'title' => 'Prescription Refills',
                            'description' => 'Automated prescription refill reminders and processing.',
                            'icon' => '💊'
                        ),
                        array(
                            'title' => 'Test Results',
                            'description' => 'Secure delivery of test results and lab notifications.',
                            'icon' => '📋'
                        ),
                        array(
                            'title' => 'Payment Reminders',
                            'description' => 'Gentle payment reminders and billing inquiries handling.',
                            'icon' => '💳'
                        )
                    );
                    
                    foreach ($default_services as $service) {
                        ?>
                        <div class="card-float bg-card rounded-lg p-6 border border-border">
                            <div class="text-4xl mb-4"><?php echo $service['icon']; ?></div>
                            <h3 class="text-xl font-semibold mb-3 text-card-foreground"><?php echo $service['title']; ?></h3>
                            <p class="text-muted-foreground"><?php echo $service['description']; ?></p>
                        </div>
                        <?php
                    }
                } else {
                    foreach ($services as $service) {
                        ?>
                        <div class="card-float bg-card rounded-lg p-6 border border-border">
                            <?php if (has_post_thumbnail($service->ID)) : ?>
                                <div class="mb-4">
                                    <?php echo get_the_post_thumbnail($service->ID, 'thumbnail', array('class' => 'w-16 h-16 object-cover rounded')); ?>
                                </div>
                            <?php endif; ?>
                            <h3 class="text-xl font-semibold mb-3 text-card-foreground"><?php echo get_the_title($service->ID); ?></h3>
                            <p class="text-muted-foreground"><?php echo get_the_excerpt($service->ID); ?></p>
                        </div>
                        <?php
                    }
                }
                ?>
            </div>
        </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div class="container mx-auto max-w-6xl text-center">
            <h2 class="text-3xl md:text-5xl font-bold mb-8">
                Why Choose <span class="text-gradient">Voimation</span>?
            </h2>
            <div class="grid md:grid-cols-3 gap-8 mt-12">
                <div class="text-center">
                    <div class="text-5xl mb-4">⚡</div>
                    <h3 class="text-xl font-semibold mb-3">Lightning Fast</h3>
                    <p class="text-muted-foreground">Deploy AI automation in minutes, not months</p>
                </div>
                <div class="text-center">
                    <div class="text-5xl mb-4">🎯</div>
                    <h3 class="text-xl font-semibold mb-3">Healthcare Focused</h3>
                    <p class="text-muted-foreground">Built specifically for healthcare workflows</p>
                </div>
                <div class="text-center">
                    <div class="text-5xl mb-4">🔒</div>
                    <h3 class="text-xl font-semibold mb-3">HIPAA Compliant</h3>
                    <p class="text-muted-foreground">Enterprise-grade security and compliance</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4">
        <div class="container mx-auto max-w-4xl text-center">
            <div class="bg-gradient-cosmic rounded-3xl p-12 animate-pulse-glow">
                <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Ready to Transform Your Practice?
                </h2>
                <p class="text-xl mb-8 text-white/90">
                    Join hundreds of healthcare providers who have revolutionized their patient communications with Voimation.
                </p>
                <a href="<?php echo esc_url(get_theme_mod('voimation_calendly_url', 'https://calendly.com/voimation/30min')); ?>" 
                   class="inline-block bg-white text-cosmic-purple px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300">
                    Schedule Your Demo Today
                </a>
            </div>
        </div>
    </section>

    <!-- Blog Posts / Latest Updates -->
    <?php if (have_posts()) : ?>
    <section class="py-20 px-4">
        <div class="container mx-auto max-w-6xl">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Latest Updates</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php while (have_posts()) : the_post(); ?>
                <article class="card-float bg-card rounded-lg overflow-hidden border border-border">
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="aspect-video overflow-hidden">
                            <?php the_post_thumbnail('medium', array('class' => 'w-full h-full object-cover')); ?>
                        </div>
                    <?php endif; ?>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-3 text-card-foreground">
                            <a href="<?php the_permalink(); ?>" class="hover:text-primary transition-colors"><?php the_title(); ?></a>
                        </h3>
                        <p class="text-muted-foreground mb-4"><?php the_excerpt(); ?></p>
                        <a href="<?php the_permalink(); ?>" class="text-primary font-medium hover:underline">Read More →</a>
                    </div>
                </article>
                <?php endwhile; ?>
            </div>
        </div>
    </section>
    <?php endif; ?>

</main>

<?php get_footer(); ?>
<?php
/**
 * Template for Pricing Page
 * 
 * @package Voimation
 */

get_header(); ?>

<main class="min-h-screen bg-gradient-hero">
    
    <!-- Pricing Hero Section -->
    <section class="py-20 px-4">
        <div class="container mx-auto max-w-6xl text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gradient">
                Simple, Transparent Pricing
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
                Choose the perfect plan for your practice. All plans include HIPAA compliance, 24/7 support, and seamless EMR integration.
            </p>
        </div>
    </section>

    <!-- Pricing Plans -->
    <section class="py-20 px-4">
        <div class="container mx-auto max-w-6xl">
            <div class="grid md:grid-cols-3 gap-8">
                
                <?php
                $pricing_plans = get_posts(array(
                    'post_type' => 'voimation_pricing',
                    'posts_per_page' => -1,
                    'post_status' => 'publish',
                    'orderby' => 'menu_order',
                    'order' => 'ASC'
                ));
                
                if (empty($pricing_plans)) {
                    // Default pricing plans if none are created
                    $default_plans = array(
                        array(
                            'title' => 'Starter',
                            'price' => '$299',
                            'period' => 'per month',
                            'description' => 'Perfect for small practices',
                            'features' => array(
                                'Up to 500 automated calls/month',
                                'Appointment reminders',
                                'Basic follow-up calls',
                                'Email support',
                                'EMR integration (1 system)',
                                'HIPAA compliant infrastructure'
                            ),
                            'popular' => false,
                            'button_text' => 'Get Started'
                        ),
                        array(
                            'title' => 'Professional',
                            'price' => '$599',
                            'period' => 'per month',
                            'description' => 'Ideal for growing practices',
                            'features' => array(
                                'Up to 1,500 automated calls/month',
                                'All Starter features',
                                'Insurance verification',
                                'Prescription refill automation',
                                'Priority phone support',
                                'Advanced analytics dashboard',
                                'Multiple EMR integrations'
                            ),
                            'popular' => true,
                            'button_text' => 'Most Popular'
                        ),
                        array(
                            'title' => 'Enterprise',
                            'price' => 'Custom',
                            'period' => 'pricing',
                            'description' => 'For large healthcare organizations',
                            'features' => array(
                                'Unlimited automated calls',
                                'All Professional features',
                                'Custom AI workflows',
                                'Dedicated account manager',
                                'Custom integrations',
                                '24/7 phone support',
                                'White-label options'
                            ),
                            'popular' => false,
                            'button_text' => 'Contact Sales'
                        )
                    );
                    
                    foreach ($default_plans as $plan) {
                        $popular_class = $plan['popular'] ? 'ring-2 ring-primary scale-105' : '';
                        $button_class = $plan['popular'] ? 'bg-gradient-cosmic text-white' : 'bg-primary text-primary-foreground';
                        ?>
                        <div class="card-float bg-card rounded-lg p-8 border border-border relative <?php echo $popular_class; ?>">
                            <?php if ($plan['popular']) : ?>
                            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span class="bg-gradient-cosmic text-white px-4 py-2 rounded-full text-sm font-medium">
                                    Most Popular
                                </span>
                            </div>
                            <?php endif; ?>
                            
                            <div class="text-center mb-8">
                                <h3 class="text-2xl font-bold text-card-foreground mb-2"><?php echo $plan['title']; ?></h3>
                                <p class="text-muted-foreground mb-4"><?php echo $plan['description']; ?></p>
                                <div class="mb-4">
                                    <span class="text-4xl font-bold text-gradient"><?php echo $plan['price']; ?></span>
                                    <span class="text-muted-foreground">/ <?php echo $plan['period']; ?></span>
                                </div>
                            </div>
                            
                            <ul class="space-y-4 mb-8">
                                <?php foreach ($plan['features'] as $feature) : ?>
                                <li class="flex items-center text-muted-foreground">
                                    <span class="text-primary mr-3">✓</span>
                                    <?php echo $feature; ?>
                                </li>
                                <?php endforeach; ?>
                            </ul>
                            
                            <a href="<?php echo esc_url(get_theme_mod('voimation_calendly_url', 'https://calendly.com/voimation/30min')); ?>" 
                               class="block w-full text-center <?php echo $button_class; ?> px-6 py-3 rounded-lg font-medium btn-glow hover:scale-105 transition-all duration-300">
                                <?php echo $plan['button_text']; ?>
                            </a>
                        </div>
                        <?php
                    }
                } else {
                    foreach ($pricing_plans as $plan) {
                        $price = get_post_meta($plan->ID, '_voimation_price', true);
                        $period = get_post_meta($plan->ID, '_voimation_period', true);
                        $features = get_post_meta($plan->ID, '_voimation_features', true);
                        $is_popular = get_post_meta($plan->ID, '_voimation_popular', true);
                        
                        $popular_class = $is_popular ? 'ring-2 ring-primary scale-105' : '';
                        $button_class = $is_popular ? 'bg-gradient-cosmic text-white' : 'bg-primary text-primary-foreground';
                        
                        $features_array = array_filter(explode("\n", $features));
                        ?>
                        <div class="card-float bg-card rounded-lg p-8 border border-border relative <?php echo $popular_class; ?>">
                            <?php if ($is_popular) : ?>
                            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span class="bg-gradient-cosmic text-white px-4 py-2 rounded-full text-sm font-medium">
                                    Most Popular
                                </span>
                            </div>
                            <?php endif; ?>
                            
                            <div class="text-center mb-8">
                                <h3 class="text-2xl font-bold text-card-foreground mb-2"><?php echo get_the_title($plan->ID); ?></h3>
                                <p class="text-muted-foreground mb-4"><?php echo get_the_excerpt($plan->ID); ?></p>
                                <div class="mb-4">
                                    <span class="text-4xl font-bold text-gradient"><?php echo $price; ?></span>
                                    <?php if ($period) : ?>
                                    <span class="text-muted-foreground">/ <?php echo $period; ?></span>
                                    <?php endif; ?>
                                </div>
                            </div>
                            
                            <?php if (!empty($features_array)) : ?>
                            <ul class="space-y-4 mb-8">
                                <?php foreach ($features_array as $feature) : ?>
                                <li class="flex items-center text-muted-foreground">
                                    <span class="text-primary mr-3">✓</span>
                                    <?php echo trim($feature); ?>
                                </li>
                                <?php endforeach; ?>
                            </ul>
                            <?php endif; ?>
                            
                            <a href="<?php echo esc_url(get_theme_mod('voimation_calendly_url', 'https://calendly.com/voimation/30min')); ?>" 
                               class="block w-full text-center <?php echo $button_class; ?> px-6 py-3 rounded-lg font-medium btn-glow hover:scale-105 transition-all duration-300">
                                Get Started
                            </a>
                        </div>
                        <?php
                    }
                }
                ?>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div class="container mx-auto max-w-4xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    Frequently Asked <span class="text-gradient">Questions</span>
                </h2>
            </div>

            <div class="space-y-6">
                <div class="bg-card rounded-lg p-6 border border-border">
                    <h3 class="text-lg font-semibold mb-3 text-card-foreground">Is there a setup fee?</h3>
                    <p class="text-muted-foreground">No, there are no setup fees. We include onboarding and training in all our plans to ensure you get the most value from day one.</p>
                </div>
                
                <div class="bg-card rounded-lg p-6 border border-border">
                    <h3 class="text-lg font-semibold mb-3 text-card-foreground">Can I change plans anytime?</h3>
                    <p class="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
                </div>
                
                <div class="bg-card rounded-lg p-6 border border-border">
                    <h3 class="text-lg font-semibold mb-3 text-card-foreground">What EMR systems do you integrate with?</h3>
                    <p class="text-muted-foreground">We integrate with all major EMR systems including Epic, Cerner, AllScripts, eClinicalWorks, and many more. Custom integrations are available for Enterprise plans.</p>
                </div>
                
                <div class="bg-card rounded-lg p-6 border border-border">
                    <h3 class="text-lg font-semibold mb-3 text-card-foreground">Is my patient data secure?</h3>
                    <p class="text-muted-foreground">Absolutely. We maintain HIPAA compliance with enterprise-grade security, encryption, and regular security audits to protect all patient information.</p>
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
                    Join hundreds of healthcare providers already using Voimation
                </p>
                <a href="<?php echo esc_url(get_theme_mod('voimation_calendly_url', 'https://calendly.com/voimation/30min')); ?>" 
                   class="inline-block bg-white text-cosmic-purple px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300">
                    Start Your Free Trial
                </a>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
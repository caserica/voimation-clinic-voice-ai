    <footer class="bg-muted border-t border-border">
        <div class="container mx-auto px-4 py-12">
            <div class="grid md:grid-cols-4 gap-8">
                
                <!-- Company Info -->
                <div class="col-span-2">
                    <?php if (has_custom_logo()) : ?>
                        <div class="mb-4">
                            <?php the_custom_logo(); ?>
                        </div>
                    <?php else : ?>
                        <h3 class="text-2xl font-bold text-gradient mb-4">Voimation</h3>
                    <?php endif; ?>
                    
                    <p class="text-muted-foreground mb-6 max-w-md">
                        Revolutionizing healthcare communication through AI-powered automation. 
                        Helping practices streamline operations and enhance patient satisfaction.
                    </p>
                    
                    <div class="space-y-2">
                        <p class="text-muted-foreground">
                            📧 <a href="mailto:<?php echo esc_attr(get_theme_mod('voimation_email', 'hello@voimation.com')); ?>" 
                                  class="hover:text-primary transition-colors">
                                <?php echo esc_html(get_theme_mod('voimation_email', 'hello@voimation.com')); ?>
                            </a>
                        </p>
                        <p class="text-muted-foreground">
                            📞 <a href="tel:<?php echo esc_attr(str_replace(' ', '', get_theme_mod('voimation_phone', '+1 (555) 123-4567'))); ?>" 
                                  class="hover:text-primary transition-colors">
                                <?php echo esc_html(get_theme_mod('voimation_phone', '+1 (555) 123-4567')); ?>
                            </a>
                        </p>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="font-semibold mb-4">Quick Links</h3>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'menu_class' => 'space-y-2',
                        'container' => false,
                        'fallback_cb' => 'voimation_footer_menu',
                    ));
                    ?>
                </div>

                <!-- Services -->
                <div>
                    <h3 class="font-semibold mb-4">Services</h3>
                    <ul class="space-y-2 text-muted-foreground">
                        <li><a href="#" class="hover:text-primary transition-colors">Appointment Reminders</a></li>
                        <li><a href="#" class="hover:text-primary transition-colors">Insurance Verification</a></li>
                        <li><a href="#" class="hover:text-primary transition-colors">Patient Follow-up</a></li>
                        <li><a href="#" class="hover:text-primary transition-colors">Prescription Refills</a></li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <div class="text-muted-foreground text-sm">
                    <p>&copy; <?php echo date('Y'); ?> Voimation. All rights reserved.</p>
                </div>
                <div class="flex space-x-6 mt-4 md:mt-0 text-sm">
                    <a href="<?php echo home_url('/privacy-policy'); ?>" class="text-muted-foreground hover:text-primary transition-colors">
                        Privacy Policy
                    </a>
                    <a href="<?php echo home_url('/terms-of-service'); ?>" class="text-muted-foreground hover:text-primary transition-colors">
                        Terms of Service
                    </a>
                </div>
            </div>
        </div>

        <!-- Widget Area -->
        <?php if (is_active_sidebar('footer-widgets')) : ?>
        <div class="bg-card border-t border-border py-8">
            <div class="container mx-auto px-4">
                <?php dynamic_sidebar('footer-widgets'); ?>
            </div>
        </div>
        <?php endif; ?>
    </footer>

    <!-- Mobile Menu JavaScript -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', function() {
                    mobileMenu.classList.toggle('hidden');
                });
            }
        });
    </script>

    <?php wp_footer(); ?>
</body>
</html>

<?php
// Fallback footer menu
function voimation_footer_menu() {
    echo '<ul class="space-y-2 text-muted-foreground">';
    echo '<li><a href="' . home_url() . '" class="hover:text-primary transition-colors">Home</a></li>';
    echo '<li><a href="' . home_url('/services') . '" class="hover:text-primary transition-colors">Services</a></li>';
    echo '<li><a href="' . home_url('/pricing') . '" class="hover:text-primary transition-colors">Pricing</a></li>';
    echo '<li><a href="' . home_url('/contact') . '" class="hover:text-primary transition-colors">Contact</a></li>';
    echo '<li><a href="' . home_url('/about') . '" class="hover:text-primary transition-colors">About</a></li>';
    echo '</ul>';
}
?>
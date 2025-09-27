<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
    
    <!-- Tailwind CSS Configuration -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        montserrat: ['Montserrat', 'sans-serif'],
                    },
                    colors: {
                        background: 'hsl(223, 47%, 3%)',
                        foreground: 'hsl(210, 40%, 98%)',
                        card: 'hsl(223, 47%, 5%)',
                        'card-foreground': 'hsl(210, 40%, 98%)',
                        primary: 'hsl(193, 100%, 50%)',
                        'primary-foreground': 'hsl(223, 47%, 3%)',
                        secondary: 'hsl(240, 19%, 16%)',
                        'secondary-foreground': 'hsl(210, 40%, 98%)',
                        muted: 'hsl(240, 19%, 16%)',
                        'muted-foreground': 'hsl(215, 20.2%, 65.1%)',
                        accent: 'hsl(271, 91%, 65%)',
                        'accent-foreground': 'hsl(210, 40%, 98%)',
                        border: 'hsl(240, 19%, 16%)',
                        'electric-blue': 'hsl(193, 100%, 50%)',
                        'electric-purple': 'hsl(271, 91%, 65%)',
                        'neon-cyan': 'hsl(180, 100%, 50%)',
                        'deep-space': 'hsl(223, 47%, 3%)',
                        'space-gray': 'hsl(240, 19%, 16%)',
                        'cosmic-purple': 'hsl(258, 90%, 66%)',
                    }
                }
            }
        }
    </script>
</head>

<body <?php body_class('font-montserrat bg-background text-foreground'); ?>>
<?php wp_body_open(); ?>

<header class="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
            
            <!-- Logo -->
            <div class="flex items-center space-x-4">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <a href="<?php echo home_url(); ?>" class="text-2xl font-bold text-gradient">
                        Voimation
                    </a>
                <?php endif; ?>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center space-x-8">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'flex space-x-8',
                    'container' => false,
                    'fallback_cb' => 'voimation_default_menu',
                ));
                ?>
                
                <!-- CTA Button -->
                <a href="<?php echo esc_url(get_theme_mod('voimation_calendly_url', 'https://calendly.com/voimation/30min')); ?>" 
                   class="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium btn-glow hover:scale-105 transition-all duration-300">
                    Book a Call
                </a>
            </nav>

            <!-- Mobile Menu Button -->
            <button class="md:hidden p-2 rounded-md hover:bg-muted" id="mobile-menu-button">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <nav class="md:hidden bg-card border-t border-border hidden" id="mobile-menu">
            <div class="px-4 py-4 space-y-4">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'space-y-4',
                    'container' => false,
                    'fallback_cb' => 'voimation_mobile_menu',
                ));
                ?>
                
                <a href="<?php echo esc_url(get_theme_mod('voimation_calendly_url', 'https://calendly.com/voimation/30min')); ?>" 
                   class="block w-full text-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium">
                    Book a Call
                </a>
            </div>
        </nav>
    </div>
</header>

<?php
// Fallback menu for desktop
function voimation_default_menu() {
    echo '<ul class="flex space-x-8">';
    echo '<li><a href="' . home_url() . '" class="hover:text-primary transition-colors">Home</a></li>';
    echo '<li><a href="' . home_url('/services') . '" class="hover:text-primary transition-colors">Services</a></li>';
    echo '<li><a href="' . home_url('/pricing') . '" class="hover:text-primary transition-colors">Pricing</a></li>';
    echo '<li><a href="' . home_url('/contact') . '" class="hover:text-primary transition-colors">Contact</a></li>';
    echo '</ul>';
}

// Fallback menu for mobile
function voimation_mobile_menu() {
    echo '<div class="space-y-4">';
    echo '<a href="' . home_url() . '" class="block py-2 hover:text-primary transition-colors">Home</a>';
    echo '<a href="' . home_url('/services') . '" class="block py-2 hover:text-primary transition-colors">Services</a>';
    echo '<a href="' . home_url('/pricing') . '" class="block py-2 hover:text-primary transition-colors">Pricing</a>';
    echo '<a href="' . home_url('/contact') . '" class="block py-2 hover:text-primary transition-colors">Contact</a>';
    echo '</div>';
}
?>
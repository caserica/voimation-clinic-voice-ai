<?php
/**
 * Elementor Widgets for Voimation Theme
 * 
 * @package Voimation
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Register Elementor widgets
function voimation_register_elementor_widgets($widgets_manager) {
    require_once(__DIR__ . '/widgets/hero-section.php');
    require_once(__DIR__ . '/widgets/service-card.php');
    require_once(__DIR__ . '/widgets/pricing-card.php');
    require_once(__DIR__ . '/widgets/cta-banner.php');
    
    $widgets_manager->register(new \Voimation_Hero_Section_Widget());
    $widgets_manager->register(new \Voimation_Service_Card_Widget());
    $widgets_manager->register(new \Voimation_Pricing_Card_Widget());
    $widgets_manager->register(new \Voimation_CTA_Banner_Widget());
}
add_action('elementor/widgets/register', 'voimation_register_elementor_widgets');

// Add Elementor widget categories
function voimation_add_elementor_widget_categories($elements_manager) {
    $elements_manager->add_category(
        'voimation',
        [
            'title' => esc_html__('Voimation', 'voimation'),
            'icon' => 'fa fa-plug',
        ]
    );
}
add_action('elementor/elements/categories_registered', 'voimation_add_elementor_widget_categories');
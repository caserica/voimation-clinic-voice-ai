<?php
/**
 * Voimation Theme Functions
 * 
 * @package Voimation
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Theme setup
function voimation_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-background');
    add_theme_support('custom-header');
    add_theme_support('custom-logo');
    
    // Enable support for Block Editor (Gutenberg)
    add_theme_support('wp-block-styles');
    add_theme_support('align-wide');
    add_theme_support('editor-styles');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'voimation'),
        'footer' => __('Footer Menu', 'voimation'),
    ));
}
add_action('after_setup_theme', 'voimation_setup');

// Enqueue styles and scripts
function voimation_scripts() {
    // Main stylesheet
    wp_enqueue_style('voimation-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Tailwind CSS CDN (for rapid development)
    wp_enqueue_style('tailwindcss', 'https://cdn.tailwindcss.com', array(), '3.4.0');
    
    // Custom JavaScript
    wp_enqueue_script('voimation-scripts', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('voimation-scripts', 'voimation_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('voimation_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'voimation_scripts');

// Register sidebars/widget areas
function voimation_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'voimation'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here to appear in your sidebar.', 'voimation'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer Widget Area', 'voimation'),
        'id'            => 'footer-widgets',
        'description'   => __('Add widgets here to appear in your footer.', 'voimation'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'voimation_widgets_init');

// Customizer settings
function voimation_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('voimation_hero', array(
        'title' => __('Hero Section', 'voimation'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('voimation_hero_title', array(
        'default' => 'Revolutionize Your Healthcare Practice with AI-Powered Call Automation',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('voimation_hero_title', array(
        'label' => __('Hero Title', 'voimation'),
        'section' => 'voimation_hero',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('voimation_hero_subtitle', array(
        'default' => 'Streamline patient communications, reduce no-shows, and enhance patient satisfaction with our cutting-edge AI technology designed specifically for healthcare providers.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('voimation_hero_subtitle', array(
        'label' => __('Hero Subtitle', 'voimation'),
        'section' => 'voimation_hero',
        'type' => 'textarea',
    ));
    
    // Contact Information
    $wp_customize->add_section('voimation_contact', array(
        'title' => __('Contact Information', 'voimation'),
        'priority' => 40,
    ));
    
    $wp_customize->add_setting('voimation_phone', array(
        'default' => '+1 (555) 123-4567',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('voimation_phone', array(
        'label' => __('Phone Number', 'voimation'),
        'section' => 'voimation_contact',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('voimation_email', array(
        'default' => 'hello@voimation.info',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('voimation_email', array(
        'label' => __('Email Address', 'voimation'),
        'section' => 'voimation_contact',
        'type' => 'email',
    ));
    
    $wp_customize->add_setting('voimation_calendly_url', array(
        'default' => 'https://calendly.com/voimation/30min',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('voimation_calendly_url', array(
        'label' => __('Calendly URL', 'voimation'),
        'section' => 'voimation_contact',
        'type' => 'url',
    ));
}
add_action('customize_register', 'voimation_customize_register');

// Custom post types for services
function voimation_custom_post_types() {
    register_post_type('voimation_service', array(
        'labels' => array(
            'name' => __('Services', 'voimation'),
            'singular_name' => __('Service', 'voimation'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-phone',
        'show_in_rest' => true, // Enable Gutenberg editor
    ));
    
    register_post_type('voimation_pricing', array(
        'labels' => array(
            'name' => __('Pricing Plans', 'voimation'),
            'singular_name' => __('Pricing Plan', 'voimation'),
        ),
        'public' => true,
        'has_archive' => false,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-money-alt',
        'show_in_rest' => true,
    ));
}
add_action('init', 'voimation_custom_post_types');

// Add custom fields for pricing plans
function voimation_pricing_meta_boxes() {
    add_meta_box(
        'voimation_pricing_details',
        __('Pricing Details', 'voimation'),
        'voimation_pricing_meta_box_callback',
        'voimation_pricing'
    );
}
add_action('add_meta_boxes', 'voimation_pricing_meta_boxes');

function voimation_pricing_meta_box_callback($post) {
    wp_nonce_field('voimation_pricing_meta_box', 'voimation_pricing_meta_box_nonce');
    
    $price = get_post_meta($post->ID, '_voimation_price', true);
    $period = get_post_meta($post->ID, '_voimation_period', true);
    $features = get_post_meta($post->ID, '_voimation_features', true);
    $is_popular = get_post_meta($post->ID, '_voimation_popular', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="voimation_price">Price</label></th>';
    echo '<td><input type="text" id="voimation_price" name="voimation_price" value="' . esc_attr($price) . '" /></td></tr>';
    
    echo '<tr><th><label for="voimation_period">Period</label></th>';
    echo '<td><input type="text" id="voimation_period" name="voimation_period" value="' . esc_attr($period) . '" placeholder="per month" /></td></tr>';
    
    echo '<tr><th><label for="voimation_features">Features (one per line)</label></th>';
    echo '<td><textarea id="voimation_features" name="voimation_features" rows="5" cols="50">' . esc_textarea($features) . '</textarea></td></tr>';
    
    echo '<tr><th><label for="voimation_popular">Popular Plan</label></th>';
    echo '<td><input type="checkbox" id="voimation_popular" name="voimation_popular" value="1" ' . checked(1, $is_popular, false) . ' /></td></tr>';
    echo '</table>';
}

function voimation_save_pricing_meta($post_id) {
    if (!isset($_POST['voimation_pricing_meta_box_nonce']) || 
        !wp_verify_nonce($_POST['voimation_pricing_meta_box_nonce'], 'voimation_pricing_meta_box')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    update_post_meta($post_id, '_voimation_price', sanitize_text_field($_POST['voimation_price']));
    update_post_meta($post_id, '_voimation_period', sanitize_text_field($_POST['voimation_period']));
    update_post_meta($post_id, '_voimation_features', sanitize_textarea_field($_POST['voimation_features']));
    update_post_meta($post_id, '_voimation_popular', isset($_POST['voimation_popular']) ? 1 : 0);
}
add_action('save_post', 'voimation_save_pricing_meta');

// AJAX handler for contact form
function voimation_handle_contact_form() {
    check_ajax_referer('voimation_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Send email
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission from ' . $name;
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = array('Content-Type: text/html; charset=UTF-8');
    
    $sent = wp_mail($to, $subject, $body, $headers);
    
    if ($sent) {
        wp_send_json_success('Thank you for your message. We\'ll get back to you soon!');
    } else {
        wp_send_json_error('Sorry, there was an error sending your message. Please try again.');
    }
}
add_action('wp_ajax_voimation_contact', 'voimation_handle_contact_form');
add_action('wp_ajax_nopriv_voimation_contact', 'voimation_handle_contact_form');

// Add Elementor support
function voimation_elementor_support() {
    add_theme_support('elementor');
}
add_action('after_setup_theme', 'voimation_elementor_support');

// Custom Elementor widgets (if Elementor is active)
if (class_exists('Elementor\Plugin')) {
    require_once get_template_directory() . '/elementor-widgets/elementor-widgets.php';
}
<?php
/**
 * Voimation Hero Section Widget for Elementor
 * 
 * @package Voimation
 */

if (!defined('ABSPATH')) {
    exit;
}

class Voimation_Hero_Section_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'voimation-hero-section';
    }

    public function get_title() {
        return esc_html__('Voimation Hero Section', 'voimation');
    }

    public function get_icon() {
        return 'eicon-banner';
    }

    public function get_categories() {
        return ['voimation'];
    }

    protected function register_controls() {
        
        // Content Tab
        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__('Content', 'voimation'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'title',
            [
                'label' => esc_html__('Title', 'voimation'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Revolutionize Your Healthcare Practice', 'voimation'),
                'placeholder' => esc_html__('Enter your title', 'voimation'),
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label' => esc_html__('Subtitle', 'voimation'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__('Streamline patient communications and enhance satisfaction with AI-powered automation.', 'voimation'),
                'placeholder' => esc_html__('Enter your subtitle', 'voimation'),
            ]
        );

        $this->add_control(
            'button_text',
            [
                'label' => esc_html__('Button Text', 'voimation'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Book Your Free Consultation', 'voimation'),
            ]
        );

        $this->add_control(
            'button_url',
            [
                'label' => esc_html__('Button URL', 'voimation'),
                'type' => \Elementor\Controls_Manager::URL,
                'placeholder' => esc_html__('https://calendly.com/voimation/30min', 'voimation'),
                'default' => [
                    'url' => 'https://calendly.com/voimation/30min',
                ],
            ]
        );

        $this->end_controls_section();
        
        // Style Tab
        $this->start_controls_section(
            'style_section',
            [
                'label' => esc_html__('Style', 'voimation'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'title_color',
            [
                'label' => esc_html__('Title Color', 'voimation'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .hero-title' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'title_typography',
                'selector' => '{{WRAPPER}} .hero-title',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        
        if (!empty($settings['button_url']['url'])) {
            $this->add_link_attributes('button_url', $settings['button_url']);
        }
        ?>
        
        <section class="hero-section py-20 px-4 bg-gradient-hero">
            <div class="container mx-auto max-w-6xl text-center">
                <div class="hero-glow rounded-3xl p-12">
                    <h1 class="hero-title text-4xl md:text-6xl font-bold mb-6 text-gradient">
                        <?php echo wp_kses_post($settings['title']); ?>
                    </h1>
                    <p class="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
                        <?php echo wp_kses_post($settings['subtitle']); ?>
                    </p>
                    <?php if (!empty($settings['button_text'])) : ?>
                    <a <?php echo $this->get_render_attribute_string('button_url'); ?> 
                       class="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg btn-glow hover:scale-105 transition-all duration-300">
                        <?php echo esc_html($settings['button_text']); ?>
                    </a>
                    <?php endif; ?>
                </div>
            </div>
        </section>
        
        <?php
    }
}
<?php
/**
 * Voimation CTA Banner Widget for Elementor
 * 
 * @package Voimation
 */

if (!defined('ABSPATH')) {
    exit;
}

class Voimation_CTA_Banner_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'voimation-cta-banner';
    }

    public function get_title() {
        return esc_html__('Voimation CTA Banner', 'voimation');
    }

    public function get_icon() {
        return 'eicon-call-to-action';
    }

    public function get_categories() {
        return ['voimation'];
    }

    protected function register_controls() {
        
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
                'default' => esc_html__('Ready to Transform Your Practice?', 'voimation'),
            ]
        );

        $this->add_control(
            'description',
            [
                'label' => esc_html__('Description', 'voimation'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__('Join hundreds of healthcare providers who have revolutionized their patient communications with Voimation.', 'voimation'),
            ]
        );

        $this->add_control(
            'button_text',
            [
                'label' => esc_html__('Button Text', 'voimation'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Schedule Your Demo Today', 'voimation'),
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

        $this->add_control(
            'background_style',
            [
                'label' => esc_html__('Background Style', 'voimation'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'cosmic',
                'options' => [
                    'cosmic' => esc_html__('Cosmic Gradient', 'voimation'),
                    'primary' => esc_html__('Primary Gradient', 'voimation'),
                    'dark' => esc_html__('Dark Solid', 'voimation'),
                ],
            ]
        );

        $this->add_control(
            'enable_animation',
            [
                'label' => esc_html__('Enable Pulse Animation', 'voimation'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'voimation'),
                'label_off' => esc_html__('No', 'voimation'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        
        if (!empty($settings['button_url']['url'])) {
            $this->add_link_attributes('button_url', $settings['button_url']);
        }
        
        $background_class = '';
        $animation_class = $settings['enable_animation'] === 'yes' ? 'animate-pulse-glow' : '';
        
        switch ($settings['background_style']) {
            case 'cosmic':
                $background_class = 'bg-gradient-cosmic';
                break;
            case 'primary':
                $background_class = 'bg-gradient-primary';
                break;
            case 'dark':
                $background_class = 'bg-card';
                break;
        }
        ?>
        
        <section class="py-20 px-4">
            <div class="container mx-auto max-w-4xl text-center">
                <div class="<?php echo esc_attr($background_class . ' ' . $animation_class); ?> rounded-3xl p-12">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
                        <?php echo wp_kses_post($settings['title']); ?>
                    </h2>
                    <p class="text-xl mb-8 text-white/90">
                        <?php echo wp_kses_post($settings['description']); ?>
                    </p>
                    <?php if (!empty($settings['button_text'])) : ?>
                    <a <?php echo $this->get_render_attribute_string('button_url'); ?> 
                       class="inline-block bg-white text-cosmic-purple px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300">
                        <?php echo esc_html($settings['button_text']); ?>
                    </a>
                    <?php endif; ?>
                </div>
            </div>
        </section>
        
        <?php
    }
}
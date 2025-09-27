<?php
/**
 * Voimation Pricing Card Widget for Elementor
 * 
 * @package Voimation
 */

if (!defined('ABSPATH')) {
    exit;
}

class Voimation_Pricing_Card_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'voimation-pricing-card';
    }

    public function get_title() {
        return esc_html__('Voimation Pricing Card', 'voimation');
    }

    public function get_icon() {
        return 'eicon-price-table';
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
            'plan_name',
            [
                'label' => esc_html__('Plan Name', 'voimation'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Starter', 'voimation'),
            ]
        );

        $this->add_control(
            'price',
            [
                'label' => esc_html__('Price', 'voimation'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('$299', 'voimation'),
            ]
        );

        $this->add_control(
            'period',
            [
                'label' => esc_html__('Period', 'voimation'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('per month', 'voimation'),
            ]
        );

        $this->add_control(
            'description',
            [
                'label' => esc_html__('Description', 'voimation'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Perfect for small practices', 'voimation'),
            ]
        );

        $this->add_control(
            'is_popular',
            [
                'label' => esc_html__('Popular Plan', 'voimation'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'voimation'),
                'label_off' => esc_html__('No', 'voimation'),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $this->add_control(
            'features',
            [
                'label' => esc_html__('Features', 'voimation'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => [
                    [
                        'name' => 'feature_text',
                        'label' => esc_html__('Feature', 'voimation'),
                        'type' => \Elementor\Controls_Manager::TEXT,
                        'default' => esc_html__('Feature name', 'voimation'),
                    ],
                ],
                'default' => [
                    [
                        'feature_text' => esc_html__('Up to 500 automated calls/month', 'voimation'),
                    ],
                    [
                        'feature_text' => esc_html__('Appointment reminders', 'voimation'),
                    ],
                    [
                        'feature_text' => esc_html__('Email support', 'voimation'),
                    ],
                ],
                'title_field' => '{{{ feature_text }}}',
            ]
        );

        $this->add_control(
            'button_text',
            [
                'label' => esc_html__('Button Text', 'voimation'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Get Started', 'voimation'),
            ]
        );

        $this->add_control(
            'button_url',
            [
                'label' => esc_html__('Button URL', 'voimation'),
                'type' => \Elementor\Controls_Manager::URL,
                'placeholder' => esc_html__('https://calendly.com/voimation/30min', 'voimation'),
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        
        if (!empty($settings['button_url']['url'])) {
            $this->add_link_attributes('button_url', $settings['button_url']);
        }
        
        $popular_class = $settings['is_popular'] === 'yes' ? 'ring-2 ring-primary scale-105' : '';
        $button_class = $settings['is_popular'] === 'yes' ? 'bg-gradient-cosmic text-white' : 'bg-primary text-primary-foreground';
        ?>
        
        <div class="card-float bg-card rounded-lg p-8 border border-border relative <?php echo esc_attr($popular_class); ?>">
            <?php if ($settings['is_popular'] === 'yes') : ?>
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-gradient-cosmic text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                </span>
            </div>
            <?php endif; ?>
            
            <div class="text-center mb-8">
                <h3 class="text-2xl font-bold text-card-foreground mb-2">
                    <?php echo esc_html($settings['plan_name']); ?>
                </h3>
                <p class="text-muted-foreground mb-4">
                    <?php echo esc_html($settings['description']); ?>
                </p>
                <div class="mb-4">
                    <span class="text-4xl font-bold text-gradient"><?php echo esc_html($settings['price']); ?></span>
                    <?php if (!empty($settings['period'])) : ?>
                    <span class="text-muted-foreground">/ <?php echo esc_html($settings['period']); ?></span>
                    <?php endif; ?>
                </div>
            </div>
            
            <?php if (!empty($settings['features'])) : ?>
            <ul class="space-y-4 mb-8">
                <?php foreach ($settings['features'] as $feature) : ?>
                <li class="flex items-center text-muted-foreground">
                    <span class="text-primary mr-3">✓</span>
                    <?php echo esc_html($feature['feature_text']); ?>
                </li>
                <?php endforeach; ?>
            </ul>
            <?php endif; ?>
            
            <?php if (!empty($settings['button_text'])) : ?>
            <a <?php echo $this->get_render_attribute_string('button_url'); ?> 
               class="block w-full text-center <?php echo esc_attr($button_class); ?> px-6 py-3 rounded-lg font-medium btn-glow hover:scale-105 transition-all duration-300">
                <?php echo esc_html($settings['button_text']); ?>
            </a>
            <?php endif; ?>
        </div>
        
        <?php
    }
}
<?php
/**
 * Voimation Service Card Widget for Elementor
 * 
 * @package Voimation
 */

if (!defined('ABSPATH')) {
    exit;
}

class Voimation_Service_Card_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'voimation-service-card';
    }

    public function get_title() {
        return esc_html__('Voimation Service Card', 'voimation');
    }

    public function get_icon() {
        return 'eicon-info-box';
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
            'icon',
            [
                'label' => esc_html__('Icon', 'voimation'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => '📅',
                'description' => esc_html__('Enter an emoji or icon', 'voimation'),
            ]
        );

        $this->add_control(
            'title',
            [
                'label' => esc_html__('Title', 'voimation'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Appointment Reminders', 'voimation'),
            ]
        );

        $this->add_control(
            'description',
            [
                'label' => esc_html__('Description', 'voimation'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__('Automated calls and texts to reduce no-shows and keep your schedule full.', 'voimation'),
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
                        'feature_text' => esc_html__('Multi-channel reminders', 'voimation'),
                    ],
                    [
                        'feature_text' => esc_html__('Personalized timing', 'voimation'),
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
                'default' => esc_html__('Learn More', 'voimation'),
            ]
        );

        $this->add_control(
            'button_url',
            [
                'label' => esc_html__('Button URL', 'voimation'),
                'type' => \Elementor\Controls_Manager::URL,
                'placeholder' => esc_html__('https://example.com', 'voimation'),
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
        
        <div class="card-float bg-card rounded-lg p-8 border border-border">
            <div class="flex items-center mb-6">
                <div class="text-4xl mr-4"><?php echo esc_html($settings['icon']); ?></div>
                <h3 class="text-2xl font-bold text-card-foreground"><?php echo esc_html($settings['title']); ?></h3>
            </div>
            
            <p class="text-muted-foreground mb-6">
                <?php echo wp_kses_post($settings['description']); ?>
            </p>
            
            <?php if (!empty($settings['features'])) : ?>
            <ul class="space-y-3 text-muted-foreground mb-6">
                <?php foreach ($settings['features'] as $feature) : ?>
                <li class="flex items-center">
                    <span class="text-primary mr-2">✓</span>
                    <?php echo esc_html($feature['feature_text']); ?>
                </li>
                <?php endforeach; ?>
            </ul>
            <?php endif; ?>
            
            <?php if (!empty($settings['button_text'])) : ?>
            <a <?php echo $this->get_render_attribute_string('button_url'); ?> 
               class="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium btn-glow">
                <?php echo esc_html($settings['button_text']); ?>
            </a>
            <?php endif; ?>
        </div>
        
        <?php
    }
}
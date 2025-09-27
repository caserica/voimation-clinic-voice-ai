# Voimation WordPress Theme

A modern, AI-powered healthcare automation theme built for WordPress with full drag-and-drop support via Elementor.

## 🚀 Features

- **Modern Design System**: Futuristic AI agency theme with custom color palette
- **Elementor Ready**: Custom widgets for drag-and-drop page building
- **HIPAA Compliant Focus**: Built specifically for healthcare providers
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Built-in SEO best practices
- **Contact Forms**: Working contact form with email integration
- **Custom Post Types**: Services and pricing plans management
- **Customizer Integration**: Easy theme customization via WordPress Customizer

## 📋 Installation

### Option 1: Upload Theme Files
1. Download all theme files
2. Compress the `wordpress-theme` folder into a ZIP file
3. In WordPress Admin, go to Appearance > Themes > Add New
4. Click "Upload Theme" and select your ZIP file
5. Activate the theme

### Option 2: Manual Installation
1. Upload the theme folder to `/wp-content/themes/`
2. Activate the theme in WordPress Admin > Appearance > Themes

## 🔧 Setup & Configuration

### Required Plugins
- **Elementor** (recommended for drag-and-drop editing)
- **Contact Form 7** (optional, for advanced forms)

### Theme Customization
1. Go to Appearance > Customize
2. Configure:
   - **Hero Section**: Main title and subtitle
   - **Contact Information**: Phone, email, Calendly URL
   - **Site Identity**: Logo and site title

### Creating Content

#### Services
1. Go to Services in WordPress Admin
2. Add new services with descriptions and features
3. Set featured images for better visual appeal

#### Pricing Plans
1. Go to Pricing Plans in WordPress Admin
2. Create pricing tiers with:
   - Price and billing period
   - Feature lists
   - Popular plan designation

#### Pages
Create these essential pages:
- **Home** (uses front-page.php or index.php)
- **Services** (uses page-services.php template)
- **Pricing** (uses page-pricing.php template)  
- **Contact** (uses page-contact.php template)

## 🎨 Elementor Widgets

The theme includes custom Elementor widgets:

### Voimation Hero Section
- Customizable title and subtitle
- Call-to-action button
- Background styling options

### Voimation Service Card
- Icon/emoji support
- Feature lists
- Custom styling

### Voimation Pricing Card
- Price and billing period
- Feature comparisons
- Popular plan highlighting

### Voimation CTA Banner
- Multiple background styles
- Animation options
- Conversion-focused design

## 🎨 Design System

### Colors
The theme uses a sophisticated dark-tech color palette:
- **Primary**: Electric Blue (#00BFFF)
- **Accent**: Electric Purple (#A855F7)
- **Background**: Deep Space (#0A0F1C)
- **Cards**: Space Gray (#1E293B)

### Typography
- **Font**: Montserrat (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Components
- **Buttons**: Glow effects and hover animations
- **Cards**: Float animations and elegant shadows
- **Gradients**: Cosmic and primary gradient options

## 📧 Contact Form Setup

### Default Contact Form
The theme includes a built-in contact form on the contact page that:
- Collects name, email, practice details, and message
- Sends emails via WordPress wp_mail function
- Includes AJAX submission for better UX

### Email Configuration
1. Configure SMTP in WordPress (recommended plugin: WP Mail SMTP)
2. Update recipient email in Appearance > Customize > Contact Information

## 🔧 Customization

### Child Theme (Recommended)
Create a child theme to preserve customizations:

```php
// child-theme/style.css
/*
Theme Name: Voimation Child
Template: voimation
*/

@import url("../voimation/style.css");

/* Your custom styles here */
```

### Custom CSS
Add custom CSS via:
- Appearance > Customize > Additional CSS
- Child theme's style.css file

### PHP Customizations
- Override template files in child theme
- Use WordPress hooks and filters
- Modify functions.php in child theme

## 🚀 Performance Optimization

### Recommendations
1. **Caching Plugin**: Use WP Rocket or W3 Total Cache
2. **Image Optimization**: Install Smush or ShortPixel
3. **CDN**: Implement CloudFlare or similar
4. **Database**: Regularly clean with WP-Optimize

### Built-in Optimizations
- Minified CSS and optimized animations
- Efficient use of Tailwind CSS
- Optimized image loading
- Clean, semantic HTML

## 🔒 Security & HIPAA Compliance

### Theme Features
- Secure contact form handling
- Sanitized user inputs
- Escape output properly
- Follow WordPress security best practices

### Additional Security (Recommended)
- **Security Plugin**: Wordfence or Sucuri
- **SSL Certificate**: Enable HTTPS
- **Regular Updates**: Keep WordPress and plugins updated
- **Backup Solution**: UpdraftPlus or similar

## 📱 Mobile Optimization

### Responsive Design
- Mobile-first approach
- Touch-friendly navigation
- Optimized images for different screen sizes
- Fast loading on mobile networks

### Testing
Test on various devices:
- Mobile phones (iOS/Android)
- Tablets
- Desktop computers
- Different browsers

## 🎯 SEO Optimization

### Built-in Features
- Semantic HTML structure
- Optimized meta tags
- Fast loading times
- Mobile-friendly design

### Recommended Plugins
- **Yoast SEO** or **RankMath**
- **Google Analytics**
- **Google Search Console**

## 🐛 Troubleshooting

### Common Issues

#### Elementor Widgets Not Showing
- Ensure Elementor plugin is activated
- Check if theme is properly activated
- Clear cache (if caching plugin is active)

#### Contact Form Not Working
- Verify email settings in WordPress
- Check spam folder for test emails
- Ensure proper SMTP configuration

#### Styling Issues
- Clear browser cache
- Check for plugin conflicts
- Verify Tailwind CSS is loading

### Support
For theme support:
1. Check this documentation first
2. Review WordPress and Elementor documentation
3. Search WordPress support forums
4. Contact theme developer

## 📄 License

This theme is licensed under the GPL v2 or later.

## 🔄 Updates

### Version History
- **v1.0.0**: Initial release with full Elementor support

### Future Updates
- Additional Elementor widgets
- WooCommerce integration
- Advanced customization options
- Performance enhancements

---

**Built for healthcare providers who want to showcase their AI-powered automation services with a professional, modern website.**
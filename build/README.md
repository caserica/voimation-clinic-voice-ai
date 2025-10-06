# Voimation Website - Static Build

This is a standalone, production-ready version of the Voimation website that can be deployed to any web hosting service.

## What's Included

- **Complete static website** with all pages (Home, Services, Pricing, Contact)
- **Responsive design** optimized for all devices
- **Modern CSS** with the original design system and animations
- **Client-side routing** for smooth navigation
- **Working contact form** with validation
- **Optimized performance** with minimal dependencies

## File Structure

```
build/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # Complete CSS with design system
│   └── js/
│       └── main.js         # JavaScript with routing and functionality
└── README.md               # This file
```

## Deployment Options

### 1. Traditional Web Hosting (cPanel, FTP)
1. Upload all files to your web server's public folder
2. Ensure `index.html` is in the root directory
3. Your site will be accessible at your domain

### 2. Netlify
1. Zip the entire `build` folder
2. Drag and drop to Netlify dashboard
3. Your site will be live instantly

### 3. Vercel
1. Upload files via Vercel dashboard
2. Or connect to GitHub repository containing these files

### 4. GitHub Pages
1. Create new repository
2. Upload these files
3. Enable GitHub Pages in repository settings

### 5. Any Static Hosting Service
These files work with any static hosting provider like:
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh
- Render
- And many more

## Features

✅ **Fully Responsive** - Works on all devices
✅ **Fast Loading** - Optimized CSS and minimal JavaScript
✅ **SEO Friendly** - Proper meta tags and semantic HTML
✅ **Modern Design** - Original Voimation design system preserved
✅ **Working Forms** - Contact form with validation
✅ **Smooth Animations** - All original hover effects and transitions
✅ **Cross-Browser Compatible** - Works in all modern browsers

## Customization

### Update Content
Edit the JavaScript functions in `assets/js/main.js`:
- `getHomePage()` - Homepage content
- `getServicesPage()` - Services page content
- `getPricingPage()` - Pricing page content
- `getContactPage()` - Contact page content

### Update Styling
Modify `assets/css/styles.css` to change:
- Colors (CSS custom properties at the top)
- Typography and spacing
- Animations and effects

### Update Contact Information
Search for and replace:
- `hello@voimation.info`
- `+1 (555) 123-4567`
- `https://calendly.com/voimation/30min`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

This build is optimized for performance:
- **Minimal JavaScript** - Only essential functionality
- **Efficient CSS** - No unused styles
- **Fast Loading** - No external dependencies except fonts
- **Mobile Optimized** - Responsive images and layouts

## Need Help?

If you need assistance with deployment or customization, the files are designed to be simple and well-commented for easy modification.
# AGA Website - Modern Redesign

A modern, standards-compliant static website for the American Genetic Association (AGA), built with Vite, Tailwind CSS, and vanilla JavaScript.

## Project Overview

This is a complete redesign of the AGA website using modern web technologies while maintaining all existing content and functionality from the original site. The new implementation is:

- **Static**: No backend server required - runs on standard Apache/nginx
- **Fast**: Optimized build with modern bundling and asset optimization
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG 2.1 compliant with semantic HTML and ARIA labels
- **Maintainable**: Clean, modular code using modern JavaScript ES6+ modules

## Technology Stack

- **Build Tool**: Vite 5.x (fast development and optimized production builds)
- **CSS Framework**: Tailwind CSS 3.x (utility-first styling)
- **JavaScript**: Vanilla ES6+ modules (no framework dependencies)
- **HTML**: Semantic HTML5 with accessibility features

## Features Implemented (Phase 1 & 2)

### Phase 1: Project Foundation ✅
- [x] Project structure and build system setup
- [x] Vite configuration for static site generation
- [x] Tailwind CSS with AGA brand colors (#0777b9, #15a9ff)
- [x] PostCSS pipeline for CSS processing
- [x] All images and assets copied from original site

### Phase 2: Core Components ✅
- [x] Responsive navigation with dropdown menus
- [x] Mobile hamburger menu
- [x] Tab panel system with keyboard navigation
- [x] Card components for content display
- [x] Footer with contact information
- [x] Complete homepage with all original content
- [x] Social media integration
- [x] Google Analytics integration

## Project Structure

```
aga/
├── src/
│   ├── index.html              # Homepage with all content
│   ├── styles/
│   │   ├── main.css           # Main stylesheet with Tailwind
│   │   └── components.css     # Component-specific styles
│   ├── scripts/
│   │   ├── main.js            # Main entry point
│   │   └── modules/
│   │       ├── navigation.js  # Navigation component
│   │       └── tabs.js        # Tab panel component
├── public/
│   ├── images/                # Logo, icons, social media
│   ├── img/                   # Content images
│   ├── assets/                # Journal covers, PDFs
│   └── user-files/            # User-uploaded content
├── dist/                      # Build output (generated)
├── package.json               # Dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── postcss.config.js         # PostCSS configuration
```

## Development Commands

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Opens at http://localhost:3000 with hot module reloading.

### Build for Production
```bash
npm run build
```
Generates optimized static files in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

## Content Migration

All content from the original AGA website has been preserved, including:

- Mission statement and organizational information
- Award announcements (Special Event Awards & EECG Awards)
- In Memoriam section (Robert K. Wayne)
- Past Presidents' Symposia information
- Journal of Heredity latest issue information
- News and updates from award recipients
- Member benefits list
- All social media links
- Contact information

## Brand Colors

The AGA brand colors have been extracted and configured in Tailwind:

- **Primary Blue**: `#0777b9` (aga-blue)
- **Light Blue**: `#15a9ff` (aga-blue-light)
- **Dark Background**: `#111111` (aga-dark)
- **Gray Tones**: `#4a5568`, `#C0C0C0`, `#A2A2A2`

## Accessibility Features

- Semantic HTML5 structure
- ARIA labels and roles for interactive elements
- Keyboard navigation support for all features
- Focus indicators on interactive elements
- Screen reader friendly navigation
- Responsive text sizing
- Proper heading hierarchy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

Current build metrics:
- **HTML**: 40.65 kB (8.50 kB gzipped)
- **CSS**: 37.74 kB (6.67 kB gzipped)
- **JavaScript**: 4.44 kB (1.42 kB gzipped)

Total page weight: ~82 kB uncompressed, ~16.6 kB gzipped

## Deployment

The built website (in `dist/` directory) can be deployed to any static web hosting:

1. Build the project: `npm run build`
2. Copy contents of `dist/` to your web server
3. Configure Apache/nginx to serve the static files
4. Ensure proper HTTPS and caching headers

### Apache .htaccess Example
```apache
# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## Next Steps (Future Phases)

### Phase 3: Additional Pages
- About pages (council, bylaws, contact)
- Membership pages
- Symposium archive pages
- Awards pages with forms
- Journal pages
- News articles (28 articles to migrate)

### Phase 4: Forms & Interactivity
- Form handling integration (Formspree)
- Stripe payment integration for donations
- Search functionality (Pagefind)

### Phase 5: Optimization
- Image optimization (WebP conversion)
- Progressive Web App features
- Advanced SEO optimization
- Performance monitoring

## Contributing

This website was built following modern web standards and best practices:

- Mobile-first responsive design
- Component-based architecture
- Modular JavaScript with ES6+ features
- Utility-first CSS with Tailwind
- Semantic HTML with accessibility in mind

## License

Copyright © 2015-2025, American Genetic Association. All Rights Reserved.

Website by Rareheron Web Design, Newport, OR

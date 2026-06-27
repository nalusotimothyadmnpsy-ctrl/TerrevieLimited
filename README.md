# Terrieve — Transforming Cassava into Opportunity

A premium, responsive agro-processing website for Terrieve, a leading cassava value-addition company in Nigeria.

## Overview

Terrieve is an agribusiness focused on cassava value addition through sustainable farming partnerships, modern processing, and high-quality product development. This website showcases our products, mission, governance, and commitment to transparency and compliance.

## Features

### Pages
- **Home** — Hero section, about snapshot, products showcase, process overview
- **About Us** — Company story, mission/vision/values, outgrower farmer program
- **Meet Us** — Leadership team and founders
- **Products** — Detailed product catalog with categories and specifications
- **Legal & Compliance** — Corporate governance, regulatory documents, and compliance materials
- **Contact** — Contact form and business inquiry channel

### Design Elements
- Premium glassmorphism cards
- Smooth scroll reveal animations
- Responsive mobile, tablet, and desktop layouts
- Fixed-position navbar with smooth scroll effects
- Breadcrumb navigation on inner pages
- CTA banners and engagement sections
- Professional color palette (green, gold, white)
- Poppins font family for modern typography

### Technical Features
- Pure HTML, CSS, and JavaScript (no frameworks)
- Fully responsive design
- Smooth animations and transitions
- Accessible markup (ARIA labels, semantic HTML)
- SEO-optimized metadata
- Back-to-top button with scroll detection
- Mobile hamburger navigation
- Newsletter subscription
- Contact form integration ready

## Project Structure

```
cassava project 002/
├── index.html                 # Home page
├── about.html                 # About Us page
├── founders.html              # Meet Us / Leadership page
├── products.html              # Products catalog page
├── legal-compliance.html       # Legal & Compliance page
├── contact.html               # Contact page
├── css/
│   └── styles.css             # All styling (responsive, animations, components)
├── js/
│   ├── script.js              # Core JavaScript (navbar, animations, forms)
│   └── legal-compliance-docs.js # Document library configuration
├── images/
│   └── (hero backgrounds, product images, team photos)
├── Documents/
│   ├── TerrieVie_Business_Profile.pdf
│   ├── Terrevie Business Registration Certificate....pdf
│   └── Terrieve roles and rensponsibilities.pdf
├── README.md                  # This file
├── .gitignore                 # Git ignore rules
├── LICENSE                    # MIT License
└── DEPLOYMENT.md              # Deployment instructions
```

## Getting Started

### Local Preview
1. Extract the project folder
2. Open any HTML file directly in a web browser, or
3. Run a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (with http-server)
   npx http-server
   ```
4. Visit `http://localhost:8000` in your browser

### Customization
- **Logo:** Replace `images/logo-placeholder.png` with your logo
- **Colors:** Edit CSS variables in `css/styles.css` (`:root` section)
- **Content:** Update HTML text in each `.html` file
- **Images:** Add hero backgrounds, product photos, and team images to `images/`
- **Documents:** Add PDFs/documents to `Documents/` folder (automatically listed on Legal & Compliance page)

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization
- Minify CSS and JS before production
- Optimize and compress all images
- Use WebP format with fallbacks for hero images
- Consider CDN for static assets
- Enable gzip compression on server

## SEO Best Practices
✅ Semantic HTML structure  
✅ Meta descriptions on all pages  
✅ Responsive design (mobile-first)  
✅ Fast page load times  
✅ Accessible navigation  
✅ Schema.org structured data ready  

## Accessibility
- Semantic HTML5 elements
- ARIA labels and landmarks
- Keyboard navigation support
- High contrast color palette
- Focus indicators on interactive elements
- Alt text on images (to be added per image)

## Deployment

### Hosting Options
1. **Static Hosting** — Netlify, Vercel, GitHub Pages
2. **Web Server** — AWS S3, Azure Static Web Apps, DigitalOcean
3. **Traditional Hosting** — Shared hosting, VPS, Dedicated Server

### Pre-Deployment Checklist
- [ ] Update all placeholder images
- [ ] Customize logo and branding
- [ ] Update social media links in footer
- [ ] Test all links and forms
- [ ] Verify document links work
- [ ] Optimize images (compress and convert to WebP)
- [ ] Minify CSS and JavaScript
- [ ] Set up proper metadata and keywords
- [ ] Test on multiple browsers and devices
- [ ] Enable HTTPS/SSL certificate
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Configure contact form backend (if using)

See `DEPLOYMENT.md` for detailed deployment instructions.

## Contact Form Setup
The contact form is ready for integration with:
- Formspree
- Email service providers
- Custom backend API

Update the form action in `contact.html` to your backend endpoint.

## Document Management
The Legal & Compliance page automatically displays all PDF documents in the `Documents/` folder. Simply add or remove files from the folder to update the page.

## Support & Maintenance
- Keep CSS and JavaScript organized by component
- Comment complex sections
- Test responsive design regularly
- Monitor analytics and user behavior
- Update content seasonally
- Maintain document library with latest compliance materials

## License
This project is provided under the MIT License. See `LICENSE` file for details.

## Credits
- Design: Premium, responsive agro-processing website template
- Font: Poppins (Google Fonts)
- Icons: SVG-based custom icons
- Animations: CSS3 and JavaScript (Intersection Observer API)

---

**Version:** 1.0.0  
**Last Updated:** June 27, 2026  
**Status:** Production Ready

For questions or support, contact: hello@terrieve.com

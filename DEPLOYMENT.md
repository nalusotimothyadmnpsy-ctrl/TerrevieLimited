# Deployment Guide for Terrieve Website

This guide provides step-by-step instructions for deploying the Terrieve website to production.

## Pre-Deployment Checklist

- [ ] All images are optimized and compressed
- [ ] Logo placeholder has been replaced
- [ ] All links are tested and working
- [ ] Contact form backend is configured
- [ ] Social media links are updated
- [ ] Analytics code is added (if using)
- [ ] CSS and JS are minified (optional but recommended)
- [ ] SSL certificate is ready
- [ ] Domain is registered and DNS is configured
- [ ] HTTPS is enabled
- [ ] 404 page is configured
- [ ] Sitemap.xml is generated

## Deployment Options

### Option 1: Netlify (Recommended for Static Sites)

1. **Sign up** at [netlify.com](https://netlify.com)
2. **Connect your Git repository** or drag-and-drop the project folder
3. **Set build settings:**
   - Build command: (leave empty for static sites)
   - Publish directory: `.` (root folder)
4. **Enable HTTPS** (automatic)
5. **Custom domain** setup in Site Settings → Domain Management
6. **Deploy** — Site goes live automatically

### Option 2: Vercel

1. **Sign up** at [vercel.com](https://vercel.com)
2. **Import project** from Git or upload folder
3. **Configure:**
   - Framework: Other (static)
   - Root Directory: `.`
4. **Deploy** — Automatic deployment on every push
5. **Add custom domain** in Project Settings

### Option 3: GitHub Pages

1. **Create repository** on [github.com](https://github.com)
2. **Push files** to repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/terrieve.git
   git push -u origin main
   ```
3. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Select "main" branch as source
   - Save
4. **Site is live** at `https://yourusername.github.io/terrieve/`

### Option 4: AWS S3 + CloudFront

1. **Create S3 bucket:**
   ```bash
   aws s3 mb s3://terrieve-website
   ```
2. **Enable static website hosting** in S3 bucket properties
3. **Upload files:**
   ```bash
   aws s3 sync . s3://terrieve-website --delete
   ```
4. **Set bucket policy** to allow public read access
5. **Create CloudFront distribution** for CDN and HTTPS
6. **Point domain** to CloudFront distribution

### Option 5: Traditional Web Hosting

1. **Connect via FTP/SFTP** using FileZilla or similar
2. **Upload all files** to public_html directory
3. **Set file permissions:**
   - HTML files: 644
   - Directories: 755
4. **Verify HTTPS** is enabled
5. **Test website** on multiple browsers

### Option 6: Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Deploy:
```bash
docker build -t terrieve-website .
docker run -d -p 80:80 terrieve-website
```

## Post-Deployment Steps

1. **Test all pages** in Chrome, Firefox, Safari, Edge
2. **Mobile responsive test** on iPhone, Android
3. **Verify all links** are working (internal and external)
4. **Test contact form** submission
5. **Check image loading** times
6. **Validate SEO metadata** and Open Graph tags
7. **Test form submissions** with test data
8. **Monitor error logs** for any issues
9. **Set up uptime monitoring** (UptimeRobot, Pingdom)
10. **Configure backups** if on traditional hosting

## Performance Optimization

### Image Optimization
```bash
# Use imagemin or similar tools
# Compress images to reduce file size
# Use WebP format with fallback to PNG/JPG
```

### CSS/JS Minification
```bash
# Minify CSS
postcss css/styles.css --use cssnano -o css/styles.min.css

# Minify JS
terser js/script.js -o js/script.min.js
```

### Caching Headers
Set in web server configuration:
```
Cache-Control: public, max-age=31536000 (for static assets)
Cache-Control: no-cache (for HTML files)
```

## Security Checklist

- [ ] Enable HTTPS/SSL
- [ ] Set up security headers:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Strict-Transport-Security: max-age=31536000`
- [ ] Configure Content Security Policy (CSP)
- [ ] Remove any sensitive information from code
- [ ] Set up rate limiting on contact form
- [ ] Regular security audits
- [ ] Keep dependencies updated

## Analytics & Monitoring

### Google Analytics Setup
Add to `<head>` in all HTML files:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Uptime Monitoring
Set up with services like:
- UptimeRobot
- Pingdom
- New Relic
- DataDog

## Maintenance & Updates

### Regular Tasks
- Monitor analytics weekly
- Update content monthly
- Review and update compliance documents quarterly
- Check for broken links monthly
- Update security certificates before expiration
- Review server logs for errors

### Version Control
Keep Git commits organized:
```bash
git add .
git commit -m "Update content and documents"
git push origin main
```

### Rollback Procedure
If issues occur after deployment:
1. Keep previous version backed up
2. Revert to previous commit:
   ```bash
   git revert HEAD
   git push origin main
   ```
3. Investigate issues in development environment
4. Test fixes thoroughly before re-deploying

## Domain & Email Setup

### Domain Configuration
1. Purchase domain (Namecheap, GoDaddy, etc.)
2. Point nameservers to hosting provider
3. Configure DNS records:
   - A record → server IP
   - CNAME → CDN domain (if using CloudFront, Netlify, etc.)
   - MX records → email provider

### Email Setup
Use services like:
- Google Workspace
- Microsoft 365
- Zoho Mail
- ProtonMail for Business

Update contact form to send to configured email.

## Troubleshooting

### Common Issues

**Issue:** CSS/JS not loading
- Solution: Check file paths, ensure files are uploaded, check browser console

**Issue:** Images not displaying
- Solution: Verify image paths, check file permissions, ensure images are in correct folder

**Issue:** Contact form not working
- Solution: Verify form action URL, check backend service, review browser console errors

**Issue:** Slow page load
- Solution: Optimize images, minify CSS/JS, enable caching, use CDN

**Issue:** Mobile layout broken
- Solution: Test responsive design, check viewport meta tag, verify CSS media queries

## Support & Help

- **Netlify Support:** https://support.netlify.com
- **Vercel Support:** https://vercel.com/support
- **AWS Support:** https://aws.amazon.com/support
- **GitHub Support:** https://docs.github.com

---

**Last Updated:** June 27, 2026  
**Version:** 1.0

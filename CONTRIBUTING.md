# Contributing to Terrieve Website

We welcome contributions to improve the Terrieve website. Please follow these guidelines.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork:**
   ```bash
   git clone https://github.com/yourusername/terrieve-website.git
   cd terrieve-website
   ```
3. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Local Testing
```bash
# Start local server
python -m http.server 8000

# Visit http://localhost:8000
```

### Code Style

#### HTML
- Use semantic HTML5 elements
- Include proper ARIA labels for accessibility
- Keep indentation consistent (2 spaces)
- Add comments for complex sections

#### CSS
- Follow BEM naming convention for classes
- Organize by component (navbar, hero, cards, etc.)
- Use CSS custom properties (variables)
- Keep specificity low
- Test responsive design at breakpoints: 480px, 768px, 1024px

#### JavaScript
- Use vanilla JavaScript (no jQuery/frameworks)
- Add comments for complex logic
- Use meaningful variable names
- Test on multiple browsers

## Making Changes

### Content Updates
1. Update relevant HTML file
2. Test links and formatting
3. Commit with descriptive message

### Adding Documents
1. Add PDF to `Documents/` folder
2. Update `js/legal-compliance-docs.js` with document metadata
3. Test that document appears on Legal & Compliance page

### Adding Images
1. Optimize image (compress, resize)
2. Save to `images/` folder
3. Update HTML with proper alt text
4. Test loading and responsiveness

### Bug Fixes
1. Create issue if one doesn't exist
2. Link your PR to the issue
3. Provide clear description of the fix
4. Test fix thoroughly

## Commit Messages

Use clear, descriptive commit messages:

```
✨ Add feature name
🐛 Fix bug description
📝 Update documentation
🎨 Improve design/layout
♻️ Refactor code section
🚀 Deploy or release changes
```

## Pull Request Process

1. **Update your branch:**
   ```bash
   git pull origin main
   ```
2. **Ensure tests pass** and no console errors
3. **Create a descriptive PR** with:
   - Clear title
   - Description of changes
   - Screenshots (if visual changes)
   - Link to related issue
4. **Wait for review** and address feedback
5. **Merge** once approved

## Testing Checklist

Before submitting a PR:

- [ ] All pages load without errors
- [ ] All links work (internal and external)
- [ ] Forms submit correctly
- [ ] Responsive design works at all breakpoints
- [ ] No console errors or warnings
- [ ] Images display properly
- [ ] Animations smooth and not janky
- [ ] Accessibility features work (keyboard nav, screen readers)
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)

## Reporting Issues

Create an issue with:
- Clear, descriptive title
- Steps to reproduce (if bug)
- Expected vs. actual behavior
- Screenshots/videos (if relevant)
- Browser and OS information
- Links to related PRs/issues

## Documentation

When adding features:
1. Update README.md if relevant
2. Add comments to code
3. Update this file if needed
4. Include examples in documentation

## Code Review

Reviews focus on:
- Code quality and best practices
- Performance implications
- Accessibility compliance
- Browser compatibility
- Security considerations
- Maintainability

## Questions?

- Open an issue with your question
- Tag with `question` label
- Check existing issues first

## Code of Conduct

We are committed to providing a welcoming environment. Please be respectful and professional in all interactions.

---

**Thank you for contributing to Terrieve!**

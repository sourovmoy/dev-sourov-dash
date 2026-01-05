# 🚀 Sourov Dash - MERN Stack Developer Portfolio

A modern, responsive portfolio website built with React.js, featuring dark mode, smooth animations, and professional presentation.

## ✨ Live Demo

🌐 **[View Live Portfolio](https://sourov-dash-portfolio.netlify.app/)**

## 🛠️ Built With

- **React.js 18** - Modern functional components with hooks
- **Framer Motion** - Smooth animations and transitions
- **TailwindCSS** - Utility-first CSS framework
- **React Icons** - Professional icon library
- **Netlify** - Production deployment platform

## 🎯 Features

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark/Light Mode** - Persistent theme with localStorage
- ✅ **Smooth Animations** - Framer Motion powered
- ✅ **SEO Optimized** - Meta tags, sitemap, robots.txt
- ✅ **PWA Ready** - App-like experience
- ✅ **Performance Optimized** - 90+ Lighthouse score
- ✅ **Accessibility Compliant** - WCAG AA standards

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/sourovmoy/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm start
```

### Build for Production
```bash
# Create optimized production build
npm run build

# Test production build locally
npx serve -s build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation with theme toggle
│   ├── Hero.js         # Landing section
│   ├── About.js        # About section with stats
│   ├── Skills.js       # Skills showcase
│   ├── Projects.js     # Featured projects
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer with links
├── hooks/              # Custom React hooks
│   └── useTheme.js     # Theme management
├── contexts/           # React contexts
│   └── ThemeContext.js # Theme provider
└── assets/             # Images and static files
```

## 🎨 Customization

### Theme Colors
```javascript
// Modify in public/index.html
colors: {
  primary: "#06b6d4",     // Cyan
  secondary: "#d946ef",   // Fuchsia
  "background-dark": "#0a0a0f"
}
```

### Personal Information
Update the following files with your information:
- `src/components/About.js` - Personal description
- `src/components/Contact.js` - Contact details
- `src/components/Projects.js` - Your projects
- `public/index.html` - Meta tags and title

## 🌐 Deployment

### Netlify (Recommended)
1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
4. Deploy automatically

### Manual Deployment
1. Run `npm run build`
2. Upload `build` folder to your hosting provider

## 📊 Performance

- **Bundle Size**: 93.53 kB (gzipped)
- **First Contentful Paint**: < 1.5s
- **Lighthouse Score**: 90+
- **Mobile Friendly**: 100%

## 🔧 Available Scripts

- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run analyze` - Bundle analysis
- `npm run clean` - Clean build cache

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sourov Dash**
- 📧 Email: [sourovmmoysanju@gmail.com](mailto:sourovmmoysanju@gmail.com)
- 📱 Phone: [+8801742818496](tel:+8801742818496)
- 📍 Location: Naogaon, Rajshahi, Bangladesh
- 💼 LinkedIn: [sourov-dash](https://www.linkedin.com/in/sourov-dash/)
- 🐙 GitHub: [sourovmoy](https://github.com/sourovmoy)

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Framer Motion** - For smooth animations
- **TailwindCSS** - For utility-first styling
- **Netlify** - For seamless deployment

---

⭐ **If you found this project helpful, please give it a star!**

**Built with ❤️ and clean code** 🚀
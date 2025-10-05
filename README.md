# ZATech - South Africa's Largest Tech Community

A modern, responsive community platform built with React 19 and Vite, featuring comprehensive testing, cross-browser compatibility, and enterprise-grade security.

## ✨ Features

- 🌐 **Responsive Design** - Mobile-first with hamburger navigation
- 🧪 **Comprehensive Testing** - 37 unit tests + 65 E2E tests across browsers
- 🛡️ **Enterprise Security** - CSP, input sanitization, rate limiting, reCAPTCHA
- 📱 **Cross-Browser Support** - Chrome, Firefox, Safari (desktop + mobile)
- ⚡ **Modern Stack** - React 19, Vite, Firebase, Playwright
- 🎯 **Production Ready** - Zero lint errors, security audits, performance optimized

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase project with Firestore enabled
- Google reCAPTCHA v3 site key

### Installation
```bash
# Clone the repository
git clone https://github.com/Accompany-VC/zatech-website.git
cd zatech-website

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
# Edit .env.local with your Firebase and reCAPTCHA credentials

# Start development server
npm run dev
```

### Environment Variables
Create a `.env.local` file with:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

## 🏗️ Project Structure

```
zatech-website/
├── public/                       # Static assets served directly
├── src/                          # All source code
│   ├── components/               # Reusable UI components
│   │   ├── common/               # Shared components (Navbar, ErrorBoundary)
│   │   ├── forms/                # Form components (ReportForm)
│   │   └── ui/                   # UI elements (HeroSection, Cards, InviteEmailSection)
│   ├── pages/                    # Main page components (Home, Report)
│   ├── services/                 # Firebase and external API calls
│   ├── utils/                    # Helper functions and security utilities
│   ├── config/                   # Configuration files and constants
│   ├── assets/                   # Images, fonts, and other static files
│   └── test/                     # Test setup and utilities
├── tests/                        # End-to-end tests
│   └── e2e/                     # Playwright browser tests
├── .browserslistrc              # Browser compatibility targets
├── .env.example                 # Template for environment variables
├── .gitignore                   # Files to ignore in Git
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies and scripts
├── playwright.config.js         # Cross-browser testing config
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## 🔧 Development

### Available Scripts
```bash
# Development
npm run dev              # Start dev server with hot reload
npm run dev -- --host 0.0.0.0  # Start dev server accessible from phone

# Building
npm run build           # Build optimized production bundle
npm run preview         # Preview production build locally

# Testing
npm run test:run        # Run unit tests (Vitest)
npm run test:e2e        # Run cross-browser E2E tests (Playwright)

# Code Quality
npm run lint            # Run ESLint for code quality
npm audit              # Check for security vulnerabilities
```

### Security Testing
```bash
# The application automatically runs security monitoring in all modes
npm run dev

# Check browser console for:
# - CSP violation alerts  
# - Security monitoring status
# - Rate limiting status
```

## 🧪 Testing Cheat Sheet

### Quick Test Commands
```bash
# 🚀 FULL TEST SUITE (Run this before commits)
npm run test:run && npm run test:e2e && npm run lint && npm audit

# 🏃‍♂️ QUICK DEV CHECKS (During development)
npm run test:run    # Unit tests only (fast ~1-2 seconds)
npm run lint        # Code quality check (~1 second)
npm run dev         # Start dev server

# 🌐 CROSS-BROWSER TESTING (Before releases)
npm run test:e2e    # Full browser compatibility (~10-30 seconds)

# 🔒 SECURITY CHECK
npm audit           # Check for vulnerabilities
```

### When to Run What
| **When You...** | **Run This** | **Why** |
|-----------------|--------------|---------|
| **Add new component** | `npm run test:run` | Verify existing tests still pass |
| **Change existing code** | `npm run test:run` | Check for regressions |
| **Add new CSS/styles** | `npm run lint` | Catch style issues early |
| **Before committing** | Full test suite ⬆️ | Ensure nothing is broken |
| **Add new dependencies** | `npm audit` | Security check |
| **Test mobile/responsive** | `npm run dev -- --host 0.0.0.0` | Test on phone |
| **Before deployment** | `npm run test:e2e` | Cross-browser verification |

### Test-Driven Development Workflow
```bash
# 1. Start development
npm run dev

# 2. Make your changes
# ... edit code ...

# 3. Quick feedback loop (run frequently)
npm run test:run

# 4. Check code quality
npm run lint

# 5. Before committing (the big check)
npm run test:run && npm run test:e2e && npm run lint && npm audit
```

### Mobile Testing
```bash
# Start server for phone testing
npm run dev -- --host 0.0.0.0

# Then visit on your phone: http://YOUR_IP:5173/
# (Check terminal output for exact IP address)
```

## 🛡️ Security & Quality

### Security Features
- **Content Security Policy (CSP)**: Browser-level protection against XSS attacks
- **Input Sanitization**: DOMPurify integration with custom validation
- **Rate Limiting**: Advanced abuse prevention with progressive delays
- **Bot Protection**: Google reCAPTCHA v3 with score-based validation
- **Real-time Monitoring**: CSP violation tracking and security alerts

### Quality Assurance
- **37 Unit Tests** - Component logic and utility functions
- **65 E2E Tests** - Cross-browser compatibility (Chrome, Firefox, Safari)
- **Mobile Testing** - Responsive design verification
- **Code Quality** - ESLint with zero errors
- **Security Audits** - Automated dependency vulnerability scanning

### Browser Support
Configured via `.browserslistrc`:
- Chrome 88+, Firefox 85+, Safari 14+
- iOS Safari 14+, Android Chrome 88+
- Modern JavaScript features with graceful degradation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Follow the testing workflow (see Testing Cheat Sheet above)
4. Ensure all tests pass and code quality checks pass
5. Commit changes (`git commit -m 'Add amazing feature'`)
6. Push to branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines
- Follow React best practices and component patterns
- Maintain test coverage for new features
- Run the full test suite before committing
- Update documentation for significant changes
- Follow security patterns established in the codebase

## 🏆 Technical Achievements

This project demonstrates production-grade development practices:

- ✅ **Modern React Architecture** - Hooks, components, routing
- ✅ **Comprehensive Testing** - Unit, integration, E2E, cross-browser
- ✅ **Security First** - Multiple layers of protection
- ✅ **Performance Optimized** - Fast builds, optimized bundles
- ✅ **Mobile Ready** - Responsive design, touch-friendly
- ✅ **Developer Experience** - Hot reload, linting, type safety
- ✅ **Production Ready** - Build optimization, error handling

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Resources

- **Documentation**: This README covers all major aspects
- **Issues**: Report bugs via [GitHub Issues](https://github.com/Accompany-VC/zatech-website/issues)
- **Testing Guide**: See Testing Cheat Sheet section above
- **Security**: Follow established patterns in `src/utils/securityUtils.js`

---

Built with ❤️ for the South African tech community

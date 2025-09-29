## After clone
```
npm install# ZATech Anonymous Reporting System

A secure, anonymous reporting platform built with React and Firebase, featuring enterprise-grade security measures.

## 🛡️ Security Features

- **Content Security Policy (CSP)**: Browser-level protection against XSS attacks
- **Input Sanitization**: DOMPurify integration with custom validation
- **Rate Limiting**: Advanced abuse prevention with progressive delays
- **Bot Protection**: Google reCAPTCHA v3 with score-based validation
- **Real-time Monitoring**: CSP violation tracking and security alerts

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase project with Firestore enabled
- Google reCAPTCHA v3 site key

### Installation
```bash
# Clone the repository
git clone [your-repo-url]
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

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (Navbar, etc.)
│   └── forms/          # Form-specific components
├── config/             # Configuration files
│   ├── firebase.js     # Firebase configuration
│   ├── recaptcha.js    # reCAPTCHA configuration
│   └── csp.js          # Simple CSP configuration
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   └── Report.jsx      # Report submission page
├── services/           # Business logic layer
│   ├── reportService.js    # Report handling
│   ├── authService.js      # Authentication
│   └── firestoreService.js # Database operations
├── utils/              # Utility functions
│   └── securityUtils.js    # Security validation
└── constants/          # Application constants
```

## 🔧 Development

### Security Testing
```bash
# The application automatically runs security monitoring in all modes
npm run dev

# Check browser console for:
# - CSP violation alerts  
# - Security monitoring status
# - Rate limiting status
```

### Building for Production
```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

## 🛡️ Security Implementation

Our security approach uses multiple layers:

1. **Browser Level**: Content Security Policy prevents unauthorized resource loading
2. **Application Level**: Input sanitization and validation prevent injection attacks
3. **Service Level**: Rate limiting prevents abuse and spam
4. **User Level**: reCAPTCHA distinguishes humans from bots
5. **Data Level**: Firebase security rules protect data access

For detailed security information, see [SECURITY.md](./SECURITY.md).

## 📊 Features

### Anonymous Reporting
- **Secure Submission**: End-to-end encrypted report transmission
- **Input Validation**: Real-time content sanitization
- **Rate Limiting**: Prevents spam while allowing legitimate reports
- **Bot Protection**: Invisible reCAPTCHA validation

### Security Monitoring
- **CSP Violations**: Real-time browser security monitoring
- **Abuse Detection**: Automated rate limiting enforcement
- **Development Tools**: Security testing utilities

## 🎯 Best Practices Followed

- ✅ **Defense in Depth**: Multiple security layers
- ✅ **Principle of Least Privilege**: Minimal resource permissions
- ✅ **Input Validation**: Client and server-side validation
- ✅ **Secure Configuration**: Environment-based secrets
- ✅ **Real-time Monitoring**: Security violation tracking

## 📈 Performance

- **Bundle Size**: Optimized with Vite tree-shaking
- **Load Time**: Fast initial page load with code splitting
- **Security Overhead**: Minimal impact on user experience
- **Scalability**: Firebase auto-scaling backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Run security tests (`npm run dev` and check console)
4. Commit changes (`git commit -m 'Add amazing feature'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Security Guidelines
- Always run CSP tests before submitting
- Update security documentation for new features
- Follow input validation patterns
- Test rate limiting with new endpoints

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check [SECURITY.md](./SECURITY.md) for security details
- **Issues**: Report bugs via GitHub Issues
- **Security**: Contact security team for vulnerability reports

---

## Project Structure
```
zatech-website/
├── public/                       # Static assets served directly
├── src/                          # All source code
│   ├── components/               # Reusable UI components
│   │   ├── common/               # Shared components (Header, Footer, Navigation)
│   │   ├── forms/                # Form components (ContactForm, ReportForm)
│   │   └── ui/                   # Basic UI elements (Button, Card, Modal)
│   ├── pages/                    # Main page components (Home, About, Contact)
│   ├── services/                 # Firebase and external API calls
│   ├── utils/                    # Helper functions and utilities
│   ├── hooks/                    # Custom React hooks
│   ├── styles/                   # CSS files and styling
│   ├── config/                   # Configuration files and constants
│   └── assets/                   # Images, fonts, and other static files
├── .env                          # Environment variables (DO NOT COMMIT)
├── .env.example                  # Template for environment variables
├── .gitignore                    # Files to ignore in Git
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite configuration
└── README.md                     # This file
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## After clone
npm install
npm run dev


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

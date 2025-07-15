# HabitCoach 🎯

A modern Progressive Web App (PWA) built with Next.js, Tailwind CSS, and Radix UI to help users build and track better habits daily.

![HabitCoach](https://img.shields.io/badge/HabitCoach-PWA-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

## 🚀 Features

- **Progressive Web App (PWA)** - Installable, offline-ready, and mobile-first
- **Habit Tracking** - Track daily habits with streak counting
- **Responsive Design** - Works seamlessly across all devices
- **Dark/Light Theme** - Automatic theme switching with system preference
- **Real-time Analytics** - Progress visualization and completion rates
- **Offline Support** - Works without internet connection (with service worker)
- **Push Notifications** - Habit reminders and achievement notifications
- **Modern UI/UX** - Clean, accessible interface with smooth animations

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Pre-built accessible components
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons

### PWA & Performance
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **Web App Manifest** - PWA configuration
- **Service Worker Ready** - Offline functionality structure

## 📁 Project Structure

\`\`\`
habitcoach/
├── app/                          # Next.js App Router
│   ├── dashboard/               # Dashboard page route
│   │   └── page.tsx
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.tsx               # Root layout with PWA config
│   ├── manifest.ts              # PWA manifest configuration
│   └── page.tsx                 # Home page
│
├── components/                   # Reusable components
│   ├── pages/                   # Page-specific components
│   │   ├── dashboard-page.tsx   # Dashboard UI components
│   │   └── home-page.tsx        # Homepage UI components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── progress.tsx
│   │   └── ...                  # Other UI components
│   ├── app-wrapper.tsx          # App-level wrapper with splash logic
│   ├── install-prompt.tsx       # PWA install prompt
│   ├── navigation.tsx           # Main navigation component
│   ├── splash-screen.tsx        # Loading splash screen
│   └── theme-provider.tsx       # Theme context provider
│
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx          # Mobile detection hook
│   └── use-toast.ts            # Toast notification hook
│
├── lib/                        # Utility functions
│   └── utils.ts                # Common utilities (cn, etc.)
│
├── public/                     # Static assets
│   ├── icon-192x192.png       # PWA icons
│   ├── icon-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   └── manifest.json          # PWA manifest file
│
├── types/                     # TypeScript type definitions
│   └── stopwatch.ts          # Component type definitions
│
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
\`\`\`

## 🚦 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/habitcoach.git
   cd habitcoach
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📱 PWA Configuration

### Manifest Configuration
The PWA manifest is configured in \`app/manifest.ts\` with:
- App name and description
- Icons for different sizes
- Display mode (standalone)
- Theme colors
- Orientation settings

### Installation Prompt
- Automatic install prompt detection
- Custom install button component
- Cross-platform installation support

### Offline Support Structure
- Service worker ready configuration
- Caching strategies for static assets
- Offline page fallbacks

## 🎨 Styling System

### Tailwind CSS Configuration
- Custom color palette in \`tailwind.config.ts\`
- Dark/light theme variables
- Responsive breakpoints
- Custom component classes

### Theme System
- Automatic system theme detection
- Manual theme switching
- Persistent theme preferences
- CSS custom properties for colors

### Component Library
- **shadcn/ui** for accessible components
- **Radix UI** primitives for complex interactions
- Custom component variants
- Consistent design tokens

## 🔧 Development Guidelines

### Code Organization
- **Components**: Reusable UI components in \`components/\`
- **Pages**: Page-specific components in \`components/pages/\`
- **Hooks**: Custom React hooks in \`hooks/\`
- **Utils**: Helper functions in \`lib/\`
- **Types**: TypeScript definitions in \`types/\`

### Naming Conventions
- **Files**: kebab-case (\`habit-tracker.tsx\`)
- **Components**: PascalCase (\`HabitTracker\`)
- **Functions**: camelCase (\`trackHabit\`)
- **Constants**: UPPER_SNAKE_CASE (\`MAX_HABITS\`)

### Best Practices
- Use TypeScript for type safety
- Implement proper error boundaries
- Follow accessibility guidelines (WCAG)
- Optimize for performance (lazy loading, code splitting)
- Write semantic HTML
- Use proper ARIA attributes

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment
- **Docker**: Containerized deployment

### Environment Variables
Create \`.env.local\` for local development:
\`\`\`env
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Add other environment variables as needed
\`\`\`

## 📊 Performance Optimization

### Built-in Optimizations
- **Next.js Image Optimization** - Automatic image optimization
- **Code Splitting** - Automatic route-based code splitting
- **Tree Shaking** - Remove unused code
- **Bundle Analysis** - Analyze bundle size

### PWA Optimizations
- **Service Worker** - Cache static assets
- **App Shell** - Fast loading skeleton
- **Lazy Loading** - Load components on demand
- **Prefetching** - Preload critical resources

## 🧪 Testing

### Testing Setup (Future Enhancement)
\`\`\`bash
# Unit tests with Jest
npm run test

# E2E tests with Playwright
npm run test:e2e

# Component tests with Testing Library
npm run test:components
\`\`\`

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (\`git checkout -b feature/amazing-feature\`)
3. **Commit changes** (\`git commit -m 'Add amazing feature'\`)
4. **Push to branch** (\`git push origin feature/amazing-feature\`)
5. **Open a Pull Request**

### Development Workflow
1. Check existing issues or create new ones
2. Follow the coding standards
3. Write tests for new features
4. Update documentation
5. Submit PR with clear description

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Next.js Team](https://nextjs.org/)** - Amazing React framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[shadcn](https://ui.shadcn.com/)** - Beautiful component library
- **[Lucide](https://lucide.dev/)** - Consistent icon library

## 📞 Support

- **Documentation**: [Project Wiki](https://github.com/your-username/habitcoach/wiki)
- **Issues**: [GitHub Issues](https://github.com/your-username/habitcoach/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/habitcoach/discussions)

---

**Built with ❤️ by the HabitCoach Team**

*Transform your life one habit at a time* 🌟

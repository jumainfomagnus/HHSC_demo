# HHSC Texas 2025 Goals and Missions Showcase

A modern, responsive web application showcasing the Texas Health and Human Services Commission's mission, values, and 2025 strategic goals.

## 🚀 Live Demo

- **Development Server**: http://localhost:5174/
- **GitHub Repository**: https://github.com/jumainfomagnus/HHSC_demo

## ✨ Features

- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Dark/Light Theme**: Automatic system preference detection with toggle
- **Interactive Animations**: Smooth Framer Motion animations
- **Progress Tracking**: Animated progress bars for strategic goals
- **Accessibility**: WCAG 2.1 AA compliance
- **Modern Tech Stack**: React 19, TypeScript, Vite, TailwindCSS

## 🏗️ Architecture

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation and theme toggle
│   ├── Hero.tsx        # Landing section with CTA
│   ├── Stats.tsx       # Animated statistics
│   ├── Mission.tsx     # Mission and values
│   ├── Goals.tsx       # Interactive 2025 goals
│   └── Footer.tsx      # Contact and links
├── contexts/
│   └── ThemeContext.tsx # Dark/light theme management
├── App.tsx             # Main application component
├── main.tsx           # Entry point
└── index.css          # Global styles and Tailwind
```

## 🛠️ Tech Stack

- **Framework**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 7.1.3
- **Styling**: TailwindCSS 3.4.13 with custom HHSC theme
- **Animations**: Framer Motion 12.23.12
- **State Management**: React Context API

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/jumainfomagnus/HHSC_demo.git
   cd HHSC_demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Design System

- **Primary Colors**: HHSC Blue (#003d7a), Secondary Blue (#0066cc)
- **Typography**: System fonts with responsive scaling
- **Components**: Cards, buttons, forms with consistent styling
- **Animations**: Fade, slide, scale, and stagger patterns

## 📊 Key Components

### Header Component
- Responsive navigation with mobile hamburger menu
- Dark/light theme toggle with persistence
- HHSC branding and accessibility features

### Hero Section
- Eye-catching landing with animated background elements
- Clear value proposition and call-to-action buttons
- Wave divider for smooth section transitions

### Statistics Component
- Animated counters showing HHSC's impact
- Scroll-triggered animations
- 29M+ Texans served, 85K+ employees, 4.2M+ Medicaid recipients

### Mission Statement
- Core values with icons and descriptions
- 2025 vision in highlighted gradient card
- Strategic focus areas as interactive tags

### Strategic Goals
- Six interactive goals with progress tracking
- Expandable cards with detailed initiatives
- Success metrics and target dates

### Footer
- Contact information and social links
- Newsletter signup functionality
- Legal links and Texas pride section

## 🌙 Theme Support

- Automatic system preference detection
- Manual toggle available in header
- Smooth transitions between themes
- localStorage persistence

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels and descriptions
- Keyboard navigation support
- Color contrast compliance

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interactions

## 🔧 Development

- **Hot Module Replacement**: Instant updates during development
- **TypeScript**: Full type safety and IntelliSense
- **ESLint**: Code quality and consistency
- **PostCSS**: Optimized CSS processing

## 📄 License

This project is created for the Texas Health and Human Services Commission.

## 🤝 Contributing

See the GitHub issues for user stories and development tasks:
- [Header Component](https://github.com/jumainfomagnus/HHSC_demo/issues/1)
- [Hero Section](https://github.com/jumainfomagnus/HHSC_demo/issues/2)
- [Statistics Component](https://github.com/jumainfomagnus/HHSC_demo/issues/3)
- [Mission Statement](https://github.com/jumainfomagnus/HHSC_demo/issues/4)
- [Strategic Goals](https://github.com/jumainfomagnus/HHSC_demo/issues/5)
- [Footer Component](https://github.com/jumainfomagnus/HHSC_demo/issues/6)
- [Theme Context](https://github.com/jumainfomagnus/HHSC_demo/issues/7)
- [Project Architecture](https://github.com/jumainfomagnus/HHSC_demo/issues/8)

---

**Made with ❤️ in Texas** 🤠
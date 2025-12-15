# Heelix Angular Universal App with Ionic

A universal Angular v21 application using Nx monorepo, supporting both web and mobile platforms with Ionic.

## Project Structure

```
heelix-angular-and-ionic/
├── apps/
│   ├── web/              # Web Angular application
│   └── mobile/           # Mobile Ionic Angular application
├── libs/
│   └── shared/           # Shared library with components, utils, and types
│       ├── components/   # Shared components (Card, Gauge, ProgressBar, Navigation, etc.)
│       ├── utils/        # Shared utilities and team data
│       └── index.ts
└── package.json
```

## Features

- **Universal Angular v21**: Latest Angular version with standalone components, signal and zoneless
- **Ionic Integration**: Mobile app built with Ionic Angular
- **Shared Library**: Reusable components and utilities shared between web and mobile
- **Dashboard Page**: Insights dashboard with team metrics and KPIs
- **Factor Analysis Page**: Factor analysis view with team data
- **Navigation**: Responsive navigation component for both platforms

## Architecture Decision: Angular + Ionic

This project uses **Angular for web** and **Ionic Angular for mobile** within a single Nx monorepo. This architecture provides a unified codebase while allowing platform-specific optimizations.

### Why This Architecture?

#### ✅ Pros

1. **Code Reusability**
   - Share business logic, utilities, types, and data models between web and mobile
   - Single source of truth for shared components (e.g., Card, Gauge, ProgressBar)
   - Reduces duplication and maintenance overhead

2. **Unified Development Experience**
   - Same TypeScript language and Angular framework across platforms
   - Consistent patterns, dependency injection, and state management
   - Shared tooling (linting, testing, build processes)

3. **Ionic's Native Capabilities**
   - Access to native device features (camera, geolocation, push notifications)
   - Native look and feel on iOS and Android
   - Progressive Web App (PWA) support for web deployment

4. **Angular's Modern Features**
   - Angular Signals for reactive state management
   - Standalone components for better tree-shaking
   - Strong typing with TypeScript
   - Excellent tooling and ecosystem

5. **Monorepo Benefits**
   - Single repository for all code
   - Atomic commits across platforms
   - Easier refactoring and code sharing
   - Simplified dependency management

6. **Team Efficiency**
   - Developers can work on both platforms with the same skillset
   - Faster onboarding for new team members
   - Reduced context switching

#### ❌ Cons

1. **Bundle Size**
   - Mobile apps include Angular framework overhead
   - Ionic adds additional dependencies
   - May result in larger app sizes compared to native apps

2. **Performance Considerations**
   - WebView-based mobile apps may have slight performance overhead
   - Complex animations might not be as smooth as native
   - Initial load time can be slower than native apps

3. **Platform-Specific Customization**
   - Some native features require additional plugins or workarounds
   - Deep platform integration may require native code
   - UI/UX differences between web and mobile need careful handling

4. **Learning Curve**
   - Team needs to understand both Angular and Ionic concepts
   - Ionic-specific patterns and components require learning
   - Mobile development considerations (touch, gestures, navigation)

5. **Dependency Management**
   - Need to ensure compatibility between Angular, Ionic, and other dependencies
   - Updates may require coordination across platforms
   - Some npm packages may not work in mobile context

### When to Choose This Architecture

**This architecture is ideal when:**

- ✅ You need both web and mobile applications
- ✅ You want to maximize code reuse between platforms
- ✅ Your team has Angular expertise
- ✅ You prioritize development speed and maintainability
- ✅ Native performance is not the absolute top priority
- ✅ You want a single codebase to maintain

**Consider alternatives when:**

- ❌ You need maximum native performance (gaming, heavy animations)
- ❌ You require deep platform-specific integrations
- ❌ Your team has strong native mobile development expertise
- ❌ App size is a critical constraint
- ❌ You only need one platform (web OR mobile)

### Architecture Overview

```
┌─────────────────────────────────────────┐
│         Nx Monorepo                     │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────────┐    ┌──────────────┐  │
│  │  Web App     │    │ Mobile App   │  │
│  │  (Angular)   │    │ (Ionic)      │  │
│  └──────┬───────┘    └──────┬───────┘  │
│         │                   │          │
│         └─────────┬─────────┘          │
│                   │                    │
│         ┌─────────▼─────────┐          │
│         │  Shared Library   │          │
│         │  (Components,     │          │
│         │   Utils, Types)   │          │
│         └───────────────────┘          │
└─────────────────────────────────────────┘
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install --legacy-peer-deps
```

### Running the Applications

#### Web Application

```bash
nx serve web
```

The web app will be available at `http://localhost:4200`

#### Mobile Application

```bash
nx serve mobile
```

The mobile app will be available at `http://localhost:4200` (or configured port)

### Building

#### Build Web App

```bash
nx build web
```

#### Build Mobile App

```bash
nx build mobile
```

## Shared Library

The shared library (`@heelix-workspace/source`) contains:

### Components

- **CardComponent**: Reusable card container
- **GaugeComponent**: Vibe score gauge visualization
- **ProgressBarComponent**: Progress bar with custom styling
- **NavigationComponent**: Web navigation component
- **MobileNavigationComponent**: Mobile navigation component with Ionic
- **TakeActionModalComponent**: Modal for taking actions

### Utils

- **Team Data**: Team configuration and data (`teamDataConfig`, `TEAMS`, `Team` type)
- **Utilities**: Shared utility functions

## Pages

### Dashboard

- Team selection dropdown
- Vibe score gauge
- Score history chart
- KPI metrics (Participation, Monthly Active Users)
- Key performance metrics with progress bars
- Take action modal

### Factor Analysis

- Team selection dropdown
- Factor grid showing various team factors
- Color-coded factor visualization

## Development

### Adding New Components

1. Create component in `libs/shared/components/`
2. Export from `libs/shared/index.ts`
3. Import in your app using `@heelix-workspace/source`

### Adding New Pages

1. Create page component in `apps/web/src/app/pages/` or `apps/mobile/src/app/pages/`
2. Add route in `app.routes.ts`
3. Use shared components from `@heelix-workspace/source`

## Technologies

- **Angular**: v21.0.0
- **Ionic**: v8.7.13
- **Nx**: v22.2.3
- **TypeScript**: v5.9.2

## License

MIT

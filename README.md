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

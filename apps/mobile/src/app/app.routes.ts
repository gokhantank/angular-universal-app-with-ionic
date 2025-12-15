import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'factor-analysis',
    loadComponent: () => import('./pages/factor-analysis/factor-analysis.component').then(m => m.FactorAnalysisComponent),
  },
];

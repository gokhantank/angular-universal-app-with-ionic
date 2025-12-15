import { Component, inject } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'lib-mobile-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.scss'
})
export class MobileNavigationComponent {
  private router = inject(Router);
  
  // Convert router events to signal
  private navigationEnd$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map((event: NavigationEnd) => event.url)
  );
  
  currentPath = toSignal(this.navigationEnd$, { initialValue: '/' });

  isActive(path: string): boolean {
    const current = this.currentPath();
    return current === path || (path === '/' && current === '');
  }
}


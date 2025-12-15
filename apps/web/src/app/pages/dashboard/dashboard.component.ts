import { Component, signal, computed, effect, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TEAMS, teamDataConfig, type Team } from '@heelix-workspace/source';
import { CardComponent, GaugeComponent, ProgressBarComponent, TakeActionModalComponent } from '@heelix-workspace/source';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardComponent, GaugeComponent, ProgressBarComponent, TakeActionModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private document = inject(DOCUMENT);
  
  protected readonly TEAMS = TEAMS;
  selectedTeam = signal<Team>('Engineering Product');
  showTeamDropdown = signal<boolean>(false);
  showTakeActionModal = signal<boolean>(false);
  isLargeScreen = signal<boolean>(false);

  teamData = computed(() => {
    return teamDataConfig[this.selectedTeam()];
  });

  constructor() {
    // Check screen size on initialization
    const window = this.document.defaultView;
    if (window) {
      this.isLargeScreen.set(window.innerWidth > 800);

      // Listen to window resize
      window.addEventListener('resize', () => {
        if (this.document.defaultView) {
          this.isLargeScreen.set(this.document.defaultView.innerWidth > 800);
        }
      });
    }

    // Handle document clicks to close dropdown
    effect(() => {
      if (!this.showTeamDropdown()) return;
      
      const handler = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.team-dropdown-container')) {
          this.showTeamDropdown.set(false);
        }
      };
      
      this.document.addEventListener('click', handler);
      return () => {
        this.document.removeEventListener('click', handler);
      };
    });
  }

  selectTeam(team: Team) {
    this.selectedTeam.set(team);
    this.showTeamDropdown.set(false);
  }
}


import { Component, signal, computed, effect, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TEAMS, teamDataConfig, type Team } from '@heelix-workspace/source';

@Component({
  selector: 'app-factor-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './factor-analysis.component.html',
  styleUrl: './factor-analysis.component.scss'
})
export class FactorAnalysisComponent {
  private document = inject(DOCUMENT);
  
  protected readonly TEAMS = TEAMS;
  selectedTeam = signal<Team>('Engineering Product');
  showTeamDropdown = signal<boolean>(false);

  teamData = computed(() => {
    return teamDataConfig[this.selectedTeam()];
  });

  factors = computed(() => {
    return this.teamData().factorData;
  });

  constructor() {
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


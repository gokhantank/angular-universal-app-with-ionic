import { Component, signal, computed } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TEAMS, teamDataConfig, type Team } from '@heelix-workspace/source';

@Component({
  selector: 'app-factor-analysis',
  standalone: true,
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './factor-analysis.component.html',
  styleUrl: './factor-analysis.component.scss'
})
export class FactorAnalysisComponent {
  protected readonly TEAMS = TEAMS;
  selectedTeam = signal<Team>('Engineering Product');
  showTeamDropdown = signal<boolean>(false);

  teamData = computed(() => {
    return teamDataConfig[this.selectedTeam()];
  });

  factors = computed(() => {
    return this.teamData().factorData;
  });

  selectTeam(team: Team) {
    this.selectedTeam.set(team);
    this.showTeamDropdown.set(false);
  }
}


import { Component, signal, computed } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TEAMS, teamDataConfig, type Team } from '@heelix-workspace/source';
import { CardComponent, GaugeComponent, ProgressBarComponent, TakeActionModalComponent } from '@heelix-workspace/source';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, IonicModule, CardComponent, GaugeComponent, ProgressBarComponent, TakeActionModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  protected readonly TEAMS = TEAMS;
  selectedTeam = signal<Team>('Engineering Product');
  showTeamDropdown = signal<boolean>(false);
  showTakeActionModal = signal<boolean>(false);

  teamData = computed(() => {
    return teamDataConfig[this.selectedTeam()];
  });

  selectTeam(team: Team) {
    this.selectedTeam.set(team);
    this.showTeamDropdown.set(false);
  }
}


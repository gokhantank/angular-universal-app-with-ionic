import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-gauge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gauge.component.html',
  styleUrl: './gauge.component.scss'
})
export class GaugeComponent {
  score = input<number>(0);

  normalizedRotation = computed(() => {
    // Calculate rotation angle based on score (-100 to 100 maps to -180deg to 0deg)
    const rotation = ((this.score() + 100) / 200) * 180 - 90;
    return Math.max(-90, Math.min(90, rotation));
  });
}


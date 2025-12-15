import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  label = input<string>('');
  value = input<number>(0);
  color = input<string>('');

  normalizedValue = computed(() => {
    // Normalize value from -100 to 100 range to 0-100% for display
    return ((this.value() + 100) / 200) * 100;
  });
}


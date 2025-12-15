import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const MEDIA_ICONS = [
  { id: 'photo', icon: '📷', label: 'Photo' },
  { id: 'shoutout', icon: '⭐', label: 'Shoutout' },
  { id: 'poll', icon: '📋', label: 'Poll' },
  { id: 'suggest', icon: '🎤', label: 'Suggest' },
  { id: 'files', icon: '📝', label: 'Files' },
];

const TABS = ['Vibe', 'Connect', 'Perform'];

@Component({
  selector: 'lib-take-action-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './take-action-modal.component.html',
  styleUrl: './take-action-modal.component.scss'
})
export class TakeActionModalComponent {
  visible = input<boolean>(false);
  close = output<void>();

  protected readonly MEDIA_ICONS = MEDIA_ICONS;
  protected readonly TABS = TABS;
  
  activeTab = signal<string>('Vibe');
  activeMedia = signal<string>('shoutout');
  selectedUser = signal<string>('');
  impact = signal<string>('');

  onClose() {
    this.close.emit();
  }

  handleSubmit() {
    console.log({
      tab: this.activeTab(),
      media: this.activeMedia(),
      user: this.selectedUser(),
      impact: this.impact(),
    });
    this.onClose();
  }
}


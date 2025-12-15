import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavigationComponent } from '@heelix-workspace/source';

@Component({
  imports: [RouterOutlet, NavigationComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'web';
}

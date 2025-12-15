import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MobileNavigationComponent } from '@heelix-workspace/source';

@Component({
  imports: [RouterOutlet, IonicModule, MobileNavigationComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'mobile';
}

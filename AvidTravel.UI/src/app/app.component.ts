import { Component, signal } from '@angular/core';
import { SHARED_IMPORTS } from './shared/shared-imports';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [SHARED_IMPORTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('AvidTravel.UI');
}

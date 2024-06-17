import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OwnersListComponent } from './components/owners/owners-list/owners-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ErrorBlockComponent } from './components/helper/error-block/error-block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, OwnersListComponent, NavigationComponent, ErrorBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}

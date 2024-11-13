import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LandingPageComponenetComponent } from '../landing-page-componenet/landing-page-componenet.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,LandingPageComponenetComponent,RouterOutlet,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

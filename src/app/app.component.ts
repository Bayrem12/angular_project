import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapG1Component } from './face-snap-g1/face-snap-g1.component';
import { FaceSnap } from './models/face-snap.model';
import { NgFor } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapG1Component, NgFor, FaceSnapListComponent, HeaderComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Tp2';

  mySnap!: FaceSnap[];


  
}

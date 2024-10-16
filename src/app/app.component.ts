import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapG1Component } from './face-snap-g1/face-snap-g1.component';
import { FaceSnap } from './models/face-snap.model';
import { NgFor } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FaceSnapG1Component,NgFor,FaceSnapListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Tp2';

  mySnap!: FaceSnap[];


  ngOnInit(){
    this.mySnap=[
    {
      title:'Archibald',
      description:'Mon meilleur ami depuis tout petit !',
      ImageUrl:'https://m.media-amazon.com/images/M/MV5BNDIyOGYzYmUtOTM3YS00MWM0LWJhOTEtZTY5NmRmMjFmYjVmXkEyXkFqcGc@._V1_.jpg',
      createDate:new Date(),
      buttonText:"Oh Snap!",
      snaps:0,
      index:1,
    },
    {
      title:'three rock montain',
      description:'endroit magnifique',
      ImageUrl:'https://images.pexels.com/photos/8546534/pexels-photo-8546534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      createDate:new Date(),
      buttonText:"Oh Snap!",
      snaps:0,
      index:2,
    },
    {
      title:'un bon repas',
      description:'Yumm c bon!',
      ImageUrl:'https://media-cdn.tripadvisor.com/media/photo-p/0e/fb/51/86/le-bon-repas.jpg',
      createDate:new Date(),
      buttonText:"Oh Snap!",
      snaps:0,
      index:3,
    }

  ];}
}

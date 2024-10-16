import { Component,Input,OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { NgFor } from '@angular/common';
import { FaceSnapsService } from '../services/facesnaps.service';
import { FaceSnapG1Component } from '../face-snap-g1/face-snap-g1.component';
import { HeaderComponent } from '../header/header.component';




@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [NgFor,FaceSnapG1Component,HeaderComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.css'
})
export class FaceSnapListComponent implements OnInit {
  constructor(private faceSnapsService: FaceSnapsService) { 

  }
  faceSnaps !: FaceSnap[];
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.faceSnaps;
      this.faceSnaps=[
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



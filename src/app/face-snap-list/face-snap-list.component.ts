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

}

}

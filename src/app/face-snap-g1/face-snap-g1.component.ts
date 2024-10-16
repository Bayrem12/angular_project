import { Component, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Component({
  selector: 'app-face-snap-g1',
  standalone: true,
  imports: [],
  templateUrl: './face-snap-g1.component.html',
  styleUrl: './face-snap-g1.component.css'
})
export class FaceSnapG1Component {
  @Input() mySnap: FaceSnap = {} as FaceSnap;
  @Input() faceSnap: FaceSnap = {} as FaceSnap;
  @Input() index!: number;

  onSnap():void{
    if(this.faceSnap.buttonText === "Oh Snap!"){
      this.faceSnap.snaps++;
      this.faceSnap.buttonText = "Oh unSnap!";
    }
    else{
      this.faceSnap.snaps--;
      this.faceSnap.buttonText = "Oh Snap!";
    }
  }
  
   
}


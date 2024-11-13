import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponenetComponent } from './landing-page-componenet/landing-page-componenet.component';

export const routes: Routes = [
    { 
        path: 'facesnaps',
        component: FaceSnapListComponent 
    },
    { 
        path: 'home/facesnaps',
        component: FaceSnapListComponent 
    },
    { 
        path: 'home', 
        component: LandingPageComponenetComponent 
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    
];

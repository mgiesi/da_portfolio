import { Routes } from '@angular/router';
import { HomeComponent } from './main-content/home/home.component';
import { ImpressumComponent } from './main-content/impressum/impressum.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'imprint', component: ImpressumComponent }
];

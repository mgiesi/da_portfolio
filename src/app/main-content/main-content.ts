import { Component } from '@angular/core';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-main-content',
  imports: [Hero],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}

import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Aboutme } from './aboutme/aboutme';

@Component({
  selector: 'app-main-content',
  imports: [Hero, Aboutme],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}

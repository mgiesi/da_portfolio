import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Aboutme } from './aboutme/aboutme';
import { Myskills } from "./myskills/myskills";

@Component({
  selector: 'app-main-content',
  imports: [Hero, Aboutme, Myskills],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}

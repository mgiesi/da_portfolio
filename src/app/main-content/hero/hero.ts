import { Component } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Title } from './components/title/title';

@Component({
  selector: 'app-hero',
  imports: [Footer, Title],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

}

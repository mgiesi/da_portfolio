import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Footer } from './components/footer/footer';
import { Title } from './components/title/title';

@Component({
  selector: 'app-hero',
  imports: [Footer, Title, TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  constructor(private translate: TranslateService) {
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio';

  constructor(private translate: TranslateService, private viewportScroller: ViewportScroller) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.viewportScroller.setOffset([0, 109]);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}

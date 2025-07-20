import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Project } from './components/project/project';

@Component({
  selector: 'app-portfolio',
  imports: [TranslateModule, Project],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  constructor(private translate: TranslateService) {
  }
}

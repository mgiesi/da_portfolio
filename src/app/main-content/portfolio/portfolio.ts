import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Project } from './components/project/project';
import { Feedback } from './components/feedback/feedback';

@Component({
  selector: 'app-portfolio',
  imports: [TranslateModule, Project, Feedback],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  constructor(private translate: TranslateService) {
  }
}

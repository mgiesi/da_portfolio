import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Skill } from './components/skill/skill';

@Component({
  selector: 'app-myskills',
  imports: [TranslateModule, Skill],
  templateUrl: './myskills.html',
  styleUrl: './myskills.scss'
})
export class Myskills {
  constructor(private translate: TranslateService) {
  }
}

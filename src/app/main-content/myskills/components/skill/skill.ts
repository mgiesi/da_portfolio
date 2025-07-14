import { Component, Input } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skill',
  imports: [TranslateModule],
  templateUrl: './skill.html',
  styleUrl: './skill.scss'
})
export class Skill {
  @Input() skill = '';

  constructor(private translate: TranslateService) {
  }
}

import { Component, Input } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  imports: [TranslateModule],
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class Project {
  @Input() project = '';

  constructor(private translate: TranslateService) {
  }
}

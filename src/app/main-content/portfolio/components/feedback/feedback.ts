import { Component, Input } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feedback',
  imports: [TranslateModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss'
})
export class Feedback {
  @Input() author = '';
  
  constructor(private translate: TranslateService) {
  }
}

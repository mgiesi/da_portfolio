import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  constructor(private translate: TranslateService) {
  }
}

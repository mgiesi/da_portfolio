import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  constructor(private translate: TranslateService) {
      }
}

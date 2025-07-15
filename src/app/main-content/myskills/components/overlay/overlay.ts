import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-overlay',
  imports: [TranslateModule],
  templateUrl: './overlay.html',
  styleUrl: './overlay.scss'
})
export class Overlay {

  constructor(private translate: TranslateService) {
  }
}

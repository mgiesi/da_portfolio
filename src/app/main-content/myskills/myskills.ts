import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Skill } from './components/skill/skill';
import { Overlay } from './components/overlay/overlay';
import {
  CdkOverlayOrigin,
  CdkConnectedOverlay,
  OverlayModule
} from '@angular/cdk/overlay';

@Component({
  selector: 'app-myskills',
  imports: [TranslateModule, Skill, Overlay, OverlayModule, CdkOverlayOrigin, CdkConnectedOverlay ],
  templateUrl: './myskills.html',
  styleUrl: './myskills.scss'
})
export class Myskills {
  showOverlay = false;

  constructor(private translate: TranslateService) {
  }

  openOverlay()  { this.showOverlay = true; }
  closeOverlay() { this.showOverlay = false; }
}

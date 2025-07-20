import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  imports: [TranslateModule, CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class Project {
  @Input() project = '';
  @Input() align: 'left' | 'right' = 'left';
  @Input() skills: string[] = [];

  constructor(private translate: TranslateService) {
  }
}

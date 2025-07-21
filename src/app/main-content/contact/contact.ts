import { Component, ViewChild } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  constructor(private translate: TranslateService) {
  }

  markAsTouched(input: any) {
    if (!input.touched) {
      input.control.markAsTouched();
    }
  }
}

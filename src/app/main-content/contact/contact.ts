import { Component, ViewChild } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule, CommonModule, FormsModule, RouterLink],
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

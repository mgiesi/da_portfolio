import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutme',
  imports: [TranslateModule],
  templateUrl: './aboutme.html',
  styleUrl: './aboutme.scss'
})
export class Aboutme {
  @ViewChild('element', { static: true }) elementRef!: ElementRef;
  isVisible = false;

  constructor(private translate: TranslateService) {
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    }, { threshold: 0.1 });

    observer.observe(this.elementRef.nativeElement);
  }
}

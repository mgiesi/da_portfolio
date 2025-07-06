import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MainContentComponent } from "./main-content/main-content.component";
import { CircleComponent } from './shared/circle/circle.component';

@Component({
    selector: 'app-root',
    imports: [CommonModule, HeaderComponent, FooterComponent, MainContentComponent, CircleComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}

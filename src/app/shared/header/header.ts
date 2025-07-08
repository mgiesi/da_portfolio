import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

/**
 * Header component that allows the user to switch between different languages.
 * 
 * It displays language switch links and highlights the currently active language.
 * Uses `ngx-translate` for internationalization.
 */
@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  
  /** The currently active language code (e.g., 'en', 'de').  */
  currentLang: string = 'en';

  /**
   * Initializes the Header component and sets the current language
   * based on the TranslateService.
   * 
   * @param translate The translation service used for switching and retrieving languages.
   */
  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || this.translate.getDefaultLang();
  }

  /**
   * Switches the application language.
   *
   * @param lang The language code to switch to (e.g., 'en', 'de').
   */
  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }
}

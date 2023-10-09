import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.isDarkTheme = this.getIsDarkTheme();
    this.switchTheme(this.getTheme());
  }

  private isDarkTheme =  false;

  get IsDarkTheme(): boolean {
    return this.isDarkTheme;
  }
  darkTheme(isDarkTheme: boolean) {
    this.isDarkTheme = isDarkTheme;
    if (isDarkTheme) {
      this.switchTheme('dark');
    }
    else {
      this.switchTheme('light');
    }
    this.saveTheme();
  }

  private switchTheme(theme: string) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
  }

  private saveTheme() {
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }
  private getTheme() {
    return localStorage.getItem('theme') || 'light';
  }
  private getIsDarkTheme() {
    return this.getTheme() === 'dark';

  }
}

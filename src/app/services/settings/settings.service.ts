import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: SettingsTheme = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document,) {
    this.loadSettings();
   }

  saveSettings(){
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  loadSettings(){
    if(localStorage.getItem('settings')){
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
    this.aplicarTheme(this.settings.theme);
  }

  aplicarTheme(tema: string){
    const url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
    this.settings.theme = tema;
    this.settings.themeUrl = url;
    this.saveSettings();
  }
}

interface SettingsTheme {
  themeUrl: string;
  theme: string;
}

import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settings: SettingsService) {}

  ngOnInit(): void {
    this.changeCheck();
  }

  changeColor(tema: string, link: any){
    this.aplicarCheck(link);
    this._settings.aplicarTheme(tema);
  }

  aplicarCheck(link: any){
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  changeCheck(){
    const selectores: any = document.getElementsByClassName('selector');
    const theme = this._settings.settings.theme;
    for (const ref of selectores){
      if(ref.getAttribute('data-theme') === theme){
        ref.classList.add('working');
        break;
      }
    }
  }
}

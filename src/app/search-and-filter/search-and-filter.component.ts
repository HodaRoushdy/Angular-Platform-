import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import {  OnInit } from '@angular/core';
import { SidebarModule } from 'ng-cdbangular';

@Component({
  selector: 'app-search-and-filter',
  templateUrl: './search-and-filter.component.html',
  styleUrls: ['./search-and-filter.component.css'],
  standalone:true,
  imports:[NgIf, SidebarModule , TranslateModule]

})
export class SearchAndFilterComponent {
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en','ar']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}




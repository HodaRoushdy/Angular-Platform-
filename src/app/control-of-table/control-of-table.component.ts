import { Component, ComponentFactory } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { EmailValidator } from '@angular/forms';
import { SidebarModule } from 'ng-cdbangular';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-control-of-table',
  templateUrl: './control-of-table.component.html',
  styleUrls: ['./control-of-table.component.css'] ,
  standalone:true,
  imports: [NgIf, SidebarModule , TranslateModule ,NgbTooltipModule ,NgbPaginationModule],

})

export class ControlOfTableComponent {
  page = 1;
  first: number = 0;
  rows: number = 10;
  name = 'new presumptive name';
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en','ar']);
    translate.setDefaultLang('en');
  }
  // data=[
  //   {id:1,fullName:'new presumptive name',email:'Example@company.com',workingDays:' 2023-01-01',userInterface:'../../assets/imageflour.png'}
  // ]


  switchLang(lang: string) {
    this.translate.use(lang);
  }
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
}
}

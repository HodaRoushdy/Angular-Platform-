import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  NgbPaginationModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SidebarModule } from 'ng-cdbangular';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatTableDataSource} from '@angular/material/table';


interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-control-of-table',
  templateUrl: './control-of-table.component.html',
  styleUrls: ['./control-of-table.component.css'],
  standalone: true,
  imports: [
    NgIf,
    SidebarModule,
    TranslateModule,
    NgbTooltipModule,
    NgbPaginationModule,
    CommonModule,
  ],
})
export class ControlOfTableComponent {
  page = 1;
  first: number = 0;
  rows: number = 10;
  name = 'new presumptive name';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
  }
  data = [
    {
      idNumber: 1,
      fullName: 'new presumptive name 123454sss',
      email: 'Example@company.com',
      workingDays: ' 2023-01-01',
      userInterface: '../../assets/calendar icone.svg',
    },
    {
      idNumber: 2,
      fullName: 'new presumptive name',
      email: 'Example@company.com',
      workingDays: ' ',
      userInterface: '../../assets/imageflour.png',
    },
    {
      idNumber: 3,
      fullName: 'new presumptive name',
      email: 'Example@company.com',
      workingDays: ' 2023-01-01',
      userInterface: '../../assets/calendar icone.svg',
    },
    {
      idNumber: 4,
      fullName: 'new presumptive name',
      email: 'Example@company.com',
      workingDays: ' 2023-01-01',
      userInterface: '../../assets/imageflour.png',
    },
  ];

  cols = ['idNumber', 'fullName', 'email', 'workingDays', 'userInterface'];

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }

}



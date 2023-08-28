// import { CommonModule, NgIf } from '@angular/common';
// import { Component } from '@angular/core';
// import {
//   NgbPaginationModule,
//   NgbTooltipModule,
// } from '@ng-bootstrap/ng-bootstrap';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';
// import { SidebarModule } from 'ng-cdbangular';
// import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
// import {MatTableDataSource} from '@angular/material/table';


// interface PageEvent {
//   first: number;
//   rows: number;
//   page: number;
//   pageCount: number;
// }

// @Component({
//   selector: 'app-control-of-table',
//   templateUrl: './control-of-table.component.html',
//   styleUrls: ['./control-of-table.component.css'],
//   standalone: true,
//   imports: [
//     NgIf,
//     SidebarModule,
//     TranslateModule,
//     NgbTooltipModule,
//     NgbPaginationModule,
//     CommonModule,
//   ],
// })
// export class ControlOfTableComponent {
//   page = 1;
//   first: number = 0;
//   rows: number = 10;
//   name = 'new presumptive name';
//   constructor(public translate: TranslateService) {
//     translate.addLangs(['en', 'ar']);
//     translate.setDefaultLang('en');
//   }
//   data = [
//     {
//       idNumber: 1,
//       fullName: 'new presumptive name 123454sss',
//       email: 'Example@company.com',
//       workingDays: ' 2023-01-01',
//       userInterface: '../../assets/calendar icone.svg',
//     },
//     {
//       idNumber: 2,
//       fullName: 'new presumptive name',
//       email: 'Example@company.com',
//       workingDays: ' ',
//       userInterface: '../../assets/imageflour.png',
//     },
//     {
//       idNumber: 3,
//       fullName: 'new presumptive name',
//       email: 'Example@company.com',
//       workingDays: ' 2023-01-01',
//       userInterface: '../../assets/calendar icone.svg',
//     },
//     {
//       idNumber: 4,
//       fullName: 'new presumptive name',
//       email: 'Example@company.com',
//       workingDays: ' 2023-01-01',
//       userInterface: '../../assets/imageflour.png',
//     },
//   ];

//   cols = ['idNumber', 'fullName', 'email', 'workingDays', 'userInterface'];

//   switchLang(lang: string) {
//     this.translate.use(lang);
//   }
//   onPageChange(event: PageEvent) {
//     this.first = event.first;
//     this.rows = event.rows;
//   }

// }


import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  NgbPaginationModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SidebarModule } from 'ng-cdbangular';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
interface workingDaysProps {
  id: number;
  name: string;
  selected: boolean;
}
interface userProps {
  idNumber: number;
  fullName: string;
  email: string;
  userInterface: string;
  days: workingDaysProps[];
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
    CdkDropList,
    CdkDrag,
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
      userInterface: '../../assets/calendar icone.svg',
      days: [
        { id: 1, name: 'satabb', selected: false },
        { id: 2, name: 'sunabb', selected: false },
        { id: 3, name: 'monabb', selected: false },
        { id: 4, name: 'tuesabb', selected: false },
        { id: 5, name: 'wedabb', selected: false },
        { id: 6, name: 'thurabb', selected: false },
        { id: 7, name: 'friabb', selected: false },
      ],
    },
    {
      idNumber: 2,
      fullName: 'new presumptive name',
      email: 'Example@company.com',
      userInterface: '../../assets/imageflour.png',
      days: [
        { id: 1, name: 'satabb', selected: false },
        { id: 2, name: 'sunabb', selected: false },
        { id: 3, name: 'monabb', selected: false },
        { id: 4, name: 'tuesabb', selected: false },
        { id: 5, name: 'wedabb', selected: false },
        { id: 6, name: 'thurabb', selected: false },
        { id: 7, name: 'friabb', selected: false },
      ],
    },
    {
      idNumber: 3,
      fullName: 'new presumptive name',
      email: 'Example@company.com',
      userInterface: '../../assets/calendar icone.svg',
      days: [
        { id: 1, name: 'satabb', selected: false },
        { id: 2, name: 'sunabb', selected: false },
        { id: 3, name: 'monabb', selected: false },
        { id: 4, name: 'tuesabb', selected: false },
        { id: 5, name: 'wedabb', selected: false },
        { id: 6, name: 'thurabb', selected: false },
        { id: 7, name: 'friabb', selected: false },
      ],
    },
    {
      idNumber: 4,
      fullName: 'new presumptive name',
      email: 'Example@company.com',
      userInterface: '../../assets/imageflour.png',
      days: [
        { id: 1, name: 'satabb', selected: false },
        { id: 2, name: 'sunabb', selected: false },
        { id: 3, name: 'monabb', selected: false },
        { id: 4, name: 'tuesabb', selected: false },
        { id: 5, name: 'wedabb', selected: false },
        { id: 6, name: 'thurabb', selected: false },
        { id: 7, name: 'friabb', selected: false },
      ],
    },
  ];

  getColor(isSelected: boolean) {
    if (isSelected) {
      return '#2385EA';
    } else {
      return 'grey';
    }
  }

  workingHoursSelect(item: workingDaysProps, row: userProps) {
    this.data.map((ele) => {
      if (ele.idNumber == row.idNumber) {
        return ele.days.map((sec) => {
          if (sec.id === item.id) {
            sec.selected = !item.selected;
          }
        });
      } else {
        return ele;
      }
    });
  }

  cols: workingDaysProps[] = [
    { id: 1, name: 'idNumber', selected: true },
    { id: 2, name: 'fullName', selected: true },
    { id: 3, name: 'email', selected: true },
    { id: 4, name: 'workingDays', selected: true },
    { id: 4, name: 'userInterface', selected: true },
  ];

  layoutChange(col: workingDaysProps) {
    this.cols.map((ele) => {
      if (ele.id == col.id) {
        return ele.selected == !ele.selected;
      } else {
        return ele;
      }
    });
  }
  viewColList = false;
  viewDragDrop() {
    this.viewColList = !this.viewColList;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cols, event.previousIndex, event.currentIndex);
  }
}

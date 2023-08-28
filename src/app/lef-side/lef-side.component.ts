
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { CommonModule, DOCUMENT, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SidebarModule } from 'ng-cdbangular';
@Component({
  selector: 'app-lef-side',
  templateUrl: './lef-side.component.html',
  styleUrls: ['./lef-side.component.css'],
  standalone: true,
  imports: [
    NgIf,
    TranslateModule,
    SidebarModule,
    NgbCarouselModule,
    CommonModule,
    CdkDropList,
    CdkDrag,
  ],
  providers: [NgbCarouselConfig],
})
export class LefSideComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
  }
  htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;

  // arrowRotate = this.htmlTag.dir == 'rtl' ? 'rotate(120deg)' : 'rotate(180deg)';

  commentsData = [
    {
      title: 'comment',
      img: '../../assets/clock.svg',
      time: '05:00-06:00 pm',
      secImg: '../../assets/Image-35.png',
      personName: '',
      thirdImg: '../../assets/arr.svg',
      bgColor:'#F2F5F1',

    },
    {
      title: 'comment',
      img: '../../assets/clock.svg',
      time: '04:00-05:00 pm',
      secImg: '../../assets/girl.png',
      personName: 'namePerson1',
      thirdImg: '../../assets/arr.svg',
      bgColor:'#FFF6E3'

    },
    {
      title: 'comment',
      img: '../../assets/clock.svg',
      time: '05:00-06:00 pm',
      secImg: '../../assets/man2.png',
      personName: 'namePerson3',
      thirdImg: '../../assets/arr.svg',
      bgColor:'#7661E2'

    },
    {
      title: 'comment',
      img: '../../assets/clock.svg',
      time: '05:00-06:00 pm',
      secImg: '../../assets/Image-35.png',
      personName: 'namePerson3',
      thirdImg: '../../assets/arr.svg',
      bgColor:'#F1ECFE'
    },
    {
      title: 'comment',
      img: '../../assets/clock.svg',
      time: '05:00-06:00 pm',
      secImg: '../../assets/man2.png',
      personName: 'namePerson3',
      thirdImg: '../../assets/arr.svg',
      bgColor:'#F1ECFE'

    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.commentsData, event.previousIndex, event.currentIndex);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}

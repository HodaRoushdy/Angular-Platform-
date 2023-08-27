import { DOCUMENT, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SidebarModule } from 'ng-cdbangular';

/** @title Basic sidenav */




// {{row.fullName.length > 20 ? row.fullName.slice(0,20) +'...' : row.fullName}}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css',
],
  standalone: true,
  imports: [NgIf, SidebarModule , TranslateModule,NgbDropdownModule],
})
export class NavBarComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public translate: TranslateService
  ) {
    translate.addLangs(['en','ar']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  htmlTag = this.document.getElementsByTagName(
    'html'
  )[0] as HTMLHtmlElement;

  check=  this.htmlTag.dir =='rtl' ? 'right' : 'left'
}






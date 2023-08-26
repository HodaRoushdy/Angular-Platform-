import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';
import { Component ,OnInit } from '@angular/core';
import { SidebarModule } from 'ng-cdbangular';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

/** @title Basic sidenav */





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
    public translate: TranslateService
  ) {
    translate.addLangs(['en','ar']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}





import { NgIf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { Component ,OnInit } from '@angular/core';
import { SidebarModule } from 'ng-cdbangular';

@Component({
  selector: 'app-lef-side',
  templateUrl: './lef-side.component.html',
  styleUrls: ['./lef-side.component.css'],
  standalone:true,
  imports: [NgIf , TranslateModule , SidebarModule],

})
export class LefSideComponent {
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

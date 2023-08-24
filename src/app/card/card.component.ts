import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';
import { Component ,OnInit } from '@angular/core';
import { SidebarModule } from 'ng-cdbangular';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [NgIf, SidebarModule , TranslateModule],
})
export class CardComponent {
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en','ar']);
    translate.use('ar');
  }

  switchLang(lang: string) {
    this.translate.use('ar');
  }
}

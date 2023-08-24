import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),TranslateModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

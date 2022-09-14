import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VariosPage } from './varios.page';

const routes: Routes = [
  {
    path: '',
    component: VariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VariosPageRoutingModule {}

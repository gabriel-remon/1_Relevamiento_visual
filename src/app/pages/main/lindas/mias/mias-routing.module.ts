import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiasPage } from './mias.page';

const routes: Routes = [
  {
    path: '',
    component: MiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiasPageRoutingModule {}

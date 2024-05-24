import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeasPage } from './feas.page';

const routes: Routes = [
  {
    path: '',
    component: FeasPage
  },  {
    path: 'mias',
    loadChildren: () => import('./mias/mias.module').then( m => m.MiasPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeasPageRoutingModule {}

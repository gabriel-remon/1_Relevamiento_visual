import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LindasPage } from './lindas.page';

const routes: Routes = [
  {
    path: '',
    component: LindasPage
  },  {
    path: 'mias',
    loadChildren: () => import('./mias/mias.module').then( m => m.MiasPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LindasPageRoutingModule {}

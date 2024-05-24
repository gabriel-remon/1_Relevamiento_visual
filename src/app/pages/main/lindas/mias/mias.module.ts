import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiasPageRoutingModule } from './mias-routing.module';

import { MiasPage } from './mias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiasPageRoutingModule
  ],
  declarations: [MiasPage]
})
export class MiasPageModule {}

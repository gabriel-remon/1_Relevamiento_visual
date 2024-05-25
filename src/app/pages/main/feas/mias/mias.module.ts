import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiasPageRoutingModule } from './mias-routing.module';

import { MiasPage } from './mias.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiasPageRoutingModule,
    SharedModule
  ],
  declarations: [MiasPage]
})
export class MiasPageModule {}

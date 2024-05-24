import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeasPageRoutingModule } from './feas-routing.module';

import { FeasPage } from './feas.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeasPageRoutingModule,
    SharedModule
  ],
  declarations: [FeasPage]
})
export class FeasPageModule {}

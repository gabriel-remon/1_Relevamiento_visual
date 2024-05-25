import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeasPageRoutingModule } from './feas-routing.module';

import { FeasPage } from './feas.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeasPageRoutingModule,
    SharedModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts')})
  ],
  declarations: [FeasPage]
})
export class FeasPageModule {}

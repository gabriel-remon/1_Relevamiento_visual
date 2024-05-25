import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LindasPageRoutingModule } from './lindas-routing.module';

import { LindasPage } from './lindas.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LindasPageRoutingModule,
    SharedModule,
    NgApexchartsModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts')})
  ],
  declarations: [LindasPage]
})
export class LindasPageModule {}

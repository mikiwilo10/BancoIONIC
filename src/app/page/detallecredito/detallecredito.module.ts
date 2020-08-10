import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallecreditoPageRoutingModule } from './detallecredito-routing.module';

import { DetallecreditoPage } from './detallecredito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallecreditoPageRoutingModule
  ],
  declarations: [DetallecreditoPage]
})
export class DetallecreditoPageModule {}

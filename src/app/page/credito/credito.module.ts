import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditoPageRoutingModule } from './credito-routing.module';

import { CreditoPage } from './credito.page';
import { ComponentsModule } from '../../components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CreditoPageRoutingModule
  ],
  declarations: [CreditoPage]
})
export class CreditoPageModule {}

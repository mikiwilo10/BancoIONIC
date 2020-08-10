import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallecreditoPage } from './detallecredito.page';

const routes: Routes = [
  {
    path: '',
    component: DetallecreditoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallecreditoPageRoutingModule {}

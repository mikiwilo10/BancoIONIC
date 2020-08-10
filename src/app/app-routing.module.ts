import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./page/actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'transferencia',
    loadChildren: () => import('./page/transferencia/transferencia.module').then( m => m.TransferenciaPageModule)
  },
  {
    path: 'credito',
    loadChildren: () => import('./page/credito/credito.module').then( m => m.CreditoPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./page/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'detallecredito',
    loadChildren: () => import('./page/detallecredito/detallecredito.module').then( m => m.DetallecreditoPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

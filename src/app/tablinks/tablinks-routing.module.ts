import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
    {
      path: 'varios',
      loadChildren: () => import('../varios/varios.module').then( m => m.VariosPageModule)
    },
    {
      path: 'inicio',
      loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
    },
    {
      path: 'perfil',
      loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
    },
    {
      path: 'config',
      loadChildren: () => import('../config/config.module').then( m => m.ConfigPageModule)
    },
    {
      path: "",
      redirectTo: "tablinks/perfil",
      pathMatch:"full"
      
    },
    {
      path: 'buscar',
      loadChildren: () => import('../buscar/buscar.module').then( m => m.BuscarPageModule)
    },
  ]
  },
  {
    path: "",
    redirectTo: "tablinks/perfil",
    pathMatch:"full"
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}

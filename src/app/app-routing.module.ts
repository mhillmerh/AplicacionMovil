import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    
  {
    path: '',
    loadChildren: () => import('./tablinks/tablinks.module').then( m => m.TablinksPageModule)
  },
  {
    path: '',
    redirectTo: 'productos',
    pathMatch:'full'
  },
  {
    path: 'varios',
    loadChildren: () => import('./varios/varios.module').then( m => m.VariosPageModule)
  },
  {
    path: 'productos/:id',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

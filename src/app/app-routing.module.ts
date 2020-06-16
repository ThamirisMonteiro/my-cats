import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'cats',
    pathMatch: 'full',
    redirectTo: 'cats'
  },
  {
    path: 'cats',
    loadChildren: () => import('./cat/cat.module').then(m => m.CatModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './core/constants';

const routes: Routes = [
  {
    path: ROUTES.HOME,
    loadChildren:() =>  import('./features/home/home.module').then((m)=> m.HomeModule)
  },
  {
    path: '',
    loadChildren:() =>  import('./features/auth/auth.module').then((m)=> m.AuthModule)
  },
  {
    path: '**',
   redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

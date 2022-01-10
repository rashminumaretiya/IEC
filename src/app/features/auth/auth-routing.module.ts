import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/core/constants';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: ROUTES.AUTH.SIGNUP,
    component: SignupComponent,
  },
  {
    path: '**',
    redirectTo : ROUTES.AUTH.SIGNUP
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

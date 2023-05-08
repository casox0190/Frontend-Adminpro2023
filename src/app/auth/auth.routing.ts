import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { NopagefoundComponent } from '../nopagefound/nopagefound.component';



const routes: Routes = [
  {
    path:'auth',
    children:[

      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path:'',redirectTo: 'login',pathMatch:'full'},
      {path:'**',component:NopagefoundComponent},

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

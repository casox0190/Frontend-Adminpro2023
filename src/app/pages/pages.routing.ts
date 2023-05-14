
//Modulos principales
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Componentes
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  {

  path:'dashboard',
  component:PagesComponent,
  children:[
    {path: '', component: DashboardComponent,data:{titulo:'Dashboard'}},
    {path: 'progress', component: ProgressComponent,data:{titulo:'Progress'}},
    {path: 'grafica1', component: Grafica1Component,data:{titulo:'Grafica1'}},
    {path: 'account-settings', component: AccountsettingsComponent,data:{titulo:'AccountSettings'}},
    {path: 'promesas', component: PromesasComponent,data:{titulo:'Promesas'}},
    {path: 'rxjs', component: RxjsComponent,data:{titulo:'Rxjs'}},
    // {path: '', redirectTo:'/dashboard',pathMatch:'full'},
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}

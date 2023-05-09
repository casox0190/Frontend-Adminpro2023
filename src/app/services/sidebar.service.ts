import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[
    {
      titulo:'Main',
      icono: 'mdi mdi-gauge',
      submenu:[
        {titulo:'Dashboard',url:'/'},
        {titulo:'Progressbar',url:'progress'},
        {titulo:'Gráficas',url:'grafica1'},
      ]
    }
  ]

  constructor() { 


  }
}

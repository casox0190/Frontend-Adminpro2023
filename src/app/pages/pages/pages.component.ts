import { Component,} from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
declare function customInitFunctions():void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  constructor(private settingService:SettingsService){

  }
  ngOnInit():void{
    customInitFunctions();
   
  
  }
    year=new Date().getFullYear();

  

    //./assets/css/colors/purple-dark.css
}

import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styles: [
  ]
})
export class AccountsettingsComponent {


  constructor(private settingService:SettingsService){}


  ngOnInit():void{
      this.settingService.checkCurrentTheme();
  }

  changeTheme(theme:string){
    this.settingService.changeTheme(theme);
     this.settingService.checkCurrentTheme();
            
  }

  
}

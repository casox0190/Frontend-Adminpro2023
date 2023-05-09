import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  //Get the reference of the default theme from the DOM
  private elemento= document.querySelector('#theme')?? document.createElement('./assets/css/colors/default-dark.css');


  constructor() {
    const url=localStorage.getItem('#theme') || './assets/css/colors/purple-dark.css' ;
    this.elemento.setAttribute('href',url);

   }

   changeTheme(theme:string){

    //Build the url according to the user's selection
    const url=`./assets/css/colors/${theme}.css`;
    //Assign a new url element to the DOM element
    this.elemento.setAttribute('href',url);
    //Save the selected theme and set it after reloading the browser
    localStorage.setItem('theme',url);
    //Set the CheckIcon according the theme selected
    this.checkCurrentTheme();
           
 }

 checkCurrentTheme(){
  //Save all the elements with the selector class
  const links=document.querySelectorAll('.selector');
   
  links.forEach(elem=>{

    //Removing the 'working' class from the links elements who has the working class assigned
     elem.classList.remove('working');
     //Getting the atribute from 
     const btnTheme=elem.getAttribute('data-theme');
     const btnThemeUrl=`./assets/css/colors/${btnTheme}.css`;
     const currentTheme=this.elemento.getAttribute('href');

     if(btnThemeUrl===currentTheme){
       elem.classList.add('working');
     }
   });
 }
 

}

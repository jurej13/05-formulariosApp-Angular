import { Component, OnInit } from '@angular/core';

interface MenuItem{
  texto : string;
  ruta  : string;
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li{
      cursor:pointer;
    }
  `
  ]
})
export class SidemenuComponent implements OnInit {

  templateMenu : MenuItem[]=[
    {texto:'basicos',ruta:'./template/basicos'},
    {texto:'dinamicos',ruta:'./template/dinamicos'},
    {texto:'switches',ruta:'./template/switches'}
  ]
  reactiveMenu : MenuItem[]=[
    {texto:'basicos',ruta:'./reactive/basicos'},
    {texto:'dinamicos',ruta:'./reactive/dinamicos'},
    {texto:'switches',ruta:'./reactive/switches'}
  ]
  validacionesMenu : MenuItem[]=[
    {texto:'registro',ruta:'./auth/registro'},
    {texto:'login',ruta:'./auth/login'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

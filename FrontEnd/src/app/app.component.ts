import { Component, importProvidersFrom, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { FormsModule } from '@angular/forms';
import { Der15Component } from './der15/der15.component';
import { Izq15Component } from './izq15/izq15.component';
import { env } from 'process';
@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, Ejercicio1Component,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [Der15Component,Izq15Component,FormsModule],
})
export class AppComponent {
  title = 'FrontEnd';
  recojo:string=""
  enviar:string="";
  envio(){
    this.enviar = "";
let i = 0;
let cont_num = 0;

while (i < this.recojo.length) {
  const char = this.recojo.charAt(i);
    if (char >= '0' && char <= '9') {
      cont_num++;
    }
    i++;
  }
  
  if (cont_num === this.recojo.length) {
    this.enviar = "numero";
  } else {
    this.enviar = "cadena";
  }
}
}

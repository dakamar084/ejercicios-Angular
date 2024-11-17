import { Component, importProvidersFrom, input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { FormsModule, NgModel } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternoComponent } from "./externo/externo.component";
import { InternoComponent } from "./interno/interno.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ExternoComponent, InternoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
  recojo:string=""
  enviar:string="";
  @Output() env = new EventEmitter <string>()
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
  this.env.emit(this.enviar);
}
}

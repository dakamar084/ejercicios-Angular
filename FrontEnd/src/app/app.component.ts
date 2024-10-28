import { Component, importProvidersFrom, input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from "./hijo/hijo.component";
import { PadreComponent } from "./padre/padre.component";
@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, Ejercicio1Component,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule, CommonModule, HijoComponent, PadreComponent],
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

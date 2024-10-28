import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  @Output() env = new EventEmitter<String>()
  seleccionado:string="";
  cantidad:number=0;
  mostrar:number=-1;
  ArrayNombre:Array<string>=[
    "producto 1",
    "producto 2",
    "producto 3",
    "producto 4",
    "producto 5",
    "producto 6",
    "producto 7",
    "producto 8",
    "producto 9",
  ]
  ArrayPrecios:Array<number>=[
    12,
    12,
    13,
    20,
    20,
    13,
    12,
    21,
    30
  ]
  ArrayStock:Array<number>=[
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
  ]
  mostrar_cant(pos:number){
    this.mostrar = pos;
    this.cantidad =0;
  }
  restar(){
    if(this.cantidad > 0){
      this.cantidad--;
    }
  }
  sumar(){
    if(this.cantidad < this.ArrayStock[this.mostrar]){
      this.cantidad++;
    }
  }
  enviar(){
    this.env.emit(this.seleccionado);
  }
  asignar(){
    this.seleccionado = this.ArrayNombre[this.mostrar]+" [separador] "+this.ArrayPrecios[this.mostrar]+" [separador] "+this.cantidad
    
  }
}

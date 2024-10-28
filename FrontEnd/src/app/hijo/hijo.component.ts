import { Component, Output, EventEmitter } from '@angular/core';
import { PadreComponent } from "../padre/padre.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [PadreComponent,CommonModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
    productosNombres:Array<string>=[];
    productosPrecios:Array<number>=[];
    productosCant:Array<number>=[];
    recibir(valor:string){
      let ele = valor.split(" [separador] ");
      this.productosNombres.push(ele[0])
      this.productosPrecios.push(Number.parseInt(ele[1]));
      this.productosCant.push(Number.parseFloat(ele[2]));
    }
}

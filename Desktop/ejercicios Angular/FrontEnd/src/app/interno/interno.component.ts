import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ExternoComponent } from "../externo/externo.component";

@Component({
  selector: 'app-interno',
  standalone: true,
  imports: [NgStyle, ExternoComponent],
  templateUrl: './interno.component.html',
  styleUrl: './interno.component.css'
})
export class InternoComponent {
  color:string="blue";
  recibir(nuevo:any){
    this.color= nuevo;
  }
}

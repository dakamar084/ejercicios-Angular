import { Component } from '@angular/core';
import { persona } from '../../models/persona';
@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {
    p:persona = new  persona("Daniel", 35, "Caballero Martín");
}

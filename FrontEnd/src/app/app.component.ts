import { Component, importProvidersFrom, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { FormsModule } from '@angular/forms';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
// import { EmpleadoComponent } from './empleado/empleado.component';
// import { empleado } from '../models/empleado';
@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, Ejercicio1Component,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [Ejercicio3Component]
})
export class AppComponent {
  title = 'FrontEnd';
}

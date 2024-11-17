import { NgStyle } from '@angular/common';
import { Component, Output, output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-externo',
  standalone: true,
  imports: [NgStyle, FormsModule],
  templateUrl: './externo.component.html',
  styleUrl:'./externo.component.css'
})
export class ExternoComponent {
  @Output() env = new EventEmitter<string>();
  nuevo: string = 'red';
  recojo: string = '';

  cambiar() {
    this.env.emit(this.nuevo);
    this.nuevo = this.recojo;

  }
}

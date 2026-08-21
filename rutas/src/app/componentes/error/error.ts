import { Component } from '@angular/core';
import { MiServicio } from '../../servicios/mi-servicio';

@Component({
  imports: [],
  selector: 'app-error',
  styleUrl: './error.css',
  templateUrl: './error.html',
})
export class Error {

    constructor(private miServicio: MiServicio) {
    }
  
    sumar() {
      this.miServicio.sumar();
    }
}

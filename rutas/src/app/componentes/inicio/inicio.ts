import { Component } from '@angular/core';
import { MiServicio } from '../../servicios/mi-servicio';

@Component({
  imports: [],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio {

  constructor(private miServicio: MiServicio) {
  }

  sumar() {
    this.miServicio.sumar();
  }
}

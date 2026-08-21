import { Component } from '@angular/core';
import { MiServicio } from '../../servicios/mi-servicio';
import { RouterLink, RouterOutlet } from '@angular/router';

interface ItemMock {
  id: number;
  nombre: string;
  descripcion: string;
}

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-items',
  styleUrl: './items.css',
  templateUrl: './items.html',
})
export class Items {

  items: ItemMock[] = [
    {
      id: 1,
      nombre: 'Mochila Urbana',
      descripcion: 'Mochila liviana para uso diario con bolsillos organizadores.',
    },
    {
      id: 2,
      nombre: 'Auriculares Inalambricos',
      descripcion: 'Auriculares bluetooth con cancelacion de ruido y 20 horas de bateria.',
    },
    {
      id: 3,
      nombre: 'Botella Termica',
      descripcion: 'Botella de acero inoxidable que mantiene temperatura por varias horas.',
    },
    {
      id: 4,
      nombre: 'Cuaderno Inteligente',
      descripcion: 'Cuaderno reutilizable con hojas borrables y escaneo digital rapido.',
    },
  ];

    constructor(private miServicio: MiServicio) {
    }

  
    sumar() {
      this.miServicio.sumar();
    }
}

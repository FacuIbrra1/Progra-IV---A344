import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
interface ItemMock {
  id: number;
  nombre: string;
  descripcion: string;
}
@Component({
  imports: [],
  selector: 'app-detalle',
  styleUrl: './detalle.css',
  templateUrl: './detalle.html',
})
export class Detalle implements OnInit, OnDestroy {
  itemEncontrado: ItemMock | undefined;
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
  susc!: Subscription;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.susc = this.route.paramMap.subscribe(params => {
      const itemId = params.get('id');
      if (itemId) {
        this.itemEncontrado = this.items.find(item => item.id === +itemId);
      } else {
        this.itemEncontrado = undefined;
      }
    });

    // this.route.queryParamMap.subscribe(params => {
    //   const itemId = params.get('id');
    //   if (itemId) {
    //     this.itemEncontrado = this.items.find(item => item.id === +itemId);
    //   } else {
    //     this.itemEncontrado = undefined;
    //   }
    // });

    // this.route.queryParams.subscribe(params => {
    //   const itemId = params['id'];
    //   if (itemId) {
    //     this.itemEncontrado = this.items.find(item => item.id === +itemId);
    //   } else {
    //     this.itemEncontrado = undefined;
    //   }
    // });
  }



  ngOnDestroy(): void {
    // Aquí puedes limpiar suscripciones si es necesario
    this.susc.unsubscribe();
  }
}

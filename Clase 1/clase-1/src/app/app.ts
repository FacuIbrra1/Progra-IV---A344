import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { MiComponente } from './componentes/mi-componente/mi-componente';

@Component({
  selector: 'app-root',
  imports: [MiComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected  title = signal('Hello, clase-1');

  constructor() {
   // this.title = signal('Hello, clase-1');
   setTimeout(() => {
    this.title.set('Hello, clase-1 - updated');
    console.log(this.title);

   }, 1000);
  }

}

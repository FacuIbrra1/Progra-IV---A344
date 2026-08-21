import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rutas');

  router = inject(Router);
  active = "active";


  //constructor(private router: Router) {}

  navegar(ruta: string) {
    this.router.navigate([ruta]);
    //this.router.navigateByUrl(ruta);
  }
}

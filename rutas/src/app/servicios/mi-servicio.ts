import { Service } from '@angular/core';

@Service()
export class MiServicio {
    data: number = 0;

    sumar() {
        this.data++;
        console.log(`Data incremented to: ${this.data}`);
    }
}

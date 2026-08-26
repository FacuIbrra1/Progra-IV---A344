import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './models/character';

@Service()
export class Http {

    httpClient = inject(HttpClient);

    TraerData(url: string): Observable<Character[]> {
        return this.httpClient.get<Character[]>(url);
    }

    post(url: string, body: any) {
        return this.httpClient.post(url, body);
    }

}

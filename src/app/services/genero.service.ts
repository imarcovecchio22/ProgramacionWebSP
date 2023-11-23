import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from '../models/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private http: HttpClient) { }

  getGenero(name: string): Observable<Genero> {
    return this.http.get<Genero>('https://api.genderize.io/?name=' + name);
  }
}

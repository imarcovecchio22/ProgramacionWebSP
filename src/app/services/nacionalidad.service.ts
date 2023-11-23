import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nacionalidad } from '../models/nacionalidad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NacionalidadService {

  constructor(private http:HttpClient) { }

  getNacionalidad(name: string): Observable<Nacionalidad> {
    return this.http.get<Nacionalidad>('https://api.nationalize.io/?name=' + name);
  }
}

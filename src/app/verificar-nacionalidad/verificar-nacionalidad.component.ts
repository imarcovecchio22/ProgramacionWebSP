import { Component } from '@angular/core';
import { Nacionalidad } from '../models/nacionalidad';
import { NacionalidadService } from '../services/nacionalidad.service';

@Component({
  selector: 'app-verificar-nacionalidad',
  templateUrl: './verificar-nacionalidad.component.html',
  styleUrls: ['./verificar-nacionalidad.component.css']
})
export class VerificarNacionalidadComponent {

  nombre: string = '';
  nacionalidadResponse: Nacionalidad | undefined;

  constructor(private nacionalidadService: NacionalidadService) { 
  }

  verificarNacionalidad() {
    this.nacionalidadService.getNacionalidad(this.nombre).subscribe(
      response => {
        this.nacionalidadResponse = response;
      },
      error => {
        console.error('Error al obtener el género:', error);
      }
    );
  }
}

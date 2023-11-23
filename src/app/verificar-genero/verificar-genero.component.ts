import { Component } from '@angular/core';
import { Genero } from '../models/genero';
import { GeneroService } from '../services/genero.service';


@Component({
  selector: 'app-verificar-genero',
  templateUrl: './verificar-genero.component.html',
  styleUrls: ['./verificar-genero.component.css']
})
export class VerificarGeneroComponent {

  nombre: string = '';
  generoResponse: Genero | undefined;

  constructor(private generoService: GeneroService) { 
  }

  verificarGenero() {
    this.generoService.getGenero(this.nombre).subscribe(
      response => {
        this.generoResponse = response;
      },
      error => {
        console.error('Error al obtener el género:', error);
      }
    );
  }
}

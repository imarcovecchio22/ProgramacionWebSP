import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  userEmail: string = '';
  showGenero: boolean = false;
  menuToggle: boolean = false;
  showNacionalidad: boolean=false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.loginStatus$.subscribe((status) => {
      if (status.loggedIn) {
        this.userEmail = status.userEmail;
      }
    });
  }
  showGeneroComponent() {
    this.showGenero = !this.showGenero;
  }
  showNacionalidadComponent(){
    this.showNacionalidad = !this.showNacionalidad;
  }

  toggleMenu(){
    this.menuToggle =!this.menuToggle;
  }

  logout() {
    this.authService.setLoginStatus(false, ''); 
    this.showGenero = false;
    this.router.navigate(['/login']);
  }
}

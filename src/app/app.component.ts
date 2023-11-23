import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SegundoParcial';
  loginStatus: { loggedIn: boolean; userEmail: string } = { loggedIn: false, userEmail: '' };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.loginStatus$.subscribe((status) => {
      this.loginStatus = status;
      if (!status.loggedIn) {
        this.router.navigate(['/login']);
      }
    });
  }
}

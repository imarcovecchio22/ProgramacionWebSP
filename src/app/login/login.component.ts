import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('0.5s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-out', style({ opacity: 0, transform: 'translateX(100%)' }))
      ])
    ])
  ]
})

export class LoginComponent {

  loginForm: FormGroup;
  private loginAttempts: number = 0;
  public showErrorMessage: boolean = false;

  constructor(private userServices: UsersService, private authService: AuthService, private toastr: ToastrService) {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(6), Validators.pattern(/^(?=.*[A-Za-z]{6,})(?=.*\d{2,})(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}$/)])
  })
}

submitRegistration() {
  console.log("La función se está llamando");
  const { email, password } = this.loginForm.value;
  this.userServices.authenticate(email, password).subscribe(
    isAuthenticated => {
      if (isAuthenticated) {
        console.log("correcto");
        this.authService.setLoginStatus(true, email);
        this.toastr.success('Credenciales correctas', 'Success');
      } else {
        console.log("incorrecto");
        this.toastr.error('Credenciales Incorrectas', 'Error');
        console.log(this.loginAttempts);
        console.log(this.loginForm);
        this.loginAttempts++;
        if (this.loginAttempts >= 3) {
          this.showErrorMessage = true;
          this.loginForm.disable();
        }
      }
    },
    error => {
      console.error('Error al autenticar, datos incorrectos.');
    }
  );
}

}

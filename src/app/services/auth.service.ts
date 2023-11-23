import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private loginStatus = new BehaviorSubject<{ loggedIn: boolean, userEmail: string }>({ loggedIn: false, userEmail: '' });
  
    get loginStatus$() {
      return this.loginStatus.asObservable();
    }
  
    setLoginStatus(status: boolean, userEmail: string) {
      this.loginStatus.next({ loggedIn: status, userEmail });
    }
    isLoggedIn(): boolean {
      return this.loginStatus.value.loggedIn;
    }
}

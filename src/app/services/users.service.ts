import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  }

  authenticate(email: string, password: string): Observable<boolean> {
    return this.getUsers().pipe(map(users => {
      const user = users.find(u => u.email === email && u.address.geo.lat === password);
      return !!user;
    }));
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(
    private http: HttpClient
  ) { }

  login(email: String, password: String) {
    return this.http.post<User>(`${environment.apiBaseUrl}/login`, { email, password })
  }

}

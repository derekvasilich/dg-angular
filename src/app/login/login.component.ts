import { Component, OnInit } from '@angular/core';
import { LoginError, LoginFilters } from '../models/login';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: LoginError;
  filters: LoginFilters;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { 
    this.error = null;
    this.router = router;
    this.loginService = loginService;
  }

  login(email: String, password: String) {
    this.loginService.login(email, password)
      .subscribe(
        user => {
          sessionStorage.setItem("jwt:type", user.type);
          sessionStorage.setItem("jwt:token", user.token);
          this.router.navigate(['vehicle-list']);
        }, 
        error => {
          this.error = error
        })   
      return false;
    }

  ngOnInit(): void {

  }

}

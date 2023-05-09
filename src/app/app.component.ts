import { Component } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: String = "dg-angular";
  public currentRoute: String;

  constructor(
    private router: Router
  ) {
    router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url;                
      }
    });
  }

  get isLogin() {
    return this.currentRoute === '/' || this.currentRoute === '/login';
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
  
}

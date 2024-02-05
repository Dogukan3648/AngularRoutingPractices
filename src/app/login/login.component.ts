import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  message: string = '';

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }


  login() {
    this.authService.login();
    this.setMessage();

    this.authService.isAuthenticated()
      .then(isAuthenticated => {
        if (isAuthenticated) {
          let redirectUrl = this.authService.redirectUrl ?
            this.router.parseUrl(this.authService.redirectUrl) :
            '/admin';
          
            this.router.navigateByUrl(redirectUrl);
        }
      });

  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  setMessage() {
    this.message = 'logged ';
  
    this.authService.isAuthenticated()
      .then((isAuthenticated: unknown) => {
        // isAuthenticated tipini kontrol et
        if (typeof isAuthenticated === 'boolean') {
          if (isAuthenticated) {
            this.message += 'in';
          } else {
            this.message += 'out';
          }
        } else {
          console.error('Unexpected type for isAuthenticated:', typeof isAuthenticated);
        }
      })
      .catch((error) => {
        console.error('Error checking authentication:', error);
      });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  





}

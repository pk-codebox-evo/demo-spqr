//our root app component
import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {db} from 'baqend';

@Component({
  template: `
    <div class="container">
      <h3>Login</h3>
      
      <form #loginForm="ngForm" (ngSubmit)="login(loginForm.value)">
         <div class="form-group">
          <label for="username">Nickname</label>
          <input type="text" ngModel name="username" required class="form-control" id="username" placeholder="Nickname">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" ngModel name="password" required class="form-control" id="password" placeholder="Password">
        </div>
        <button type="button" (click)="register(loginForm.value)" class="btn btn-default">Register</button>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>  
    </div>
  `
})
export class LoginComponent {
  
  constructor(private router:Router) {}
  
  register(values) {
    db.User.register(values.username, values.password).then(() => {
      this.router.navigate(['/talks']);
    })
  }
  
  login(values) {
    db.User.login(values.username, values.password).then(() => {
      this.router.navigate(['/talks']);
    })
  }
}
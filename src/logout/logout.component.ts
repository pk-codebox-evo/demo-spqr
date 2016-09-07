//our root app component
import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {db} from 'baqend';

@Component({
  template: ''
})
export class LogoutComponent {
  
  constructor(private router:Router) {}
  
  ngOnInit() {
    if (db.User.me) {
      db.User.logout().then(() => {
        this.router.navigate(['/talks']);
      });
    } 
  }
}
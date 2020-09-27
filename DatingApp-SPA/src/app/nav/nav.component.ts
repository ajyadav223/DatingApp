import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService,
    private router : Router) { }

  ngOnInit() { }
 
  login(){
  this.authService.login(this.model).subscribe(next =>
    {
      this.alertify.success('Logged in successful');

    },error=>{
      this.alertify.error('Unauthorised');
    },
    ()=>{
      this.router.navigate(['/members']);
    }
    );
}
loggedIn(){
return this.authService.loggedIn();
}
logout(){
  localStorage.removeItem('token');
  this.alertify.message ("Logged Out");
  this.router.navigate(['/home']);
}
}

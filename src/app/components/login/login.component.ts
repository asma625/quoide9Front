import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/user';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user =  new User();
  msg = '';

  constructor( private loginService : LoginService, private router : Router) { }

  ngOnInit(): void {
    
  }

  loginUser(){

    this.loginService.loginUser(this.user).subscribe(
      data => {console.log("oui");
              this.router.navigate([''])},

      erreur => {console.log(erreur);
      this.msg = "Veilliez vérifier votre Email ou mot de passe";
    }
      
    )
  }

}

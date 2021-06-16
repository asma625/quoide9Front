import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SingnupService } from 'src/app/services/singnup.service';
import { User } from 'src/app/user';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new User();

  constructor( private singinUpservice :  SingnupService ,private route : Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this.singinUpservice.registerUser(this.user).subscribe(
      data => {
        console.log("c'est fait")
      },
      erreur =>{
        console.log(console.error());
        

      }
      
    )

  }

}

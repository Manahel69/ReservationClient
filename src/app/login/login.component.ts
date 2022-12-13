import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });
 
constructor(
  private authService: AuthenticationService, 
  private router:Router,
 
  ){
      

    }
    ngOnInit(): void {}
    
    

    get email(){
      return this.loginForm.get('email');
    }

    get password(){
      return this.loginForm.get('password');
    }

    submit(){
      console.log(this.loginForm.value);
      

      const{ email , password} = this.loginForm.value;
      this.authService.login(email as string, password as string).subscribe(() =>{
        this.router.navigate(['/home']);
      })
    
      }
     
      

      
    }
   
   
    
  

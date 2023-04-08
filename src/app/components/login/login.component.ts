import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { User } from './../../common/user';
import { FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin=false;
  constructor(
    private loginService: LoginService,
    private router:Router,
    private zone: NgZone) { }


  loginForm = new FormGroup({

   
    email: new FormControl("", [Validators.required]),

    password: new FormControl("", [Validators.required]),

  })
  getControl(name: any): AbstractControl | null {

    return this.loginForm.get(name)

  }
  onSubmit() {
    console.log("Handling the login button");
    console.log(this.loginForm.value)
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    let u = new User();
    u.email = this.loginForm.controls['email'].value;
    u.password = this.loginForm.controls['password'].value;
    this.Authenticate(u.email,u.password);
    // this.loginService.executeAuthenticationService(u.email,u.password).subscribe({
    //   next: response => {
    //    //alert(`You have registered successfully with email-id: ${response.email}`);


    //     // reset cart
    //     console.log(response);
    //     console.log(response.token);
    //     this.invalidLogin=false;
    //     this.router.navigate(['/products']);
    //    // this.toLogin();


    //   },
    //   error: err => {
    //     console.log(err);
    //     this.invalidLogin=true;
    //     //alert(`Email Id already exists!!`);
    //   }
    // });

  }
  Authenticate(email:string,password:string) {
    this.loginService.executeAuthenticationService(email,password).subscribe({
      next: response => {
       //alert(`You have registered successfully with email-id: ${response.email}`);


        // reset cart
        console.log("response=",response);
        console.log("token=",response.token);
        this.invalidLogin=false;
        this.zone.run(() => {
          this.router.navigate(['/products'])
        });
       // this.toLogin();


      },
      error: err => {
        console.log(err);
        this.invalidLogin=true;
        //alert(`Email Id already exists!!`);
      }
    });
  }
}

import { SignupService } from './../../services/signup.service';
import { User } from './../../common/user';
import { CustomValidator } from './../../validators/custom-validator';
import { FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, NgZone, OnInit } from '@angular/core';
import { passwordMatch } from 'src/app/common/password-match';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public email:any="new";
  constructor(
    private signupService: SignupService,
    private router:Router,
    private zone: NgZone) { }



  integreRegex = /^\d+$/

  //emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/



  signUpForm = new FormGroup({

    fname: new FormControl("", [Validators.required, Validators.maxLength(32)]),

    lname: new FormControl("", [Validators.required, Validators.maxLength(32)]),

    mobile: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.integreRegex)]),

    email: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),

    password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),

    confirm_password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),

  }, [passwordMatch("password", "confirm_password")])



  getControl(name: any): AbstractControl | null {

    return this.signUpForm.get(name)

  }



  registerFn() {

    console.log(this.signUpForm.value)

  }
  onSubmit() {
    console.log("Handling the submit button");

    console.log(this.signUpForm.value)
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    let u = new User();
    u.fname = this.signUpForm.controls['fname'].value;
    u.lname = this.signUpForm.controls['lname'].value;
    u.mobile = +this.signUpForm.controls['mobile'].value;
    u.email = this.signUpForm.controls['email'].value;
    u.password = this.signUpForm.controls['password'].value;
    console.log(u.fname," ",u.lname," ",u.email," ",u.mobile," ",u.password);
    this.register(u);
    // this.signupService.addUser(u).subscribe({
    //   next: response => {
    //     alert(`You have registered successfully with email-id: ${response.email}`);


    //     // reset cart
    //     this.toLogin();


    //   },
    //   error: err => {
    //     console.log(err);
    //     console.log(err?.message);
    //     alert(`Email Id already exists!!`);
    //   }
    // });

  }
  register(u:User){
    this.signupService.addUser(u).subscribe({
      next: response => {
        this.email=JSON.stringify(response);
         alert(`You have registered successfully with email-id: ${response.email}`);
        //alert(`You have registered successfully with email-id: ${this.email}`);


        // reset cart
        console.log("response=",response.email)
        console.log("email=",this.email)
        this.toLogin();


      },
      error: err => {
        console.log(err);
        console.log(err?.message);
        alert(`Email Id already exists!!`);
      }
    });
  }
  toLogin() {
    this.zone.run(() => {
      this.router.navigate(['/products']);
  });
    //this.router.navigateByUrl("/products");
  }
}
// "ts-jest": {
//   "tsconfig": "<rootDir>/tsconfig.spec.json",
//   "stringifyContentPathRegex": "\\.html$"
// }

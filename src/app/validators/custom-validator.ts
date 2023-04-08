import { FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class CustomValidator {
    // whitespace validation
    static hasOnlyWhitespace(control: FormControl) : ValidationErrors {
       
        // check if string only contains whitespace
        if ((control.value != null) && (control.value.trim().length === 0)) {


            // invalid, return error object
            return { 'hasOnlyWhitespace': true };
        }
        else {
            // valid, return null
            return null;
        }
    }
    static ConfirmedValidator(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
          if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
            return;
          } if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
    //   createCompareValidator(controlOne: FormControl): ValidationErrors { 
    //     const controlTwo=this.signUpFormGroup.get('password');
    //       if (controlOne.value !== controlTwo.value) 
    //         return { createCompareValidator: true };
    //        return null;
           
    //   }

}


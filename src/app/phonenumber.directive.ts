import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPhonenumber]'
})
export class PhonenumberDirective implements  Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const phoneNumberRegex = /^[0-9]{10}$/; // Regular expression for 10-digit phone number

    if (!phoneNumberRegex.test(control.value)) {
      return { 'invalidPhoneNumber': true };
    }
    return null;
  }

}

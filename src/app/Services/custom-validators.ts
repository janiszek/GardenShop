import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

const ProductNames = ['Świerk', 'Sosna', 'Brzoza', 'Trawa', 'Chwast', 'Jabłoń', 'Wiśnia', 'Tuja'];

@Directive(
  {selector: '[appValidProductName]', providers: [{provide: NG_VALIDATORS, useExisting: AppValidProductNameDirective, multi: true}]}
  )

export class AppValidProductNameDirective implements Validator {

  validate(control: AbstractControl): {[key: string]: any} | null {
    if (control.value && (ProductNames.indexOf(control.value) < 0)) {
      return { appValidProductName: true }; // return object if the validation is not passed.
    }
    return null; // return null if validation is passed.
  }
}

@Directive(
  {selector: '[appMinValue]', providers: [{provide: NG_VALIDATORS, useExisting: AppMinValueDirective, multi: true}]}
  )

export class AppMinValueDirective implements Validator {
  @Input('appMinValue') minimalValue: string;
  validate(control: AbstractControl): {[key: string]: any} | null {
    if (control.value && control.value < this.minimalValue) {
      return { appMinValue: true }; // return object if the validation is not passed.
    }
    return null; // return null if validation is passed.
  }
}

@Directive(
  {selector: '[appMaxValue]', providers: [{provide: NG_VALIDATORS, useExisting: AppMaxValueDirective, multi: true}]}
)

export class AppMaxValueDirective implements Validator {
  @Input('appMaxValue') maximumValue: string;
  validate(control: AbstractControl): {[key: string]: any} | null {
    if (control.value && (control.value > this.maximumValue)) {
      return { appMaxValue: true }; // return object if the validation is not passed.
    }
    return null; // return null if validation is passed.
  }
}

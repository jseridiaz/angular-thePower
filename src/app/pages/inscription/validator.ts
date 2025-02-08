import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validatorEmail(): ValidatorFn {
  return (control: AbstractControl) => {
    const inputValue = control.value;
    const hasNumber = /\d/.test(inputValue);
    return !inputValue || hasNumber ? null : { adressWithoutNumber: true };
  };
}
export function validatorNumbers(value: string): { error: boolean } | null {
  const regex = /^\d+$/;
  const testing = regex.test(value);
  if (testing) {
    return null;
  } else {
    return { error: true };
  }
}

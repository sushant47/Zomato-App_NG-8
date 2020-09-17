import { AbstractControl } from '@angular/forms';

export class RegisterFormValidator {
    public static passwordValidator(control: AbstractControl) {
        const passwordValidationPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
        if (control.value) {
            if (control.value < 8) {
                return { minPasswordLength: true };
            }
            if (control.value > 20) {
                return { maxPasswordLength: true };
            }
            if (!(passwordValidationPattern.test(control.value))) {
                return { passwordCriteria: true };
            }
        } else {
            return null;
        }
    }
}

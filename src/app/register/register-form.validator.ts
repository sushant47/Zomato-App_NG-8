import { AbstractControl } from '@angular/forms';

export class RegisterFormValidator {
    public static passwordValidator(control: AbstractControl) {
        const passwordValidationPattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,20}$';
        if (control.value) {
            if (control.value < 8) {
                return { minPasswordLength: true };
            }
            if (control.value > 20) {
                return { maxPasswordLength: true };
            }
            if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(control.value))) {
                return { passwordCriteria: true };
            }
        } else {
            return null;
        }
    }
}

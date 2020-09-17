import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IRegistrationForm } from './registration-form.interface';
import { RegisterFormValidator } from './register-form.validator';

export function formGroup(fb: FormBuilder): FormGroup {
    const emailValidationPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    const nameValidationPattern = '^[a-zA-Z ]*$';
    const phoneNumberValidationPattern = '^[0-9]*$';
    const formGroupObject = {
        firstName: ['', [Validators.required, Validators.pattern(nameValidationPattern)]],
        lastName: ['', [Validators.required, Validators.pattern(nameValidationPattern)]],
        emailID: ['', [Validators.required, Validators.pattern(emailValidationPattern)]],
        phoneNumber: ['', [Validators.required, Validators.pattern(phoneNumberValidationPattern),
        Validators.minLength(10), Validators.maxLength(10)]],
        password: ['', [Validators.required, RegisterFormValidator.passwordValidator]],
        address: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(60)]],
        addressLine2: [''],
        gender: ['0']
    };
    return fb.group(formGroupObject);
}
export function registrationFormConfig(fb: FormBuilder, customValidators?): IRegistrationForm {
    return {
        formGroup: formGroup(fb)
    };
}

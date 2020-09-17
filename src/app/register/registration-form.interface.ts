import { FormGroup } from '@angular/forms';

export interface IRegistrationForm {
    formGroup: FormGroup;
}
export interface IRegistrationFormControls {
    firstName: string;
    lastName: string;
    emailID: string;
    phoneNumber: number;
    password: string;
    address: string;
    addressLine2: string;
    gender: string;
}

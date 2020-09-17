import { IRegistrationFormControls } from './registration-form.interface';

export class RegisterForm implements IRegistrationFormControls {
    public firstName: string;
    public lastName: string;
    public emailID: string;
    public phoneNumber: number;
    public password: string;
    public address: string;
    public addressLine2: string;
    public gender: string;
}


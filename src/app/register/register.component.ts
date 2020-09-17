import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { registrationFormConfig } from './register-form.config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public fieldTextType = false;
  public gendersList = ['Male', 'Female'];
  constructor(
    private router: Router,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = registrationFormConfig(this.formBuilder).formGroup;
  }
  public toggleFieldTextType() {
    return this.fieldTextType = !this.fieldTextType;
  }
  public register() {
    if (this.registerForm.valid) {
      this.router.navigate(['/restaurants-list']);
    }
  }
}

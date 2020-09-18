import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let formBuilder: FormBuilder;
  let registerForm: FormGroup;
  let router = {
    navigate: jasmine.createSpy('navigate')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [RegisterComponent],
      providers: [{ provide: Router, useValue: router }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnInit', () => {
    spyOn(component, 'ngOnInit');
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });
  it('should call toggleFieldTextType', () => {
    spyOn(component, 'toggleFieldTextType').and.callThrough();
    fixture.detectChanges();
    component.toggleFieldTextType();
    expect(component.toggleFieldTextType).toHaveBeenCalled();
  });
  it('should', fakeAsync(() => {
    spyOn(component, 'register').and.callThrough();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    fixture.detectChanges();
    component.register();
    expect(component.register).toHaveBeenCalled();

  }));
  it('form should be invalid', async(() => {
    component.registerForm.controls.firstName.setValue('');
    component.registerForm.controls.lastName.setValue('');
    component.registerForm.controls.emailID.setValue('');
    component.registerForm.controls.phoneNumber.setValue('');
    component.registerForm.controls.password.setValue('');
    component.registerForm.controls.address.setValue('');
    component.registerForm.controls.addressLine2.setValue('');
    component.registerForm.controls.gender.setValue('');
    expect(component.registerForm.valid).toBeFalsy();
  }));
  it('form should be valid', async(() => {
    component.registerForm.controls.firstName.setValue('sushant');
    component.registerForm.controls.lastName.setValue('bilgi');
    component.registerForm.controls.emailID.setValue('abc@gmail.com');
    component.registerForm.controls.phoneNumber.setValue('1234567890');
    component.registerForm.controls.password.setValue('Abcdef@12');
    component.registerForm.controls.address.setValue('Shastri Nagar, yerwada, pune , 411001');
    component.registerForm.controls.addressLine2.setValue('Near Sahayadri Hospital');
    component.registerForm.controls.gender.setValue('Male');
    expect(component.registerForm.valid).toBeTruthy();
  }));
  it('should navigate', () => {
    component.registerForm.controls.firstName.setValue('sushant');
    component.registerForm.controls.lastName.setValue('bilgi');
    component.registerForm.controls.emailID.setValue('abc@gmail.com');
    component.registerForm.controls.phoneNumber.setValue('1234567890');
    component.registerForm.controls.password.setValue('Abcdef@12');
    component.registerForm.controls.address.setValue('Shastri Nagar, yerwada, pune , 411001');
    component.registerForm.controls.addressLine2.setValue('Near Sahayadri Hospital');
    component.registerForm.controls.gender.setValue('Male');
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['/restaurants-list']);
  });
  it('should Validate password', () => {
    component.registerForm.controls.password.setValue('Abcdef@12');
    const password = component.registerForm.controls.password;
    expect(password.valid).toBeTruthy();
    password.setValue('abc');
    expect(password.hasError('minPasswordLength')).toBeTruthy();
    password.setValue('abcW@4dsadsadasdasdasdasdasdasdasdasdasdasd');
    expect(password.hasError('maxPasswordLength')).toBeTruthy();
    password.setValue('abc@4712121');
    expect(password.hasError('passwordCriteria')).toBeTruthy();
  });
});

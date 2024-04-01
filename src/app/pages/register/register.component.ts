import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '../../core/models/user-model';
import { RegisterService } from '../../core/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: '../../app.component.scss'
})
export class RegisterComponent {
registerForm!: FormGroup;
constructor(
  private formBuilder: FormBuilder,
  public registerService: RegisterService,
) { }

ngOnInit(): void {
  this.registerForm = this.formBuilder.group
    (
      {
        name: [""],
        birthDate: [""],
        phone: [""],
        email: ["", Validators.required, Validators.email],
        password: ["", Validators.required],
        checkPassword: ["", Validators.required]
      }
    );
}

submitRegister() {
  if (this.registerForm.invalid) {
    return;
  }
  const dataLogin = this.registerForm.getRawValue() as UserModel;
}
}

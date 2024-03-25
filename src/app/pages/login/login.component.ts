import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../../core/models/login-model';
import { LoginService } from '../../core/services/login.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group
      (
        {
          email: ["", Validators.required, Validators.email],
          password: ["", Validators.required]
        }
      );
  }
  submitLogin() {
    const dataLogin = this.loginForm.getRawValue() as LoginModel;
    this.loginService.loginUser(dataLogin).subscribe(
      token => {
        console.log("Deu certo foi de mais ${dataLogin}");
        this.router.navigate(["/"]);
      },
      erro => {
        console.log("Deu errado ${dataLogin}");
        alert("Erro inesperado")
      })
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppGlobals } from './app.globals';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

// components

import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { DashboardModule } from './layout/components/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    // FormComponent,
    LoginComponent,
    // HomeComponent,
    // RegisterComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    DashboardModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AppGlobals,
    provideClientHydration(),
    provideHttpClient(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

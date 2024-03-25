import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
},
{
    path: "home", component: HomeComponent
},
{
    path: "login", component: LoginComponent,
},
{
    path: "form", component: FormComponent,
},
{
    path: "register", component: RegisterComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

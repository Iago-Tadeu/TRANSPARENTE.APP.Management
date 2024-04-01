import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
// import { HomeComponent } from './pages/home/home.component';
// import { FormComponent } from './pages/form/form.component';
// import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "login"
    },
    {
        path: "login", component: LoginComponent,
    },
    {
        path: "forgot-password", component: ForgotPasswordComponent,
    },
    {
        path: "dashboard", loadChildren: () =>
            import('./layout/components/dashboard/dashboard.module').then(m => m.DashboardModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

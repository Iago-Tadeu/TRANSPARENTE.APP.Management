import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FormComponent } from '../../../pages/form/form.component';
import { HomeComponent } from '../../../pages/home/home.component';
import { RegisterComponent } from '../../../pages/register/register.component';

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboardComponent"
    },
    {
        path: "dashboardComponent", component: DashboardComponent,
    },
    {
        path: "home", component: HomeComponent,
        //  canActivate: [() => inject(AuthGuard)],
    },
    {
        path: "form", component: FormComponent,
    },
    {
        path: "register", component: RegisterComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }
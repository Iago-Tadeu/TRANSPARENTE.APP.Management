import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../../../pages/form/form.component';
import { HomeComponent } from '../../../pages/home/home.component';
import { RegisterComponent } from '../../../pages/register/register.component';


@NgModule(
    {
        exports:[],
        declarations:[
            FormComponent,
            HomeComponent,
            RegisterComponent,
            DashboardComponent,
        ],
        imports:[
            // BrowserModule,
            // CommonModule,
            DashboardRoutingModule,
            FormsModule,
            SidebarModule
        ]
    }
)

export class DashboardModule{}
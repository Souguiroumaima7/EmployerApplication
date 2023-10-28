import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './Compoments/department/department.component';
import { ProjectComponent as ProjectComponent } from './Compoments/projet/projet.component';
import { SpaceParkingComponent } from './Compoments/space-parking/space-parking.component';
import { NavbarComponent } from './Compoments/navbar/navbar.component';
import { FooterComponent } from './Compoments/footer/footer.component';
import { AboutComponent } from './Compoments/about/about.component';
import { EmployeeComponent } from './Compoments/employee/employee.component';
import { ContactComponent } from './Compoments/contact/contact.component';
import { LicensingComponent } from './Compoments/licensing/licensing.component';
import { PrivacyPolicyComponent } from './Compoments/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ProjectComponent,
    SpaceParkingComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    EmployeeComponent,
    ContactComponent,
    LicensingComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

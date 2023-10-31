import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './Compoments/employee/employee.component'
import { DepartmentComponent } from './Compoments/department/department.component';
import { SpaceParkingComponent } from './Compoments/space-parking/space-parking.component';
import { LicensingComponent } from './Compoments/licensing/licensing.component';
import { AboutComponent } from './Compoments/about/about.component';
import { FooterComponent } from './Compoments/footer/footer.component';
import { ProjectComponent } from './Compoments/projet/projet.component';
import { PrivacyPolicyComponent } from './Compoments/privacy-policy/privacy-policy.component';
import { NavbarComponent } from './Compoments/navbar/navbar.component';

const routes: Routes = [
  {path:'Navbar',component:NavbarComponent},
  { path: 'about', component: AboutComponent },
 { path: 'employee', component: EmployeeComponent },
 { path: 'department', component:DepartmentComponent },
 {path:'space-parking',component:SpaceParkingComponent},
 {path:'project',component:ProjectComponent},
 {path:'privacy-policy' , component:PrivacyPolicyComponent},
 {path:'licensing',component:LicensingComponent},
 { path:'footer', component:FooterComponent},



];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
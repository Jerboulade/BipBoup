import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { BannerEmployeeComponent } from './banner-employee/banner-employee.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { OneEmployeeComponent } from './one-employee/one-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    BannerEmployeeComponent,
    AllEmployeeComponent,
    OneEmployeeComponent,
    DeleteEmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }

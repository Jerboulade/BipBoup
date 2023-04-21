import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeComponent } from './employee.component';
import { OneEmployeeComponent } from './one-employee/one-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path : '', component : EmployeeComponent, children : [
    { path : 'all', component : AllEmployeeComponent },
    { path : 'one', component : OneEmployeeComponent },
    { path : 'create', component : CreateEmployeeComponent },
    { path : 'update', component : UpdateEmployeeComponent },
    { path : 'delete', component : DeleteEmployeeComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

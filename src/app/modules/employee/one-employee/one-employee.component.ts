import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/shared/model/employee/employee.model';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';

@Component({
  selector: 'app-one-employee',
  templateUrl: './one-employee.component.html',
  styleUrls: ['./one-employee.component.scss']
})
export class OneEmployeeComponent implements OnInit, OnDestroy{

  employee! : Employee;

  constructor (private _employeeService : EmployeeService, private _activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this._employeeService.getOneEmployee(this._activatedRoute.snapshot.params['id']).subscribe({
      next : (data : Employee) => {
        this.employee = data;
      }
    });
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


}

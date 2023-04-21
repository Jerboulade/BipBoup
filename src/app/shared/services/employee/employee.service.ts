import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../../model/employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http : HttpClient) { }

  getAllEmployee() : Observable<Employee[]> {
    return this._http.get<Employee[]>('http://localhost:8080/person/all')
  }

  getOneEmployee(id : String) : Observable<Employee> {
    return this._http.get<Employee>('http://localhost:8080/person/' + id);
  }

  deleteEmployee(id : String) {
    this._http.delete<Employee>('http://localhost:8080/person/' + id);
  }

  createEmployee(form : Employee) {
    this._http.post<Employee>('http://localhost:8080/person/add', form)
  }

  updateEmployee(form : Employee, id : String) {
    this._http.patch<Employee>('http://localhost:8080/person/' + id + '/update', form)
  }
}

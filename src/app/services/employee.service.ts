import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

export interface Employee{
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  startDateTime: string;
  dateOfBirth: string;
  lastModifiedDateTime?: string;
  skillSet: string[];
}


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log("API url:", this.apiUrl);
   }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log("asdfasdfasdfasdf", employee);
    return this.http.post<Employee>(this.apiUrl, employee, { headers });
  }

  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

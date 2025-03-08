import { Component } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  employee: Employee = {
    firstName: '',
    lastName: '',
    age: 0,
    startDateTime: '',
    dateOfBirth: '',
    skillSet: []
  };

  skillSetInput: string = '';

  constructor(private employeeService: EmployeeService, private router: Router) {}

  addEmployee() {

    this.employee.skillSet = this.skillSetInput.split(',');

    console.log("Submitting employee:", JSON.stringify(this.employee));

    this.employeeService.addEmployee(this.employee).subscribe({
      next: (response: any) => {
        console.log("Employee added successfully!", response);
        this.router.navigate(['/']).then(success => {
          console.log(success ? "Navigation successful!" : "Navigation failed!");
        })
      },
      error: (err: any) => {
        console.error("Error adding employee:", err);
      }
    });
  }
}

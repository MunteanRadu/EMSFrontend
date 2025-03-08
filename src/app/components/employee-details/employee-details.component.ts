import { Component } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  employee: Employee | undefined;
  errorMessages: string[] = [];

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("Employee ID:", id);
    if (id) {
      this.employeeService.getEmployeeById(id).subscribe({
        next: (data) => this.employee = data,
        error: (err) => {
          console.error('Error fetching employee: ', err)
          this.errorMessages = this.extractErrorMessages(err);
        }
      });
    }
  }
  private extractErrorMessages(error: any): string[] {
    if (error.error && error.error.errors) {
      return Object.values(error.error.errors).flat() as string[];
    }
    if (error.error && error.error.title) {
      return [error.error.title];
    }
    return [error.message || 'Something went wrong.'];
  }
  
}

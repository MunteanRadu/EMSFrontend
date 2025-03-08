import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

export const routes: Routes = [
    { path: '', component: EmployeeListComponent},
    { path: 'add-employee', component: EmployeeFormComponent},
    { path: 'employee/:id', component: EmployeeDetailsComponent}
];

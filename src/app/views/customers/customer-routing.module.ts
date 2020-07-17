import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CustomersComponent } from './customers.component';
import { AuthGuard } from '../login/auth.guard';
const routes: Routes = [
    {
        path: '',
        component: CustomersComponent,  canActivate: [AuthGuard],
        data: {
            title: 'customers'
        }
    },
    { path: 'create', component: CreateCustomerComponent, canActivate: [AuthGuard], data: { title: 'createCustomers' }},
    { path: 'edit/:id', component: CreateCustomerComponent, canActivate: [AuthGuard], data: { title: 'editCustomers' }},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomersRoutingModule { }

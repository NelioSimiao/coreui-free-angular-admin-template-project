import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CustomersComponent } from './customers.component';
const routes: Routes = [
    {
        path: '',
        component: CustomersComponent,
        data: {
            title: 'customers'
        }
    },
    { path: 'create', component: CreateCustomerComponent, data: { title: 'createCustomers' }},
    { path: 'edit/:id', component: CreateCustomerComponent, data: { title: 'editCustomers' }},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomersRoutingModule { }

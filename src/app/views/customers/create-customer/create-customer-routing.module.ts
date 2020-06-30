import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './create-customer.component';


const routes: Routes = [
  { path: 'create', component: CreateCustomerComponent, data: { title: 'createCustomers' }},
  { path: 'update', component: CreateCustomerComponent, data: { title: 'createCustomers' }}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCustomersRoutingModule { }

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customer-routing.module';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild([{ path: 'add', component: CustomersComponent }]),
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
  ],
  declarations: [
    CustomersComponent,
    CreateCustomerComponent
  ]
})
export class CustomersModule { }

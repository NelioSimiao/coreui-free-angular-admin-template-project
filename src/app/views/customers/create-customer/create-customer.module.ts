import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CreateCustomerComponent } from './create-customer.component';
import { CreateCustomersRoutingModule } from './create-customer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CreateCustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ],
  declarations: [
        CreateCustomerComponent
  ]
})
export class CreateCustomersModule { }

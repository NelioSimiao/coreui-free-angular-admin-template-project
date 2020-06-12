import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers.component';
import {CustomersRoutingModule} from './customer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    //RouterModule.forChild([{ path: 'add', component: CustomersComponent }]),    
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CustomersComponent
  ]
})
export class CustomersModule { }

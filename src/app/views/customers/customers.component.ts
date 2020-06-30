import { Customer } from './../models/customer';
import { CreateCustomerService } from './create-customer/create-customer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  totalRecords: number;
  cols: any[];
  customers: Customer[];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private createCustomerService: CreateCustomerService) { }


  ngOnInit(): void {
    this.createCustomerService.customesChanged.subscribe((customersChanged:
      Customer[]) => {
      this.customers = customersChanged;
    });
    this.customers = this.createCustomerService.getCustomers();
    this.totalRecords = this.customers.length;
    this.cols = this.getFields();
  }

  edit(rowData: any) {
    this.router.navigate(['edit', rowData.id], { relativeTo: this.route });
  }

  delete(rowData: any) {
    this.createCustomerService.deleteCustomer(rowData.id);
  }

  navegate() {
    this.router.navigate(['/customers/create']);
  }

  private getFields() {
    return [
      { field: 'name', header: 'Nome' },
      { field: 'code', header: 'Codigo' },
      { field: 'email', header: 'Email' },
      { field: 'contact', header: 'Contacto' },
      { field: 'employer', header: 'Instituicao' }

    ];

  }

}

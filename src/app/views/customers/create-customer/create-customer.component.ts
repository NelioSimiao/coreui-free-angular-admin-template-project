import { Customer } from './../../models/customer';
import { CreateCustomerService } from './create-customer.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  createCustomerForm: FormGroup;
  submitted = false;
  customer: Customer;
  id: number;
  editMode = false;

  onSubmit() {
    this.submitted = true;
    if (this.editMode) {
      this.createCustomerService.updateCustomer(this.id, this.createCustomerForm.value)
    } else {
      this.createCustomerService.addCustomers(this.createCustomerForm.value);
    }
    this.back();
  }

  get form() {
    return this.createCustomerForm.controls;
  }


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private createCustomerService: CreateCustomerService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
    });
    this.customer = this.createCustomerService.getCustomer(this.id);
    this.initForm(this.id, this.customer);

  }
  onReset() {
    this.submitted = false;
    this.createCustomerForm.reset();
    this.back();
  }

  back() {
    this.router.navigate(['/customers']);
  }

  initForm(id: number, customer: Customer) {
    let name = '';
    let documentCode = '';
    let email = '';
    let contact = '';
    let employer = '';
    let code = '';

    if (id) {
      this.editMode = true;
      name = customer.name;
      documentCode = customer.documentCode;
      email = customer.email;
      contact = customer.contact;
      employer = customer.employer;
      code = customer.code;
    }

    this.createCustomerForm = this.formBuilder.group({
      name: [name, Validators.required],
      documentCode: [documentCode, Validators.required],
      email: [email, Validators.required],
      contact: [contact, [Validators.required, Validators.pattern(/^\d+\.\d{2}$/)]],
      employer: [employer, Validators.required],
      code: [code, Validators.required],

    });
  }

}

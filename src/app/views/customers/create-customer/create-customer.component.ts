import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  createCustomerForm: FormGroup;
  submitted = false;


  onSubmit() {
    this.submitted = true;
  }

  get form() {
    return this.createCustomerForm.controls;
  }


  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createCustomerForm = this.formBuilder.group({
      inputName: ['', Validators.required],
      inputIdentif: ['', Validators.required],
      inputEmail: ['', Validators.required],
      inputContacto: ['', [Validators.required, Validators.pattern(/^\d+\.\d{2}$/)]],
      inputEmpregadora: ['', Validators.required],
      inputCodigo: ['', Validators.required],

    });
  }
  save() {

  }

  onReset() {
    this.submitted = false;
    this.createCustomerForm.reset();
  }

  back() {
    this.router.navigate(['/customers']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customerForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    this.submitted=true;
    console.log(this.customerForm.value);
  }

  get form() { 
    return this.customerForm.controls;
   }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      inputName: ['', Validators.required],
      inputIdentif: ['', Validators.required],
      inputEmail: ['', Validators.required],
      inputContacto: ['',[Validators.required, Validators.pattern(/^\d+\.\d{2}$/)]],
      inputEmpregadora: ['', Validators.required],
      inputCodigo: ['', Validators.required],

    });
  }

  onReset() {

    this.submitted=false;

    console.log(this.customerForm.value);
    this.customerForm.reset();
    console.log(this.customerForm.value);

}

}

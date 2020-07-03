import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './../../models/customer';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class CreateCustomerService {
  // update the list of customer
  customesChanged = new Subject<Customer[]>();
  // select customer at datable
  customerSelected = new EventEmitter<Customer>();

  //constructor(private http: HttpClient) { }
 // AUTH_API = 'http://localhost:8080/api/auth/';
  /*httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };*/




  private customers: Customer[] = [
    {
      'id': 1,
      'name': "Nelio Simiao",
      'documentCode': "100000BI",
      'email': "nelio@Gmail.com",
      'contact': "848407055",
      'employer': "cedsif",
      'username': "g Q3 ersia",
      'password':"ddddd"
    },

    {
      'id': 2,
      'name': "Ofelia Artur Mambo",
      'documentCode': "1000000MNBI",
      'email': "Teste@Gmail.com",
      'contact': "5754822",
      'employer': "BM",
      'username': "saco",
      'password':"dddd"
    }
  ];

  getCustomers() {
    return this.customers.slice();
  }

  getCustomer(index: number) {
    return this.getCustomers().find(customer => customer.id === index);
  }

  addCustomers(customer: Customer) {
    this.customers.push(customer);
    this.customesChanged.next(this.getCustomers());
    
  }

  deleteCustomer(id: number) {
    const customer = this.getCustomers().find(c => c.id === id);
    const index = this.getCustomers().indexOf(customer);
    this.customers.splice(index, 1);
    this.customesChanged.next(this.getCustomers());
  }

  updateCustomer(id: number, newCustomer: Customer) {
    const customer = this.getCustomers().find(c => c.id === id);
    const index = this.getCustomers().indexOf(customer);
    this.customers[index] = newCustomer;
    this.customesChanged.next(this.getCustomers());

  }
}

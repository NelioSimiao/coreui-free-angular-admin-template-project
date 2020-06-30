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

  constructor(private http: HttpClient) { }
  AUTH_API = 'http://localhost:8080/api/auth/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };




  private customers: Customer[] = [
    {
      'id': 1,
      'name': "Nelio Simiao",
      'documentCode': "nelio",
      'email': "nelio@Gmail.com",
      'contact': "848407055",
      'employer': "cedsif",
      'code': "g Q3 ersia"
    },
    {
      'id': 2,
      'name': "Samuel Palice",
      'documentCode': "nelio",
      'email': "nelio@Gmail.com",
      'contact': "848407055",
      'employer': "cedsif",
      'code': "Filipinas"
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
    return this.http.post(this.AUTH_API + 'signup', {
      username: customer.username,

    }, this.httpOptions);
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

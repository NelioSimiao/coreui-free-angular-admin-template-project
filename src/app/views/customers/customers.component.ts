import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  books: any;
  totalRecords: number;
  cols: any[];



  data = [
    { "name": "nelio", "price": 20, "author": "author2  " },
    { "name": "book3", "price": 20, "author": "author3  " },
    { "name": "book4", "price": 20, "author": "author4  " },
    { "name": "book5", "price": 20, "author": "author5  " },
    { "name": "book6", "price": 20, "author": "author6  " },
    { "name": "book7", "price": 20, "author": "author7  " },
    { "name": "book8", "price": 20, "author": "author8  " },
    { "name": "book9", "price": 20, "author": "author9  " },
    { "name": "book10", "price": 20, "author": "author10  " },
    { "name": "book11", "price": 20, "author": "author11  " },
    { "name": "book12", "price": 20, "author": "author12  " },
    { "name": "book13", "price": 20, "author": "author13  " },
    { "name": "book14", "price": 20, "author": "author14  " },
    { "name": "book15", "price": 20, "author": "author15  " },
    { "name": "book16", "price": 20, "author": "author16  " },
    { "name": "book17", "price": 20, "author": "author17  " },
    { "name": "book18", "price": 20, "author": "author18  " },
    { "name": "book19", "price": 20, "author": "author19  " },
    { "name": "book20", "price": 20, "author": "author20  " },
    { "name": "The Godfather", "price": 10, "author": "Mario Puzo" },
    { "name": "The Fellowship of the Ring", "price": 15, "author": "J.R.R. Tolkien" },
    { "name": "Harry Potter and the Deathly Hallows", "price": 20, "author": "J.K. Rowling  " }
  ];




  constructor(
    private router: Router) { }


  ngOnInit(): void {
    this.books = this.data;

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'author', header: 'Author' },
      { field: 'price', header: 'Price' }
    ];

    this.totalRecords = this.books.length;

  }



  navegate() {
    this.router.navigate(['/customers/create']);
  }

}

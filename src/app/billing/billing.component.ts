import { Component, OnInit } from '@angular/core';
import { PrDataService } from 'src/services/pr-data.service';
import { Injectable } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  product_arr: any = [];

  x = 1

  constructor(private _prDataSeervice: PrDataService) { }

  ngOnInit(): void {
    this.product_arr = this._prDataSeervice.getProductDetails()
  }

  date = new Date()
  num: any = 111
  getRandomNum() {
    this.num = Math.floor(Math.random() * 1000)
  }



  refreshTime() {
    this.date = new Date()
  }

  printFunction() {
    window.print();
  }


  today = new Date
  total = 0
  quantity :number = 0
  products: any = [];
  pro:any

  nameSearch = ''



  // item:any=''

  addItem(j: any, k: any, quant: any) {
    this.quantity = parseInt(quant)
    k = parseInt(k)
    k = k * quant
    // this.products.push(`name: ${j}, quantity: ${this.quantity}, price:${k}`)


    this.products.push(
      { name: `${j}`, quantity: `${this.quantity}`, price: `${k}` }
    )

    console.log(this.products)
    this.total = this.total + k
  }

  clear() {
    this.products = []
    this.total = 0
    this.x = 1
  }

  hide=true
  print=false

  expand(){
    this.hide=!this.hide
    this.print=!this.print
  }

  // printdoc(){
  //   this.print=!this.print
  // }

  // delete() {
  //   this.products.splice(this.products.indexOf(this.pro), 1);
  //   // this.total=this.total-
  //   for(let p of this.pro){
  //     console.log(p.price)

  //   }
  // }

  delete(name:string,price:any){
    this.products.splice(this.products.indexOf(this.products, 1));

    this.total=this.total-price
    console.log(this.products)


      }

 

}

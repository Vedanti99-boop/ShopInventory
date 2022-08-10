import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sname='Saraf Traders'
  oname='Vedanti Saraf'
  contact='9811753345'
  address='Market Yard'

  //daily data
  // arr_expense:number[]=[100,120,160,110,200,150,250,300,240,300];
  // arr = [10, 20, 30, 40];

  // for (val of arr) {
  //   console.log(val); // prints values: 10, 20, 30, 40
  // } 

  t_expense=1000;
  t_income=2000;
  t_profit=this.t_income-this.t_expense;

  //7 days
  w_expense=5500;
  w_income=7000;
  w_profit=this.w_income-this.w_expense;

  //monthly
  m_expense=12000;
  m_income=24000;
  m_profit=this.m_income-this.m_expense;


}

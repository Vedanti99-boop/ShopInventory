import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrDataService {

  constructor() { }

  getProductDetails(){
    return[
      {
        id:1,
        name:'Pepsi',
        price:12,
        Avalability:"Available"
      },
      {
        id:2,
        name:'Coca-Cola',
        price:15,
        Avalability:"Not Available"
      },
      {
        id:3,
        name:'Amul Lassi',
        price:15,
        Avalability:"Available"
      },
      {
        id:4,
        name:'Chilli Popcorn',
        price:30,
        Avalability:"Not Available"
      },
      {
        id:5,
        name:'Hot Garlic Noodles',
        price:25,
        Avalability:"Available"
      },
      {
        id:6,
        name:'Kurkure Red Chilli',
        price:20,
        Avalability:"Available"
      },
      {
        id:7,
        name:'Kurkure Masala Munch',
        price:30,
        Avalability:"Available"
      },
      {
        id:8,
        name:'Kurkure Solid Masti',
        price:15,
        Avalability:"Not Available"
      },
      {
        id:9,
        name:'Ramen Curry Noodles',
        price:90,
        Avalability:"Available"
      },
      {
        id:10,
        name:'Chings Masala Noodles',
        price:57,
        Avalability:"Available"
      },
      {
        id:11,
        name:'Atta Maggie',
        price:15,
        Avalability:"Not Available"
      },
      {
        id:12,
        name:'Doritos Nacho Chips',
        price:12,
        Avalability:"Available"
      },
      {
        id:13,
        name:'Maggie',
        price:12,
        Avalability:"Available"
      },
      {
        id:14,
        name:'Tomato Ketchup',
        price:30,
        Avalability:"Not Available"
      },

    ]
  }

}

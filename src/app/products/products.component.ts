import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  addForm = new FormGroup({
    t1: new FormControl('',[Validators.required]),t2: new FormControl('',[Validators.required]),t3: new FormControl('',[Validators.required]),t4: new FormControl('',[Validators.required]),
    t1price1: new FormControl('',[Validators.required]),t2price1: new FormControl('',[Validators.required]),t3price1: new FormControl('',[Validators.required]),t4price1: new FormControl('',[Validators.required]),
    t1price2: new FormControl('',[Validators.required]),t2price2: new FormControl('',[Validators.required]),t3price2: new FormControl('',[Validators.required]),t4price2: new FormControl('',[Validators.required])
  })

  
  constructor() { }

  ngOnInit(): void {
  }

  toggler = true

  no_of_cols = [1,2,3]

  products = [{
    brand:'Lays', subtype:['Cream & Onion' , 'Classic' , 'Salt & Vinegar' , 'Honey BBQ'] , 
    instock: [43,21,3,24] , price1:[20,20,20,20] , price2:[35,35,35,35]
  },
  {
    brand:"Haldiram's", subtype:['Cream & Onion' , 'Classic' , 'Salt & Vinegar' , 'Honey BBQ'] , 
    instock: [43,21,3,24] , price1:[20,20,20,20] , price2:[35,35,35,35]
  },
  {
    brand:'Bingo', subtype:['Cream & Onion' , 'Classic' , 'Salt & Vinegar' , 'Honey BBQ'] , 
    instock: [43,21,3,24] , price1:[20,20,20,20] , price2:[35,35,35,35]
  },
  {
    brand:'Balaji Wafers', subtype:['Cream & Onion' , 'Classic' , 'Salt & Vinegar' , 'Honey BBQ'] , 
    instock: [43,21,3,24] , price1:[20,20,20,20] , price2:[35,35,35,35]
  },
  {
    brand:'Budhani', subtype:['Cream & Onion' , 'Classic' , 'Salt & Vinegar' , 'Honey BBQ'] , 
    instock: [43,21,3,24] , price1:[20,20,20,20] , price2:[35,35,35,35]
  },
  {
    brand:'Doritos', subtype:['Cream & Onion' , 'Classic' , 'Salt & Vinegar' , 'Honey BBQ'] , 
    instock: [43,21,3,24] , price1:[20,20,20,20] , price2:[35,35,35,35]
  },
  {
    brand:'Too Yumm', subtype:['Cream & Onion' , 'Classic' , 'Salt & Vinegar' , 'Honey BBQ'] , 
    instock: [43,21,3,24] , price1:[20,20,20,20] , price2:[35,35,35,35]
  },
  {
    brand:'Parle Wafers', subtype:['Cream & Onion' , 'Classic' , 'Salt & Vinegar' , 'Honey BBQ'] , 
    instock: [43,21,3,24] , price1:[20,20,20,20] , price2:[35,35,35,35]
  }]

  brand = ''
  subtype : string[] = []
  instock : number[] = []
  price1 : number[] = []
  price2 : number[] = []

  new_products : any=[]

  scroll(el : HTMLElement){
    el.scrollIntoView({behavior:'smooth'})
  }
  toggle(){
    this.toggler = !this.toggler
  }
  addNewItem(brand : string, subtype1 : string,subtype2 : string,subtype3 : string,subtype4 : string,
    priceA1:any,priceA2:any,priceA3:any,priceA4:any,
    priceB1:any,priceB2:any,priceB3:any,priceB4:any){

    this.brand = brand
    this.subtype = [subtype1,subtype2,subtype3,subtype4]
    this.instock = [0,0,0,0]
    this.price1 = [parseInt( priceA1),parseInt(priceA2),parseInt(priceA3),parseInt(priceA4)]
    this.price2 = [parseInt(priceB1),parseInt(priceB2),parseInt(priceB3),parseInt(priceB4)]

    this.products.push({'brand':this.brand ,'subtype':this.subtype,'instock':this.instock,'price1':this.price1,'price2':this.price2 })
      console.log(this.products)
    this.toggler = !this.toggler

  }
  // users = this.getItems()

  close(){
    this.toggler = !this.toggler
  }
  get t1(){
    return this.addForm.get('t1')
  }
  
  get t1price1(){
    return this.addForm.get('t1price1')
  }

  get t1price2(){
    return this.addForm.get('t1')
  }

}

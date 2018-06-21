import { Component, OnInit, Input } from '@angular/core';
import { Fruit } from './model/fruits.model';

import { Observable, Subscribable } from 'rxjs';


import { Store } from '@ngrx/store';
import * as fromApp from '../app.reducers';

@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.css']
})
export class FruitsListComponent implements OnInit {

  public fruitlistState : Observable<{fruits:Fruit[]}> 

  constructor(private store: Store<fromApp.AppState>) {
  }
  
  ngOnInit() {
    this.fruitlistState = this.store.select('fruits');
    console.log(this.fruitlistState);
    
  }

  public addToCart(product) {
    if(product.qty === product.available) {
      console.log('Product is out of Stock.');
    } else {
      product.qty = product.qty + 1;
      const productcartele = document.querySelector('product-cart');
      if(productcartele != null) {
        productcartele['message']=product;
      }
    }
   }
  
  
  @Input()
  set message(message: string) {
    // let productObj = message;
    // for(let product of this.productlist) {
    //   if(product.productname === productObj['productname']) {
    //     product.qty= productObj['qty'];
    //     break;
    //   }
    // }
  
  }
  
  get message(): string { return this._message; }
  _message: string;

}

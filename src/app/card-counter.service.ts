import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardCounterService {

  private counterValue = new BehaviorSubject(0);
  counter = this.counterValue.asObservable();

  private addedProducts = new BehaviorSubject([]);
  addedProducted = this.addedProducts.asObservable();

  constructor() { }

  changeCounterValue(newCounterValue: number){
    this.counterValue.next(newCounterValue)
  }

  addProducts( products:any){
    this.addedProducts.next(products)
  }


}

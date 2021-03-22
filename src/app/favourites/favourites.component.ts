import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterIncrease } from './store/addFavProduct.actions';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favProducts:any=[];
  allProducts:any=[];
  counterVal:any;
  constructor( private store : Store<{favProducs:any}> ) {  }

  addToFavourite(e:any){
      let id = e.target.id;
      let product = this.allProducts.find((item:any) => id == item.id);
      if(!this.favProducts.find((item:any) => id == item.id)){
        this.favProducts.push(product);
        this.store.dispatch( new CounterIncrease(this.counterVal = this.favProducts.length ))
      }
  }
  removeFromFav(e:any){
    let id = e.target.id;
    let product = this.favProducts.find((item:any) => id == item.id);
    this.favProducts.splice( this.favProducts.indexOf(product),1);
    this.store.dispatch( new CounterIncrease(this.counterVal = this.favProducts.length ))
  } 

  ngOnInit(): void {
    this.store.select('favProducs').subscribe((data) => (this.allProducts = data.productsList , this.counterVal = data.counterValue));
  }
}

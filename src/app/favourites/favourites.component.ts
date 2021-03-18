import { CounterIncrease } from './store/addFavProduct.actions';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  productsList :any = [];
  counter:any;
  constructor( private store : Store<{counter:any}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => (this.counter = data.counterValue));     
  }

}

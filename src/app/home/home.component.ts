import { CardCounterService } from './../card-counter.service';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsList :any = [];
  counterVal: any ;
  cardProducts: Array<object> = [];
  activeItem:any = {};
  countOfThisItem:any;
  //quantity: number = 0;
  constructor( private productsListServices : ProductsService , private counterService: CardCounterService ) { }

  getCounterValue(e:any){ 
    this.counterService.changeCounterValue(this.counterVal+1);
    let id = e.target.id ;
    this.activeItem = this.productsList.find((item:any) => id == item.id);
    if(!this.cardProducts.find((item:any) => id == item.id)){
      this.cardProducts.push(this.activeItem);
      this.counterService.addProducts(this.cardProducts);
    }
  }

  ngOnInit(): void {
    this.counterService.counter.subscribe(data => this.counterVal = data);
    this.counterService.addedProducted.subscribe(data => this.cardProducts = data);

     this.productsListServices.getProductsData().subscribe(
      response => {
        this.productsList = response ;
      },
      errors =>{
        console.log(errors);
      },
      () => {
      console.log('complete ', "compelete");
      }
    )
  }
  
}


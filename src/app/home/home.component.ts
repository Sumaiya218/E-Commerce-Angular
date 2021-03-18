import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsList :any = [];
  
  constructor( private productsListServices : ProductsService ) { }

  ngOnInit(): void {
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


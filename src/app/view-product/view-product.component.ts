import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  activeId : any ;
  products:any = [];
  activeProduct:any;
  
  constructor( private productsList : ProductsService , private router : ActivatedRoute) { 
    this.router.params.subscribe( params => this.activeId = params.id)
  }

  ngOnInit(): void {
    this.productsList.getProductsData().subscribe(
      response => {
        this.products = response ;
        this.activeProduct = this.products.filter((viewProduct: any) =>  viewProduct.id == this.activeId);
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

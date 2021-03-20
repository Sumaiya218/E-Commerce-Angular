import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { CardCounterService } from './../card-counter.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
   cardProducts:any = [];
   activeItem:any;
  constructor(private counterService: CardCounterService) {  }
  
  ngOnInit(): void {       
     this.counterService.addedProducted.subscribe(data => this.cardProducts = data)
     console.log(this.cardProducts)
   }  
}

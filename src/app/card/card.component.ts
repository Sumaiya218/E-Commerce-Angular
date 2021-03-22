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
   counterVal: any ;
   countOfThisItem:any;
  constructor(private counterService: CardCounterService) {  }

  removeFromCard(e:any){
    let id = e.target.id;
    this.activeItem = this.cardProducts.find((item:any) => id == item.id);
    this.cardProducts.splice( this.cardProducts.indexOf(this.activeItem),1);
    this.counterService.changeCounterValue(this.counterVal - 1);

  }
  ngOnInit(): void {  
    this.counterService.counter.subscribe(data => this.counterVal = data);     
     this.counterService.addedProducted.subscribe(data => this.cardProducts = data)

   }  
}

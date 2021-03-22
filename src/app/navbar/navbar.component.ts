import { CardCounterService } from './../card-counter.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  counterVal: any ;
  counterFav:any;
  constructor( private counterService: CardCounterService , private store : Store<{favProducs:any}> ) {
  }
  ngOnInit(): void {
   this.counterService.counter.subscribe(data => this.counterVal = data);
   this.store.select('favProducs').subscribe((data) => (this.counterFav = data.counterValue)); 
  }

}

import { CardCounterService } from './../card-counter.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  counterVal: any ;
  constructor( private counterService: CardCounterService) {
  
  }
  ngOnInit(): void {
   this.counterService.counter.subscribe(data => this.counterVal = data)
  }

}

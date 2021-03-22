import { Action } from "@ngrx/store";

export class CounterIncrease implements Action{
    readonly type = 'INCREASE_COUNTER' ;
    constructor( public payLoad : Number){}
}

export class favouriteItemsIncrease implements Action{
    readonly type = 'INCREASE_FAVOURITE_PRODUCT';
    constructor( public payLoad : object){}
}
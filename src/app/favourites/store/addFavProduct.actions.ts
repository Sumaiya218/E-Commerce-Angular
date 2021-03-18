import { Action } from "@ngrx/store";

export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const INCREASE_FAVOURITE_PRODUCT = "INCREASE_FAVOURITE_PRODUCT";

export class CounterIncrease implements Action{
    readonly type = INCREASE_COUNTER ;
    constructor( public payLoad : Number){}
}

export class favouriteItemsIncrease implements Action{
    readonly type = INCREASE_FAVOURITE_PRODUCT;
    constructor( public payLoad : object){}
}
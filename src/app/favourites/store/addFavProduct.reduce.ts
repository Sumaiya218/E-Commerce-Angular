import { Action } from '@ngrx/store';
import { INCREASE_COUNTER , INCREASE_FAVOURITE_PRODUCT  ,CounterIncrease } from './addFavProduct.actions';

const INITIAL_STATE = {
    counterValue:0,
    favProducts:[]
};

export function counterReducer(state = INITIAL_STATE , Action: CounterIncrease){
    /*
    
    switch(Action.type){
        case INCREASE_COUNTER:
            return {
                ...state, counterValue: Action.payLoad
            };
        case INCREASE_FAVOURITE_PRODUCT:
            return {
                ...state , 
                favProducts: [ ...state.favProducts , Action.payLoad]
            };
        default:
            return state ;
    }
    */
}


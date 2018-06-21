import * as FruitListActions from './fruits-list.actions';

import { Fruit } from "../model/fruits.model";

export interface State {
    fruits: Fruit[];
}

const initialState: State = {
    fruits: [
        {
          productname : 'JBL Flip 4',
          code : 'cat1-0001',
          price : 18.01,
          cartprice : 0,
          available : 10,
          qty : 0
        }, {
          productname : 'Bose Sound Link',
          code : 'cat1-0010',
          price : 129.05,
          cartprice : 0,
          available : 9,
          qty : 0
        }, {
          productname : 'AB Portable',
          code : 'cat1-0008',
          price : 19.78,
          cartprice : 0,
          available : 11,
          qty : 0
        }, {
          productname : 'AE-9 Portable',
          code : 'cat1-0011',
          price : 299.99,
          cartprice : 0,
          available : 8,
          qty : 0
        }, {
          productname : 'JBL Pulse 3',
          code : 'cat1-0009',
          price : 23.05,
          cartprice : 0,
          available : 10,
          qty : 0
        }
      ],
};

export function fruitListReducer(state = initialState, action: FruitListActions.FruitListActions) {
    switch (action.type) {
        case FruitListActions.SET_FRUITS :
            return {
              ...state,
              fruits: action.payload
            };
        default:
            return state;
    }
}
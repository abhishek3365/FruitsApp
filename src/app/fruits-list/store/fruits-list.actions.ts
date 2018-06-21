import { Action } from '@ngrx/store';
import { Fruit } from '../model/fruits.model';

export const SET_FRUITS = 'SET_FRUITS';

export class SetFruits implements Action {
    readonly type = SET_FRUITS;
  
    constructor(public payload: Fruit[]) {}
}

export type FruitListActions = SetFruits;
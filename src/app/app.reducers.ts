import { ActionReducerMap } from '@ngrx/store';

import * as fromFruitList from './fruits-list/store/fruits-list.reducer';

export interface AppState {
    fruits: fromFruitList.State
}

export const reducers: ActionReducerMap<AppState> = {
    fruits: fromFruitList.fruitListReducer
};
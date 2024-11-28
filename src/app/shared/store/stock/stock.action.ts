import { createAction, props } from '@ngrx/store';
import { Stock } from '../../models/stock.model';

export const setStockData = createAction(
    '[Stock] Set Stock Data',
    props<{ stockData: any[] }>()
  );
  
  export const clearStockData = createAction('[Stock] Clear Stock Data');
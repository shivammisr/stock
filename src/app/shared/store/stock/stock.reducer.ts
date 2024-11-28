// src/app/state/stock.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { clearStockData, setStockData } from './stock.action';
import { PortfolioState } from '../../models/stock.model';

export interface StockState {
    stockData: any[];
  }
export const initialState: StockState = {
    stockData: []
};


  
  export const stockReducer = createReducer(
    initialState,
    on(setStockData, (state, { stockData }) => {

        return { ...state, stockData }
    }),
    on(clearStockData, (state) => ({ ...state, stockData: [] }))
  );
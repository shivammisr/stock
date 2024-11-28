// src/app/state/stock.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StockState } from './stock.reducer';

export const selectStockState = createFeatureSelector<StockState>('stock');

export const selectStockData = createSelector(
  selectStockState,
  (state: StockState) => state.stockData
);
import { environment } from "../../../../environments/environment.development";

export const stockApi =  {
    getAllStock(): string {
         return `${environment.stocksUrl}/all`
    },

    getStockBySymbols(value: any): string {
        return `${environment.stocksUrl}/${value}`
   },
    postStockBuy(): string {
        return `${environment.stocksUrl}/buy`
   },
    postStockSell(): string {
        return `${environment.stocksUrl}/sell`
   },
    getStockPortfolio(): string {
        return `${environment.stocksUrl}/portfolio`
   },

}
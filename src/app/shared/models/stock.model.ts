export interface Stock {
    stockSymbol: string;
    companyName: string;
    currentPrice: number;
    stockOwnd: number,
    totalSharesOutstanding: number
  }

  export interface PortfolioState {
    stocks: Stock[];
  }
  
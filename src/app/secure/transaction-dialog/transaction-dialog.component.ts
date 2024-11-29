import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { Stock } from '../../shared/models/stock.model';
import { CommunicationService } from '../../service/communication.service';
import { stockApi } from '../../shared/constants/api-endpoints/stock-api';
@Component({
    selector: 'app-transaction-dialog',
    templateUrl: './transaction-dialog.component.html',
    styleUrl: './transaction-dialog.component.css',
    standalone: false
})
export class TransactionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TransactionDialogComponent>,
    public communication: CommunicationService,
    @Inject(MAT_DIALOG_DATA) public data: { stock: Stock, form: FormGroup, button: string | 'Buy' }
  ) {}


  onNoClick(): void {
    this.data.form.reset()
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.data.form.invalid) return;
    const action = this.data.form.value.action;
    const numberOfShares = this.data.form.value.numberOfShares;
    const stock = this.data.stock;
    const payloadData = {
      "stockSymbol": stock.stockSymbol,
      "quantity": numberOfShares
    }

    // Call the appropriate API here
    // debugger
    if (action === 'buy') {
      console.log(`Buying ${numberOfShares} shares of ${stock.stockSymbol}`);
      this.communication.post<any>(stockApi.postStockBuy(), payloadData, { responseType: 'text' }).subscribe((v: any)  => {
        try {
          const json = JSON.parse(v); // Parse manually if necessary
          console.log(json);
        } catch (e) {
          console.error("Response is not JSON:", v);
        }
      })
    } else if (action === 'sell') {
      // if (stock.quantityOwned < numberOfShares) {
      //   alert('You do not have enough shares to sell.');
      //   return;
      // }
      this.communication.post<any>(stockApi.postStockSell(), payloadData).subscribe((v: any)  => {
        // console.log(v, 'stock message')
        try {
          const json = JSON.parse(v); // Parse manually if necessary
          console.log(json);
        } catch (e) {
          console.error("Response is not JSON:", v);
        }
      })
      console.log(`Selling ${numberOfShares} shares of ${stock.stockSymbol}`);
    }

    this.dialogRef.close();
  }
}

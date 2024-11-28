import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { userAPI } from '../../shared/constants/api-endpoints/user-api';
import { setUser, updateUser, clearUser } from '../../shared/store/user/user.action';
import { User } from '../../shared/models/user.model';
import { Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Stock } from '../../shared/models/stock.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TransactionDialogComponent } from '../transaction-dialog/transaction-dialog.component';
import { CommunicationService } from '../../service/communication.service';
import { stockApi } from '../../shared/constants/api-endpoints/stock-api';
import { MatPaginator } from '@angular/material/paginator';
import {  setStockData } from '../../shared/store/stock/stock.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['stockSymbol', 'companyName', 'currentPrice', 'marketCap' ,'actions'];
  dataSource: MatTableDataSource<Stock> = new MatTableDataSource<Stock>([]);
  stockForm!: FormGroup; 
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  stocks: Stock[] = [];
  totalStockValue = 1234567.89;
  marketCap = 3456789.99;
  totalStocksOwned = 0;

  user = {
    name: 'shivam',
    avatar: `assets/image/user.png`
  }
  constructor(public authService: AuthService, private store: Store, private fb: FormBuilder, public dialog: MatDialog, public communication: CommunicationService) {
    this.getStockAllData();
  }


  ngOnInit(): void {
    this.stockForm = this.fb.group({
      stockSymbol: ['', Validators.required],
      numberOfShares: ['', [Validators.required, Validators.min(1)]],
      action: ['', Validators.required]
    });
  }


  openTransactionDialog(stock: Stock, buttonName: string = 'Buy'): void {
    this.stockForm.patchValue({
      stockSymbol: stock.stockSymbol,
      action: buttonName.toLocaleLowerCase(),
    });
    const dialogRef = this.dialog.open(TransactionDialogComponent, {
      data: {
        stock,
        form: this.stockForm,
        button: buttonName
      }
    });
  }


  getStockAllData() {
    this.communication.get(stockApi.getAllStock(), '', 'loader').subscribe((v: any) => {
      if (Array.isArray(v) && v?.length > 0) {
        v = v.map((d: any) =>( {...d, marketCap: d.currentPrice * 1000000000 }))
      }
      this.dataSource = new MatTableDataSource(v);
      this.dataSource.paginator = this.paginator;
      this.dataSource!.sort = this.sort;

      const stck: any[] = v;
      this.store.dispatch(setStockData({stockData: stck}))

    })
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();
  }

  getUserDetails() {
    this.authService.communicationService.get(userAPI.getUser(), '', 'text').subscribe((v: any) => {
      const user: User = { id: '1', name: v?.fullName, email: v?.email };
      this.store.dispatch(setUser({ user }));
    })
  }
  setUserDetails() {
    const user: User = { id: '1', name: 'John Doe', email: 'john.doe@example.com' };
    this.store.dispatch(setUser({ user }));
  }

  updateUserDetails() {
    this.store.dispatch(updateUser({ user: { name: 'Jane Doe' } }));
  }

  clearUserDetails() {
    this.store.dispatch(clearUser());
  }


}

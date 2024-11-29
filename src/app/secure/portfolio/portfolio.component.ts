import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommunicationService } from '../../service/communication.service';
import { stockApi } from '../../shared/constants/api-endpoints/stock-api';
import { Portfolio } from '../../shared/models/portfolio.model';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Chart } from 'chart.js/auto';
import { Observable } from 'rxjs';
import { Stock } from '../../shared/models/stock.model';
import { Store } from '@ngrx/store';
@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css',
    standalone: false
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['stockSymbol', 'totalQuantity', 'averagePrice',];
  portfolioData: { label: string; value: number }[] = [];
  portfolioDataLine: { label: string; value: number }[] = [];
  dataSource: MatTableDataSource<Portfolio> = new MatTableDataSource<Portfolio>([]);
  storeData: any
  hidedata = false;
  public lineChartLegend = true;
  chart: Chart | undefined;
  portfolioChart: Chart | undefined;
  ngAfterViewInit() {
  }
  stock$: Observable<Stock | null> | undefined;
  constructor(private portfolioService: CommunicationService, private readonly store: Store<any>) {

  }



  ngOnInit(): void {
    this.portfolioService.get(stockApi.getStockPortfolio(), 'loader Text').subscribe((data: any) => {
      this.dataSource = data;
      this.storeData = data;
      this.stock$ = this.store.select(state => state.stock);
      this.stock$.subscribe((vD: any) => {
        console.log(vD, 'vD......');
        if (Array.isArray(vD?.stockData) && vD?.stockData.length > 0) {
          const td = vD?.stockData
          for (let index = 0; index < td?.length; index++) {
            const elementVd = td[index];
            debugger
            for (let j = 0; j < this.storeData.length; j++) {
              const element = this.storeData[j];
              if (elementVd?.stockSymbol === element?.stockSymbol) {
                const n = {
                  label: elementVd?.stockSymbol,
                  value: element.averagePrice - elementVd.currentPrice


                }

                this.portfolioDataLine.push(n)
                this.portfolioData.push(n)
              }

            }

          }
          this.createLineChart()
          this.createPortfolioChart()

        }

      })
    });


  }


  createPortfolioChart() {
    const ctx = document.getElementById('portfolioChart') as HTMLCanvasElement;

    const labels = this.portfolioData.map((item) => item.label);
    const data = this.portfolioData.map((item) => item.value);

    this.portfolioChart = new Chart<any>(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Portfolio Distribution',
            data: data,
            backgroundColor: [
              '#FF6384', // Red
              '#36A2EB', // Blue
              '#FFCE56', // Yellow
              '#4BC0C0', // Teal
              '#9966FF', // Purple
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
  }

  createLineChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const labels = this.portfolioDataLine.map((item) => item.label);
    const data = this.portfolioDataLine.map((item) => item.value);
    this.chart = new Chart(ctx, {
      type: 'line', // Choose the chart type (bar, line, pie, etc.)
      data: {
        labels: labels, // X-axis labels
        datasets: [
          {
            label: 'profit/loss',
            data: data, // Y-axis data points
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}

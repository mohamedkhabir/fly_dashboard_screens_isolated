import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

interface MetricCard {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
}

interface MonthlyData {
  month: string;
  revenue: number;
  volume: number;
  carrier: string;
  status: string;
}

@Component({
  selector: 'app-sales-reporting',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sales-reporting.component.html',
  styleUrls: ['./sales-reporting.component.scss']
})
export class SalesReportingComponent implements OnInit {
  activeFilter = 'last30';
  activeTab = 'spending';

  metrics: MetricCard[] = [
    {
      title: 'TOTAL SPENT',
      value: '$428,500.00',
      change: '+12.5%',
      isPositive: true,
      icon: 'money'
    },
    {
      title: 'TICKETS ISSUED',
      value: '1,240',
      change: '-2.1%',
      isPositive: false,
      icon: 'ticket'
    },
    {
      title: 'AVG. TICKET PRICE',
      value: '$345.56',
      change: '+4.3%',
      isPositive: true,
      icon: 'chartz'
    }
  ];

  monthlyData: MonthlyData[] = [
    { month: 'July 2023', revenue: 31245.00, volume: 89, carrier: 'Lufthansa', status: 'CLOSED' },
    { month: 'June 2023', revenue: 28110.00, volume: 76, carrier: 'Emirates', status: 'CLOSED' },
    { month: 'May 2023', revenue: 21450.00, volume: 64, carrier: 'Qatar Airways', status: 'CLOSED' }
  ];

  chartMonths = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'];
  chartData = [
    { current: 65, previous: 60 },
    { current: 75, previous: 70 },
    { current: 55, previous: 65 },
    { current: 85, previous: 75 },
    { current: 70, previous: 72 },
    { current: 90, previous: 80 },
    { current: 95, previous: 85 }
  ];

  constructor() {}

  ngOnInit(): void {}

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  setTab(tab: string): void {
    this.activeTab = tab;
  }

  exportReport(): void {
    console.log('Exporting report...');
    alert('Report export initiated!');
  }

  createSchedule(): void {
    console.log('Creating schedule...');
    alert('Schedule creation started!');
  }

  viewDetailedTable(): void {
    console.log('Opening detailed table...');
  }
}

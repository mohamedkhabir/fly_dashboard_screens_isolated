import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterLinkActive} from '@angular/router';

interface Transaction {
  id: string;
  date: string;
  time: string;
  type: 'ticket' | 'refill' | 'refund' | 'tax';
  reference: string;
  amount: number;
  status: 'completed' | 'processing';
}

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  availableBalance = 24500.00;
  spentThisMonth = 12400.00;
  pendingSettlements = 1200.00;

  balanceChange = 15;
  spendingChange = 5;
  settlementChange = -2;

  selectedFilter = 'all';
  selectedMonth = 'Oct 2023';

  transactions: Transaction[] = [
    {
      id: '1',
      date: 'Oct 12, 2023',
      time: '14:30 PM',
      type: 'ticket',
      reference: 'XYZ123',
      amount: -450.00,
      status: 'completed'
    },
    {
      id: '2',
      date: 'Oct 10, 2023',
      time: '09:15 AM',
      type: 'refill',
      reference: 'REF-9928341',
      amount: 5000.00,
      status: 'completed'
    },
    {
      id: '3',
      date: 'Oct 09, 2023',
      time: '16:45 PM',
      type: 'ticket',
      reference: 'ABC789',
      amount: -1280.50,
      status: 'completed'
    },
    {
      id: '4',
      date: 'Oct 08, 2023',
      time: '11:20 AM',
      type: 'tax',
      reference: 'DEF456',
      amount: 82.00,
      status: 'processing'
    },
    {
      id: '5',
      date: 'Oct 05, 2023',
      time: '18:05 PM',
      type: 'ticket',
      reference: 'GHI321',
      amount: -340.20,
      status: 'completed'
    }
  ];

  currentPage = 1;
  totalPages = 25;
  totalTransactions = 124;

  constructor() {}

  ngOnInit(): void {}

  get filteredTransactions(): Transaction[] {
    if (this.selectedFilter === 'all') {
      return this.transactions;
    }
    return this.transactions.filter(t => t.type === this.selectedFilter);
  }

  setFilter(filter: string): void {
    this.selectedFilter = filter;
  }

  downloadStatement(): void {
    console.log('Downloading statement');
    alert('Statement download initiated');
  }

  topUpWallet(): void {
    console.log('Opening top-up form');
    alert('Wallet top-up form opened');
  }

  viewTransaction(transaction: Transaction): void {
    console.log('Viewing transaction:', transaction);
    alert(`Transaction details: ${transaction.reference}`);
  }

  enableAutoRefill(): void {
    console.log('Opening auto-refill settings');
    alert('Auto-refill settings opened');
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  protected readonly Math = Math;
}

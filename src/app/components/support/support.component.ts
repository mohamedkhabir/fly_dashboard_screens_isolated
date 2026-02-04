import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface FAQCategory {
  title: string;
  icon: string;
  items: string[];
}

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  searchQuery = '';
  agencyId = '482930';

  faqCategories: FAQCategory[] = [
    {
      title: 'Ticketing & VOIDs',
      icon: 'ticket',
      items: [
        'Same-day VOID rules',
        'Re-issuance protocol',
        'Refund timelines'
      ]
    },
    {
      title: 'Wallet & Payments',
      icon: 'wallet',
      items: [
        'Top-up methods',
        'Credit limit request',
        'Settlement cycles'
      ]
    },
    {
      title: 'PNR & GDS Issues',
      icon: 'globe',
      items: [
        'Name correction policy',
        'SSR & OSI additions',
        'Queue placement'
      ]
    },
    {
      title: 'Agency Profile',
      icon: 'user',
      items: [
        'Adding sub-agents',
        'Resetting credentials',
        'API integration help'
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  searchHelp(): void {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      alert(`Searching help articles for: ${this.searchQuery}`);
    }
  }

  startChat(): void {
    console.log('Starting chat with support');
    alert('Chat window opened. Wait time: < 2 mins');
  }

  callSupport(): void {
    console.log('Initiating call to IATA Master Agency');
    alert('Calling: +1-800-IATA-DESK');
  }

  openTicket(): void {
    console.log('Opening ticket form');
    alert('Ticket submission form opened');
  }

  downloadPolicyManual(): void {
    console.log('Downloading policy manual');
    alert('Policy manual download started');
  }

  watchTutorials(): void {
    console.log('Opening tutorials');
    alert('Training tutorials opened');
  }

  openFAQ(category: string, item: string): void {
    console.log('Opening FAQ:', category, '-', item);
    alert(`Opening help article: ${item}`);
  }
}

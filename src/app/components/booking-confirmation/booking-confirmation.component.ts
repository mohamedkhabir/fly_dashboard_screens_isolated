import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

interface Passenger {
  name: string;
  ticketNumber: string;
  status: string;
}

@Component({
  selector: 'app-booking-confirmation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.scss']
})
export class BookingConfirmationComponent implements OnInit {
  pnr = 'AM78XC';
  bookingStatus = 'ISSUED';
  totalAmount = 1245.50;
  currency = 'USD';

  flightInfo = {
    cabinClass: 'Economy Class',
    departure: {
      code: 'LHR',
      city: 'London',
      airport: 'Heathrow Airport, Terminal 5',
      date: 'Oct 24, 2023',
      time: '10:45'
    },
    arrival: {
      code: 'JFK',
      city: 'New York',
      airport: 'John F. Kennedy Intl. Airport, Terminal 7',
      date: 'Oct 24, 2023',
      time: '01:15 PM'
    },
    airline: 'British Airways',
    flightNumber: 'BA 117',
    duration: '7h 45m'
  };

  passengers: Passenger[] = [
    {
      name: 'JOHNSON / ROBERT MR',
      ticketNumber: '125-9834721054',
      status: 'E-TICKET ISSUED'
    },
    {
      name: 'JOHNSON / SARAH MRS',
      ticketNumber: '125-9834721055',
      status: 'E-TICKET ISSUED'
    }
  ];

  priceSummary = {
    baseFare: 950.00,
    taxes: 245.50,
    commission: 50.00,
    total: 1245.50
  };

  paymentMethod = 'Corporate Credit Line';

  constructor() {}

  ngOnInit(): void {}

  copyPNR(): void {
    navigator.clipboard.writeText(this.pnr).then(() => {
      alert('PNR copied to clipboard!');
    });
  }

  downloadPDF(): void {
    console.log('Downloading PDF tickets');
    alert('PDF ticket download initiated');
  }

  emailToClient(): void {
    console.log('Opening email form');
    alert('Email form opened');
  }

  printReceipt(): void {
    console.log('Printing receipt');
    window.print();
  }

  returnToDashboard(): void {
    console.log('Returning to dashboard');
    alert('Redirecting to dashboard');
  }
}

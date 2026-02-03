import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

interface Passenger {
  id: string;
  name: string;
  ticketNumber: string;
  refundAmount: number;
  selected: boolean;
}

@Component({
  selector: 'app-cancellation-refund',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.scss']
})
export class CancellationComponent implements OnInit {
  pnr = 'AMZ892J';
  bookingStatus = 'Confirmed';
  ticketDate = '22 Nov 2023';
  originalBooking = 1240.00;

  flightInfo = {
    departure: {
      city: 'London',
      code: 'LHR',
      airport: 'Heathrow Airport, Terminal 5',
      date: '24 Nov 2023',
      time: '10:20'
    },
    arrival: {
      city: 'New York',
      code: 'JFK',
      airport: 'John F. Kennedy Intl Airport, Terminal 7',
      date: '24 Nov 2023',
      time: '13:45'
    },
    airline: 'British Airways',
    class: 'Economy (Q)'
  };

  passengers: Passenger[] = [
    {
      id: '1',
      name: 'DOE/JOHN MR',
      ticketNumber: '232-9283471650',
      refundAmount: 620.00,
      selected: true
    },
    {
      id: '2',
      name: 'DOE/JANE MRS',
      ticketNumber: '232-9283471651',
      refundAmount: 620.00,
      selected: true
    }
  ];

  cancellationMethod: 'refund' | 'void' = 'refund';
  voidWindowExpired = false;

  refundBreakdown = {
    baseFareRefund: 1020.00,
    taxRefund: 220.00,
    cancellationPenalty: -500.00,
    serviceFee: -50.00,
    estimatedRefund: 690.00
  };

  constructor() {}

  ngOnInit(): void {}

  get selectedPassengers(): Passenger[] {
    return this.passengers.filter(p => p.selected);
  }

  get allSelected(): boolean {
    return this.passengers.every(p => p.selected);
  }

  get totalRefund(): number {
    return this.selectedPassengers.reduce((sum, p) => sum + p.refundAmount, 0);
  }

  togglePassenger(passenger: Passenger): void {
    passenger.selected = !passenger.selected;
    this.recalculateRefund();
  }

  toggleAllPassengers(): void {
    const newState = !this.allSelected;
    this.passengers.forEach(p => p.selected = newState);
    this.recalculateRefund();
  }

  setMethod(method: 'refund' | 'void'): void {
    this.cancellationMethod = method;
  }

  recalculateRefund(): void {
    const selectedCount = this.selectedPassengers.length;
    const totalCount = this.passengers.length;

    if (selectedCount === 0) {
      this.refundBreakdown.estimatedRefund = 0;
      return;
    }

    const ratio = selectedCount / totalCount;
    this.refundBreakdown.baseFareRefund = 1020.00 * ratio;
    this.refundBreakdown.taxRefund = 220.00 * ratio;
    this.refundBreakdown.cancellationPenalty = -500.00 * ratio;
    this.refundBreakdown.serviceFee = -50.00;

    this.refundBreakdown.estimatedRefund =
      this.refundBreakdown.baseFareRefund +
      this.refundBreakdown.taxRefund +
      this.refundBreakdown.cancellationPenalty +
      this.refundBreakdown.serviceFee;
  }

  viewFullRules(): void {
    console.log('Opening full GDS rules');
    alert('Full fare rules and cancellation policy opened');
  }

  keepBooking(): void {
    console.log('Keeping booking');
    alert('Returning to booking details...');
  }

  confirmCancellation(): void {
    if (this.selectedPassengers.length === 0) {
      alert('Please select at least one passenger to cancel.');
      return;
    }

    const passengerNames = this.selectedPassengers.map(p => p.name).join(', ');
    const confirmMessage = `Are you sure you want to cancel the booking for PNR ${this.pnr}?\n\nPassengers: ${passengerNames}\n\nThis action is irreversible and subject to a $${Math.abs(this.refundBreakdown.cancellationPenalty).toFixed(2)} cancellation fee per traveler as per the fare rules.\n\nEstimated refund: $${this.refundBreakdown.estimatedRefund.toFixed(2)}`;

    if (confirm(confirmMessage)) {
      console.log('Cancellation confirmed:', {
        pnr: this.pnr,
        passengers: this.selectedPassengers,
        method: this.cancellationMethod,
        refund: this.refundBreakdown.estimatedRefund
      });
      alert('Cancellation request submitted successfully! Refund amounts are subject to airline final audit. You will receive confirmation via email.');
    }
  }

  contactSupport(): void {
    console.log('Opening support contact');
    alert('24/7 Ticketing Desk contact opened');
  }
}

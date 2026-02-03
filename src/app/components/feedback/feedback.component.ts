import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

type ModalType = 'success' | 'error' | 'warning' | null;

interface FlightInfo {
  flightNumber: string;
  route: string;
  passenger: string;
}

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  activeModal: ModalType = null;

  successData: FlightInfo = {
    flightNumber: 'BA175',
    route: 'London Heathrow (LHR) → New York (JFK)',
    passenger: 'Mr. John Doe'
  };

  errorData = {
    errorCode: 'AUTH_FAIL_3DS',
    supportId: '#TRX-88219-PQ'
  };

  warningData = {
    pnr: 'QXJ32P',
    fee: '$50'
  };

  constructor() {}

  ngOnInit(): void {
    // Auto-show success modal for demo
    setTimeout(() => {
      this.showModal('success');
    }, 500);
  }

  showModal(type: ModalType): void {
    this.activeModal = type;
  }

  closeModal(): void {
    this.activeModal = null;
  }

  // Success modal actions
  printTicket(): void {
    console.log('Printing ticket');
    alert('Print dialog opened');
    this.closeModal();
  }

  manageBooking(): void {
    console.log('Managing booking');
    alert('Redirecting to booking management');
    this.closeModal();
  }

  // Error modal actions
  retryPayment(): void {
    console.log('Retrying payment');
    alert('Redirecting to payment page');
    this.closeModal();
  }

  cancelBooking(): void {
    console.log('Cancelling booking');
    this.closeModal();
  }

  // Warning modal actions
  keepBooking(): void {
    console.log('Keeping booking');
    this.closeModal();
  }

  confirmCancellation(): void {
    if (confirm('Are you sure you want to proceed with cancellation?')) {
      console.log('Cancellation confirmed');
      alert('Booking cancelled successfully');
      this.closeModal();
    }
  }
}

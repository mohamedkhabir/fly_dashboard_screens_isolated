import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-activation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss']
})
export class ActivationComponent {
  paymentMethod: 'stripe' | 'bank' = 'stripe';

  constructor(private router: Router) {}

  selectPaymentMethod(method: 'stripe' | 'bank'): void {
    this.paymentMethod = method;
  }

  viewDocuments(): void {
    this.router.navigate(['/kyc-compliance']);
  }

  payNow(): void {
    console.log('Processing payment via', this.paymentMethod);
    // Simulate payment
    setTimeout(() => {
      alert('Payment processed successfully!');
    }, 1000);
  }

  contactSupport(): void {
    this.router.navigate(['/support']);
  }
}

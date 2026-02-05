import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss']
})
export class AdminSettingsComponent implements OnInit {
  // Metrics
  feesCollected = 42500.00;
  feesChange = 12.5;
  activeSubscriptions = 1240;
  subscriptionsChange = 3.2;
  pendingCommissions = 8120.45;
  commissionsChange = -1.5;

  // Service Fees
  fixedFeePerPassenger = 15.00;
  percentageMarkup = 3.5;

  // Monthly Subscription
  baseMonthlyFee = 199.00;
  billingCycle = 'every-1st';

  // Recharge Commission
  walletTopupFee = 1.2;
  applyFeeToBankTransfers = true;

  hasUnsavedChanges = false;

  constructor() {}

  ngOnInit(): void {}

  onInputChange(): void {
    this.hasUnsavedChanges = true;
  }

  toggleBankTransfers(): void {
    this.applyFeeToBankTransfers = !this.applyFeeToBankTransfers;
    this.onInputChange();
  }

  viewHistory(): void {
    console.log('Opening pricing history');
    alert('Pricing history opened');
  }

  saveChanges(): void {
    if (confirm('Are you sure you want to save these changes? This will affect all active bookings and future invoices globally for over 1,200 agencies.')) {
      console.log('Saving changes:', {
        fixedFee: this.fixedFeePerPassenger,
        markup: this.percentageMarkup,
        baseFee: this.baseMonthlyFee,
        billingCycle: this.billingCycle,
        topupFee: this.walletTopupFee,
        applyToBank: this.applyFeeToBankTransfers
      });
      this.hasUnsavedChanges = false;
      alert('Changes saved successfully!');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

interface Notification {
  id: string;
  type: 'schedule' | 'wallet' | 'booking' | 'info';
  icon: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  actionLabel?: string;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  activeTab = 'all';

  notifications: Notification[] = [
    {
      id: '1',
      type: 'schedule',
      icon: 'plane',
      title: 'Flight LH450 Schedule Change',
      message: 'The departure time for LH450 (MUC to LAX) has been moved to 10:30 AM. Action required to confirm the new itinerary for 4 passengers.',
      time: '2 MINS AGO',
      isRead: false,
      actionLabel: 'Review Change'
    },
    {
      id: '2',
      type: 'wallet',
      icon: 'wallet',
      title: 'Low Balance Warning',
      message: 'Your agency wallet balance is below $500.00. Current balance: $423.50. Top up now to avoid ticket issuance failures.',
      time: '1 HOUR AGO',
      isRead: false,
      actionLabel: 'Top up Wallet'
    },
    {
      id: '3',
      type: 'booking',
      icon: 'check',
      title: 'Booking Confirmed: Z9X2Y1',
      message: 'PNR [Z9X2Y1] for John Doe successfully issued. E-tickets have been sent to the passenger\'s email address.',
      time: '3 HOURS AGO',
      isRead: false,
      actionLabel: 'View Ticket'
    },
    {
      id: '4',
      type: 'booking',
      icon: 'ticket',
      title: 'Booking Confirmed: B8K4L9',
      message: 'PNR [B8K4L9] for Sarah Miller successfully issued. Payment of $1,240.00 processed.',
      time: 'YESTERDAY, 4:15 PM',
      isRead: true,
      actionLabel: 'Details'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  get filteredNotifications(): Notification[] {
    if (this.activeTab === 'all') {
      return this.notifications;
    }
    return this.notifications.filter(n => n.type === this.activeTab);
  }

  get unreadCount(): number {
    return this.notifications.filter(n => !n.isRead).length;
  }

  setTab(tab: string): void {
    this.activeTab = tab;
  }

  markAllAsRead(): void {
    this.notifications.forEach(n => n.isRead = true);
  }

  markAsRead(id: string): void {
    const notification = this.notifications.find(n => n.id === id);
    if (notification) {
      notification.isRead = true;
    }
  }

  handleAction(notification: Notification): void {
    console.log('Action clicked for:', notification.title);
    this.markAsRead(notification.id);
  }

  loadOlderNotifications(): void {
    console.log('Loading older notifications...');
  }
}

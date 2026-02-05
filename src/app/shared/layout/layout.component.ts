import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  // Header configuration
  showSaveButton = false;
  showNewBookingButton = true;
  hasUnsavedChanges = false;
  notificationCount = 3;

  // Sidebar configuration
  sidebarTitle = 'Settings';
  sidebarSubtitle = 'Manage platform pricing & rules';
  showMainNav = true;
  showSettingsNav = false;
  showAdminNav = false;

  // Footer configuration
  systemOnline = true;
  companyName = 'Amadeus B2B Platform';
  supportPhone = '';
  showPrivacyPolicy = true;
  showTerms = true;
  showDocumentation = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Configure layout based on current route
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.configureLayout(event.urlAfterRedirects);
      });

    // Initial configuration
    this.configureLayout(this.router.url);
  }

  private configureLayout(url: string): void {
    // Reset to defaults
    this.showSaveButton = false;
    this.showNewBookingButton = true;
    this.showMainNav = true;
    this.showSettingsNav = false;
    this.showAdminNav = false;
    this.supportPhone = '';

    // Configure based on route
    if (url.includes('/admin-settings')) {
      this.sidebarTitle = 'Settings';
      this.sidebarSubtitle = 'Manage platform pricing & rules';
      this.showSaveButton = true;
      this.showNewBookingButton = false;
      this.showMainNav = false;
      this.showSettingsNav = true;
    } else if (url.includes('/user-management') || url.includes('/kyc-compliance') || url.includes('/security')) {
      this.sidebarTitle = 'Administration';
      this.sidebarSubtitle = 'User & security management';
      this.showMainNav = false;
      this.showAdminNav = true;
    } else if (url.includes('/feedback')) {
      this.sidebarTitle = 'Amadeus Portal';
      this.sidebarSubtitle = 'Non-IATA Access';
      this.supportPhone = '+44 20 7946 0958';
    } else if (url.includes('/flight-search') || url.includes('/flight-details') || url.includes('/multi-city')) {
      this.sidebarTitle = 'Flight Booking';
      this.sidebarSubtitle = 'Search & book flights';
    } else if (url.includes('/booking-confirmation') || url.includes('/cancellation')) {
      this.sidebarTitle = 'Bookings';
      this.sidebarSubtitle = 'Manage reservations';
    } else if (url.includes('/wallet')) {
      this.sidebarTitle = 'Finance';
      this.sidebarSubtitle = 'Wallet & transactions';
    } else if (url.includes('/sales-reporting')) {
      this.sidebarTitle = 'Reports';
      this.sidebarSubtitle = 'Sales & analytics';
    } else if (url.includes('/notifications')) {
      this.sidebarTitle = 'Notifications';
      this.sidebarSubtitle = 'Alerts & messages';
    } else if (url.includes('/support')) {
      this.sidebarTitle = 'Help Center';
      this.sidebarSubtitle = 'Support & documentation';
    } else {
      this.sidebarTitle = 'Dashboard';
      this.sidebarSubtitle = 'Overview & quick actions';
    }
  }

  onSaveChanges(): void {
    // Emit event or call service to save changes
    console.log('Save changes triggered from layout');
  }

  setUnsavedChanges(value: boolean): void {
    this.hasUnsavedChanges = value;
  }
}

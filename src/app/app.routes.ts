import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'registration',
    loadComponent: () => import('./components/registration/registration.component').then(m => m.RegistrationComponent)
  },
  {
    path: 'activation',
    loadComponent: () => import('./components/activation/activation.component').then(m => m.ActivationComponent)
  },
  {
    path: 'sales-reporting',
    loadComponent: () => import('./components/sales-reporting/sales-reporting.component').then(m => m.SalesReportingComponent)
  },
  {
    path: 'notifications',
    loadComponent: () => import('./components/notifications/notifications.component').then(m => m.NotificationsComponent)
  },
  {
    path: 'kyc-compliance',
    loadComponent: () => import('./components/kyc-compliance/kyc-compliance.component').then(m => m.KycComplianceComponent)
  },
  {
    path: 'admin-verification',
    loadComponent: () => import('./components/admin-verification/admin-verification.component').then(m => m.AdminVerificationComponent)
  },
  {
    path: 'support',
    loadComponent: () => import('./components/support/support.component').then(m => m.SupportComponent)
  },
  {
    path: 'feedback',
    loadComponent: () => import('./components/feedback/feedback.component').then(m => m.FeedbackComponent)
  },
  {
    path: 'wallet',
    loadComponent: () => import('./components/wallet/wallet.component').then(m => m.WalletComponent)
  },
  {
    path: 'booking-confirmation',
    loadComponent: () => import('./components/booking-confirmation/booking-confirmation.component').then(m => m.BookingConfirmationComponent)
  },
  {
    path: 'admin-settings',
    loadComponent: () => import('./components/admin-settings/admin-settings.component').then(m => m.AdminSettingsComponent)
  },
  {
    path: 'user-management',
    loadComponent: () => import('./components/user-management/user-management.component').then(m => m.UserManagementComponent)
  },
  {
    path: 'security',
    loadComponent: () => import('./components/security/security.component').then(m => m.SecurityComponent)
  },
  {
    path: 'flight-search',
    loadComponent: () => import('./components/flight-search/flight-search.component').then(m => m.FlightSearchComponent)
  },
  {
    path: 'multi-city',
    loadComponent: () => import('./components/multi-city/multi-city.component').then(m => m.MultiCityComponent)
  },
  {
    path: 'cancellation',
    loadComponent: () => import('./components/cancellation/cancellation.component').then(m => m.CancellationComponent)
  },
  {
    path: 'flight-details',
    loadComponent: () => import('./components/flight-details/flight-details.component').then(m => m.FlightDetailsComponent)
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

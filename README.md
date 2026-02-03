# ✈️ Flight Booking & Management Platform

An Angular application for flight search, booking, user management, and sales reporting — built with standalone components and lazy loading.

---

## 📂 Project Structure

All components live under `src/app/components/`, each in its own folder and loaded lazily via Angular's standalone routing.

```
src/
└── app/
    ├── app.routes.ts
    └── components/
        ├── login/
        ├── registration/
        ├── activation/
        ├── flight-search/
        ├── flight-details/
        ├── multi-city/
        ├── booking-confirmation/
        ├── cancellation/
        ├── wallet/
        ├── notifications/
        ├── kyc-compliance/
        ├── admin-verification/
        ├── admin-settings/
        ├── user-management/
        ├── security/
        ├── sales-reporting/
        ├── support/
        └── feedback/
```

---

## 🛣️ Route Map

| Route                  | Component                    | Description                              |
|------------------------|------------------------------|------------------------------------------|
| `/`                    | —                            | Redirects to `/login`                    |
| `/login`               | `LoginComponent`             | User login page                          |
| `/registration`        | `RegistrationComponent`      | New user sign-up                         |
| `/activation`          | `ActivationComponent`        | Account activation / email verification  |
| `/flight-search`       | `FlightSearchComponent`      | Search for available flights             |
| `/flight-details`      | `FlightDetailsComponent`     | View details of a selected flight        |
| `/multi-city`          | `MultiCityComponent`         | Multi-city flight search & booking       |
| `/booking-confirmation`| `BookingConfirmationComponent`| Confirms a completed booking            |
| `/cancellation`        | `CancellationComponent`      | Cancel an existing booking               |
| `/wallet`              | `WalletComponent`            | User wallet / payment balance            |
| `/notifications`       | `NotificationsComponent`     | In-app notification centre               |
| `/kyc-compliance`      | `KycComplianceComponent`     | KYC document upload & status             |
| `/admin-verification`  | `AdminVerificationComponent` | Admin reviews pending verifications      |
| `/admin-settings`      | `AdminSettingsComponent`     | Platform-wide admin configuration        |
| `/user-management`     | `UserManagementComponent`    | Admin user CRUD operations               |
| `/security`            | `SecurityComponent`          | Security settings (2FA, passwords, etc.) |
| `/sales-reporting`     | `SalesReportingComponent`    | Sales dashboards & reports               |
| `/support`             | `SupportComponent`           | Customer support / help centre           |
| `/feedback`            | `FeedbackComponent`          | Submit user feedback                     |
| `**` (catch-all)       | —                            | Redirects unknown routes to `/login`     |

---

## 🔧 Tech Highlights

- **Standalone Components** — every route uses `loadComponent()` for tree-shakeable, lazy-loaded modules with zero `NgModule` boilerplate.
- **Code Splitting** — each component is bundled independently, keeping the initial payload small.
- **Catch-All Guard** — any unmatched route falls back to `/login`, preventing blank screens.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
ng serve

# Build for production
ng build --prod
```

The app will be available at `http://localhost:4200` and will automatically redirect to `/login`.

---

## 📝 Notes

- Route guards (e.g. `CanActivate`) are not yet defined in the routing config. Consider adding them to protect admin and authenticated routes such as `/admin-settings`, `/user-management`, `/wallet`, and `/sales-reporting`.
- Component implementations are expected to reside in their respective folders following the naming convention `<name>.component.ts`.

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Role {
  name: string;
  label: string;
  description: string;
  isDefault: boolean;
  permissions: {
    canIssueTickets: boolean;
    canManageUsers: boolean;
    canRefillWallet: boolean;
  };
}

interface User {
  initials: string;
  name: string;
  email: string;
  twoFactorMethod: 'app' | 'sms' | null;
  status: 'enabled' | 'disabled';
}

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  twoFactorStatus = 'Active & Protected';
  enforce2FAForAdmins = true;

  roles: Role[] = [
    {
      name: 'administrator',
      label: 'Administrator',
      description: 'Full platform access, including user management and financial controls.',
      isDefault: true,
      permissions: {
        canIssueTickets: true,
        canManageUsers: true,
        canRefillWallet: true
      }
    },
    {
      name: 'booking-agent',
      label: 'Booking Agent',
      description: 'Standard role for agents searching and issuing Amadeus flight content.',
      isDefault: false,
      permissions: {
        canIssueTickets: true,
        canManageUsers: false,
        canRefillWallet: false
      }
    },
    {
      name: 'finance',
      label: 'Finance/Accountant',
      description: 'Financial monitoring, wallet management, and reporting access.',
      isDefault: false,
      permissions: {
        canIssueTickets: false,
        canManageUsers: false,
        canRefillWallet: true
      }
    }
  ];

  users: User[] = [
    {
      initials: 'JD',
      name: 'John Doe',
      email: 'john.doe@travelcorp.com',
      twoFactorMethod: 'app',
      status: 'enabled'
    },
    {
      initials: 'JS',
      name: 'Jane Smith',
      email: 'jane.smith@travelcorp.com',
      twoFactorMethod: 'sms',
      status: 'disabled'
    }
  ];

  ngOnInit(): void {}

  viewSecurityAuditLog(): void {
    console.log('Opening audit log...');
  }

  saveChanges(): void {
    console.log('Saving changes...');
  }

  toggle2FAEnforcement(): void {
    this.enforce2FAForAdmins = !this.enforce2FAForAdmins;
  }

  configureAuthenticator(): void {
    console.log('Configuring authenticator...');
  }

  setupSMS(): void {
    console.log('Setting up SMS...');
  }

  togglePermission(role: Role, permission: keyof Role['permissions']): void {
    role.permissions[permission] = !role.permissions[permission];
  }
}

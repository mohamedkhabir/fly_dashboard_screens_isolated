import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  id: string;
  initials: string;
  name: string;
  email: string;
  role: string;
  permissions: string[];
  status: 'active' | 'inactive';
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  searchQuery = '';
  currentPage = 1;
  totalUsers = 24;

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
      id: '1',
      initials: 'JD',
      name: 'John Doe',
      email: 'john.doe@travelcorp.com',
      role: 'ADMINISTRATOR',
      permissions: ['ticket', 'users', 'wallet'],
      status: 'active'
    },
    {
      id: '2',
      initials: 'JS',
      name: 'Jane Smith',
      email: 'jane.smith@travelcorp.com',
      role: 'BOOKING AGENT',
      permissions: ['ticket'],
      status: 'active'
    },
    {
      id: '3',
      initials: 'MC',
      name: 'Michael Chen',
      email: 'm.chen@travelcorp.com',
      role: 'FINANCE',
      permissions: ['wallet'],
      status: 'inactive'
    }
  ];

  ngOnInit(): void {}

  togglePermission(role: Role, permission: keyof Role['permissions']): void {
    role.permissions[permission] = !role.permissions[permission];
  }

  editRoleMatrix(): void {
    console.log('Opening role matrix editor');
  }

  addNewUser(): void {
    console.log('Opening add user form');
  }

  editUser(user: User): void {
    console.log('Editing user:', user);
  }

  viewUser(user: User): void {
    console.log('Viewing user:', user);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    this.currentPage++;
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }
}

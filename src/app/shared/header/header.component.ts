import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() showSaveButton = false;
  @Input() showNewBookingButton = false;
  @Input() hasUnsavedChanges = false;
  @Input() notificationCount = 0;
  @Output() saveChanges = new EventEmitter<void>();

  showUserMenu = false;

  constructor(private router: Router) {}

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  onSaveChanges(): void {
    this.saveChanges.emit();
  }

  logout(): void {
    // Clear any stored auth tokens
    localStorage.removeItem('authToken');
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  currentStep = 2;
  totalSteps = 4;
  progressPercentage = 50;

  // Form data
  agencyName = '';
  country = '';
  iataNumber = '';
  website = '';

  contactName = '';
  contactEmail = '';

  businessLicenseFile: File | null = null;
  taxIdFile: File | null = null;

  acceptTerms = false;

  constructor() {}

  ngOnInit(): void {}

  onFileSelect(event: Event, fileType: 'license' | 'taxId'): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit. Please choose a smaller file.');
        return;
      }

      // Validate file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        alert('Invalid file type. Please upload PDF, JPG, or PNG files only.');
        return;
      }

      if (fileType === 'license') {
        this.businessLicenseFile = file;
      } else {
        this.taxIdFile = file;
      }
      console.log(`File selected: ${file.name}`);
    }
  }

  triggerFileInput(inputId: string): void {
    const input = document.getElementById(inputId) as HTMLInputElement;
    if (input) {
      input.click();
    }
  }

  removeFile(fileType: 'license' | 'taxId'): void {
    if (fileType === 'license') {
      this.businessLicenseFile = null;
    } else {
      this.taxIdFile = null;
    }
  }

  goBack(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.progressPercentage = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
    }
    console.log('Going back to previous step');
  }

  submitRegistration(): void {
    // Validate required fields
    if (!this.agencyName.trim()) {
      alert('Please enter your agency legal name.');
      return;
    }

    if (!this.country) {
      alert('Please select your country of registration.');
      return;
    }

    if (!this.contactName.trim()) {
      alert('Please enter the contact full name.');
      return;
    }

    if (!this.contactEmail.trim()) {
      alert('Please enter a professional email address.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.contactEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!this.acceptTerms) {
      alert('Please accept the Terms of Service and Privacy Policy to continue.');
      return;
    }

    console.log('Registration submitted:', {
      agencyName: this.agencyName,
      country: this.country,
      iataNumber: this.iataNumber,
      website: this.website,
      contactName: this.contactName,
      contactEmail: this.contactEmail,
      businessLicense: this.businessLicenseFile?.name,
      taxId: this.taxIdFile?.name
    });

    alert('Registration submitted successfully! Our verification team will review your documents within 24-48 business hours.');
  }

  contactSupport(): void {
    console.log('Opening contact support');
    alert('Support contact opened - Email: support@amadeus-b2b.com');
  }

  openFAQ(): void {
    console.log('Opening registration FAQ');
    alert('Registration FAQ opened');
  }
}

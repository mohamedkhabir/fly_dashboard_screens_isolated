import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';

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
  agencyName = 'Global Travel Solutions LLC';
  country = '';
  iataNumber = '';
  website = 'https://www.youragency.com';

  contactName = 'John Doe';
  contactEmail = 'john@agency.com';

  businessLicenseFile: File | null = null;
  taxIdFile: File | null = null;

  acceptTerms = false;
  acceptPrivacy = false;

  constructor() {}

  ngOnInit(): void {}

  onFileSelect(event: Event, fileType: 'license' | 'taxId'): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
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
  }

  submitRegistration(): void {
    if (!this.acceptTerms || !this.acceptPrivacy) {
      alert('Please accept the Terms of Service and Privacy Policy to continue.');
      return;
    }

    if (!this.businessLicenseFile || !this.taxIdFile) {
      alert('Please upload all required documents.');
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
    alert('Support contact opened');
  }

  openFAQ(): void {
    console.log('Opening registration FAQ');
    alert('Registration FAQ opened');
  }
}

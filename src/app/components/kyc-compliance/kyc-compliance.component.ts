import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Document {
  id: string;
  name: string;
  requirement: 'MANDATORY' | 'OPTIONAL';
  status: 'verified' | 'pending' | 'rejected' | 'not-submitted';
  lastUpdated: string;
  fileInfo?: {
    type: string;
    size: string;
  };
  rejectionReason?: string;
}

@Component({
  selector: 'app-kyc-compliance',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './kyc-compliance.component.html',
  styleUrls: ['./kyc-compliance.component.scss']
})
export class KycComplianceComponent implements OnInit {
  totalDocuments = 4;
  verifiedDocuments = 2;
  pendingDocuments = 1;

  documents: Document[] = [
    {
      id: '1',
      name: 'Business License',
      requirement: 'MANDATORY',
      status: 'verified',
      lastUpdated: 'Oct 12, 2023',
      fileInfo: {
        type: 'PDF',
        size: '2.4 MB'
      }
    },
    {
      id: '2',
      name: 'Bank Details',
      requirement: 'MANDATORY',
      status: 'pending',
      lastUpdated: 'Oct 24, 2023',
      fileInfo: {
        type: 'JPG',
        size: '1.1 MB'
      }
    },
    {
      id: '3',
      name: 'Identity Proof',
      requirement: 'MANDATORY',
      status: 'rejected',
      lastUpdated: 'Oct 25, 2023',
      fileInfo: {
        type: 'PNG',
        size: '3.8 MB'
      },
      rejectionReason: 'Blurry image, please re-upload.'
    },
    {
      id: '4',
      name: 'Tax Certificate',
      requirement: 'OPTIONAL',
      status: 'not-submitted',
      lastUpdated: '—'
    }
  ];

  ngOnInit(): void {
    // Initialize component
    this.calculateStats();
  }

  calculateStats(): void {
    this.totalDocuments = this.documents.length;
    this.verifiedDocuments = this.documents.filter(d => d.status === 'verified').length;
    this.pendingDocuments = this.documents.filter(d =>
      d.status === 'pending' || d.status === 'rejected' || d.status === 'not-submitted'
    ).length;
  }

  downloadStatusReport(): void {
    console.log('Downloading status report...');
    alert('Downloading KYC Status Report as PDF...');
  }

  downloadDocument(doc: Document): void {
    console.log('Downloading document:', doc.name);
    alert(`Downloading ${doc.name} (${doc.fileInfo?.type}, ${doc.fileInfo?.size})`);
  }

  viewDetails(doc: Document): void {
    console.log('Viewing details for:', doc.name);
    alert(`Viewing details for ${doc.name}\nStatus: Pending Review\nSubmitted: ${doc.lastUpdated}`);
  }

  reuploadDocument(doc: Document): void {
    console.log('Re-uploading document:', doc.name);
    // Open file picker
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.jpg,.jpeg,.png';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        console.log('Selected file:', file.name);
        alert(`Re-uploading ${doc.name} with file: ${file.name}`);
      }
    };
    input.click();
  }

  uploadDocument(doc: Document): void {
    console.log('Uploading document:', doc.name);
    // Open file picker
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.jpg,.jpeg,.png';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        // Validate file size (10MB max)
        if (file.size > 10 * 1024 * 1024) {
          alert('File size exceeds 10MB limit. Please choose a smaller file.');
          return;
        }
        console.log('Selected file:', file.name);
        alert(`Uploading ${doc.name} with file: ${file.name}`);
      }
    };
    input.click();
  }

  chatWithCompliance(): void {
    console.log('Opening compliance chat...');
    alert('Opening chat with Compliance Team...\nAvailable Mon-Fri, 9AM-6PM EST');
  }
}

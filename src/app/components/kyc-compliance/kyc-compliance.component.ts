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
  }

  downloadStatusReport(): void {
    console.log('Downloading status report...');
    // Implement download logic
  }

  downloadDocument(doc: Document): void {
    console.log('Downloading document:', doc.name);
    // Implement download logic
  }

  viewDetails(doc: Document): void {
    console.log('Viewing details for:', doc.name);
    // Implement view details logic
  }

  reuploadDocument(doc: Document): void {
    console.log('Re-uploading document:', doc.name);
    // Implement re-upload logic
  }

  uploadDocument(doc: Document): void {
    console.log('Uploading document:', doc.name);
    // Implement upload logic
  }

  chatWithCompliance(): void {
    console.log('Opening compliance chat...');
    // Implement chat logic
  }
}

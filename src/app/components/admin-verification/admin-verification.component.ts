import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink, RouterLinkActive} from '@angular/router';

interface LegalDocument {
  id: string;
  name: string;
  uploadDate: string;
  fileType: string;
  fileSize: string;
  status: 'verified' | 'pending';
}

@Component({
  selector: 'app-admin-verification',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './admin-verification.component.html',
  styleUrls: ['./admin-verification.component.scss']
})
export class AdminVerificationComponent implements OnInit {
  agencyName = 'Skybound Travels';
  agencyId = 'AGY-88421';
  submittedDate = 'Oct 24, 2023';
  verificationStatus = '2/3 Validated';
  subscriptionPlan = 'Paid - Pro Plan';
  apiStatus = 'Connection Active';

  agencyDetails = {
    companyName: 'Skybound Travels Ltd.',
    taxId: 'FR 49 884210091',
    address: '124 Avenue des Champs-Élysées, Paris, 75008, France',
    legalRep: 'Jean-Luc Picard',
    position: 'Managing Director',
    email: 'j.picard@skybound-travels.com'
  };

  documents: LegalDocument[] = [
    {
      id: '1',
      name: 'KBIS Registration',
      uploadDate: 'Oct 24',
      fileType: 'PDF',
      fileSize: '2.4 MB',
      status: 'verified'
    },
    {
      id: '2',
      name: 'RIB (Bank Details)',
      uploadDate: 'Oct 24',
      fileType: 'JPG',
      fileSize: '1.1 MB',
      status: 'verified'
    },
    {
      id: '3',
      name: 'Legal Rep ID',
      uploadDate: 'Oct 25',
      fileType: 'PNG',
      fileSize: '3.8 MB',
      status: 'pending'
    }
  ];

  selectedDocument: LegalDocument | null = null;
  adminNotes = '';
  showDocumentPreview = false;

  constructor() {}

  ngOnInit(): void {
    // Auto-select the pending document
    this.selectedDocument = this.documents.find(d => d.status === 'pending') || null;
    if (this.selectedDocument) {
      this.showDocumentPreview = true;
    }
  }

  viewDocument(doc: LegalDocument): void {
    this.selectedDocument = doc;
    this.showDocumentPreview = true;
  }

  fullScreenPreview(): void {
    console.log('Opening full screen preview');
    alert('Full screen preview opened');
  }

  printDocument(): void {
    console.log('Printing document');
    alert('Print dialog opened');
  }

  downloadDossier(): void {
    console.log('Downloading dossier');
    alert('Agency dossier download initiated');
  }

  viewAuditLog(): void {
    console.log('Opening audit log');
    alert('Audit log opened');
  }

  approveAgency(): void {
    if (confirm('Are you sure you want to approve this agency? This will grant them immediate access to Amadeus inventory.')) {
      console.log('Agency approved');
      alert('Agency approved successfully!');
    }
  }

  rejectAgency(): void {
    const reason = prompt('Please provide a reason for rejection:');
    if (reason) {
      console.log('Agency rejected with reason:', reason);
      alert('Agency has been rejected. Notification sent.');
    }
  }
}

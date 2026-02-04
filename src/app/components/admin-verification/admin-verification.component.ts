import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
    // Auto-select the pending document for review
    this.selectedDocument = this.documents.find(d => d.status === 'pending') || null;
    if (this.selectedDocument) {
      this.showDocumentPreview = true;
    }
  }

  viewDocument(doc: LegalDocument): void {
    this.selectedDocument = doc;
    this.showDocumentPreview = true;
    console.log('Viewing document:', doc.name);
  }

  fullScreenPreview(): void {
    console.log('Opening full screen preview');
    alert('Opening document in full screen mode...');
  }

  printDocument(): void {
    console.log('Printing document');
    alert('Opening print dialog...');
  }

  downloadDossier(): void {
    console.log('Downloading agency dossier');
    alert('Downloading complete agency dossier as PDF...');
  }

  viewAuditLog(): void {
    console.log('Opening audit log');
    alert('Opening audit log for Skybound Travels...');
  }

  approveAgency(): void {
    const confirm = window.confirm(
      'Are you sure you want to approve Skybound Travels?\n\n' +
      'This will:\n' +
      '• Grant immediate access to Amadeus GDS inventory\n' +
      '• Enable ticket issuance capabilities\n' +
      '• Activate the Pro Plan subscription\n\n' +
      'This action will be logged in the audit trail.'
    );

    if (confirm) {
      console.log('Agency approved with notes:', this.adminNotes);
      alert('✓ Skybound Travels has been approved!\n\nNotification sent to j.picard@skybound-travels.com');
    }
  }

  rejectAgency(): void {
    const reason = window.prompt(
      'Please provide a reason for rejection:\n\n' +
      'This will be sent to the agency contact.',
      'Document quality issue - please re-upload a clearer image of the ID document.'
    );

    if (reason) {
      console.log('Agency rejected with reason:', reason);
      console.log('Admin notes:', this.adminNotes);
      alert('✗ Skybound Travels application has been rejected.\n\nReason sent to agency: ' + reason);
    }
  }
}

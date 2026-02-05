import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() systemOnline = true;
  @Input() companyName = 'Amadeus B2B Platform';
  @Input() supportPhone = '';
  @Input() showPrivacyPolicy = true;
  @Input() showTerms = true;
  @Input() showDocumentation = true;

  currentYear = new Date().getFullYear();
}

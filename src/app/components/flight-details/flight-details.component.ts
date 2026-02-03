import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {
  activeTab: 'itinerary' | 'fare-rules' = 'itinerary';

  flightInfo = {
    route: {
      from: 'London',
      fromCode: 'LHR',
      to: 'New York',
      toCode: 'JFK'
    },
    departure: {
      time: '10:45',
      date: 'Oct 24, 2023',
      terminal: 'Terminal 5',
      airport: 'London Heathrow (LHR)'
    },
    arrival: {
      time: '13:40',
      date: 'Oct 24, 2023',
      terminal: 'Terminal 7',
      airport: 'John F. Kennedy Intl (JFK)'
    },
    airline: 'British Airways',
    flightNumber: 'BA117',
    aircraft: 'BOEING 777-200',
    duration: '7h 55m',
    bookingClass: 'ECONOMY (Q)',
    fareBasis: 'OLN0W2B1'
  };

  baggage = {
    checkedIn: '1x 23 kg',
    cabin: '1x 8 kg'
  };

  amenities = {
    pitch: '31" Pitch',
    meal: true,
    wifi: false,
    entertainment: true,
    power: true
  };

  pricing = {
    baseFare: 485.00,
    taxes: 122.40,
    agencyMarkup: 15.00,
    totalAmount: 622.40
  };

  fareRules = {
    fareBasis: 'OLN0W2B1',
    ticketDesignator: 'NONE',
    fareCalculation: 'LON BA NYC 485.00OLN0W2B1 USD 485.00 END ROE 1.00',
    cancellations: [
      'ANY TIME TICKET IS NON-REFUNDABLE IN CASE OF CANCEL/NO-SHOW.',
      'BEFORE DEPARTURE: CANCELLATIONS PERMITTED FOR A FEE USD 150.00 FOR REISSUE/REVALIDATION.',
      'AFTER DEPARTURE: TICKET IS NON-REFUNDABLE.'
    ],
    changes: [
      'ANY TIME CHANGES PERMITTED FOR A FEE USD 150.00 FOR REISSUE/REVALIDATION.',
      'BEFORE DEPARTURE: CHANGES PERMITTED FOR A FEE USD 150.00 FOR REISSUE/REVALIDATION.',
      'CHANGES TO BOOKING CLASS REQUIRE FARE DIFFERENCE PAYMENT.'
    ],
    refunds: [
      'REFUND OF UNUSED TAXES PERMITTED. SERVICE FEE MAY APPLY.',
      'REFUND CALCULATED AT DATE OF CANCELLATION.',
      'MINIMUM STAY: NO MINIMUM STAY REQUIREMENTS.',
      'NAME CHANGES ARE NOT PERMITTED. TICKETS ARE NON-TRANSFERABLE.'
    ]
  };

  constructor() {}

  ngOnInit(): void {}

  setTab(tab: 'itinerary' | 'fare-rules'): void {
    this.activeTab = tab;
  }

  downloadPDF(): void {
    console.log('Downloading PDF');
    alert('Flight details PDF downloaded');
  }

  shareDetails(): void {
    console.log('Opening share options');
    alert('Share options opened');
  }

  continueToPassengerInfo(): void {
    console.log('Continuing to passenger info');
    alert('Proceeding to passenger information...');
  }

  openTicketingPolicy(): void {
    console.log('Opening ticketing policy');
    alert('Ticketing policy opened');
  }

  openFareGlossary(): void {
    console.log('Opening fare glossary');
    alert('Fare glossary opened');
  }
}

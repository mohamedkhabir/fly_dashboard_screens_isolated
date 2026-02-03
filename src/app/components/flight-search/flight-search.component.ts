import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departure: { time: string; code: string; };
  arrival:    { time: string; code: string; };
  duration: string;
  stops: number;
  price: number;
  cabinClass: string;
  baggage: string;
  meal: boolean;
  wifi: boolean;
  seats: number;
  hasMarkup?: boolean;
  isGDS?: boolean;
}

@Component({
  selector:    'app-flight-search',
  standalone:  true,
  imports:     [CommonModule, RouterLink],
  templateUrl: './flight-search.component.html',
  styleUrls:   ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  searchSummary = {
    from: 'London', fromCode: 'LHR',
    to:   'New York', toCode: 'JFK',
    date: 'Oct 24 – Oct 31',
    passengers: 1,
    cabinClass: 'Economy'
  };

  stats = { cheapest: 450, fastest: '7h 20m', bestValue: 4.8 };

  selectedStops     = '1-stop';
  priceRange        = [350, 2400];
  selectedAirlines: string[] = [];
  selectedDeparture = 'evening';

  airlines = ['British Airways', 'Virgin Atlantic', 'American Airlines', 'Lufthansa'];

  flights: Flight[] = [
    {
      id: '1', airline: 'British Airways', flightNumber: 'BA 117 • 787-9',
      departure: { time: '10:45', code: 'LHR' },
      arrival:   { time: '13:20', code: 'JFK' },
      duration: '7H 35M', stops: 0, price: 492.00,
      cabinClass: 'Economy', baggage: '1× 23kg',
      meal: true, wifi: false, seats: 4,
      hasMarkup: true, isGDS: false
    },
    {
      id: '2', airline: 'Lufthansa', flightNumber: 'LH 915 • Multi-Leg',
      departure: { time: '06:20', code: 'LHR' },
      arrival:   { time: '17:35', code: 'JFK' },
      duration: '11H 15M', stops: 1, price: 385.40,
      cabinClass: 'Economy', baggage: '0× 23kg',
      meal: false, wifi: false, seats: 12,
      hasMarkup: false, isGDS: true
    },
    {
      id: '3', airline: 'Virgin Atlantic', flightNumber: 'VS 3 • A350-1000',
      departure: { time: '15:00', code: 'LHR' },
      arrival:   { time: '18:50', code: 'JFK' },
      duration: '7H 50M', stops: 0, price: 510.15,
      cabinClass: 'Economy', baggage: '1× 23kg',
      meal: false, wifi: true, seats: 8,
      hasMarkup: false, isGDS: false
    }
  ];

  currentPage  = 1;
  totalResults = 142;

  constructor() {}
  ngOnInit(): void {}

  get filteredFlights(): Flight[] { return this.flights; }

  modifySearch():   void { alert('Search modification opened'); }
  setStopsFilter(f: string): void { this.selectedStops = f; }

  toggleAirline(airline: string): void {
    const i = this.selectedAirlines.indexOf(airline);
    i > -1 ? this.selectedAirlines.splice(i, 1) : this.selectedAirlines.push(airline);
  }

  setDepartureTime(t: string): void { this.selectedDeparture = t; }

  clearFilters(): void {
    this.selectedStops     = 'all';
    this.selectedAirlines  = [];
    this.selectedDeparture = 'all';
    this.priceRange        = [350, 2400];
  }

  selectFlight(f: Flight): void { alert('Selected: ' + f.airline + ' ' + f.flightNumber); }
  viewDetails(f: Flight):  void { alert('Details:  ' + f.airline + ' ' + f.flightNumber); }

  previousPage(): void { if (this.currentPage > 1) this.currentPage--; }
  nextPage():     void { this.currentPage++; }
  goToPage(p: number): void { this.currentPage = p; }

  protected readonly Math = Math;
}

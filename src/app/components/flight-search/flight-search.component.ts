import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departure: {
    time: string;
    code: string;
  };
  arrival: {
    time: string;
    code: string;
  };
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
  selector: 'app-flight-search',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  searchSummary = {
    from: 'London',
    fromCode: 'LHR',
    to: 'New York',
    toCode: 'JFK',
    date: 'Oct 24',
    passengers: 1,
    cabinClass: 'Economy'
  };

  stats = {
    cheapest: 450,
    fastest: '7h 20m',
    bestValue: 4.8
  };

  selectedFilter = 'all';
  selectedStops = 'all';
  priceRange = [350, 2400];
  selectedAirlines: string[] = [];
  selectedDeparture = 'all';

  airlines = ['British Airways', 'Virgin Atlantic', 'American Airlines', 'Lufthansa'];

  flights: Flight[] = [
    {
      id: '1',
      airline: 'British Airways',
      flightNumber: 'BA 117 • 787/8',
      departure: { time: '10:45', code: 'LHR' },
      arrival: { time: '13:20', code: 'JFK' },
      duration: '7H 35M',
      stops: 0,
      price: 492.00,
      cabinClass: 'Economy',
      baggage: '1x 23kg',
      meal: true,
      wifi: false,
      seats: 4,
      hasMarkup: true,
      isGDS: false
    },
    {
      id: '2',
      airline: 'Lufthansa',
      flightNumber: 'LH 915 • Multi-Leg',
      departure: { time: '06:20', code: 'LHR' },
      arrival: { time: '17:35', code: 'JFK' },
      duration: '11H 15M',
      stops: 1,
      price: 385.40,
      cabinClass: 'Economy',
      baggage: '0x 23kg',
      meal: false,
      wifi: false,
      seats: 12,
      isGDS: true
    },
    {
      id: '3',
      airline: 'Virgin Atlantic',
      flightNumber: 'VS 3 • A350-1000',
      departure: { time: '15:00', code: 'LHR' },
      arrival: { time: '18:50', code: 'JFK' },
      duration: '7H 50M',
      stops: 0,
      price: 510.15,
      cabinClass: 'Economy',
      baggage: '1x 23kg',
      meal: false,
      wifi: true,
      seats: 8,
      hasMarkup: false,
      isGDS: false
    }
  ];

  currentPage = 1;
  totalResults = 142;

  constructor() {}

  ngOnInit(): void {}

  get filteredFlights(): Flight[] {
    return this.flights;
  }

  modifySearch(): void {
    console.log('Modifying search');
    alert('Search modification opened');
  }

  setStopsFilter(filter: string): void {
    this.selectedStops = filter;
  }

  toggleAirline(airline: string): void {
    const index = this.selectedAirlines.indexOf(airline);
    if (index > -1) {
      this.selectedAirlines.splice(index, 1);
    } else {
      this.selectedAirlines.push(airline);
    }
  }

  setDepartureTime(time: string): void {
    this.selectedDeparture = time;
  }

  clearFilters(): void {
    this.selectedStops = 'all';
    this.selectedAirlines = [];
    this.selectedDeparture = 'all';
    this.priceRange = [350, 2400];
  }

  selectFlight(flight: Flight): void {
    console.log('Flight selected:', flight);
    alert(`Selected flight: ${flight.airline} ${flight.flightNumber}`);
  }

  viewDetails(flight: Flight): void {
    console.log('Viewing flight details:', flight);
    alert(`Flight details: ${flight.airline} ${flight.flightNumber}`);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    this.currentPage++;
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  protected readonly Math = Math;
}

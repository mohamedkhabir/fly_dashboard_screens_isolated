import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';

interface Flight {
  id: string;
  airlines: string[];
  segments: {
    departure: { time: string; code: string; city: string };
    arrival: { time: string; code: string; city: string };
    duration: string;
    airline: string;
    flightNumber: string;
    stops: number;
  }[];
  totalDuration: string;
  price: number;
  hasMarkup: boolean;
}

@Component({
  selector: 'app-multi-city',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './multi-city.component.html',
  styleUrls: ['./multi-city.component.scss']
})
export class MultiCityComponent implements OnInit {
  tripType: 'one-way' | 'round-trip' | 'multi-city' = 'multi-city';

  legs = [
    {
      from: 'London (LHR)',
      to: 'New York (JFK)',
      date: '10/24/2024'
    },
    {
      from: 'New York (JFK)',
      to: 'Paris (CDG)',
      date: '10/31/2024'
    }
  ];

  passengers = { adults: 1, children: 0 };
  cabinClass = 'Economy';

  stats = {
    cheapest: 782,
    fastest: '15h 40m',
    bestValue: 4.9
  };

  flights: Flight[] = [
    {
      id: '1',
      airlines: ['British Airways', 'Air France'],
      segments: [
        {
          departure: { time: '10:45', code: 'LHR', city: 'London' },
          arrival: { time: '13:20', code: 'JFK', city: 'New York' },
          duration: '7H 35M',
          airline: 'British Airways',
          flightNumber: 'BA 117',
          stops: 0
        },
        {
          departure: { time: '19:10', code: 'JFK', city: 'New York' },
          arrival: { time: '08:15+1', code: 'CDG', city: 'Paris' },
          duration: '8H 05M',
          airline: 'Air France',
          flightNumber: 'AF 23',
          stops: 1
        }
      ],
      totalDuration: '15h 40m',
      price: 842.00,
      hasMarkup: true
    }
  ];

  selectedFilter = 'all';
  currentPage = 1;
  totalResults = 140;

  constructor() {}

  ngOnInit(): void {}

  setTripType(type: 'one-way' | 'round-trip' | 'multi-city'): void {
    this.tripType = type;
  }

  addFlight(): void {
    this.legs.push({
      from: '',
      to: '',
      date: ''
    });
  }

  removeFlight(index: number): void {
    if (this.legs.length > 2) {
      this.legs.splice(index, 1);
    }
  }

  searchFlights(): void {
    console.log('Searching flights:', this.legs);
    alert('Searching for multi-city flights...');
  }

  selectBundle(flight: Flight): void {
    console.log('Bundle selected:', flight);
    alert(`Selected bundle: Total $${flight.price}`);
  }

  viewJourneyDetails(flight: Flight): void {
    console.log('Viewing journey details:', flight);
    alert('Journey details opened');
  }

  clearFilters(): void {
    this.selectedFilter = 'all';
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    this.currentPage++;
  }
}

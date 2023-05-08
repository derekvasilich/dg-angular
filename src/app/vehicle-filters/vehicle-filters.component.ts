import { Component, OnInit, Input } from '@angular/core';
import { VehicleFilters } from '../models/vehicleFilters';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-vehicle-filters',
  templateUrl: './vehicle-filters.component.html',
  styleUrls: ['./vehicle-filters.component.scss']
})
export class VehicleFiltersComponent implements OnInit {
  @Input() filteredVehicles: Vehicle[];
  @Input() filters: VehicleFilters;
  @Input() priceRange: Number[];

  constructor() { }

  ngOnInit(): void {
  }

}

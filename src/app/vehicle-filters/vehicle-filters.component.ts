import { Component, OnInit, Input } from '@angular/core';
import { VehicleFilters } from '../models/vehicleFilters';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-vehicle-filters',
  templateUrl: './vehicle-filters.component.html',
  styleUrls: ['./vehicle-filters.component.scss']
})
export class VehicleFiltersComponent {
  @Input() filteredVehicles: Vehicle[];
  @Input() filters: VehicleFilters = {sort:null, min:0, max:Infinity, query:null};
  @Input() priceRange: Number[] = [0, Infinity];
  @Input() disabled: boolean;

  constructor() { }

}

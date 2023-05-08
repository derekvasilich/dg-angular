import { Component, OnInit } from '@angular/core'
import { Vehicle } from '../models/vehicle'
import { VehiclesService } from '../service/vehicles.service'
import { Router } from '@angular/router'
import { VehicleFilters } from '../models/vehicleFilters'

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit {
  public currentPage: number = 0;
  public pageSize: number = 100;
  public vehicles: Vehicle[];
  public totalPages: number = 0;
  public filters: VehicleFilters = {
    sort: "",
    min: 0,
    max: Infinity,
    query: "",
  };

  constructor(
    private router: Router,
    private vehicleService: VehiclesService,
  ) {

  }

  get filteredVehicles(): Vehicle[] {    
    if (
      typeof this.vehicles?.map !== "function"
    ) {
      return [];
    }
    let filtered = this.vehicles.filter((vehicle) => {
      !vehicle.name && (vehicle.name = "");
      !vehicle.price && (vehicle.price = 0);
      if (vehicle.price < this.filters.min) {
        return false;
      }
      if (vehicle.price > this.filters.max) {
        return false;
      }
      if (
        typeof this.filters.query !== "undefined" &&
        vehicle.name.indexOf(this.filters.query) === -1
      ) {
        return false;
      }
      return true;
    });
    if (typeof this.filters.sort !== "undefined") {
      filtered.sort((a, b) => {
        switch (this.filters.sort) {
          case "price":
            return a.price - b.price;
          case "name":
            return a.name.localeCompare(b.name);
          case "vin":
            return a.vin.localeCompare(b.vin);
          default:
            return a.id - b.id;
        }
      });
    }
    return filtered;
  }

  get priceRange(): number[] {
    if (
      typeof this.vehicles?.reduce != "function"
    ) {
      return [0, Infinity];
    }
    return this.vehicles.reduce(
      (acc, vehicle) => {
        !vehicle.price && (vehicle.price = 0);
        acc[0] = vehicle.price < acc[0] ? vehicle.price : acc[0];
        acc[1] = vehicle.price > acc[1] ? vehicle.price : acc[1];
        return acc;
      },
      [Infinity, 0]
    );    
  }

  fetchVehicles() {
    this.vehicleService.getVehicles(this.currentPage, this.pageSize)
      .subscribe(data => {
        this.vehicles = data.content
        this.totalPages = data.totalPages
      }, error => {
        this.router.navigate(['error']);
      })    
  }

  onPageChange(page: number) {
    this.currentPage = page
    this.fetchVehicles();
  }

  ngOnInit(): void {
    this.fetchVehicles();
  }

}

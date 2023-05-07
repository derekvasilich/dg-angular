import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { Observable } from 'rxjs'
import { Vehicle } from '../models/vehicle'
import { VehiclesService } from '../service/vehicles.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit {
  currentPage: number = 0;
  pageSize: number = 10;

  constructor(
    private router: Router,
    private vehicleService: VehiclesService
  ) { }

  // proped in
  vehicles: Vehicle[]

  fetchVehicles() {
    this.vehicleService.getVehicles(this.currentPage, this.pageSize)
      .subscribe(data => this.vehicles = data.content, error => {
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

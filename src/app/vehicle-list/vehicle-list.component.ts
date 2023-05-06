import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Vehicle } from '../vehicle'
import { VehiclesService } from '../vehicles.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  constructor(
    private router: Router,
    private vehicleService: VehiclesService
  ) { }

  // proped in
  vehicles: Vehicle[]

  ngOnInit(): void {
    this.vehicleService.getVehicles()
      .subscribe(vehicles => this.vehicles = vehicles, error => {
        this.router.navigate(['error']);
      })
  }

}

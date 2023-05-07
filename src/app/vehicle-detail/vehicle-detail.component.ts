import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../service/vehicles.service'
import { Vehicle } from '../models/vehicle';
import { Observable } from 'rxjs'
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private vehiclesService: VehiclesService
  ) { }

  vehicle: Vehicle;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const vehicleId = Number(routeParams.get('vehicleId'));
    this.vehiclesService.findById(vehicleId)
      .subscribe(vehicle => this.vehicle = vehicle)
  }

}

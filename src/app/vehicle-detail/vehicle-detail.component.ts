import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../service/vehicles.service'
import { Vehicle } from '../models/vehicle';
import { isEmpty } from 'lodash';

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

  get vehicleImages(): any[] {
    let stockImages = [];
    if (this.vehicle?.description?.description?.style) {
      let styles = !isEmpty(this.vehicle?.description?.description?.style[0])
        ? this.vehicle?.description?.description?.style
        : [this.vehicle?.description?.description?.style];
      stockImages = styles.map((style) => {
        return {
          ...style.stockImage,
          alt: this.vehicle.name || `${style.division._} ${style.model._} ${style.name}`,
        };
      });
    }
    return stockImages;
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const vehicleId = Number(routeParams.get('vehicleId'));
    this.vehiclesService.findById(vehicleId)
      .subscribe(vehicle => this.vehicle = vehicle)
  }

}

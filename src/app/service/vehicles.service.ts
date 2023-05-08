import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Page } from '../models/page';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class VehiclesService {
  constructor(
    private http: HttpClient
  ) { }

  getHeaders(): HttpHeaders {
    let token: String = sessionStorage.getItem("jwt:token");
    return (new HttpHeaders()).append("Authorization", "Bearer "+token);
  }

  getVehicles(page: Number, size: Number) {
    return this.http.get<Page<Vehicle>>(`${environment.apiBaseUrl}/vehicles/paginated?page=${page}&size=${size}`, { 
      headers: this.getHeaders() 
    })
  }

  findById(vehicleId: number) {
    return this.http.get<Vehicle>(`${environment.apiBaseUrl}/vehicles/${vehicleId}`, { 
      headers: this.getHeaders() 
    })
  }

}

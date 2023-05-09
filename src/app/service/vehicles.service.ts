import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Page } from '../models/page';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class VehiclesService {
  private _isLoading = new BehaviorSubject<boolean>(false);
  private _isError = new BehaviorSubject<any | null>(null);
  isLoading$ = this._isLoading.asObservable();
  isError$ = this._isError.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getHeaders(): HttpHeaders {
    let token: String = sessionStorage.getItem("jwt:token");
    return (new HttpHeaders()).append("Authorization", "Bearer "+token);
  }

  getVehicles(page: Number, size: Number) {
    this._isLoading.next(true);
    this._isError.next(null);
    return this.http.get<Page<Vehicle>>(`${environment.apiBaseUrl}/vehicles/paginated?page=${page}&size=${size}`, { 
      headers: this.getHeaders() 
    }).pipe(
      catchError(err => {
        console.log('error', err);
        this._isError.next(err);
        return [];
      }),
      finalize(() => {
        console.log('Finalize')
        this._isLoading.next(false)
      })
    );
  }

  findById(vehicleId: number) {
    this._isLoading.next(true);
    this._isError.next(null);
    return this.http.get<Vehicle>(`${environment.apiBaseUrl}/vehicles/${vehicleId}`, { 
      headers: this.getHeaders() 
    }).pipe(
      catchError(err => {
        this._isError.next(err);
        return [];
      }),
      finalize(() => this._isLoading.next(false))
    )
  }

}

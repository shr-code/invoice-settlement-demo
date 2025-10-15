import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl = environment.apiBaseUrl;

  constructor() { }
  http = inject(HttpClient)

  // Payments
  getPayments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/payments/`);
  }

  createPayment(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/payments/`, data);
  }
}

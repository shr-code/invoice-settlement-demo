import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiBaseUrl;

  constructor() {}
  http = inject(HttpClient)

  // Invoices
  getInvoices(): Observable<any> {
    return this.http.get(`${this.baseUrl}/invoices/`);
  }

  createInvoice(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/invoices/`, data);
  }

  // Payments
  getPayments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/payments/`);
  }

  createPayment(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/payments/`, data);
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  public baseUrl = environment.apiBaseUrl;
  
  constructor() { }
  http = inject(HttpClient)

  // Invoices
  getInvoices(): Observable<any> {
    return this.http.get(`${this.baseUrl}/invoices/`);
  }

  createInvoice(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/invoices/`, data);
  }

}

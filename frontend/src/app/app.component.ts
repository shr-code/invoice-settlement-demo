import { Component,inject,OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [ CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  invoices: any[] = [];
  payments: any[] = [];

  constructor() {}
  api = inject(ApiService)

  ngOnInit() {
    this.loadInvoices();
    this.loadPayments();
  }

  loadInvoices() {
    this.api.getInvoices().subscribe(res => {
      console.log('Invoices loaded:', res);
      this.invoices = res;
    });
  }

  loadPayments() {
    this.api.getPayments().subscribe(res => {
      console.log('Payments loaded:', res);
      this.payments = res;
    });
  }

  addInvoice() {
    const data = {
      user_id: 2,
      amount: 50,
      status: 'Pending',
    };
    this.api.createInvoice(data).subscribe(res => this.loadInvoices());
  }

  addPayment() {
    const data = { invoice_id: 1, amount: 100, payment_reference: 'PAY123' };
    this.api.createPayment(data).subscribe(res => this.loadPayments());
  }
  
}

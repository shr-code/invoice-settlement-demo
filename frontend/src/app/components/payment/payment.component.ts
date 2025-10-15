import { Component, inject, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment/payment.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-payment',
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit {
payments: any[] = [];

  constructor() {}

  api = inject(PaymentService)

  ngOnInit() {
    this.loadPayments();
  }

  loadPayments() {
    this.api.getPayments().subscribe(res => {
      console.log('Payments loaded:', res);
      this.payments = res;
    });
  }

  addPayment() {
    const data = { invoice_id: 1, amount: 100, payment_reference: 'PAY123' };
    this.api.createPayment(data).subscribe(res => this.loadPayments());
  }
}

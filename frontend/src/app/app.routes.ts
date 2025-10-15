import { Routes } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { PaymentComponent } from './components/payment/payment.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'invoice',
  pathMatch: 'full'
}, {
  path: 'invoice',
  component: InvoiceComponent
}, {
  path: 'payment',
  component: PaymentComponent
}, {
  path: 'receipt',
  component: InvoiceComponent // Placeholder for future ReceiptComponent
}, {
  path: '**',
  redirectTo: 'invoice' //fallback to invoice for unknown paths
}];

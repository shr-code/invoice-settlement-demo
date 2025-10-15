import { Routes } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'invoice',
  pathMatch: 'full'
}, {
  path: 'invoice',
  component: InvoiceComponent
}, {
  path: 'payment',
  loadComponent: () => import('./components/payment/payment.component').then(m => m.PaymentComponent)
}, {
  path: 'receipt',
  loadComponent: () => import('./components/receipt/receipt.component').then(m => m.ReceiptComponent)
}, {
  path: '**',
  redirectTo: 'invoice' //fallback to invoice for unknown paths
}];

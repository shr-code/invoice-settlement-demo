import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { InvoiceService } from '../../services/invoice/invoice.service';
import { CommonModule } from '@angular/common';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { themeBalham } from 'ag-grid-community';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-invoice',
  imports: [AgGridAngular, CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {

  constructor(private dialog: MatDialog) { }

  openInvoiceDialog() {
    const dialogRef = this.dialog.open(InvoiceDialogComponent,
      { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadInvoices(); // Reload invoices if dialog was closed with a positive result
      }
    });
  }

  public theme = themeBalham;
;
  public paginationPageSizeSelector: number[] | boolean = [5, 7, 10];
  columnDefs = [
    { checkboxSelection: true, headerCheckboxSelection: true, maxWidth: 30},
    { headerName: 'Invoice ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Amount', field: 'amount', sortable: true, filter: true },
    { headerName: 'Status', field: 'status', sortable: true, filter: true },
    { headerName: 'Created At', field: 'created_at', sortable: true, filter: true },
    { headerName: 'Total Paid', field: 'total_paid', sortable: true, filter: true },
    { headerName: 'Balance', field: 'balance', sortable: true, filter: true },
  ];

  defaultColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
  };

  api = inject(InvoiceService)
  invoices: any[] = [];

  ngOnInit() {
    this.loadInvoices();
  }


  loadInvoices() {
    this.api.getInvoices().subscribe(res => {
      console.log('Invoices loaded:', res);
      this.invoices = res;
    });
  }
}

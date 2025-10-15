import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from '../../services/invoice/invoice.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent } from '@angular/material/dialog';
import { MatDialogTitle } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';


@Component({
  selector: 'app-invoice-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions
  ],
  templateUrl: './invoice-dialog.component.html',
  styleUrl: './invoice-dialog.component.scss'
})
export class InvoiceDialogComponent {

  invoiceForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private dialogRef: MatDialogRef<InvoiceDialogComponent>
  ) {
    this.invoiceForm = this.fb.group({
      user_id: [null, Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      status: ['Pending', Validators.required]
    });
  }

  submit() {
    if (this.invoiceForm.valid) {
      console.log('Invoice data:', this.invoiceForm.value);
      this.invoiceService.createInvoice(this.invoiceForm.value).subscribe({
        next: (response) => {
          console.log('Invoice created successfully:', response);
          this.dialogRef.close(true);
        },
        error: (error) => {
          console.error('Error creating invoice:', error);
        }
      });
    }
  }
  close() {
    this.dialogRef.close();
  }
}

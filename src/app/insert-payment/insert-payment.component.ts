import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-insert-payment',
  templateUrl: './insert-payment.component.html',
  styleUrls: ['./insert-payment.component.css']
})
export class InsertPaymentComponent implements OnInit {

  CardOwnerName = new FormControl('', [Validators.required]);
  CardNumber = new FormControl('', [Validators.required]);
  ExpirationDate = new FormControl('', [Validators.required]);
  PaidAt = new FormControl('', [Validators.required]);
  SecurityCode = new FormControl('', [Validators.required]);
  Amount = new FormControl('', [Validators.required]);

  getErrorMessageCON() {
    return this.CardOwnerName.hasError('required') ? 'you must enter a value' : ''
  }

  getErrorMessageCN() {
    return this.CardNumber.hasError('required') ? 'you must enter a value' : ''
  }

  getErrorMessageED() {
    return this.ExpirationDate.hasError('required') ? 'you must enter a value' : ''
  }

  getErrorMessagePA() {
    return this.PaidAt.hasError('required') ? 'you must enter a value' : ''
  }

  getErrorMessageSC() {
    return this.SecurityCode.hasError('required') ? 'you must enter a value' : ''
  }

  getErrorMessageAmount() {
    return this.Amount.hasError('required') ? 'you must enter a value' : ''
  }

  onNoClick(): void {
    this.dialogRef.close();

  }

  constructor(public dialogRef: MatDialogRef<InsertPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}

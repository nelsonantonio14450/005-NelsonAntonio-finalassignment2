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
  CardNumber = new FormControl('', [Validators.required, Validators.maxLength(16), Validators.pattern('[0-9]*')]);
  ExpirationDate = new FormControl('', [Validators.required]);
  PaidAt = new FormControl('', [Validators.required]);
  SecurityCode = new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern('[0-9]*')]);
  Amount = new FormControl('', [Validators.required]);

  getErrorMessageCON() {
    return this.CardOwnerName.hasError('required') ? 'you must enter a value' : ''
  }

  getErrorMessageCN() {
    return this.CardNumber.hasError('required') ? 'you must enter a value' :
      this.CardNumber.hasError('maxlength') ? 'max 16' :
        this.CardNumber.hasError('pattern') ? 'only number is acceptable' : ''
  }

  getErrorMessageED() {
    return this.ExpirationDate.hasError('required') ? 'you must enter a value' : ''
  }

  getErrorMessagePA() {
    return this.PaidAt.hasError('required') ? 'you must enter a value' : ''
  }

  getErrorMessageSC() {
    return this.SecurityCode.hasError('required') ? 'you must enter a value' :
      this.SecurityCode.hasError('maxlength') ? 'max 3' :
        this.SecurityCode.hasError('pattern') ? 'only number is acceptable' : ''
  }

  getErrorMessageAmount() {
    return this.Amount.hasError('required') ? 'you must enter a value' :
      this.Amount.hasError('max') ? 'Max: 999,999,999' : ''
  }

  onNoClick(): void {
    this.dialogRef.close();

  }

  constructor(public dialogRef: MatDialogRef<InsertPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}

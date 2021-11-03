import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-payment',
  templateUrl: './delete-payment.component.html',
  styleUrls: ['./delete-payment.component.css']
})
export class DeletePaymentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletePaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  onNoClick(): void {
    this.dialogRef.close();

  }

  ngOnInit(): void {
  }

}

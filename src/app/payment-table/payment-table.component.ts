import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentServiceService } from '../payment-service.service';
import { InsertPaymentComponent } from '../insert-payment/insert-payment.component';
import { UpdatePaymentComponent } from '../update-payment/update-payment.component';
import { DeletePaymentComponent } from '../delete-payment/delete-payment.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css']
})
export class PaymentTableComponent implements OnInit {

  obj: any;
  updobj!: {};
  test: any

  constructor(public dialog: MatDialog, private payment: PaymentServiceService) { }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
    };
    this.payment.getPayment()
      .subscribe(data => {
        this.test = data;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });


    // this.payment.getPayment().subscribe(x => {
    //   this.test = x
    // })

    // this.dtOptions = {
    //   pagingType: 'full_numbers'
    // };
  }

  //insert dialogue
  openDialog(): void {
    const dialogRef = this.dialog.open(InsertPaymentComponent, {
      width: '550px',
      data: {}


    });

    dialogRef.afterClosed().subscribe(result => {//insert beres
      if (result) {
        this.obj = {
          cardOwnerName: result.CardOwnerName,
          cardNumber: result.CardNumber,
          expirationDate: result.ExpirationDate,
          paidAt: result.PaidAt,
          securityCode: result.SecurityCode,
          amount: result.Amount
        }

        this.payment.postPayment(this.obj).subscribe(x => location.reload())
      }
    });
  }

  openDialogUpd(id: number): void {
    let tester: any
    this.payment.getPaymentbyID(id).subscribe(x => {
      tester = x
      this.obj = { //obj dummy bwt value ke form
        id: tester['paymentDetailId'],
        CardOwnerName: tester['cardOwnerName'],
        CardNumber: tester['cardNumber'],
        ExpirationDate: tester['expirationDate'],
        PaidAt: tester['paidAt'],
        SecurityCode: tester['securityCode'],
        Amount: tester['amount']
      }


      const dialogRef = this.dialog.open(UpdatePaymentComponent, {
        width: '550px',
        data: this.obj //data 2 arah
      });

      dialogRef.afterClosed().subscribe(result => {

        if (result) {
          //update didalam
          this.updobj = { //ini gk perlu karna obj udh 2 arah transfernya
            paymentDetailId: result.id,
            cardOwnerName: result.CardOwnerName,
            cardNumber: result.CardNumber,
            expirationDate: result.ExpirationDate,
            paidAt: result.PaidAt,
            securityCode: result.SecurityCode,
            amount: result.Amount
          }

          this.payment.putPayment(this.updobj, result.id).subscribe(x => location.reload())//ini udh bs
        }
      });
    })


  }


  openDeleteDialog(id: number): void {
    let tester: any
    this.payment.getPaymentbyID(id).subscribe(x => {
      tester = x
      this.obj = { //obj dummy bwt value ke form
        id: tester['paymentDetailId'],
        CardOwnerName: tester['cardOwnerName'],
        CardNumber: tester['cardNumber'],
        ExpirationDate: tester['expirationDate'],
        PaidAt: tester['paidAt'],
        SecurityCode: tester['securityCode'],
        Amount: tester['amount']
      }


      const dialogRef = this.dialog.open(DeletePaymentComponent, {
        width: '550px',
        data: this.obj //data 2 arah
      });

      dialogRef.afterClosed().subscribe(result => {//insert beres
        if (result) {
          id = result.id
          this.payment.delPayment(id).subscribe(x => location.reload())
        }
      });
    }
    )
  }
}

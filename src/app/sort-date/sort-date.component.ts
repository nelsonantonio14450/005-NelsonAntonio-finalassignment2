import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentServiceService } from '../payment-service.service';

@Component({
  selector: 'app-sort-date',
  templateUrl: './sort-date.component.html',
  styleUrls: ['./sort-date.component.css']
})
export class SortDateComponent implements OnInit {

  constructor(private payment: PaymentServiceService) { }
  test: any
  ngOnInit(): void {
    this.payment.getPayment().subscribe(x => {
      this.test = x
    })
  }

  ExpDate1: any
  ExpDate1C = new FormControl('');
  ExpDate2: any
  ExpDate2C = new FormControl('');

  PaidDate1: any
  PaidDate1C = new FormControl('');
  PaidDate2: any
  PaidDate2C = new FormControl('');

  Amount1: any
  Amount1C = new FormControl('');
  Amount2: any
  Amount2C = new FormControl('');

  refresh() {
    this.payment.getPayment().subscribe(x => {
      this.test = x
    })
    this.selected = 0
  }

  selected: any

  searchExpfunc() {
    if (this.ExpDate1 && this.ExpDate2 && this.selected == 1) {
      this.payment.getBetweenExpDate(this.ExpDate1, this.ExpDate2).subscribe(x => {
        this.test = x
      })
    }
    else if (this.ExpDate1 && this.selected == 1) {
      this.payment.getMoreExpDate(this.ExpDate1).subscribe(x => {
        this.test = x
      })
    }
    else if (this.ExpDate2 && this.selected == 1) {
      this.payment.getLessExpDate(this.ExpDate2).subscribe(x => {
        this.test = x
      })
    }
  }

  searchPaidfunc() {
    if (this.PaidDate1 && this.PaidDate2 && this.selected == 2) {
      this.payment.getBetweenPaidDate(this.PaidDate1, this.PaidDate2).subscribe(x => {
        this.test = x
      })
    }
    else if (this.PaidDate1 && this.selected == 2) {
      this.payment.getMorePaidDate(this.PaidDate1).subscribe(x => {
        this.test = x
      })
    }
    else if (this.PaidDate2 && this.selected == 2) {
      this.payment.getLessPaidDate(this.PaidDate2).subscribe(x => {
        this.test = x
      })
    }
  }

  searchAmount() {
    if (this.Amount1 && this.Amount2 && this.selected == 3) {
      this.payment.getByAmount(this.Amount1, this.Amount2).subscribe(x => {
        this.test = x
      })
    }
  }
}

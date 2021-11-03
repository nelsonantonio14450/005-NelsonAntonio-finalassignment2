import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {
  endpoint: string = 'https://nelsonfinalassignment1.herokuapp.com/api/payment'

  //priority
  getPayment() {
    const api = `${this.endpoint}`
    return this.http.get(api)
  }

  getPaymentbyID(id: number): Observable<any[]> {
    const api = `${this.endpoint}/${id}`
    return this.http.get<any[]>(api)
  }

  postPayment(Payment: any) {
    const api = `${this.endpoint}`
    return this.http.post(api, Payment)
  }

  putPayment(Payment: any, id: number) {
    const api = `${this.endpoint}/${id}`
    return this.http.put(api, Payment)
  }

  delPayment(id: number) {
    const api = `${this.endpoint}/${id}`
    return this.http.delete(api)
  }

  //amount

  getByAmount(d1: number, d2: number) {
    const api = `${this.endpoint}/GetByAmount/${d1}, ${d2}`
    return this.http.get(api)
  }

  //expdate

  getBetweenExpDate(d1: Date, d2: Date) {
    const api = `${this.endpoint}/GetExpDate/${d1}, ${d2}`
    return this.http.get(api)
  }

  getMoreExpDate(d1: Date) {
    const api = `${this.endpoint}/MoreExpDate/${d1}`
    return this.http.get(api)
  }

  getLessExpDate(d1: Date) {
    const api = `${this.endpoint}/LessExpDate/${d1}`
    return this.http.get(api)
  }

  //Paiddate

  getBetweenPaidDate(d1: Date, d2: Date) {
    const api = `${this.endpoint}/GetDate/${d1}, ${d2}`
    return this.http.get(api)
  }

  getMorePaidDate(d1: Date) {
    const api = `${this.endpoint}/MoreDate/${d1}`
    return this.http.get(api)
  }

  getLessPaidDate(d1: Date) {
    const api = `${this.endpoint}/LessDate/${d1}`
    return this.http.get(api)
  }


  constructor(private http: HttpClient) { }
}

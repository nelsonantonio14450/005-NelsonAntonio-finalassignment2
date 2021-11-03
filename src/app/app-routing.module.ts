import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentTableComponent } from './payment-table/payment-table.component';
import { SortDateComponent } from './sort-date/sort-date.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PaymentTableComponent },
  { path: 'date', component: SortDateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

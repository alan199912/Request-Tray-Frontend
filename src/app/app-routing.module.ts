import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyCreditComponent } from './pages/apply-credit/apply-credit.component';
import { CreditInfoComponent } from './pages/credit-info/credit-info.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'credit-info/:id', component: CreditInfoComponent },
  { path: 'apply-credit', component: ApplyCreditComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

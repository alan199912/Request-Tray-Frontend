import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public users: any;
  public status: string;
  public defaulter: number;
  constructor(
    private readonly creditService: CreditService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.creditService.getCredits().subscribe((data: any) => {
      this.users = data;
    });
  }

  public seeRequest(id: number): void {
    this.router.navigate([`credit-info/${id}`]);
  }
}

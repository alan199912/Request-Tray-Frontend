import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-credit-info',
  templateUrl: './credit-info.component.html',
  styleUrls: ['./credit-info.component.scss'],
})
export class CreditInfoComponent implements OnInit {
  public user: any;

  constructor(
    private readonly creditService: CreditService,
    private readonly activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;
    this.creditService.getCredit(id).subscribe((data) => {
      this.user = data;
    });
  }

  public acceptCredit(id: string): void {
    const user = this.user;
    user.status = 1;
    this.creditService
      .updateCredit(id, user)
      .subscribe((data) => console.log(data));
  }

  public denyCredit(id: string): void {
    const user = this.user;
    user.status = 2;
    this.creditService
      .updateCredit(id, user)
      .subscribe((data) => console.log(data));
  }
}

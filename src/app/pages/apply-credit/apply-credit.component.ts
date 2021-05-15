import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-apply-credit',
  templateUrl: './apply-credit.component.html',
  styleUrls: ['./apply-credit.component.scss'],
})
export class ApplyCreditComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private creditService: CreditService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      salary: ['', Validators.required],
      credit: ['', Validators.required],
      creditDescription: ['', Validators.required],
    });
  }

  public addCredit(): void {
    if (this.form.invalid) {
      return;
    }

    this.creditService.addCredit(this.form.value).subscribe();
    this.router.navigate(['/']);
  }
}

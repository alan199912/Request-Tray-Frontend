import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CreditService {
  private url = environment.baseUrl;

  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(private readonly http: HttpClient) {}

  public getCredits(): Observable<any> {
    return this.http.get(`${this.url}/credits/`, {
      headers: this.httpHeaders,
    });
  }

  public getCredit(id: string): Observable<any> {
    return this.http.get(`${this.url}/credit-info/${id}`, {
      headers: this.httpHeaders,
    });
  }

  public addCredit(body: any): Observable<any> {
    return this.http.post(`${this.url}/apply-credit/`, body, {
      headers: this.httpHeaders,
    });
  }

  public updateCredit(id: string, body: any): Observable<any> {
    return this.http.put(`${this.url}/update-credit/${id}`, body, {
      headers: this.httpHeaders,
    });
  }
}

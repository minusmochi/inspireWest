import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Quote } from './models/quote';

@Injectable({
  providedIn: 'root'
})
export class InspirationService {

  constructor(private http: HttpClient) { }

  get():Observable<Quote> {
    return this.http
      .get<Quote>(environment.apiUrl);
  }
}



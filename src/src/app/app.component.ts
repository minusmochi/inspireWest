import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspirationService } from './inspiration.service';
import { Quote } from './models/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inspiration: Observable<Quote>
  constructor(private inspirationService: InspirationService) {

  }

  ngOnInit(): void {
    this.getInspiration();
  }

  getInspiration() {
    this.inspiration = this.inspirationService
      .get();
  }
}

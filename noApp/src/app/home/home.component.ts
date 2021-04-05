import { Component, OnInit } from '@angular/core';
import { Quote } from '../types';
import { QuoteService } from './quote.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  quotes: Quote[];

  constructor(
    private quoteService: QuoteService
  ) { }

  ngOnInit(): void {
    this.quotes = this.quoteService.getQuotes();
  }

}

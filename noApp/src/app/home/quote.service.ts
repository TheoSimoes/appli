import { Injectable } from '@angular/core';
import { Quote } from '../model';


@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }

  getQuotes(): Quote[] {
    // TODO : retrieve from database, for now using testing data
    return [
      {
        quote: "test",
        language: "français",
        owner: {
          username: "g",
          mail: "g@g.fr",
          password: "ggg"
        },
        favoritedTimes: 1,
        userFav: [
          {
            username: "g",
            mail: "g@g.fr",
            password: "ggg"
          }
        ],
      } 
    ]
  }
}

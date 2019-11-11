import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
// import {CreateCard} from '../models/createCard.model';
import {CardModel} from '../models/card.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  loadedCards: CardModel[] = [];

  constructor(private http: HttpClient) { }

  createCard(cardData: CardModel) {
   return this.http.post<{name: string}>('https://fileserverproject-1e496.firebaseio.com/files.json', cardData);
  }

  getCards() {
     this.http.get<{[key: string]: CardModel}>('https://fileserverproject-1e496.firebaseio.com/files.json')
      .pipe(map(response => {
        const responseArray = this.loadedCards;
        for (const key in response) {
          // This checks to see if there is a response, and that it never exceeds the response length.
          // Without checking the length of the response there's a pretty bad memory leak.
          if (response.hasOwnProperty(key) && this.loadedCards.length <= Object.keys(response).length - 1) {
            responseArray.push({...response[key], id: key});
          }
        }
        console.log(response);
        console.log(this.loadedCards);
        return responseArray;
      })).subscribe();
  }
}

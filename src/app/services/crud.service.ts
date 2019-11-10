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
    return this.http.get<{[key: string]: CardModel}>('https://fileserverproject-1e496.firebaseio.com/files.json')
      .pipe(map(response => {
        const responseArray = this.loadedCards;
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            responseArray.push({...response[key], id: key});
          }
        }
        return responseArray;
      }));
  }
}

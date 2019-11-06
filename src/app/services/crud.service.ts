import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {CreateCard} from '../models/createCard.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  loadedCards: CreateCard[] = [];
  constructor(private http: HttpClient) { }

  createCard(cardData: CreateCard) {
    this.http.post<{name: string}>('https://fileserverproject-1e496.firebaseio.com/files.json', cardData)
      .subscribe(response => {
        console.log(`Response ${response}`);
      });
    console.log(`Card Data: ${cardData}`);
  }

  getCards() {
    this.http.get<{[key: string]: CreateCard}>('https://fileserverproject-1e496.firebaseio.com/files.json')
      .pipe(map(response => {
        const responseArray: CreateCard[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            responseArray.push({...response[key], id: key});
          }
        }
        return responseArray;
      }))
      .subscribe(response => {
        this.loadedCards = response;
      });
  }
}

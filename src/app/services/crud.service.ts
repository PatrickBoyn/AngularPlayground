import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  createCard(cardData: { fileTitle: string, filePath: string}) {
    this.http.post('https://fileserverproject-1e496.firebaseio.com/files.json', cardData)
      .subscribe(response => {
        console.log(`Response ${response}`);
      });
    console.log(`Card Data: ${cardData}`);
  }

  getCards() {
    this.http.get('https://fileserverproject-1e496.firebaseio.com/files.json')
      .pipe(map(response => {
        const responseArray = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            responseArray.push({...response[key], id: key});
          }
        }
        return responseArray;
      }))
      .subscribe(response => {
        console.log(response);
      });
  }
}

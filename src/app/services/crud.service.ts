import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
}

import { Injectable } from '@angular/core';
import { CardModel } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
 private cards: CardModel[] = [

   // The file names are meaningless.
    new CardModel(1,  'AA1.mp4', 'C:\\Users\\dakil\\Desktop\\Extras'),
    new CardModel(2,  'AA2.mp4', 'C:\\Users\\dakil\\Desktop\\Extras'),
    new CardModel(3,  'AA4.mp4', 'C:\\Users\\dakil\\Desktop\\Extras'),
    new CardModel(4,  'AF.mp4', 'C:\\Users\\dakil\\Desktop\\Extras')
  ];
  constructor() { }

  getCards(): CardModel[] {
    return this.cards.slice();
  }

  getCard(id: number): CardModel  {
    console.log(`ID is: ${id}`);
    return this.cards[id];
  }
}

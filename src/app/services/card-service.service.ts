import { Injectable } from '@angular/core';
import { CardModel } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
 private cards: CardModel[] = [
    new CardModel(1, 'Image Path', 'AA1.mp4', 'C:\\Users\\dakil\\Desktop\\Extras'),
    new CardModel(2, 'Image path', 'AA2.mp4', 'C:\\Users\\dakil\\Desktop\\Extras'),
    new CardModel(3, 'Image path', 'AA4.mp4', 'C:\\Users\\dakil\\Desktop\\Extras'),
    new CardModel(4, 'Image path', 'AF.mp4', 'C:\\Users\\dakil\\Desktop\\Extras')
  ];
  constructor() { }

  getCards(): CardModel[] {
    return this.cards;
  }

  getCard(id: number)  {
    const card = this.cards.find(
      c => {
        return c.id === id;
      }
    );
  }
}

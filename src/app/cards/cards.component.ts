import {Component, OnInit, Output} from '@angular/core';
import {CardModel} from '../models/card.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Output() cards: CardModel[] = [
    new CardModel(1, 'Image Path', 'AA1.mp4', 'C:\\Users\\dakil\\Desktop\\Extras'),
    new CardModel(2, 'Image path', 'AA2.mp4', 'C:\\Users\\dakil\\Desktop\\Extras'),
    new CardModel(3, 'Image path', 'AA4.mp4', 'C:\\Users\\dakil\\Desktop\\Extras'),
    new CardModel(4, 'Image path', 'AF.mp4', 'C:\\Users\\dakil\\Desktop\\Extras')
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadCard(id: number) {
    this.router.navigate(['/browseFiles', id]);
  }

}

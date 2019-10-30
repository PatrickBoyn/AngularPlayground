import {Component, OnInit, Output} from '@angular/core';
import {CardModel} from '../models/card.model';
import {ActivatedRoute, Params} from '@angular/router';
import {CardService} from '../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Output()cards: CardModel[];

  constructor(private route: ActivatedRoute, private cardService: CardService) {}

  ngOnInit() {
    console.log(this.cardService.getCards()[0].fileTitle);
    this.route.params.subscribe((params: Params) => {
        this.cards = this.cardService.getCards();
    });
  }
}

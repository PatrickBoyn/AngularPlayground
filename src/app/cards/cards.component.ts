import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CardModel} from '../models/card.model';
import {ActivatedRoute, Params} from '@angular/router';
import {CardService} from '../services/card.service';
import {CrudService} from '../services/crud.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnDestroy {
  @Output() card: Subscription;
  @Output() cardList: CardModel[];

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.cardList = this.crudService.loadedCards;
    if (this.cardList.length === 0) {
      this.card = this.crudService.getCards().subscribe();
    }
  }

  ngOnDestroy() {
    this.card.unsubscribe();
  }
}

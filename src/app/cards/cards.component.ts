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
export class CardsComponent implements OnInit {
  @Output() card: any;
  @Output() cardList: CardModel[];

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.card = this.crudService.getCards();
    this.cardList = this.crudService.loadedCards;
  }
}

import {Component, Input, OnInit, Output} from '@angular/core';
import {CardModel} from '../models/card.model';
import {ActivatedRoute, Params} from '@angular/router';
import {CardService} from '../services/card.service';
import {CrudService} from '../services/crud.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input()cards: any;

  constructor(private route: ActivatedRoute, private crudService: CrudService) {}

  ngOnInit() {
    this.cards = this.crudService.loadedCards;
  }
}

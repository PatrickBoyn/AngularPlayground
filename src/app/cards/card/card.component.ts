import {Component, OnInit, Input, Output} from '@angular/core';
import { CardModel } from '../../models/card.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CrudService} from '../../services/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 @Input() card: any;
 @Input() id: number;

  constructor(private route: ActivatedRoute, private crudService: CrudService) { }

  ngOnInit() {
    this.card = this.crudService.loadedCards;
  }
}

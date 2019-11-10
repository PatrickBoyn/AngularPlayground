import {Component, OnInit, Input, Output, OnDestroy} from '@angular/core';
import { CardModel } from '../../models/card.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CrudService} from '../../services/crud.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() card;
  constructor(private route: ActivatedRoute, private crudService: CrudService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}

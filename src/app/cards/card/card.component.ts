import {Component, Input, OnInit} from '@angular/core';
import { CardModel } from '../../models/card.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 @Input() card: CardModel;
 cardDetails: {id: any};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params[+this.card.id]);
    this.cardDetails = {
      id: this.route.params[+this.card.id]
    };
  }
}

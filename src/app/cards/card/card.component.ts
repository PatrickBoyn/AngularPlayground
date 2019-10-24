import {Component, OnInit, Input, Output} from '@angular/core';
import { CardModel } from '../../models/card.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { CardService } from '../../services/card.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 @Output() card: CardModel;
 @Input() id: number;

  constructor(private route: ActivatedRoute, private cardService: CardService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
          this.id = +params[this.card.id];
          this.card = this.cardService.getCard(this.id);
          console.log(this.card.id);
      });
  }

  onClickCard() {
    this.router.navigate(['browse-files', +this.card.id]);
  }
}

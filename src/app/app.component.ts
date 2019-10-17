import {Component, Output} from '@angular/core';
import {CardModel} from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Output() cards: CardModel[] = [
  //   new CardModel('Image Path', 'AA1.mp4', 'C:\\Users\\dakil\\Desktop\\Extras'),
  //   new CardModel('Image path', 'AA2.mp4', 'C:\\Users\\dakil\\Desktop\\Extras'),
  //   new CardModel('Image path', 'AA4.mp4', 'C:\\Users\\dakil\\Desktop\\Extras'),
  //   new CardModel('Image path', 'AF.mp4', 'C:\\Users\\dakil\\Desktop\\Extras')
  // ];
  title = 'angular-playground';
}

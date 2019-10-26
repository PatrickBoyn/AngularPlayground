import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: HTMLFormElement) {
    for (let i = 0; i <= (form[i] as HTMLFormElement).length; i++) {
      console.log((form[i] as HTMLFormElement).value);
    }
  }

}

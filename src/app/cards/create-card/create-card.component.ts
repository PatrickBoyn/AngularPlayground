import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../../services/crud.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  @ViewChild('form', {static: true}) form: NgForm;
  video = {
    imgPath: '',
    fileTitle: '',
    filePath: ''
  };
  isSubmitted = false;
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.getCards();
  }

  onCreateCard(postData: {fileTitle: string, filePath: string}) {
    console.log(this.crudService.createCard(postData)
      .subscribe(response => {
      console.log(`Response ${response}`);
    }));
  }

}

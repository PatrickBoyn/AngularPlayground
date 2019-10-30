import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  @ViewChild('form', {static: true}) form: NgForm;
  video: {
    imgPath: '',
    fileTitle: '',
    filePath: ''
  };
  isSubmitted = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.video.imgPath = (form as NgForm).value.imgPath;
    this.video.fileTitle = (form as NgForm).value.fileTitle;
    this.video.filePath = (form as NgForm).value.filePath;
    this.isSubmitted = true;
    console.log(form);
  }

}

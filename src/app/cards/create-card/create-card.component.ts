import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

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
  constructor() { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.video.imgPath = form.value.imagePath;
    this.video.fileTitle = form.value.fileTitle;
    this.video.filePath = form.value.filePath;
    this.isSubmitted = true;
  }

}

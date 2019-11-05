import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

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
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  onCreateCard(postData: {fileTitle: string, filePath: string}) {
    this.http.post('https://fileserverproject-1e496.firebaseio.com/files.json', postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}

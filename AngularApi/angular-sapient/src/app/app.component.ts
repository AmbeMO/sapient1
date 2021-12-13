import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-sapient';
  state: boolean = false;

  ngOnInit() {

  }

  isHide(isActive: boolean) {
    //
    // console.log(isActive)
    this.state = isActive;
  }
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-sapient';
  state: any

  ngOnInit() {

  }
  isHide(bool: any){
    console.log(bool)
    this.state = bool
}
}

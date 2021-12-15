import {Component, OnDestroy, OnInit} from '@angular/core';
import {state} from "@angular/animations";

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
  hideMenuBut(){
    this.state = true
  }
  showMenuBut(){
    this.state = false
  }
  isHide(isActive: boolean) {
    this.state = isActive;
  }
}

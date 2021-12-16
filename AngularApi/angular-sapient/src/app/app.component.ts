import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {state} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-sapient';
  state: boolean = false;

  menuState: boolean = false
  ngOnInit() {
  }
  hideMenuBut(){
    this.state = true
    this.menuState = true
    console.log(this.menuState)
  }
  showMenuBut(){
    this.state = false
    this.menuState = false
    console.log(this.menuState)
  }
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sapient';
  showAside: any;


  asideHide(isHide: any) {
    this.showAside = true
  }
}

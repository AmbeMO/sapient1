import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{

  ngOnInit() {
  }
  @Output() OnHide:EventEmitter<boolean> =  new EventEmitter();

  hide() {
    this.OnHide.emit(true)
  }

}

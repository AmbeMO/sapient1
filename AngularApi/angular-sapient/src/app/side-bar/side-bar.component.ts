import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  isHide! : boolean

  constructor() { }

  ngOnInit(): void {
    this.isHide = true;
  }
  hide() {
    this.isHide = ! this.isHide

  }

}

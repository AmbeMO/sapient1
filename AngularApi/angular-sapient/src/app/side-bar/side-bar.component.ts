import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  isHide : boolean = true;
  toggle : boolean = true

  constructor() { }

  ngOnInit(): void {
    this.isHide = true;
  }
  hide() {
    this.toggle = !this.toggle;
    this.isHide = ! this.isHide;

  }

}

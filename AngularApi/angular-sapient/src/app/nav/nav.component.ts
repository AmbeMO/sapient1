import {Component, DoCheck, OnInit} from '@angular/core';
import {User} from "../shared/interfaces";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, DoCheck {
  userData!: User;
  usArr = [];
  toggleMenu: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleSubMenu() {
    this.toggleMenu = !this.toggleMenu
  }

  defaultName() {
      return !this.userData ? 'John Smith' : ''
  }

  defaultRole() {
    return !this.userData ? 'user' : ''
  }
  // usually not needed
  // all work with local storage from service
  // this.userData = this.storageService.getByKey('User'));
  ngDoCheck() {
    this.userData = JSON.parse(<string>localStorage.getItem('User'));
  }
}



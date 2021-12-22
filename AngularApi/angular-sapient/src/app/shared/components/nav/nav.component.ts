import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/interfaces";
import {from, interval, map, observable, Observable, of, Subject, Subscription, pipe} from "rxjs";
import {UserService} from "../../services/user.service";
import {Observer} from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  userData!: User;
  toggleMenu: boolean = false;
  userName : any
  userRole : any = 'user'
  subscription: Subscription | undefined

  @Input() menuState : boolean = false
  constructor(private userService: UserService) {
  }

  ngOnInit() {
      this.userService.userName$.subscribe(name => {
      this.userName = name
    })

    this.userService.userRole$.subscribe(role => {
      this.userRole = role
    })

    this.userService.observer.subscribe(this.userService.userName$)
    this.userService.observerRole.subscribe(this.userService.userRole$)
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
}



import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/interfaces";
import {Subscription} from "rxjs";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  userData!: User;
  toggleMenu: boolean = false;
  userName : unknown
  userRole : unknown = 'user'
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



import {Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ChangeRoleComponent} from "../change-role/change-role.component";
import {User} from "../shared/interfaces";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, DoCheck{
  userData!: User;
  usArr = [];
  usN! : any
  usR! : any
  constructor() {

  }

  ngOnInit(){
    if(this.userData || 'default'){
      this.userData = JSON.parse(<string>localStorage.getItem('User'))
    }
  }
  ngDoCheck(){
    this.usN = this.usArr.filter((item, index) => index == 0)
    this.usR = this.usArr.filter((item, index) => index == 1)
  }
}



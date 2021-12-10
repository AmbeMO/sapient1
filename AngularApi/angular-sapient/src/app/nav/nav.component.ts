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

  constructor() {

  }
  ngOnInit(){
    if(this.userData || 'default'){
      this.userData = JSON.parse(<string>localStorage.getItem('User'))
    }
    this.userData = JSON.parse(<string>localStorage.getItem('User'));
  }
  defaultName(){
    if(this.userData === null){
      return 'John Smith'
    }else return
  }
  defaultRole(){
    if(this.userData === null){
      return 'user'
    }else return
  }


  ngDoCheck(){
    this.userData = JSON.parse(<string>localStorage.getItem('User'));
  }

}



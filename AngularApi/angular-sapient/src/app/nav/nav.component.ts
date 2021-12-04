import {Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ChangeRoleComponent} from "../change-role/change-role.component";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, DoCheck, OnDestroy{
  userData = [];
  usArr = [];
  usN! : any
  usR! : any

  ngOnInit(){
    this.userData = JSON.parse(<string>localStorage.getItem('User'))
    this.usArr = Object.values(this.userData)

  }
  ngDoCheck(){
    this.usN = this.usArr.filter((item, index) => index == 0)
    this.usR = this.usArr.filter((item, index) => index == 1)
    // console.log(this.usR)
  }
  ngOnDestroy() {
    this.usN = this.usArr.filter((item, index) => index == 0)
    this.usR = this.usArr.filter((item, index) => index == 1)
    // console.log(this.usR)
  }


}



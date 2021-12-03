import { Component, OnInit } from '@angular/core';
import {ChangeRoleComponent} from "../change-role/change-role.component";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent  extends ChangeRoleComponent implements OnInit{
  newnewUserName! : string

  override ngOnInit(): void {

  }


}

import {Component, OnInit} from "@angular/core";
import {OrganizationService} from "../shared/services/organization.service";
import {HttpInterceptor} from "@angular/common/http";
import {SearchPipe} from "../shared/search.pipe";
import {Organization} from "../shared/interfaces";

@Component({
  selector: 'app-orgList',
  templateUrl: './orgList.component.html',
  styleUrls: ['./orgList.component.scss']
})

export class OrgListComponent  implements OnInit{
  lstOrgs = []
  searchStr = ''
  counter: number = 1
  constructor(private organizationService: OrganizationService) {
  }
  ngOnInit(){
    this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'))
    console.log(this.searchStr)

  }
  onDelete(id: any){
    let results:any = this.lstOrgs.slice(id)
    localStorage.setItem('Organizations', JSON.stringify(results))

    this.lstOrgs = results
  }
}

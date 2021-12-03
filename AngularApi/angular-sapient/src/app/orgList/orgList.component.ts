import {Component, OnInit} from "@angular/core";
import {OrganizationService} from "../shared/services/organization.service";
import {HttpInterceptor} from "@angular/common/http";

@Component({
  selector: 'app-orgList',
  templateUrl: './orgList.component.html',
  styleUrls: ['./orgList.component.scss']
})

export class OrgListComponent  implements OnInit{
  lstOrgs = [];
  searchStr = ''
  counter: number = 1
  constructor(private organizationService: OrganizationService) {
  }
  ngOnInit(){
    this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'))

  }
  findIndexOfKey = function(searchKey:any) {
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      if(key === searchKey)
        return i;
    }
    return -1;
  }
  onDelete(i: any){
    this.findIndexOfKey(i);
    console.log(this.lstOrgs)
    for(let k = 0; k < this.lstOrgs.length+1; k++){
      console.log(i, this.lstOrgs[k])
      if(this.findIndexOfKey(i = k)){
        let result: any = this.lstOrgs.slice(i)
        localStorage.setItem('Organizations', JSON.stringify(result))
        this.lstOrgs = result
      }

    }
  }
  // onUpdate(i: any){
  //   this.findIndexOfKey(i);
  //   console.log(this.lstOrgs)
  //   for(let k = 0; k < this.lstOrgs.length+1; k++){
  //     console.log(i, this.lstOrgs[k])
  //     if(this.findIndexOfKey(i = k)){
  //     }
  //   }
  // }
}

import {Component, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Organization} from "../shared/interfaces";

@Component({
  selector: 'app-update-org',
  templateUrl: './update-org.component.html',
  styleUrls: ['update-org.component.scss']
})
export class UpdateOrgComponent implements OnInit{

  Organization: Organization;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.Organization = new Organization()
    this.route.params.subscribe((res) => {
      this.Organization.id = res['id']
    })
  }
  ngOnInit():void {
    const oldOrg = localStorage.getItem('Organizations')
    if(oldOrg !== null){
      const Organizations = JSON.parse(oldOrg)
      const currentOrg = Organizations.find((o : any) => o.id ==  this.Organization.id)
      if (currentOrg !== undefined) {
        this.Organization.name = currentOrg.name
        this.Organization.status = currentOrg.status
        this.Organization.cardType = currentOrg.cardType
        this.Organization.creationalDate = currentOrg.creationalDate
        this.Organization.cardNum = currentOrg.cardNum

      }
    }
  }
  //
  // getNewOrganizationId(){
  //   const oldOrgs = localStorage.getItem('Organizations')
  //   if(oldOrgs !== null){
  //     const Organizations = JSON.parse(oldOrgs)
  //     return Organizations.leading + 1
  //   }else {
  //     return 1
  //   }
  // }

  updateOrg() {
    const oldOrg = localStorage.getItem('Organizations')
    if(oldOrg !== null){
      const Organizations = JSON.parse(oldOrg)
      Organizations.splice(Organizations.findIndex((a:any) => a.id == this.Organization.id),1)
      Organizations.push(this.Organization)
      localStorage.setItem('Organizations', JSON.stringify(Organizations))
    }
  }
}


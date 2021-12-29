import {Component, OnInit, Output} from "@angular/core";
import {Organization} from "../../../shared/interfaces/interfaces";
import {OrganizationService} from "../../../shared/services/organization.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'org-data',
  templateUrl: './org-data.component.html',
  styleUrls: ['./org-data.component.scss']
})
export class OrgDataComponent implements  OnInit{
  organization: Organization
  orgState: boolean = false


  constructor(private organizationService: OrganizationService,
              private route: ActivatedRoute,
              private router: Router
              ) {
    this.organization = new Organization()
    this.route.params.subscribe((res) => {
      this.organization.id = res['id']
    })
  }
  ngOnInit(){
    let currentOrg = this.organizationService.getCurrentOrganization(this.organization.id)
    console.log(currentOrg)

      if(currentOrg) {
        this.organization.name = currentOrg.name
        this.organization.status = currentOrg.status
        this.organization.cardType = currentOrg.cardType
        this.organization.creationDate = currentOrg.creationDate
        this.organization.cardNum = currentOrg.cardNum
        this.organization.payed = currentOrg.payed
    }
    if(currentOrg.payed == true){
      this.orgState = true
    }else{
      console.log('payed false')
    }
  }
}

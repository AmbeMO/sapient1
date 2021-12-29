import {Component} from "@angular/core";
import {OrganizationService} from "../../../shared/services/organization.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Organization} from "../../../shared/interfaces/interfaces";

@Component({
  selector: 'org-pay',
  templateUrl: './org-pay.component.html',
  styleUrls: ['./org-pay.component.scss']
})
export class OrgPayComponent{
  organization: Organization

  constructor(private organizationService: OrganizationService,
              private route: ActivatedRoute,
              private router: Router) {
    this.organization = new Organization()
    this.route.params.subscribe((res) => {
      this.organization.id = res['id']
    })
  }

  ngOnInit(){
    let currentOrg = this.organizationService.getCurrentOrganization(this.organization.id)
    if(currentOrg) {
      this.organization.name = currentOrg.name
      this.organization.status = currentOrg.status
      this.organization.cardType = currentOrg.cardType
      this.organization.creationDate = currentOrg.creationDate
      this.organization.cardNum = currentOrg.cardNum
      this.organization.payed = currentOrg.payed
    }

  }

  changePayed() {
    this.organization.payed = true
    this.organizationService.updateOrganization(this.organization)
  }
}

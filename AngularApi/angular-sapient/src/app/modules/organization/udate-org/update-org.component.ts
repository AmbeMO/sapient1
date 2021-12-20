import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Organization} from "../../../shared/interfaces/interfaces";
import {MatDialog} from "@angular/material/dialog";
import {UpdateDialogComponent} from "../../../shared/updateDialog/updateDialog.component";
import {UserService} from "../../../shared/services/user.service";
import {OrganizationService} from "../../../shared/services/organization.service";

@Component({
  selector: 'app-update-org',
  templateUrl: './update-org.component.html',
  styleUrls: ['update-org.component.scss']
})
export class UpdateOrgComponent implements OnInit{

  organization: Organization;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              private organizationService : OrganizationService
              ) {

    this.organization = new Organization()
    this.route.params.subscribe((res) => {
      this.organization.id = res['id']
    })
  }
  //придумати як це потім поміняти
  ngOnInit():void {
    let currentOrg = this.organizationService.currentOrganization(this.organization, this.organization.id)

    console.log(this.organizationService.currentOrganization(this.organization, this.organization.id))

      if (currentOrg) {
        this.organization.name = currentOrg.name
        this.organization.status = currentOrg.status
        this.organization.cardType = currentOrg.cardType
        this.organization.creationDate = currentOrg.creationDate
        this.organization.cardNum = currentOrg.cardNum
      }
    }

  openDialog() {
    let dialogRef = this.dialog.open(UpdateDialogComponent)

    dialogRef.afterClosed().subscribe( result => {
      this.updateOrg(result);
    })
  }

  updateOrg(result: string) {
        this.organizationService.updateOrganization(this.organization, this.organization.id)

          this.router.navigate(['/'])
  }
}

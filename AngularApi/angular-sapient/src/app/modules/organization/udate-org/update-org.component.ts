import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Organization} from "../../../shared/interfaces/interfaces";
import {MatDialog} from "@angular/material/dialog";
import {UpdateDialogComponent} from "../../../shared/updateDialog/updateDialog.component";

@Component({
  selector: 'app-update-org',
  templateUrl: './update-org.component.html',
  styleUrls: ['update-org.component.scss']
})
export class UpdateOrgComponent implements OnInit{

  organization: Organization;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
              ) {

    this.organization = new Organization()
    this.route.params.subscribe((res) => {
      this.organization.id = res['id']
    })
  }
  //придумати як це потім поміняти
  ngOnInit():void {
    const oldOrg = localStorage.getItem('Organizations')
    if(oldOrg !== null){
      const Organizations = JSON.parse(oldOrg)
      const currentOrg = Organizations.find((o : any) => o.id ==  this.organization.id)
      if (currentOrg !== undefined) {
        this.organization.name = currentOrg.name
        this.organization.status = currentOrg.status
        this.organization.cardType = currentOrg.cardType
        this.organization.creationDate = currentOrg.creationDate
        this.organization.cardNum = currentOrg.cardNum
      }
    }
  }

  openDialog() {
    let dialogRef = this.dialog.open(UpdateDialogComponent)

    dialogRef.afterClosed().subscribe( result => {
      this.updateOrg(result);
    })
  }

  updateOrg(result:string) {
        const oldOrg = localStorage.getItem('Organizations')
        if(oldOrg !== null){
          const Organizations = JSON.parse(oldOrg)
          Organizations.splice(Organizations.findIndex((a:any) => a.id == this.organization.id),1)
          Organizations.push(this.organization)
          localStorage.setItem('Organizations', JSON.stringify(Organizations))

          this.router.navigate(['/'])
   }
  }


}

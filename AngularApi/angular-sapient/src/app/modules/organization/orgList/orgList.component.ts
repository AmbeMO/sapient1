import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import {OrganizationService} from "../../../shared/services/organization.service";
import {Organization} from "../../../shared/interfaces/interfaces";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../../shared/dialog/dialog.component";

@Component({
  selector: 'app-orgList',
  templateUrl: './orgList.component.html',
  styleUrls: ['./orgList.component.scss']
})

export class OrgListComponent implements OnInit, AfterViewInit {
  lstOrgs = []
  searchStr = ''
  visibleTable: boolean = true
  visibleSorting: boolean = false

  organizations: Organization []
  orgParsed = JSON.parse(<string>localStorage.getItem('Organizations'))


  displayedColumns: string[] = ['index', 'name', 'cardType', 'cardNum', 'creationDate', 'status', 'update', 'delete'];

  constructor(
    private organizationService: OrganizationService,
    public dialog: MatDialog
  ) {
    this.organizations = []

  }
  ngAfterViewInit() {
  }

  ngOnInit() {
    this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));

    const orgs = localStorage.getItem('Organizations')
    if (orgs != null) {
      this.organizations = JSON.parse(orgs)
    }

    if (this.lstOrgs.length < 1) {
      this.visibleTable = false
    }
  }

  openDialog(id: string){
    let dialogRef = this.dialog.open(DialogComponent)

    dialogRef.afterClosed().subscribe(result => {
      this.deleteOrganization(result, id);
    })
  }

  deleteOrganization(result:string, id: string){
    if(result === 'true'){
      const oldOrgs = localStorage.getItem('Organizations')
      if (oldOrgs !== null) {
        const organizations = JSON.parse(oldOrgs)
        organizations.splice(organizations.findIndex((a: any) => a.id == id), 1)
        localStorage.setItem('Organizations', JSON.stringify(organizations))
      }
      const orgs = localStorage.getItem('Organizations')
      if (orgs !== null) {
        this.organizations = JSON.parse(orgs)
      }

      this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));

      if (this.lstOrgs.length < 1) {
        this.visibleTable = false
      }
    }
  }

  sortBy(sorting: string) {
    if(sorting === 'nameASC'){
      this.orgParsed.sort((a: any, b: any) => {
        console.log('nameASC')
        if (a.name < b.name) {
                return -1
              } else if (a.name > b.name) {
                return 1;
              }
              return 0
      })
    }else if (sorting === 'nameDESC'){
      this.orgParsed.sort((a: any, b: any) => {
        if (a.name > b.name) {
          return -1
        } else if (a.name < b.name) {
          return 1;
        }
        return 0
      })
    }else if (sorting === 'numASC'){
      this.orgParsed.sort((a: any, b: any) => {
        if (a.cardNum > b.cardNum) {
          return -1
        } else if (a.cardNum < b.cardNum) {
          return 1;
        }
        return 0
      })
    }
    else if (sorting === 'numDESC'){
      this.orgParsed.sort((a: any, b: any) => {
        if (a.cardNum < b.cardNum) {
          return -1
        } else if (a.cardNum > b.cardNum) {
          return 1;
        }
        return 0
      })
    }
    else if (sorting === 'dateASC'){
      this.orgParsed.sort((a: any, b: any) => {
        if (a.creationDate < b.creationDate) {
          return -1
        } else if (a.creationDate > b.creationDate) {
          return 1;
        }
        return 0
      })
    }
    else if (sorting === 'dateDESC'){
      this.orgParsed.sort((a: any, b: any) => {
        if (a.creationDate > b.creationDate) {
          return -1
        } else if (a.creationDate < b.creationDate) {
          return 1;
        }
        return 0
      })
    }

    localStorage.setItem('Organizations', JSON.stringify(this.orgParsed))
    this.lstOrgs = this.orgParsed
    console.log(this.lstOrgs)
    console.log(this.orgParsed)

    //
    //   localStorage.setItem('Organizations', JSON.stringify(organizations))
    //
    //   const orgs = localStorage.getItem('Organizations')
    //   if (orgs !== null) {
    //     this.organizations = JSON.parse(orgs)
    //   }
    //
    //   this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));
    // }
  }


  }


import {Component, OnInit} from "@angular/core";
import {Organization} from "../../../shared/interfaces/interfaces";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../../shared/dialog/dialog.component";
import {OrganizationService} from "../../../shared/services/organization.service";


@Component({
  selector: 'app-orgList',
  templateUrl: './orgList.component.html',
  styleUrls: ['./orgList.component.scss']
})

export class OrgListComponent implements OnInit {
  lstOrgs = []
  searchStr = ''
  visibleTable: boolean = true
  visibleSorting: boolean = false

  organizations: Organization []
  orgParsed = JSON.parse(<string>localStorage.getItem('Organizations'))

  displayedColumns: string[] = ['index', 'name', 'cardType', 'cardNum', 'creationDate', 'status','payed', 'update', 'delete'];

  constructor(public dialog: MatDialog,
              private organizationService: OrganizationService
              ) {
    this.organizations = []
  }
  ngOnInit() {
    this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));

    if (this.lstOrgs.length < 1) {
      this.visibleTable = false
    }
  }

  openDialog(id: string){
    let dialogRef = this.dialog.open(DialogComponent)

    dialogRef.afterClosed().subscribe( result => {
      this.deleteOrganization(result, id);
    })
  }

  deleteOrganization(result: string, id: string){
    if(result === 'true'){

      this.organizationService.deleteOrganization(id)
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
      console.log('numASC')
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
      console.log('numDESC')
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
    this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));
  }
}


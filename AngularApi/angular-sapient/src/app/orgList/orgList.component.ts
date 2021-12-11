import {Component, OnInit} from "@angular/core";
import {OrganizationService} from "../shared/services/organization.service";
import {HttpInterceptor} from "@angular/common/http";
import {SearchPipe} from "../shared/search.pipe";
import {Organization} from "../shared/interfaces";
import Swal from "sweetalert2";

@Component({
  selector: 'app-orgList',
  templateUrl: './orgList.component.html',
  styleUrls: ['./orgList.component.scss']
})

export class OrgListComponent  implements OnInit {
  lstOrgs = []
  searchStr = ''
  visibleTable: boolean = true

  organizations: Organization []

  newName: any
  cardType: any
  status: any


  constructor(private organizationService: OrganizationService) {
    this.organizations = []
  }

  ngOnInit() {
    this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));

    const orgs = localStorage.getItem('Organizations')
    if(orgs != null) {
      this.organizations = JSON.parse(orgs)
    }

    if (this.lstOrgs.length < 1) {
      this.visibleTable = false
    }

  }


  onDelete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#5ea14a',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', '', 'success')

        const oldOrgs = localStorage.getItem('Organizations')
        if(oldOrgs !== null){
          const organizations = JSON.parse(oldOrgs)
          organizations.splice(organizations.findIndex((a: any) => a.id == id),1)
          localStorage.setItem('Organizations', JSON.stringify(organizations))
        }
        const orgs = localStorage.getItem('Organizations')
        if(orgs !== null){
          this.organizations = JSON.parse(orgs)
        }

        this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));

        if (this.lstOrgs.length < 1) {
          this.visibleTable = false
        }
      }
    })
  }

  sortByNumber() {
    console.log('Sorting...')
    const oldOrgs = localStorage.getItem('Organizations')

    if(oldOrgs !== null){
      const organizations = JSON.parse(oldOrgs)
      organizations.sort((a: any, b: any) => {
        console.log('Sorting by number : ')
        if(a.cardNum < b.cardNum){
          console.log(a.cardNum + ' < ' + b.cardNum)
          return -1
        }else if ( a.cardNum > b.cardNum ){
          console.log(JSON.stringify(a.cardNum) + ' > ' + b.cardType)
          return 1;
        }return 0
      })

      console.log(this.lstOrgs)
      localStorage.setItem('Organizations', JSON.stringify(organizations))

      const orgs = localStorage.getItem('Organizations')
      if(orgs !== null){
        this.organizations = JSON.parse(orgs)
      }

      this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));

    }
  }

  sortByNumberDESC() {
    console.log('Sorting by desc...')
    const oldOrgs = localStorage.getItem('Organizations')

    if(oldOrgs !== null){
      const organizations = JSON.parse(oldOrgs)
      organizations.sort((a: any, b: any) => {
        console.log('Sorting by number : ')
        if(a.cardNum > b.cardNum){
          console.log(a.cardNum + ' > ' + b.cardNum)
          return -1
        }else if ( a.cardNum < b.cardNum ){
          console.log(JSON.stringify(a.cardNum) + ' < ' + b.cardType)
          return 1;
        }return 0
      })

      localStorage.setItem('Organizations', JSON.stringify(organizations))

      const orgs = localStorage.getItem('Organizations')
      if(orgs !== null){
        this.organizations = JSON.parse(orgs)
      }

      this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));

    }

  }

  sortByName() {

  }
  sortByNameDESC() {

  }
  sortByDate() {

  }
  sortByDateDESC() {

  }
}

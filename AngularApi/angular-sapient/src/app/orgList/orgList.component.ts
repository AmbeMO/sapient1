import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import {OrganizationService} from "../shared/services/organization.service";
import {Organization} from "../shared/interfaces";
import Swal from "sweetalert2";
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from "@angular/material/table";

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

  newName: any
  cardType: any
  status: any

  displayedColumns: string[] = ['index', 'name', 'cardType', 'cardNum', 'creationDate', 'status', 'update', 'delete'];

  constructor(private organizationService: OrganizationService) {
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


  onDelete(id: any) {
    console.log(id)
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
    })
  }

  sortByNumber() {
    const oldOrgs = localStorage.getItem('Organizations')

    if (oldOrgs !== null) {
      const organizations = JSON.parse(oldOrgs)
      organizations.sort((a: any, b: any) => {
        if (a.cardNum < b.cardNum) {
          return -1
        } else if (a.cardNum > b.cardNum) {
          return 1;
        }
        return 0
      })

      localStorage.setItem('Organizations', JSON.stringify(organizations))

      const orgs = localStorage.getItem('Organizations')
      if (orgs !== null) {
        this.organizations = JSON.parse(orgs)
      }

      this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));
    }
  }

  sortByNumberDESC() {
    console.log('Sorting by desc...')
    const oldOrgs = localStorage.getItem('Organizations')

    if (oldOrgs !== null) {
      const organizations = JSON.parse(oldOrgs)
      organizations.sort((a: any, b: any) => {
        console.log('Sorting by number : ')
        if (a.cardNum > b.cardNum) {
          console.log(a.cardNum + ' > ' + b.cardNum)
          return -1
        } else if (a.cardNum < b.cardNum) {
          console.log(JSON.stringify(a.cardNum) + ' < ' + b.cardType)
          return 1;
        }
        return 0
      })

      localStorage.setItem('Organizations', JSON.stringify(organizations))

      const orgs = localStorage.getItem('Organizations')
      if (orgs !== null) {
        this.organizations = JSON.parse(orgs)
      }

      this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));

    }

  }

  sortByNameDESC() {
    console.log('Sorting by name desc...')
    const oldOrgs = localStorage.getItem('Organizations')

    if (oldOrgs !== null) {
      const organizations = JSON.parse(oldOrgs)
      organizations.sort((a: any, b: any) => {
        console.log('Sorting by name : ')
        if (a.name > b.name) {
          console.log(a.name + ' > ' + b.name)
          return -1
        } else if (a.name < b.name) {
          console.log(JSON.stringify(a.name) + ' < ' + b.name)
          return 1;
        }
        return 0
      })

      localStorage.setItem('Organizations', JSON.stringify(organizations))

      const orgs = localStorage.getItem('Organizations')
      if (orgs !== null) {
        this.organizations = JSON.parse(orgs)
      }

      this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));

    }
  }

  sortByName() {
    console.log('Sorting by name asc...')
    const oldOrgs = localStorage.getItem('Organizations')

    if (oldOrgs !== null) {
      const organizations = JSON.parse(oldOrgs)
      organizations.sort((a: any, b: any) => {
        console.log('Sorting by number : ')
        if (a.name < b.name) {
          console.log(a.name + ' < ' + b.name)
          return -1
        } else if (a.name > b.name) {
          console.log(JSON.stringify(a.name) + ' > ' + b.name)
          return 1;
        }
        return 0
      })

      localStorage.setItem('Organizations', JSON.stringify(organizations))

      const orgs = localStorage.getItem('Organizations')
      if (orgs !== null) {
        this.organizations = JSON.parse(orgs)
      }

      this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));

    }
  }

  sortByDate() {
    console.log('Sorting by date asc...')
    const oldOrgs = localStorage.getItem('Organizations')

    if (oldOrgs !== null) {
      const organizations = JSON.parse(oldOrgs)
      organizations.sort((a: any, b: any) => {
        console.log('Sorting by date : ')
        if (a.creationalDate < b.creationalDate) {
          console.log(a.creationalDate + ' < ' + b.creationalDate)
          return -1
        } else if (a.creationalDate > b.creationalDate) {
          console.log(JSON.stringify(a.creationalDate) + ' > ' + b.creationalDate)
          return 1;
        }
        return 0
      })

      localStorage.setItem('Organizations', JSON.stringify(organizations))

      const orgs = localStorage.getItem('Organizations')
      if (orgs !== null) {
        this.organizations = JSON.parse(orgs)
      }

      this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));

    }
  }

  sortByDateDESC() {
    console.log('Sorting by desc...')
    const oldOrgs = localStorage.getItem('Organizations')

    if (oldOrgs !== null) {
      const organizations = JSON.parse(oldOrgs)
      organizations.sort((a: any, b: any) => {
        console.log('Sorting by number : ')
        if (a.creationalDate > b.creationalDate) {
          console.log(a.creationalDate + ' > ' + b.creationalDate)
          return -1
        } else if (a.creationalDate < b.creationalDate) {
          console.log(JSON.stringify(a.creationalDate) + ' < ' + b.creationalDate)
          return 1;
        }
        return 0
      })

      localStorage.setItem('Organizations', JSON.stringify(organizations))

      const orgs = localStorage.getItem('Organizations')
      if (orgs !== null) {
        this.organizations = JSON.parse(orgs)
      }

      this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));

    }
  }

}

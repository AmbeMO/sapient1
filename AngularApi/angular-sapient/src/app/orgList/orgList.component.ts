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

    console.log(this.searchStr)
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
    const oldOrgs = localStorage.getItem('Organizations')

    if (oldOrgs !== null) {
      const organizations = JSON.parse(oldOrgs)
      organizations.sort((a: any, b: any) => {
        if (a.cardNum > b.cardNum) {
          return -1
        } else if (a.cardNum < b.cardNum) {
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
    const oldOrgs = localStorage.getItem('Organizations')

    if (oldOrgs !== null) {
      const organizations = JSON.parse(oldOrgs)
      organizations.sort((a: any, b: any) => {
        if (a.name > b.name) {
          return -1
        } else if (a.name < b.name) {
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
    const oldOrgs = localStorage.getItem('Organizations')

    if (oldOrgs !== null) {
      const organizations = JSON.parse(oldOrgs)
      organizations.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
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
    const oldOrgs = localStorage.getItem('Organizations')

    if (oldOrgs !== null) {
      const organizations = JSON.parse(oldOrgs)
      organizations.sort((a: any, b: any) => {
        if (a.creationalDate < b.creationalDate) {
          return -1
        } else if (a.creationalDate > b.creationalDate) {
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
    const oldOrgs = localStorage.getItem('Organizations')

    if (oldOrgs !== null) {
      const organizations = JSON.parse(oldOrgs)
      organizations.sort((a: any, b: any) => {
        if (a.creationalDate > b.creationalDate) {
          return -1
        } else if (a.creationalDate < b.creationalDate) {
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

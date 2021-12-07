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


  constructor(private organizationService: OrganizationService) {
  }

  ngOnInit() {
    this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));


    let orgDate;
    let arr = this.lstOrgs
    for(let obj of arr){
      let littleArr = Object.values(obj)
      let fullDate = littleArr[4]


      // orgDate = fullDate.getFullYear()
    }
    // console.log(arr)
    // console.log(this.searchStr)

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

        let results:any = this.lstOrgs.slice(id)
        localStorage.setItem('Organizations', JSON.stringify(results))
        this.lstOrgs = results
      }
    })
  }
}

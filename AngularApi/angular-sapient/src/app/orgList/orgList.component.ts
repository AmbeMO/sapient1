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

  newName: any
  cardType: any
  status: any


  constructor(private organizationService: OrganizationService) {
  }

  ngOnInit() {
    this.lstOrgs = JSON.parse(<string>localStorage.getItem('Organizations'));

    if (this.lstOrgs.length < 1) {
      this.visibleTable = false
    }
  }
  onUpdate(id: any, cardNum: any, creationalDate: any){
    console.log(id)
    let newArr: any = [];
    let newObj: any = {};

    this.newName = prompt('Inout new organization name')
    this.checkNameLength()
    this.cardType = prompt('Choose between : discount, cumulative, other')
    this.checkCardType()
    this.status = prompt('Choose between : active, not active')
    this.checkStatus()


    newObj.id = id
    newObj.name = this.newName
    newObj.cardType = this.cardType
    newObj.cardNum = cardNum
    newObj.creationalDate = creationalDate
    newObj.status = this.status



    // newObj = this.lstOrgs.filter((item)  => {
    //   return item.id != id
    // })
    // newArr.push(newObj)

    // console.log('new arr - ' + JSON.stringify(newArr))
    // localStorage.setItem('Organizations', JSON.stringify(newArr))



  }
  checkNameLength(){
    if(this.newName.length < 6){
      this.newName = prompt('Inout new organization name')
      this.checkNameLength()
    }else console.log('nice ' + this.newName)
  }
  checkCardType(){
    this.cardType = this.cardType.toLowerCase();
    if(this.cardType == 'discount' || this.cardType == 'cumulative' || this.cardType == 'other'){
      console.log('nice ' + this.cardType)
    }else {
      this.cardType = prompt('Choose between : discount, cumulative, other')
      console.log(this.cardType + ' !')
      this.checkCardType()
    }
  }
  checkStatus(){
    this.status = this.status.toLowerCase()
    if(this.status == 'active' || this.status == 'not active'){
      console.log('nice ' + this.status)
    }else{
      this.status = prompt('Choose between : active, not active')
      this.checkStatus()
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

        if(id){
          this.lstOrgs.splice(id)
          localStorage.setItem('Organizations', JSON.stringify(this.lstOrgs))
        }

        if (this.lstOrgs.length < 1) {
          this.visibleTable = false
        }
      }
    })
  }
}

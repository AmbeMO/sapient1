import {Component, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Organization} from "../shared/interfaces";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-org',
  templateUrl: './update-org.component.html',
  styleUrls: ['update-org.component.scss']
})
export class UpdateOrgComponent implements OnInit{

  organization: Organization;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.organization = new Organization()
    this.route.params.subscribe((res) => {
      this.organization.id = res['id']
    })
  }
  ngOnInit():void {
    const oldOrg = localStorage.getItem('Organizations')
    if(oldOrg !== null){
      const Organizations = JSON.parse(oldOrg)
      const currentOrg = Organizations.find((o : any) => o.id ==  this.organization.id)
      if (currentOrg !== undefined) {
        this.organization.name = currentOrg.name
        this.organization.status = currentOrg.status
        this.organization.cardType = currentOrg.cardType
        this.organization.creationDate = currentOrg.creationalDate
        this.organization.cardNum = currentOrg.cardNum

      }
    }
  }
  //
  // getNewOrganizationId(){
  //   const oldOrgs = localStorage.getItem('Organizations')
  //   if(oldOrgs !== null){
  //     const Organizations = JSON.parse(oldOrgs)
  //     return Organizations.leading + 1
  //   }else {
  //     return 1
  //   }
  // }

  updateOrg() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      icon: 'warning',
      confirmButtonText: 'Update',
      denyButtonText: `Don't update`,
      confirmButtonColor: '#5ea14a',
      cancelButtonColor: '#B8B8B8',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        const oldOrg = localStorage.getItem('Organizations')
        if(oldOrg !== null){
          const Organizations = JSON.parse(oldOrg)
          Organizations.splice(Organizations.findIndex((a:any) => a.id == this.organization.id),1)
          Organizations.push(this.organization)
          localStorage.setItem('Organizations', JSON.stringify(Organizations))

          this.router.navigate(['/'])

        Swal.fire('Updated!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    }
   })

  }


}

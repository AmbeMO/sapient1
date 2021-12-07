import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Organization} from "../shared/interfaces";
import {OrganizationService} from "../shared/services/organization.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";


@Component({
  selector: 'app-create-change-org',
  templateUrl: './create-change-org.component.html',
  styleUrls: ['./create-change-org.component.scss']
})
export class CreateChangeOrgComponent implements OnInit {

  form!: FormGroup
  organization!: Organization;

  constructor(public router: Router, private fb: FormBuilder, private organizationService: OrganizationService) {
  }
  ngOnInit(){
    this.createOrganization();
  }

  formatJSDate()
  {
    return ( new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate() + ' - ' + new Date().getHours() + ':' + new Date().getMinutes());
  }

  createOrganization(){
    this.form = this.fb.group({
      id: [Math.floor(Math.random() * (10000 - 10 + 1)) + 10],
      name: [null,[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)]],
      cardType: [null, [Validators.required]],
      cardNum: [Math.floor(Math.random() * (100 - 10 + 1)) + 10],
      creationalDate: [this.formatJSDate()],
      status: [null, [Validators.required]],
    })
  }

  submit() {
    if (this.form.invalid) {
      console.log(this.form)
      return
    }else{
      console.log(this.form.value)
      // this.organization = Object.assign(this.organization, this.form.value)
      this.organizationService.addOrganization(this.organizationData());

      Swal.fire(
        'Nice!',
        'You have added your organization!',
        'success'
      )
      this.router.navigate(['/'])
    }
  }
  organizationData(): Organization{
    return this.organization = {
      id: Math.floor(Math.random() * (10000 - 10 + 1)) + 10,
      name: this.organizationName.value,
      cardType: this.form.value.cardType,
      cardNum: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
      creationalDate: this.formatJSDate(),
      status: this.form.value.status

    }
  }
  get organizationName(){
    return this.form.get('name') as FormControl
  }

}

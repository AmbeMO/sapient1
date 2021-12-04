import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Organization} from "../shared/interfaces";
import {OrganizationService} from "../shared/services/organization.service";


@Component({
  selector: 'app-create-change-org',
  templateUrl: './create-change-org.component.html',
  styleUrls: ['./create-change-org.component.scss']
})
export class CreateChangeOrgComponent implements OnInit {

  form!: FormGroup
  organization!: Organization;
  n!: any

  constructor(private fb: FormBuilder, private organizationService: OrganizationService) {


  }

  ngOnInit(){
    this.createOrganization();
  }
  createOrganization(){
    this.form = this.fb.group({
      name: [null,[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)]],
      cardType: [null, [Validators.required]],
      cardNum: [Math.floor(Math.random() * (100 - 10 + 1)) + 10],
      creationalDate: [new Date],
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
      this.form.reset()
    }

    const organization: Organization = {
      name: this.form.value.name,
      cardType: this.form.value.cardType,
      cardNum: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
      creationalDate: new Date(),
      status: this.form.value.status
    }
  }
  organizationData(): Organization{
    return this.organization = {
      name: this.organizationName.value,
      cardType: this.form.value.cardType,
      cardNum: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
      creationalDate: new Date(),
      status: this.form.value.status

    }
  }
  get organizationName(){
    return this.form.get('name') as FormControl
  }

}

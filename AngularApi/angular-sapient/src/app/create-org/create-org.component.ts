import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Organization} from "../shared/interfaces";
import {OrganizationService} from "../shared/services/organization.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";


@Component({
  selector: 'app-create-org',
  templateUrl: './create-org.component.html',
  styleUrls: ['./create-org.component.scss']
})
export class CreateOrgComponent implements OnInit {

  form!: FormGroup
  organization!: Organization;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    private organizationService: OrganizationService) {
  }

  get organizationName() {
    return this.form.get('name') as FormControl
  }

  ngOnInit() {
    this.createOrganization();
    console.log(this.form)
  }

  formatJSDate() {
    return (new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate() + ' - ' + new Date().getHours() + ':' + new Date().getMinutes());
  }

  createOrganization() {
    this.form = this.fb.group({
      id: [Math.floor(Math.random() * (10000 - 10 + 1)) + 10],
      name: [null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)]],
      cardType: [null, [Validators.required]],
      cardNum: [Math.floor(Math.random() * (100 - 10 + 1)) + 10],
      creationDate: [this.formatJSDate()],
      status: [null, [Validators.required]],
    })
  }

  submit() {
    if (this.form.invalid) return;
    // this.organization = Object.assign(this.organization, this.form.value)
    this.organizationService.addOrganization(this.organizationData());

    Swal.fire(
      'Nice!',
      'You have added your organization!',
      'success'
    )
    this.router.navigate(['/'])
  }

  organizationData(): Organization {
    return this.organization = {
      id: Math.floor(Math.random() * (10000 - 10 + 1)) + 10,
      name: this.organizationName.value,
      cardType: this.form.value.cardType,
      cardNum: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
      creationDate: this.formatJSDate(),
      status: this.form.value.status

    }
  }

}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Organization} from "../../../shared/interfaces/interfaces";
import {OrganizationService} from "../../../shared/services/organization.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {v4 as uuidv4 } from "uuid"


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
    private organizationService: OrganizationService,
    private snackBar: MatSnackBar
    ) {}

  get organizationName() {
    return this.form.get('name') as FormControl
  }

  ngOnInit() {
    this.createOrganization();
  }

  formatJSDate() {
    return (new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate() + ' - ' + new Date().getHours() + ':' + new Date().getMinutes());
  }

  createOrganization() {
    this.form = this.fb.group({
      id: [uuidv4()],
      name: [null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)]],
      cardType: [null, [Validators.required]],
      cardNum: [Math.floor(Math.random() * (100 - 10 + 1)) + 10],
      creationDate: [this.formatJSDate()],
      status: [null, [Validators.required]],
      payed: false
    })
  }

  submit() {
    if (this.form.invalid) return;
    this.organizationService.addOrganization(this.organizationData());

    this.router.navigate(['/'])
  }

  organizationData(): Organization {
    return this.organization = {
      id: uuidv4(),
      name: this.organizationName.value,
      cardType: this.form.value.cardType,
      cardNum: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
      creationDate: this.formatJSDate(),
      status: this.form.value.status,
      payed: false
    }
  }

  openCreateSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    })
  }
}

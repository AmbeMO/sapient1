import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../../shared/interfaces/interfaces";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-change-role',
  templateUrl: './change-role.component.html',
  styleUrls: ['./change-role.component.scss']
})
export class ChangeRoleComponent implements OnInit {
  form!: FormGroup
  user: object = {}
  userData!: User
  selected: string = 'user'
  selectedName: string = 'John Smith'

  constructor(public router: Router,
              private fb: FormBuilder,
              private snackBar: MatSnackBar
              ) {
  }

  ngOnInit() {
    this.createUser();
    if(this.userData || 'default'){
      this.userData = JSON.parse(<string>localStorage.getItem('User'))
    }
    this.selected = this.userData.role
    this.selectedName = this.userData.userName
  }

  createUser() {
    this.form = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(6)]],
      role: [null, [Validators.required]],
    })
  }

  checkExist(){
    return !this.userData ? 'John Smith' : ''
  }
  checkExistRole(){
    return !this.userData ? 'user' : ''
  }

  submit() {
    if (this.form.invalid) {
      return
    } else {
      this.user = Object.assign(this.user, this.form.value)
      localStorage.setItem('User', JSON.stringify(this.user))

      this.userData = JSON.parse(<string>localStorage.getItem('User'));

      this.router.navigate(['/'])
    }
  }

  openUpdateSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    })
  }
}

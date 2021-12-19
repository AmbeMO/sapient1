import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {User} from "../../../shared/interfaces/interfaces";
import {UserService} from "../../../shared/services/user.service";

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

  constructor(public router: Router, private fb: FormBuilder) {
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

      Swal.fire(
        'Nice!',
        'You have just updated your role!',
        'success'
      )
      this.router.navigate(['/'])
    }
  }
}

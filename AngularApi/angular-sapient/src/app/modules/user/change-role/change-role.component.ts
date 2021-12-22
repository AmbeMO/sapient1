import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../../shared/interfaces/interfaces";
import {MatSnackBar} from "@angular/material/snack-bar";
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

  constructor(public router: Router,
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private userService: UserService
              ) {
  }

  ngOnInit() {
    this.createUser();
    if(this.userData || 'default'){
      this.userData = this.userService.getUser()
    }
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
      this.userService.setUser(this.user)
      this.userData = this.userService.getUser()

      this.userService.observer.subscribe(this.userService.userName$)
      this.userService.observerRole.subscribe(this.userService.userRole$)

      this.router.navigate(['/'])
    }
  }

  openUpdateSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    })
  }
}

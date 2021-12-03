import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {User} from "../shared/interfaces";
import {UserService} from "../shared/services/user.service";


@Component({
  selector: 'app-change-role',
  templateUrl: './change-role.component.html',
  styleUrls: ['./change-role.component.scss']
})
export class ChangeRoleComponent implements OnInit {

  form!: FormGroup
  user: any = {}


  constructor(public router: Router, private fb: FormBuilder){
  }

  ngOnInit(){
  this.createUser();
  }

  createUser(){
    this.form = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(6)]],
      role: [null, [Validators.required]],
    })
  }

  submit() {
    if (this.form.invalid) {
      console.log(this.form)
      return
    }else{
      console.log(this.form.value)
      console.log(this.user)
      this.user = Object.assign(this.user, this.form.value)
      localStorage.setItem('User', JSON.stringify(this.user))

      this.form.reset();

      Swal.fire(
        'Nice!',
        'You have just updated your role!',
        'success'
      )

      // this.router.navigate(['/'])

    }
  }
  // userData(): User {
  //   return this.user= {
  //     userName: this.userName.value,
  //     role: this.form.value.role,
  //   }
  // }
  // get userName(){
  //   return this.form.get('userName') as FormControl
  // }


}

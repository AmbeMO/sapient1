import {Injectable} from "@angular/core";
import {User} from "../interfaces/interfaces";
import {Observable, Subject, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class UserService {
  userName$ = new Subject()
  userRole$ = new Subject()

  observer = new Observable(observer => {
    observer.next(this.getUserName())
  })
  observerRole = new Observable(observer => {
    observer.next(this.getUserRole())
  })



  getUser() {
    return JSON.parse(<string>localStorage.getItem('User'))
  }
  setUser(user: User | object){
    localStorage.setItem('User', JSON.stringify(user))
  }
  getUserName(){
    let user = JSON.parse(<string>localStorage.getItem('User'))
    return user.userName;
  }
  getUserRole(){
    let user = JSON.parse(<string>localStorage.getItem('User'))
    return user.role
  }

  setUserName(name: string){
    let user = JSON.parse(<string>localStorage.getItem('User'))
    user.userName = name
  }
}

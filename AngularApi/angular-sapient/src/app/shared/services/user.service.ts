import {Injectable} from "@angular/core";
import {User} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  addUser(user: User) {
    let storageUser = localStorage.getItem('User')
    let users = storageUser ? [user] : [user]
    localStorage.setItem('User', JSON.stringify(users))
  }
  getUser() {
    return JSON.parse(<string>localStorage.getItem('User'))
  }
  setUser(user: User){
    let storageUser = localStorage.getItem('User')
    let newUsers = storageUser ? [user] : [user]
    localStorage.setItem('User', JSON.stringify(newUsers))
  }
  deleteUser(user: User){
    let storageUser = localStorage.getItem('User')
    let deletedUser = storageUser ? [] : []
    localStorage.setItem('User', JSON.stringify(deletedUser))
  }
}

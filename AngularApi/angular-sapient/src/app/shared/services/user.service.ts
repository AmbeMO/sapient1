import {Injectable} from "@angular/core";
import {User} from "../interfaces";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  addUser(user: User) {
    let storageUsers = localStorage.getItem('Users')
    let users = storageUsers ? [user, ...JSON.parse(<string>storageUsers)] : [user]
    localStorage.setItem('Organizations', JSON.stringify(users))

  }
}
